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
    emitChange();
  },
  loadingStopped: (uuid: string) => {
    delete loadingEntities.uuids[uuid];
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
