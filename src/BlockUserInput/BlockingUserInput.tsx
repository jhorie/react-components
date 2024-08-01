import { Box, CircularProgress, SxProps } from "@mui/material";
import { useIsUserInputBlocked } from "#BlockUserInput/useIsUserInputBlocked";
import React, { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { blockingEntities, blockingEntitiesStore } from "./blockingEntitiesStore";
import { v4 as uuidv4 } from "uuid";
import {MutationActionCreatorResult, MutationDefinition} from "@reduxjs/toolkit/query";

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
    startLoading: useCallback(() => {
      blockingEntitiesStore.blockingStarted(uuid.current);
    }, []),
    stopLoading: useCallback(() => {
      blockingEntitiesStore.blockingStopped(uuid.current);
    }, []),
  };
}

// export function useWrapPromise(fn: (...args: any[]) => Promise<unknown>) {
//     const { startLoading, stopLoading } = useBlockUserInput();
//
//     return (...rest: Parameters<(...args: any[]) => Promise<unknown>>) => {
//         startLoading();
//         setTimeout(() => {
//             fn(...rest).finally(stopLoading);
//         }, 3000);
//     };
// }

// export function useWrapPromise<T extends MutationTrigger<MutationDefinition<any, any, any, any>>>(fn: T) {
export function useWrapPromise<T extends (rest: Parameters<T>) => Promise<MutationActionCreatorResult<any>>>(fn: T) {
  const { startLoading, stopLoading } = useBlockUserInput();

  return async (...rest: Parameters<T>) => {
    startLoading();

    const result = await fn(rest);
    stopLoading();
    return result;
  };
}
