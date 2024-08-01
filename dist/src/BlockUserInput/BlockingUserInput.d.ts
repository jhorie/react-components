import React from "react";
import { MutationActionCreatorResult } from "@reduxjs/toolkit/query";
export declare function BlockingUserInput(): React.JSX.Element | null;
export declare function isUserInputBlocked(): boolean;
export declare function useBlockUserInput<T>(isLoading?: boolean): {
    startLoading: () => void;
    stopLoading: () => void;
};
export declare function useWrapPromise<T extends (rest: Parameters<T>) => Promise<MutationActionCreatorResult<any>>>(fn: T): (...rest: Parameters<T>) => Promise<{
    data: unknown;
    error?: undefined;
} | {
    data?: undefined;
    error: unknown;
}>;
