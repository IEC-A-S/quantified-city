import type { Meta } from "@storybook/react";
import { AnimatedCube } from "../examples/AnimatedCube";

const meta = {
  title: "Cube/Examples",
  component: AnimatedCube,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100% ",
          height: "100%",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    windowInnerWidth: {
      control: {
        type: "number",
      },
    },
    windowInnerHeight: {
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof AnimatedCube>;

export default meta;

export const CubeWithAnimation = {
  args: {},
};
