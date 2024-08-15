import { Box, CircularProgress } from "@mui/material";
import { useIsUserInputBlocked } from "#BlockUserInput/useIsUserInputBlocked";
import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { blockingEntities, blockingEntitiesStore } from "./blockingEntitiesStore";
import { v4 as uuidv4 } from "uuid";

export function BlockingUserInput() {
  const isLoadingFromHook = useIsUserInputBlocked();

  return isLoadingFromHook ? (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgba(0,0,0,0.4)",
        alignItems: "center",
        alignContent: "center",
        justifyItems: "center",
        justifyContent: "center",
        position: "fixed",
        height: "100vh",
        width: "100vw",
        zIndex: 15000,
        left: 0,
        top: 0,
      }}
    >
      <CircularProgress color={"primary"} thickness={6} size={50} />
    </Box>
  ) : null;
}

export function isUserInputBlocked() {
  const uuids = blockingEntities.uuids;

  return Object.keys(uuids).length > 0;
}

/**
 * @deprecated
 * Do not use this function, you should use the hook useBlockUserInput
 * @param uuid
 */
export function blockingStarted(uuid: string) {
  blockingEntitiesStore.blockingStarted(uuid);
}

/**
 * @deprecated
 * Do not use this function, you should use the hook useBlockUserInput
 * @param uuid
 */
export function blockingStopped(uuid: string) {
  blockingEntitiesStore.blockingStopped(uuid);
}

export function useBlockUserInput<T>(isLoading?: boolean) {
  const uuid = useRef<string>("");
  const blockingEntities = useSyncExternalStore(blockingEntitiesStore.subscribe, blockingEntitiesStore.getSnapshot);
  const isLoadingInStore = blockingEntities.uuids[uuid.current];
  useEffect(() => {
    uuid.current = uuidv4();

    return () => {
      blockingEntitiesStore.blockingStopped(uuid.current);
    };
  }, []);

  useEffect(() => {
    if (!isLoadingInStore && isLoading) {
      blockingEntitiesStore.blockingStarted(uuid.current);
    } else if (isLoadingInStore && isLoading === false) {
      blockingEntitiesStore.blockingStopped(uuid.current);
    }
  }, [isLoading, isLoadingInStore]);

  return {
    blockingStarted: useCallback(() => {
      blockingEntitiesStore.blockingStarted(uuid.current);
    }, []),
    blockingStopped: useCallback(() => {
      blockingEntitiesStore.blockingStopped(uuid.current);
    }, []),
  };
}

type AsyncFunction<T extends any[], R> = (...args: T) => Promise<R>;

export function useWrapPromise<T extends any[], R>(fn: AsyncFunction<T, R>): AsyncFunction<T, R> {
  const { blockingStarted, blockingStopped } = useBlockUserInput();

  return async (...args: T) => {
    blockingStarted();

    const result = await fn(...args);
    blockingStopped();
    return result;
  };
}
