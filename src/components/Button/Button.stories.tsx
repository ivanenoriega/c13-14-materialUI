import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import PrimaryButton from "./Button";

export default {
  title: "Components/Components/Button",
  component: PrimaryButton,
  argTypes: { handleClick: { action: "handleClick" }, variant: { description: 'Esto define el estilo del componente', control: { type: 'text' } } },
} as ComponentMeta<typeof PrimaryButton>;

export const Basic: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

Basic.decorators = [
  (Story) => (
    <Story />
  ),
];

export const VariationOutline: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} variant="outlined" />
);

export const VariationText: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} variant="text" />
);
