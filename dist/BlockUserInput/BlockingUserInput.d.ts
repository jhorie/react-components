export declare function BlockingUserInput(): import("react/jsx-runtime").JSX.Element | null;
export declare function isUserInputBlocked(): boolean;
/**
 * @deprecated
 * Do not use this function, you should use the hook useBlockUserInput
 * @param uuid
 */
export declare function blockingStarted(uuid: string): void;
/**
 * @deprecated
 * Do not use this function, you should use the hook useBlockUserInput
 * @param uuid
 */
export declare function blockingStopped(uuid: string): void;
export declare function useBlockUserInput<T>(isLoading?: boolean): {
    blockingStarted: () => void;
    blockingStopped: () => void;
};
type AsyncFunction<T extends any[], R> = (...args: T) => Promise<R>;
export declare function useWrapPromise<T extends any[], R>(fn: AsyncFunction<T, R>): AsyncFunction<T, R>;
export {};
