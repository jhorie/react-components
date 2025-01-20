export type OpeningHours = {
    monday?: OpeningHoursForDay[];
    tuesday?: OpeningHoursForDay[];
    wednesday?: OpeningHoursForDay[];
    thursday?: OpeningHoursForDay[];
    friday?: OpeningHoursForDay[];
    saturday?: OpeningHoursForDay[];
    sunday?: OpeningHoursForDay[];
    exceptions?: {
        [date: string]: OpeningHoursForDay[];
    };
};
export type TimeRange = string;
export type OpeningHoursForDay = TimeRange | {
    0: TimeRange;
    data: unknown;
};
