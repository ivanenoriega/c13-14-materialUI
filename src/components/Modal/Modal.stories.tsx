import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Modal from "./Modal";

export default {
  title: "Components/Components/Modal",
  component: Modal,
  // argTypes: { handleClick: { action: "handleClick" }, variant: { control: { type: 'text' } } },
} as ComponentMeta<typeof Modal>;

export const Basic: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} />
);
Basic.decorators = [
  (Story) => (
    <Story />
  ),
];
