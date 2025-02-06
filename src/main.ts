import { useIsUserInputBlocked } from "./BlockUserInput/useIsUserInputBlocked";
import {
  BlockingUserInput,
  useBlockUserInput,
  isUserInputBlocked,
  useWrapPromise,
  blockingStarted,
  blockingStopped,
} from "./BlockUserInput/BlockingUserInput";
export { ScrollShadows } from "./ScrollShadows/ScrollShadow";
export type { PropsScrollShadows } from "./ScrollShadows/ScrollShadow";

export const BlockUserInput = {
  useIsUserInputBlocked,
  isUserInputBlocked,
  useBlockUserInput,
  useWrapPromise,
  blockingStarted,
  blockingStopped,
  View: BlockingUserInput,
};

// export const ScrollShadow = {
//   View: ScrollShadows
// }

export { isOpen, isOpenAt, isClosed, isClosedAt } from "./OpeningHours/isOpenAt";
export type {
  OpeningHours,
  OpeningHoursForDay,
  TimeRangeS,
  OpeningHoursExceptions,
  Day,
  TDate,
} from "./OpeningHours/OpeningHours";
export { isOfTypeDay, days } from "./OpeningHours/OpeningHours";
export type { TimeRange } from "./OpeningHours/TimeRange";
export { getTimeRangeOfOpeningHoursForDay } from "./OpeningHours/nextOpen";
export { TimeMethods } from "./OpeningHours/Time";
export { TimeRangeMethods } from "./OpeningHours/TimeRange";
