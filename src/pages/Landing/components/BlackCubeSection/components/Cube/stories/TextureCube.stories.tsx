import type { Meta } from "@storybook/react";
import { TextureCube } from "../examples/TextureCube";

const meta = {
  title: "Cube/Examples",
  component: TextureCube,
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
} satisfies Meta<typeof TextureCube>;

export default meta;

export const CubeWithTexture = {
  args: {},
};
