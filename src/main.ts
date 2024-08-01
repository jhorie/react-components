import { useIsUserInputBlocked } from "./BlockUserInput/useIsUserInputBlocked";
import {
  BlockingUserInput,
  useBlockUserInput,
  isUserInputBlocked,
  useWrapPromise,
} from "./BlockUserInput/BlockingUserInput";

export const BlockUserInput = {
  useIsUserInputBlocked,
  isUserInputBlocked,
  useBlockUserInput,
  useWrapPromise,
  View: BlockingUserInput,
};
