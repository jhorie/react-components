import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollShadows } from "~/ScrollShadows/ScrollShadow";
import { useRef } from "react";
import { Box } from "@mui/material";

const meta = {
  component: ScrollShadows,
  args: undefined,
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollShadows>;

export default meta;

type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Default: Story = {
  decorators: [
    (Story) => {
      const ref = useRef<HTMLDivElement>(null);
      const elements: number[] = [];
      for (let i = 1; i < 100; i++) {
        elements.push(i);
      }
      return (
        <Box ref={ref} style={{ height: 500, margin: "3em", border: "1px solid black", overflowY: "auto" }}>
          <Story
            args={{
              containerRef: ref,
              children: (
                <>
                  {elements.map((element) => (
                    <div>{element}</div>
                  ))}
                </>
              ),
            }}
          />
        </Box>
      );
    },
  ],
};

// @ts-ignore
export const Row: Story = {
  decorators: [
    (Story) => {
      const ref = useRef<HTMLDivElement>(null);
      const elements: number[] = [];
      for (let i = 1; i < 100; i++) {
        elements.push(i);
      }
      return (
        <Box
          ref={ref}
          style={{
            width: 500,
            margin: "3em",
            border: "1px solid black",
            display: "flex",
            overflowX: "auto",
            alignItems: "stretch",
              height:100,
          }}
        >
          <Story
            args={{
              direction: "row",
              containerRef: ref,
              children: (
                <>
                  {elements.map((element) => (
                    <div style={{ height: 100 }}>{element}</div>
                  ))}
                </>
              ),
            }}
          />
        </Box>
      );
    },
  ],
};
