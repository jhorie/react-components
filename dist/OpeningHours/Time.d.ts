export type Time = {
    hours: number;
    minutes: number;
};
declare function isSame(time: Time, otherTime: Time): boolean;
declare function isAfter(time: Time, otherTime: Time): boolean;
declare function isBefore(time: Time, otherTime: Time): boolean;
declare function isSameOrAfter(time: Time, otherTime: Time): boolean;
declare function timeToNumber(time: Time): number;
declare function timeToString(time: Time): string;
declare function fromDate(date: Date): Time;
export declare const TimeMethods: {
    isSame: typeof isSame;
    isBefore: typeof isBefore;
    isAfter: typeof isAfter;
    isSameOrAfter: typeof isSameOrAfter;
    timeToNumber: typeof timeToNumber;
    fromDate: typeof fromDate;
    timeToString: typeof timeToString;
};
export {};
