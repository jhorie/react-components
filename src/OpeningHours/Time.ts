import { format } from "date-fns";

export type Time = {
  hours: number;
  minutes: number;
};

function isSame(time: Time, otherTime: Time): boolean {
  return time.hours == otherTime.hours && time.minutes == otherTime.minutes;
}

function isAfter(time: Time, otherTime: Time): boolean {
  return timeToNumber(time) > timeToNumber(otherTime);
}

function isBefore(time: Time, otherTime: Time): boolean {
  return timeToNumber(time) < timeToNumber(otherTime);
}

function isSameOrAfter(time: Time, otherTime: Time): boolean {
  return isSame(time, otherTime) || isAfter(time, otherTime);
}

function timeToNumber(time: Time): number {
  return time.hours * 60 + time.minutes;
}

function timeToString(time: Time): string {
  return String(time.hours).padStart(2, "0") + ":" + String(time.minutes).padStart(2, "0");
}

function fromDate(date: Date): Time {
  return {
    hours: Number(format(date, "H")),
    minutes: Number(format(date, "m")),
  };
}

export const TimeMethods = { isSame, isBefore, isAfter, isSameOrAfter, timeToNumber, fromDate: fromDate, timeToString };
