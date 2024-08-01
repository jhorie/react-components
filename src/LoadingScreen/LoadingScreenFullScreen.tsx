import { CircularProgress } from "@mui/material";
import { useIsLoading } from "./loadingScreen";
import React from "react";

export function LoadingScreenFullScreen() {
  const isLoading = useIsLoading();

  return isLoading ? (
    <div
      style={{
        zIndex: 15000,
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
        justifyContent: "center",
      }}
    >
      <CircularProgress color={"primary"} thickness={6} size={50} />
    </div>
  ) : null;
}
