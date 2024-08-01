import type { Meta, StoryObj } from "@storybook/react";

import { BlockingUserInput } from "./BlockingUserInput";
import { useIsUserInputBlocked } from "~/BlockUserInput/useIsUserInputBlocked.mock";

const meta = {
  component: BlockingUserInput,
} satisfies Meta<typeof BlockingUserInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isFullScreen: true },
  async beforeEach() {
    // 👇 Set the return value for the getUserFromSession function
    useIsUserInputBlocked.mockImplementation(() => true);
  },
};
