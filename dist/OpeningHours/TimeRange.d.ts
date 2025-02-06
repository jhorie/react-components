import { Time } from "~/OpeningHours/Time";
export type TimeRange = {
    start: Time;
    end: Time;
};
declare function containsTime(timeRange: TimeRange, time: Time): boolean;
declare function containsNightTime(timeRange: TimeRange, time: Time): boolean;
declare function timeRangeToString(timeRange: TimeRange): string;
export declare const TimeRangeMethods: {
    containsTime: typeof containsTime;
    containsNightTime: typeof containsNightTime;
    timeRangeToString: typeof timeRangeToString;
};
export {};
