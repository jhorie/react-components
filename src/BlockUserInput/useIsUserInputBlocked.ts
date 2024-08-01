import { useSyncExternalStore } from "react";
import { blockingEntitiesStore } from "./blockingEntitiesStore";

export function useIsUserInputBlocked() {
  const loadingEntities = useSyncExternalStore(blockingEntitiesStore.subscribe, blockingEntitiesStore.getSnapshot);

  return Object.keys(loadingEntities.uuids).length > 0;
}
