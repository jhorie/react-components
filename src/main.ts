import { useIsUserInputBlocked } from "./BlockUserInput/useIsUserInputBlocked";
import {
  BlockingUserInput,
  useBlockUserInput,
  isUserInputBlocked,
  useWrapPromise,
  blockingStarted,
  blockingStopped,
} from "./BlockUserInput/BlockingUserInput";
export { ScrollShadows } from "~/ScrollShadows/ScrollShadow";

export const BlockUserInput = {
  useIsUserInputBlocked,
  isUserInputBlocked,
  useBlockUserInput,
  useWrapPromise,
  blockingStarted,
  blockingStopped,
  View: BlockingUserInput,
};

