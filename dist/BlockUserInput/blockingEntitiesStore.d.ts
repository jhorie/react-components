type BlockUserInputStore = {
    uuids: {
        [uuid: string]: true;
    };
};
export declare let blockingEntities: BlockUserInputStore;
export declare const blockingEntitiesStore: {
    blockingStarted: (uuid: string) => void;
    blockingStopped: (uuid: string) => void;
    subscribe(listener: any): () => void;
    getSnapshot(): BlockUserInputStore;
};
export {};
