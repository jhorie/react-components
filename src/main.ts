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
export type { OpeningHours, OpeningHoursForDay, TimeRangeS } from "./OpeningHours/OpeningHours";
