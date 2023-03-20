import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import PrimaryButton from "./Button";

export default {
  title: "Components/Button",
  component: PrimaryButton,
  argTypes: { handleClick: { action: "handleClick" } , variant: {control: {type: 'text'}}},
} as ComponentMeta<typeof PrimaryButton>;

export const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);
Template.decorators = [
  (Story) => (
      <Story />
  ),
];
