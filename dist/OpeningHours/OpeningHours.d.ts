import { TimeRange } from "~/OpeningHours/TimeRange";
export type Day = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
export type TDate = string;
export declare const days: Day[];
export declare const isOfTypeDay: (input: string) => input is Day;
export type OpeningHours<T = undefined> = {
    [day in Day]?: OpeningHoursForDay<T>[];
} & {
    exceptions?: OpeningHoursExceptions<T>;
    timezone?: string;
};
export type OpeningHoursExceptions<T = undefined> = {
    [date: TDate]: OpeningHoursForDay<T>[] | undefined;
};
export type TimeRangeS = string;
export type OpeningHoursForDay<T = undefined> = TimeRangeS | {
    0: TimeRangeS;
    data: T;
};
export declare function isOpenInOpeningHoursForDay(openingHoursForDay: OpeningHoursForDay[] | null, at: Date): boolean;
export declare function isOpenInTimeRange(date: Date, timeRange: string): boolean;
export declare function forDate(openingHours: OpeningHours, date: Date): OpeningHoursForDay[];
export declare function forDateTime(openingHours: OpeningHours, date: Date): OpeningHoursForDay | null;
export declare function getTimezone(openingHours: OpeningHours): string;
export declare function currentOpenRange(openingHours: OpeningHours, date: Date): TimeRange | null;
export declare function nextOpen(openingHours: OpeningHours, at?: Date | null, cap?: Date | null): Date | null;
export declare function nextClose(openingHours: OpeningHours, at?: Date | null, cap?: Date | null): Date | null;
