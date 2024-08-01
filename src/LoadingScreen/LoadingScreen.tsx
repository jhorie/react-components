import { Box, CircularProgress, SxProps } from "@mui/material";
import { useIsLoading } from "#LoadingScreen/useIsLoading";
import React, { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { loadingEntities, loadingEntitiesStore } from "~/LoadingScreen/loadingScreenStore";
import { v4 as uuidv4 } from "uuid";

const fullScreenStyles: SxProps = {
  position: "fixed",
  height: "100vh",
  width: "100vw",
  zIndex: 15000,
  left: 0,
  top: 0,
};

export function LoadingScreen({ isFullScreen = true }: { isFullScreen: boolean }) {
  const isLoadingFromHook = useIsLoading();

  return isLoadingFromHook ? (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "rgba(0,0,0,0.4)",
        alignItems: "center",
        alignContent: "center",
        justifyItems: "center",
        justifyContent: "center",
        width: 1,
        height: 1,
        ...(isFullScreen ? fullScreenStyles : {}),
      }}
    >
      <CircularProgress color={"primary"} thickness={6} size={50} />
    </Box>
  ) : null;
}

export function isLoading() {
  const uuids = loadingEntities.uuids;

  return Object.keys(uuids).length > 0;
}

export function useLoadingScreen<T>(isLoading?: boolean) {
  const uuid = useRef<string>("");
  const loadingEntities = useSyncExternalStore(loadingEntitiesStore.subscribe, loadingEntitiesStore.getSnapshot);
  const isLoadingInStore = loadingEntities.uuids[uuid.current];
  useEffect(() => {
    uuid.current = uuidv4();

    return () => {
      loadingEntitiesStore.loadingStopped(uuid.current);
    };
  }, []);

  useEffect(() => {
    if (!isLoadingInStore && isLoading) {
      loadingEntitiesStore.loadingStarted(uuid.current);
    } else if (isLoadingInStore && isLoading === false) {
      loadingEntitiesStore.loadingStopped(uuid.current);
    }
  }, [isLoading, isLoadingInStore]);

  return {
    startLoading: useCallback(() => {
      loadingEntitiesStore.loadingStarted(uuid.current);
    }, []),
    stopLoading: useCallback(() => {
      loadingEntitiesStore.loadingStopped(uuid.current);
    }, []),
  };
}
