import * as actual from "./useIsLoading";
import { fn } from "@storybook/test";
export * from "./useIsLoading";
export const useIsLoading = fn(actual.useIsLoading).mockName("useIsLoading");
