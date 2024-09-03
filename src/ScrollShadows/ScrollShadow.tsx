import { ReactNode, RefObject, useCallback, useEffect } from "react";
import { debounce } from "lodash";
import { Box, BoxProps } from "@mui/material";

const shadowCss: BoxProps["sx"] = {
  zIndex: 100,
  position:"sticky",
  pointerEvents:"none"
}

const shadowColumnCss: BoxProps["sx"] = {
  ...shadowCss,
  left: 0,
  minWidth: "100%",
  height: "40px",
  minHeight: "40px",
  marginTop:"-40px",
} ;
const shadowRowCss: BoxProps["sx"] = {
  ...shadowCss,
  top: 0,
  minHeight: "100%",
  width: "20px",
  minWidth: "20px",
  marginLeft: "-20px",
};

const shadowCssTop: BoxProps["sx"] = {
  top: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0,
};
const shadowCssBottom = {
  bottom: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
};
const shadowCssLeft: BoxProps["sx"] = {
  left: 0,
  backgroundImage: "radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0,
};
const shadowCssRight = {
  right: 0,
  backgroundImage: "radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
};

export type ScrollShadowsDirection = "column" | "row";

export type PropsScrollShadows = {
  children: ReactNode;
  containerRef: RefObject<HTMLElement>;
  styleTopShadow?: BoxProps["sx"];
  styleBottomShadow?: BoxProps["sx"];
  direction?: ScrollShadowsDirection;
};

export function ScrollShadows({
  children,
  containerRef,
  direction = "column",
  styleTopShadow = {},
  styleBottomShadow = {},
}: PropsScrollShadows) {
  useScrollShadows({ direction, container: containerRef });
  return (
    <>
      {direction == "column" ? (
        <Box className={"shadow--top"} sx={{ ...shadowColumnCss, ...shadowCssTop, ...styleTopShadow } as any} />
      ) : null}
      {direction == "row" ? (
        <Box className={"shadow--left"} sx={{ ...shadowRowCss, ...shadowCssLeft, ...styleTopShadow } as any} />
      ) : null}
      {children}
      {direction == "column" ? (
        <Box
          className={"shadow--bottom"}
          sx={{ ...shadowColumnCss, ...shadowCssBottom, ...styleBottomShadow } as any}
        />
      ) : null}
      {direction == "row" ? (
        <Box className={"shadow--right"} sx={{ ...shadowRowCss, ...shadowCssRight, ...styleBottomShadow } as any} />
      ) : null}
    </>
  );
}

const scrollGradientHeight = 150;
const scrollGradientWidth = scrollGradientHeight;

export function useScrollShadows({
  container,
  direction,
}: {
  container: RefObject<HTMLElement>;
  direction: ScrollShadowsDirection;
}) {
  const onScroll = useCallback(
    debounce(() => {
      if (container.current) {
        if (direction == "column") {
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
        } else if (direction == "row") {
          const shadowLeft: HTMLElement | null = container.current.querySelector(".shadow--left");
          const shadowRight: HTMLElement | null = container.current.querySelector(".shadow--right");

          if (shadowLeft && shadowRight) {
            const totalScrollWidth = container.current.scrollWidth - container.current.offsetWidth;
            if (totalScrollWidth == 0) {
              shadowLeft.style.opacity = String(0);
              shadowRight.style.opacity = String(0);
            } else {
              shadowLeft.style.opacity = String(Math.min(container.current.scrollLeft / scrollGradientWidth, 1));
              shadowRight.style.opacity = String(
                Math.min((totalScrollWidth - container.current.scrollLeft) / scrollGradientWidth, 1)
              );
            }
          }
        }
      }
    }),
    [container.current]
  );

  const onResize = useCallback(
    debounce(() => {
      if (container.current) {
        if (direction == "column") {
          const totalScrollHeight = container.current.scrollHeight - container.current.offsetHeight;

          if (totalScrollHeight === 0) {
            const shadowBottom: HTMLElement | null = container.current.querySelector(".shadow--bottom");
            if (shadowBottom) {
              shadowBottom.style.opacity = "0";
            }
          }
        } else if (direction == "row") {
          const totalScrollWidth = container.current.scrollWidth - container.current.offsetWidth;

          if (totalScrollWidth === 0) {
            const shadowRight: HTMLElement | null = container.current.querySelector(".shadow--right");
            if (shadowRight) {
              shadowRight.style.opacity = "0";
            }
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
      if (direction == "column") {
        const totalScrollHeight = element.scrollHeight - element.offsetHeight;

        if (totalScrollHeight === 0) {
          const shadowBottom: HTMLElement | null = element.querySelector(".shadow--bottom");
          if (shadowBottom) {
            shadowBottom.style.opacity = "0";
          }
        }
      } else if (direction == "row") {
        const totalScrollWidth = element.scrollWidth - element.offsetWidth;

        if (totalScrollWidth === 0) {
          const shadowRight: HTMLElement | null = element.querySelector(".shadow--right");
          if (shadowRight) {
            shadowRight.style.opacity = "0";
          }
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
