import { useIsUserInputBlocked } from "./BlockUserInput/useIsUserInputBlocked";
import { BlockingUserInput, useBlockUserInput, isUserInputBlocked, useWrapPromise, blockingStarted, blockingStopped } from "./BlockUserInput/BlockingUserInput";
export { ScrollShadows } from "./ScrollShadows/ScrollShadow";
export declare const BlockUserInput: {
    useIsUserInputBlocked: typeof useIsUserInputBlocked;
    isUserInputBlocked: typeof isUserInputBlocked;
    useBlockUserInput: typeof useBlockUserInput;
    useWrapPromise: typeof useWrapPromise;
    blockingStarted: typeof blockingStarted;
    blockingStopped: typeof blockingStopped;
    View: typeof BlockingUserInput;
};
