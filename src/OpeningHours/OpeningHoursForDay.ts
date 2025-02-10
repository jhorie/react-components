import { OpeningHoursForDay } from "~/OpeningHours/OpeningHours";
import { Time, TimeMethods } from "~/OpeningHours/Time";
import { getTimeRangeOfOpeningHoursForDay } from "~/OpeningHours/nextOpen";
import { TimeRangeMethods } from "~/OpeningHours/TimeRange";
import { findCloseInFreeTime, findCloseInWorkingHours, findOpenInFreeTime } from "~/OpeningHours/RangeFinder";

function isOpenAtNight(openingHoursForDay: OpeningHoursForDay[], time: Time): boolean {
  for (const openingHoursForDay0 of openingHoursForDay) {
    if (TimeRangeMethods.containsNightTime(getTimeRangeOfOpeningHoursForDay(openingHoursForDay0), time)) {
      return true;
    }
  }
  return false;
}

function isOpenAt(openingHoursForDay: OpeningHoursForDay[], time: Time): boolean {
  for (const openingHoursForDay0 of openingHoursForDay) {
    if (TimeRangeMethods.containsTime(getTimeRangeOfOpeningHoursForDay(openingHoursForDay0), time)) {
      return true;
    }
  }
  return false;
}

function isOpenAtTheEndOfTheDay(openingHoursForDay: OpeningHoursForDay[]): boolean {
  return isOpenAt(openingHoursForDay, { hours: 23, minutes: 59 });
}

function nextOpen(openingHoursForDay: OpeningHoursForDay[], at: Date): Time | null {
  for (const openingHoursForDay0 of openingHoursForDay) {
    const timeRange = getTimeRangeOfOpeningHoursForDay(openingHoursForDay0);
    const openTime = findOpenInFreeTime(TimeMethods.fromDate(at), timeRange);
    if (openTime) {
      return openTime;
    }
  }
  return null;
}

function nextClose(openingHoursForDay: OpeningHoursForDay[], at: Date): Time | null {
  for (const openingHoursForDay0 of openingHoursForDay) {
    const timeRange = getTimeRangeOfOpeningHoursForDay(openingHoursForDay0);
    const closeTime = findCloseInWorkingHours(TimeMethods.fromDate(at), timeRange);

    if (closeTime) {
      return closeTime;
    }
  }
  for (const openingHoursForDay0 of openingHoursForDay) {
    const timeRange = getTimeRangeOfOpeningHoursForDay(openingHoursForDay0);
    const closeTime = findCloseInFreeTime(TimeMethods.fromDate(at), timeRange);
    if (closeTime) {
      return closeTime;
    }
  }
  return null;
}

export const OpeningHoursForDayMethods = {
  isOpenAtNight,
  nextClose,
  nextOpen: nextOpen,
  isOpenAtTheEndOfTheDay,
  isOpenAt,
};
