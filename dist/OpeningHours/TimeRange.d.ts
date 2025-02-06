import { Time } from "~/OpeningHours/Time";
export type TimeRange = {
    start: Time;
    end: Time;
};
declare function containsTime(timeRange: TimeRange, time: Time): boolean;
declare function containsNightTime(timeRange: TimeRange, time: Time): boolean;
declare function timeRangeToString(timeRange: TimeRange): string;
declare function timeRangesAreEqual(timeRange: TimeRange, otherTimeRange: TimeRange): boolean;
export declare const TimeRangeMethods: {
    containsTime: typeof containsTime;
    containsNightTime: typeof containsNightTime;
    timeRangeToString: typeof timeRangeToString;
    timeRangesAreEqual: typeof timeRangesAreEqual;
};
export {};
