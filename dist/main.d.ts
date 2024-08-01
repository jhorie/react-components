import { useIsUserInputBlocked } from "./BlockUserInput/useIsUserInputBlocked";
import { BlockingUserInput, useBlockUserInput, isUserInputBlocked, useWrapPromise } from "./BlockUserInput/BlockingUserInput";
export declare const BlockUserInput: {
    useIsUserInputBlocked: typeof useIsUserInputBlocked;
    isUserInputBlocked: typeof isUserInputBlocked;
    useBlockUserInput: typeof useBlockUserInput;
    useWrapPromise: typeof useWrapPromise;
    View: typeof BlockingUserInput;
};
