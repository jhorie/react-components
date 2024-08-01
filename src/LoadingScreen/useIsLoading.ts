import { useSyncExternalStore } from "react";
import { loadingEntitiesStore } from "~/LoadingScreen/loadingScreenStore";

export function useIsLoading() {
  const loadingEntities = useSyncExternalStore(loadingEntitiesStore.subscribe, loadingEntitiesStore.getSnapshot);

  return Object.keys(loadingEntities.uuids).length > 0;
}
