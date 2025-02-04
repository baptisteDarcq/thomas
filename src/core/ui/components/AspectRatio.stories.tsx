import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { AspectRatio } from "./AspectRatio";
import { Text } from "./Text";

const meta = {
  title: "AspectRatio",
  component: AspectRatio,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    ratio: 16 / 9,
    className: "w-200",
    children: (
      <View className="bg-primary dark:bg-primary-dark h-full w-full rounded-lg justify-center items-center">
        <Text
          variant="title"
          className="text-foreground dark:text-foreground-dark"
        >
          16:9
        </Text>
      </View>
    ),
  },
};
