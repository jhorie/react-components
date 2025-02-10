import { addDays, format, isAfter, isBefore, isEqual, subDays } from "date-fns";
import { TimeRange } from "~/OpeningHours/TimeRange";
import { getTimeRangeOfOpeningHoursForDay } from "~/OpeningHours/nextOpen";
import { Time, TimeMethods } from "~/OpeningHours/Time";
import { OpeningHoursForDayMethods } from "~/OpeningHours/OpeningHoursForDay";
import { isClosedAt, isOpenAt } from "~/OpeningHours/isOpenAt";
import { TZDate } from "@date-fns/tz";

export type Day = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
export type TDate = string;
export const days: Day[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

export const isOfTypeDay = (input: string): input is Day => {
  return (days as readonly string[]).includes(input);
};

export type OpeningHours<T = undefined> = {
  [day in Day]?: OpeningHoursForDay<T>[];
} & { exceptions?: OpeningHoursExceptions<T>; timezone?: string };

export type OpeningHoursExceptions<T = undefined> = { [date: TDate]: OpeningHoursForDay<T>[] | undefined };

export type TimeRangeS = string;

export type OpeningHoursForDay<T = undefined> = TimeRangeS | { 0: TimeRangeS; data: T };

export function isOpenInOpeningHoursForDay(openingHoursForDay: OpeningHoursForDay[] | null, at: Date): boolean {
  return (
    openingHoursForDay?.some((openingHoursForDay) => {
      return isOpenInTimeRange(at, typeof openingHoursForDay == "string" ? openingHoursForDay : openingHoursForDay[0]);
    }) ?? false
  );
}

export function isOpenInTimeRange(date: Date, timeRange: string): boolean {
  const [startTime, endTime] = timeRange.split("-");
  const [startHours, startMinutes] = startTime.split(":");
  const [endHours, endMinutes] = endTime.split(":");

  let startDate = new Date(date.getTime());
  startDate.setHours(Number(startHours), Number(startMinutes), 0, 0);
  let endDate = new Date(date.getTime());
  endDate.setHours(Number(endHours), Number(endMinutes), 0, 0);

  const endHoursPlusMinutes = 60 * Number(endHours) + Number(endMinutes);
  const startHoursPlusMinutes = 60 * Number(startHours) + Number(startMinutes);

  if (endHoursPlusMinutes < startHoursPlusMinutes) {
    startDate = subDays(startDate, 1);
  }

  return (isBefore(startDate, date) || isEqual(startDate, date)) && isAfter(endDate, date);
}

export function forDate(openingHours: OpeningHours, date: Date): OpeningHoursForDay[] {
  return (
    openingHours.exceptions?.[format(date, "yyyy-MM-dd")] ??
    openingHours.exceptions?.[format(date, "MM-dd")] ??
    openingHours[format(date, "EEEE").toLowerCase() as Exclude<"exceptions", keyof OpeningHours>] ??
    []
  );
}

export function forDateTime(openingHours: OpeningHours, date: Date): OpeningHoursForDay | null {
  const openingHoursForDays =
    openingHours.exceptions?.[format(date, "yyyy-MM-dd")] ??
    openingHours.exceptions?.[format(date, "MM-dd")] ??
    openingHours[format(date, "EEEE").toLowerCase() as Exclude<"exceptions", keyof OpeningHours>] ??
    null;

  return (
    openingHoursForDays.reverse()?.find((openingHoursForDay) => {
      return isOpenInTimeRange(
        date,
        typeof openingHoursForDay == "string" ? openingHoursForDay : openingHoursForDay[0]
      );
    }) ?? null
  );
}

export function getTimezone(openingHours: OpeningHours): string {
  return openingHours.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function currentOpenRange(openingHours: OpeningHours, date: Date): TimeRange | null {
  const openingHoursForDay = forDateTime(openingHours, date);
  if (openingHoursForDay) {
    return getTimeRangeOfOpeningHoursForDay(openingHoursForDay);
  }
  return null;
}

export function nextOpen(openingHours: OpeningHours, at: Date | null = null, cap: Date | null = null): Date | null {
  at = at ?? new TZDate(new Date(), getTimezone(openingHours));
  at = new TZDate(at.getTime(), getTimezone(openingHours));

  let openingHoursForDay = forDate(openingHours, at);

  let nextOpen = OpeningHoursForDayMethods.nextOpen(openingHoursForDay, at);
  let tries = 366;

  while (!nextOpen || nextOpen.hours >= 24) {
    if (--tries < 0) {
      return null;
    }

    at = addDays(at, 1);
    at?.setHours(0, 0, 0, 0);

    if (isOpenAt(openingHours, at) && !OpeningHoursForDayMethods.isOpenAtTheEndOfTheDay(openingHoursForDay)) {
      return at;
    }

    if (cap && at?.getTime() > cap.getTime()) {
      return cap;
    }

    openingHoursForDay = forDate(openingHours, at);
    nextOpen = OpeningHoursForDayMethods.nextOpen(openingHoursForDay, at);
  }

  if (nextOpen) {
    at?.setHours(nextOpen.hours, nextOpen.minutes, 0, 0);
    return at;
  }
  return null;
}

export function nextClose(openingHours: OpeningHours, at: Date | null = null, cap: Date | null = null): Date | null {
  at = at ?? new TZDate(new Date(), getTimezone(openingHours));
  at = new TZDate(at.getTime(), getTimezone(openingHours));
  const openRangeEnd = currentOpenRange(openingHours, at)?.end;
  if (openRangeEnd && openRangeEnd.hours < 24) {
    at.setHours(openRangeEnd.hours, openRangeEnd.minutes, 0, 0); // TODO CHECK
    return at;
  }

  // overflow
  let nextClose: Time | null = null;
  {
    const yesterday = subDays(at, 1);
    const openingHoursForDays = forDate(openingHours, yesterday);
    if (OpeningHoursForDayMethods.isOpenAtNight(openingHoursForDays, TimeMethods.fromDate(yesterday))) {
      nextClose = OpeningHoursForDayMethods.nextClose(openingHoursForDays, at);
    }
  }
  let openingHoursForDays = forDate(openingHours, at);
  if (!nextClose) {
    nextClose = OpeningHoursForDayMethods.nextClose(openingHoursForDays, at);
    if (
      nextClose &&
      nextClose.hours < 24 &&
      (TimeMethods.timeToNumber(nextClose) < TimeMethods.timeToNumber(TimeMethods.fromDate(at)) ||
        (isClosedAt(openingHours, at) &&
          TimeMethods.timeToNumber(
            TimeMethods.fromDate(nextOpen(openingHours, at) ?? new Date("2100-00-00 00:00:00"))
          ) > TimeMethods.timeToNumber(nextClose)))
    ) {
      at = addDays(at, 1);
    }
  }
  let tries = 366;
  while (!nextClose || nextClose.hours >= 24) {
    if (--tries < 0) {
      return null;
    }

    at = addDays(at, 1);
    at?.setHours(0, 0, 0, 0);

    if (isClosedAt(openingHours, at) && OpeningHoursForDayMethods.isOpenAtTheEndOfTheDay(openingHoursForDays)) {
      return at;
    }

    if (cap && at?.getTime() > cap.getTime()) {
      return cap;
    }

    openingHoursForDays = forDate(openingHours, at);

    nextClose = OpeningHoursForDayMethods.nextClose(openingHoursForDays, at);
  }

  if (nextClose) {
    at?.setHours(nextClose.hours, nextClose.minutes, 0, 0);
    return at;
  }

  return null;
}
