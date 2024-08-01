type LoadingStore = {
  uuids: {
    [uuid: string]: true;
  };
};

export let loadingEntities: LoadingStore = { uuids: {} };
let listeners: any[] = [];

export const loadingEntitiesStore = {
  loadingStarted: (uuid: string) => {
    loadingEntities.uuids[uuid] = true;
    loadingEntities = { ...loadingEntities };
    emitChange();
  },
  loadingStopped: (uuid: string) => {
    delete loadingEntities.uuids[uuid];
    loadingEntities = { ...loadingEntities };
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return loadingEntities;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
