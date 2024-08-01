import * as actual from "./useIsUserInputBlocked";
import { fn } from "@storybook/test";
export * from "./useIsUserInputBlocked";
export const useIsUserInputBlocked = fn(actual.useIsUserInputBlocked).mockName("useIsUserInputBlocked");
