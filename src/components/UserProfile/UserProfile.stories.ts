import type { Meta, StoryObj } from "@storybook/react";

import { UserProfile } from "./UserProfile";

const meta = {
  title: "Components/UserProfile",
  component: UserProfile,
  tags: ["autodocs"],
  args: {
    user: {
      name: "名前",
      description: "説明",
    },
  },
} satisfies Meta<typeof UserProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
