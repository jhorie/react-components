export declare function useIsLoading(): boolean;
export declare function isLoading(): boolean;
export declare function useLoadingScreen<T>(isLoading?: boolean): {
    startLoading: () => void;
    stopLoading: () => void;
};
