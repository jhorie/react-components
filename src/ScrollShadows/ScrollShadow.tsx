import { ReactNode, RefObject, useCallback, useEffect } from "react";
import { debounce } from "lodash";
import { Box, BoxProps } from "@mui/material";

const shadowCss: BoxProps["sx"] = {
  left: 0,
  zIndex: 100,
  width: "100%",
  height: "40px",
  minHeight: "40px",
};

const shadowCssTop: BoxProps["sx"] = {
  position: "sticky",
  pointerEvents: "none",
  top: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0,
};
const shadowCssBottom = {
  bottom: 0,
  pointerEvents: "none",
  backgroundImage: "radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  position: "sticky",
};

export function ScrollShadows({
  children,
  containerRef,
  styleTopShadow = {},
  styleBottomShadow = {},
}: {
  children: ReactNode;
  containerRef: RefObject<HTMLElement>;
  styleTopShadow?: BoxProps["sx"];
  styleBottomShadow?: BoxProps["sx"];
}) {
  useScrollShadows({ orientation: Orientation.VERTICAL, container: containerRef });
  return (
    <>
      <Box className={"shadow--top"} sx={{ ...shadowCss, ...shadowCssTop, ...styleTopShadow } as any} />
      {children}
      <Box className={"shadow--bottom"} sx={{ ...shadowCss, ...shadowCssBottom, ...styleBottomShadow } as any} />
    </>
  );
}

export enum Orientation {
  VERTICAL,
  HORIZONTAL,
}
const scrollGradientHeight = 150;

export function useScrollShadows({
  container,
  orientation,
}: {
  container: RefObject<HTMLElement>;
  orientation: Orientation;
}) {
  const onScroll = useCallback(
    debounce(() => {
      if (container.current) {
        const shadowTop: HTMLElement | null = container.current.querySelector(".shadow--top");
        const shadowBottom: HTMLElement | null = container.current.querySelector(".shadow--bottom");

        if (shadowTop && shadowBottom) {
          const totalScrollHeight = container.current.scrollHeight - container.current.offsetHeight;
          if (totalScrollHeight == 0) {
            shadowTop.style.opacity = String(0);
            shadowBottom.style.opacity = String(0);
          } else {
            shadowTop.style.opacity = String(Math.min(container.current.scrollTop / scrollGradientHeight, 1));
            shadowBottom.style.opacity = String(
              Math.min((totalScrollHeight - container.current.scrollTop) / scrollGradientHeight, 1)
            );
          }
        }
      }
    }),
    [container.current]
  );

  const onResize = useCallback(
    debounce(() => {
      if (container.current) {
        const totalScrollHeight = container.current.scrollHeight - container.current.offsetHeight;

        if (totalScrollHeight === 0) {
          const shadowBottom: HTMLElement | null = container.current.querySelector(".shadow--bottom");
          if (shadowBottom) {
            shadowBottom.style.opacity = "0";
          }
        }
      }
    }),
    [container.current]
  );

  useEffect(() => {
    const element = container.current;
    let observer: MutationObserver | null = null;
    if (element) {
      const totalScrollHeight = element.scrollHeight - element.offsetHeight;

      if (totalScrollHeight === 0) {
        const shadowBottom: HTMLElement | null = element.querySelector(".shadow--bottom");
        if (shadowBottom) {
          shadowBottom.style.opacity = "0";
        }
      }

      element.addEventListener("scroll", onScroll);
      element.addEventListener("resize", onResize);
      observer = new MutationObserver(onResize);
      observer.observe(element, { subtree: true, childList: true });
    }
    return () => {
      element?.removeEventListener("resize", onResize);
      element?.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, [container, onResize, onScroll]);

  return container;
}
