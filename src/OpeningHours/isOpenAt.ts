import { forDate, getTimezone, nextClose, OpeningHours } from "~/OpeningHours/OpeningHours";
import { addDays, subDays } from "date-fns";
import { OpeningHoursForDayMethods } from "~/OpeningHours/OpeningHoursForDay";
import { TimeMethods } from "~/OpeningHours/Time";
import { TZDate } from "@date-fns/tz";

export function isOpen(openingHours: OpeningHours): boolean {
  return isOpenAt(openingHours, new Date());
}

export function isClosed(openingHours: OpeningHours): boolean {
  return !isOpen(openingHours);
}

export function isClosedAt(openingHours: OpeningHours, at: Date): boolean {
  return !isOpenAt(openingHours, at);
}

export function isOpenAt(openingHours: OpeningHours, at: Date): boolean {
  at = at ?? new TZDate(new Date(), getTimezone(openingHours));
  at = new TZDate(at.getTime(), getTimezone(openingHours));

  {
    const yesterday = subDays(at, 1);
    const yesterdayOpeningHoursForDay = forDate(openingHours, yesterday);
    if (OpeningHoursForDayMethods.isOpenAtNight(yesterdayOpeningHoursForDay, TimeMethods.fromDate(yesterday))) {
      return true;
    }
  }

  const openingHoursForDay = forDate(openingHours, at);
  return OpeningHoursForDayMethods.isOpenAt(openingHoursForDay, TimeMethods.fromDate(at));
}

export function isOpenComingDays(openingHours: OpeningHours, at: Date, comingDays: number = 7): boolean {
  at = at ?? new TZDate(new Date(), getTimezone(openingHours));
  at = new TZDate(at.getTime(), getTimezone(openingHours));

  at.setMilliseconds(30); // random, so nextClose can never be exactly the next close in the end.
  const isOpen = isOpenAt(openingHours, at);
  const cap = addDays(at, comingDays);
  const nextCloseDate = nextClose(openingHours, at, cap);
  return isOpen && cap.getTime() == nextCloseDate?.getTime();
}
