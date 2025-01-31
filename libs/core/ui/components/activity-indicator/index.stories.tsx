import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "./";

const meta = {
  title: "ActivityIndicator",
  component: ActivityIndicator,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ActivityIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
