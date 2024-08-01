import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { v4 as uuidv4 } from "uuid";
import { loadingEntities, loadingEntitiesStore } from "./loadingScreenStore";

export function useIsLoading() {
  const loadingEntities = useSyncExternalStore(loadingEntitiesStore.subscribe, loadingEntitiesStore.getSnapshot);

  return Object.keys(loadingEntities.uuids).length > 0;
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
