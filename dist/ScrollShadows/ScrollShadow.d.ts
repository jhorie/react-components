import { ReactNode, RefObject } from "react";
import { BoxProps } from "@mui/material";
export type ScrollShadowsDirection = "column" | "row";
export type PropsScrollShadows = {
    children: ReactNode;
    containerRef: RefObject<HTMLElement>;
    styleTopShadow?: BoxProps["sx"];
    styleBottomShadow?: BoxProps["sx"];
    direction?: ScrollShadowsDirection;
};
export declare function ScrollShadows({ children, containerRef, direction, styleTopShadow, styleBottomShadow, }: PropsScrollShadows): import("react/jsx-runtime").JSX.Element;
export declare function useScrollShadows({ container, direction, }: {
    container: RefObject<HTMLElement>;
    direction: ScrollShadowsDirection;
}): RefObject<HTMLElement>;
