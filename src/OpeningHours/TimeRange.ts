import { Time, TimeMethods } from "~/OpeningHours/Time";

export type TimeRange = {
  start: Time;
  end: Time;
};

function isReversed(timeRange: TimeRange): boolean {
  return TimeMethods.isAfter(timeRange.start, timeRange.end);
}

function overflowsNextDay(timeRange: TimeRange): boolean {
  return isReversed(timeRange);
}

function spillsOverToNextDay(timeRange: TimeRange): boolean {
  return isReversed(timeRange);
}

function containsTime(timeRange: TimeRange, time: Time): boolean {
  return (
    TimeMethods.isSameOrAfter(time, timeRange.start) &&
    (overflowsNextDay(timeRange) || TimeMethods.isBefore(time, timeRange.end))
  );
}

function containsNightTime(timeRange: TimeRange, time: Time): boolean {
  return overflowsNextDay(timeRange) && containsTime({ ...timeRange, start: { hours: 0, minutes: 0 } }, time);
}

function timeRangeToString(timeRange: TimeRange): string {
  return `${TimeMethods.timeToString(timeRange.start)}-${TimeMethods.timeToString(timeRange.end)}`;
}

function timeRangesAreEqual(timeRange: TimeRange, otherTimeRange: TimeRange): boolean {
  return (
    TimeMethods.isSame(timeRange.start, otherTimeRange.start) && TimeMethods.isSame(timeRange.end, otherTimeRange.end)
  );
}

export const TimeRangeMethods = { containsTime, containsNightTime, timeRangeToString, timeRangesAreEqual };
