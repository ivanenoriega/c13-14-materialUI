import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Select from "./Select";

export default {
  title: "Components/Components/Select",
  component: Select,
  argTypes: { handleClick: { action: "handleClick" }, variant: { control: { type: 'text' } } },
} as ComponentMeta<typeof Select>;

export const Basic: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);
Basic.decorators = [
  (Story) => (
    <Story />
  ),
];
