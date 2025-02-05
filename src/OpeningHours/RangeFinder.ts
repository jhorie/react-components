import { Time, TimeMethods } from "~/OpeningHours/Time";
import { TimeRange, TimeRangeMethods } from "~/OpeningHours/TimeRange";

export function findRangeInFreeTime(time: Time, timeRange: TimeRange): TimeRange | null {
  return TimeMethods.isBefore(time, timeRange.start) ? timeRange : null;
}

export function findOpenInFreeTime(time: Time, timeRange: TimeRange): Time | null {
  return findRangeInFreeTime(time, timeRange)?.start ?? null;
}

export function findCloseInFreeTime(time: Time, timeRange: TimeRange): Time | null {
  return findRangeInFreeTime(time, timeRange)?.end ?? null;
}

export function findCloseInWorkingHours(time: Time, timeRange: TimeRange): Time | null {
  return TimeRangeMethods.containsTime(timeRange, time) ? timeRange.end : null;
}
