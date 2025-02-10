import { forDate, getTimezone, OpeningHours } from "~/OpeningHours/OpeningHours";
import { subDays } from "date-fns";
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
