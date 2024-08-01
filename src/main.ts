import { useIsLoading } from "./LoadingScreen/useIsLoading";
import { LoadingScreen as LoadingScreenComponent, useLoadingScreen, isLoading } from "./LoadingScreen/LoadingScreen";

export const LoadingScreen = { useIsLoading, isLoading, useLoadingScreen, Component: LoadingScreenComponent };
