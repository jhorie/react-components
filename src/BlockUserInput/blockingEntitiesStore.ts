type BlockUserInputStore = {
  uuids: {
    [uuid: string]: true;
  };
};

export let blockingEntities: BlockUserInputStore = { uuids: {} };
let listeners: any[] = [];

export const blockingEntitiesStore = {
  blockingStarted: (uuid: string) => {
    blockingEntities.uuids[uuid] = true;
    blockingEntities = { ...blockingEntities };
    emitChange();
  },
  blockingStopped: (uuid: string) => {
    delete blockingEntities.uuids[uuid];
    blockingEntities = { ...blockingEntities };
    emitChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return blockingEntities;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
