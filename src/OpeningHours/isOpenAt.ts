import { OpeningHours, OpeningHoursForDay } from "~/OpeningHours/OpeningHours";
import { format, isAfter, isBefore, isEqual, subDays } from "date-fns";

export function isOpen(openingHours: OpeningHours): boolean {
  const at = new Date();
  return isOpenAt(openingHours, at);
}

export function isClosed(openingHours: OpeningHours): boolean {
  return !isOpen(openingHours);
}

export function isClosedAt(openingHours: OpeningHours, at: Date): boolean {
  return !isOpenAt(openingHours, at);
}

export function isOpenAt(openingHours: OpeningHours, at: Date): boolean {
  const yesterday = subDays(at, 1);
  const yesterdayOpeningHoursForDay = forDate(openingHours, yesterday);
  // console.log("yesterday", yesterday);
  // console.log("yesterdayOpeningHoursForDay", yesterdayOpeningHoursForDay);
  if (isOpenInOpeningHoursForDay(yesterdayOpeningHoursForDay, at)) {
    return true;
  }

  const openingHoursForDay = forDate(openingHours, at);

  return isOpenInOpeningHoursForDay(openingHoursForDay, at);
}

function isOpenInOpeningHoursForDay(openingHoursForDay: OpeningHoursForDay[] | null, at: Date): boolean {
  return (
    openingHoursForDay?.some((openingHoursForDay) => {
      if (typeof openingHoursForDay == "string") {
        return isOpenInTimeRange(at, openingHoursForDay);
      } else {
        return isOpenInTimeRange(at, openingHoursForDay[0]);
      }
    }) ?? false
  );
}

function isOpenInTimeRange(date: Date, timeRange: string): boolean {
  const [startTime, endTime] = timeRange.split("-");
  const [startHours, startMinutes] = startTime.split(":");
  const [endHours, endMinutes] = endTime.split(":");

  let startDate = new Date(date.getTime());
  startDate.setUTCHours(Number(startHours), Number(startMinutes), 0, 0);
  let endDate = new Date(date.getTime());
  endDate.setUTCHours(Number(endHours), Number(endMinutes), 0, 0);

  const endHoursPlusMinutes = 60 * Number(endHours) + Number(endMinutes);
  const startHoursPlusMinutes = 60 * Number(startHours) + Number(startMinutes);

  if (endHoursPlusMinutes < startHoursPlusMinutes) {
    startDate = subDays(startDate, 1);
  }
  // console.log(endHoursPlusMinutes);
  // console.log(startHoursPlusMinutes);
  // console.log(date);
  // console.log(startDate);
  // console.log(endDate);

  return (isBefore(startDate, date) || isEqual(startDate, date)) && isAfter(endDate, date);
}

function forDate(openingHours: OpeningHours, date: Date): OpeningHoursForDay[] | null {
  return (
    openingHours.exceptions?.[format(date, "yyyy-MM-dd")] ??
    openingHours.exceptions?.[format(date, "MM-dd")] ??
    openingHours[format(date, "EEEE").toLowerCase() as Exclude<"exceptions", keyof OpeningHours>] ??
    null
  );
}
