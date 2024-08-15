import { ReactNode, RefObject } from "react";
import { BoxProps } from "@mui/material";
export declare function ScrollShadows({ children, containerRef, styleTopShadow, styleBottomShadow, }: {
    children: ReactNode;
    containerRef: RefObject<HTMLElement>;
    styleTopShadow?: BoxProps["sx"];
    styleBottomShadow?: BoxProps["sx"];
}): import("react/jsx-runtime").JSX.Element;
export declare enum Orientation {
    VERTICAL = 0,
    HORIZONTAL = 1
}
export declare function useScrollShadows({ container, orientation, }: {
    container: RefObject<HTMLElement>;
    orientation: Orientation;
}): RefObject<HTMLElement>;
