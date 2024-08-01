import React, { useSyncExternalStore, useRef, useEffect, useCallback } from "react";
import { CircularProgress } from "@mui/material";
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};
function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
let loadingEntities = { uuids: {} };
let listeners = [];
const loadingEntitiesStore = {
  loadingStarted: (uuid) => {
    loadingEntities.uuids[uuid] = true;
    loadingEntities = { ...loadingEntities };
    emitChange();
  },
  loadingStopped: (uuid) => {
    delete loadingEntities.uuids[uuid];
    loadingEntities = { ...loadingEntities };
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return loadingEntities;
  }
};
function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
function useIsLoading() {
  const loadingEntities2 = useSyncExternalStore(loadingEntitiesStore.subscribe, loadingEntitiesStore.getSnapshot);
  return Object.keys(loadingEntities2.uuids).length > 0;
}
function isLoading() {
  const uuids = loadingEntities.uuids;
  return Object.keys(uuids).length > 0;
}
function useLoadingScreen(isLoading2) {
  const uuid = useRef("");
  const loadingEntities2 = useSyncExternalStore(loadingEntitiesStore.subscribe, loadingEntitiesStore.getSnapshot);
  const isLoadingInStore = loadingEntities2.uuids[uuid.current];
  useEffect(() => {
    uuid.current = v4();
    return () => {
      loadingEntitiesStore.loadingStopped(uuid.current);
    };
  }, []);
  useEffect(() => {
    if (!isLoadingInStore && isLoading2) {
      loadingEntitiesStore.loadingStarted(uuid.current);
    } else if (isLoadingInStore && isLoading2 === false) {
      loadingEntitiesStore.loadingStopped(uuid.current);
    }
  }, [isLoading2, isLoadingInStore]);
  return {
    startLoading: useCallback(() => {
      loadingEntitiesStore.loadingStarted(uuid.current);
    }, []),
    stopLoading: useCallback(() => {
      loadingEntitiesStore.loadingStopped(uuid.current);
    }, [])
  };
}
function LoadingScreenFullScreen() {
  const isLoading2 = useIsLoading();
  return isLoading2 ? /* @__PURE__ */ React.createElement("div", {
    style: {
      zIndex: 15e3,
      display: "flex",
      left: 0,
      top: 0,
      height: "100vh",
      width: "100vw",
      position: "fixed",
      backgroundColor: "rgba(0,0,0,0.4)",
      alignItems: "center",
      alignContent: "center",
      justifyItems: "center",
      justifyContent: "center"
    }
  }, /* @__PURE__ */ React.createElement(CircularProgress, {
    color: "primary",
    thickness: 6,
    size: 50
  })) : null;
}
export { LoadingScreenFullScreen, isLoading, useIsLoading, useLoadingScreen };
