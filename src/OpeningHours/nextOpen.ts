import { OpeningHoursForDay } from "~/OpeningHours/OpeningHours";
import { Time } from "~/OpeningHours/Time";
import { TimeRange } from "~/OpeningHours/TimeRange";

export function getTimeRangeOfOpeningHoursForDay(openingHoursForDay: OpeningHoursForDay): TimeRange {
  return toTimeRange(typeof openingHoursForDay == "string" ? openingHoursForDay : openingHoursForDay.hours);
}

export function toTimeRange(timeRangeS: string): TimeRange {
  const splitted = timeRangeS.split("-");

  return { start: toTime(splitted[0]), end: toTime(splitted[1]) };
}

function toTime(time: string): Time {
  const splitted = time.split(":");
  return { hours: Number(splitted[0]), minutes: Number(splitted[1]) };
}
