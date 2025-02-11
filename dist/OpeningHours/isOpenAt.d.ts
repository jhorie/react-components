import { OpeningHours } from "~/OpeningHours/OpeningHours";
export declare function isOpen(openingHours: OpeningHours): boolean;
export declare function isClosed(openingHours: OpeningHours): boolean;
export declare function isClosedAt(openingHours: OpeningHours, at: Date): boolean;
export declare function isOpenAt(openingHours: OpeningHours, at: Date): boolean;
export declare function isOpenComingDays(openingHours: OpeningHours, at: Date, comingDays?: number): boolean;
