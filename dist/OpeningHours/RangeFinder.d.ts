import { Time } from "~/OpeningHours/Time";
import { TimeRange } from "~/OpeningHours/TimeRange";
export declare function findRangeInFreeTime(time: Time, timeRange: TimeRange): TimeRange | null;
export declare function findOpenInFreeTime(time: Time, timeRange: TimeRange): Time | null;
export declare function findCloseInFreeTime(time: Time, timeRange: TimeRange): Time | null;
export declare function findCloseInWorkingHours(time: Time, timeRange: TimeRange): Time | null;
