type LoadingStore = {
    uuids: {
        [uuid: string]: true;
    };
};
export declare let loadingEntities: LoadingStore;
export declare const loadingEntitiesStore: {
    loadingStarted: (uuid: string) => void;
    loadingStopped: (uuid: string) => void;
    subscribe(listener: any): () => void;
    getSnapshot(): LoadingStore;
};
export {};
