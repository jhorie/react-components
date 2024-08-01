import type { Meta, StoryObj } from "@storybook/react";

import { LoadingScreen } from "./LoadingScreen";
import { useIsLoading } from "~/LoadingScreen/useIsLoading.mock";

const meta = {
  component: LoadingScreen,
} satisfies Meta<typeof LoadingScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isFullScreen: true },
  async beforeEach() {
    // 👇 Set the return value for the getUserFromSession function
    useIsLoading.mockImplementation(() => true);
  },
};
