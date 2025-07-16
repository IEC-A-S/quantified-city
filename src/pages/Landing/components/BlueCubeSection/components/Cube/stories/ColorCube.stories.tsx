import type { Meta } from "@storybook/react";
import { ColorCube } from "../examples/ColorCube";

const meta = {
  title: "Cube/Examples",
  component: ColorCube,
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
} satisfies Meta<typeof ColorCube>;

export default meta;

export const CubeWithColor = {
  args: {},
};
