import { OpeningHoursForDay } from "~/OpeningHours/OpeningHours";
import { Time } from "~/OpeningHours/Time";
declare function isOpenAtNight(openingHoursForDay: OpeningHoursForDay[], time: Time): boolean;
declare function isOpenAt(openingHoursForDay: OpeningHoursForDay[], time: Time): boolean;
declare function isOpenAtTheEndOfTheDay(openingHoursForDay: OpeningHoursForDay[]): boolean;
declare function nextOpen(openingHoursForDay: OpeningHoursForDay[], at: Date): Time | null;
declare function nextClose(openingHoursForDay: OpeningHoursForDay[], at: Date): Time | null;
export declare const OpeningHoursForDayMethods: {
    isOpenAtNight: typeof isOpenAtNight;
    nextClose: typeof nextClose;
    nextOpen: typeof nextOpen;
    isOpenAtTheEndOfTheDay: typeof isOpenAtTheEndOfTheDay;
    isOpenAt: typeof isOpenAt;
};
export {};
