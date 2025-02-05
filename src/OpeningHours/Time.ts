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

function fromDate(date: Date): Time {
  return { hours: date.getUTCHours(), minutes: date.getUTCMinutes() };
}

export const TimeMethods = { isSame, isBefore, isAfter, isSameOrAfter, timeToNumber, fromDate };
