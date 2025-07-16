import type { Meta, StoryObj } from "@storybook/react";
import { Graph3D } from "../index";

const meta = {
  title: "Graph3D/POC",
  component: Graph3D,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100% ",
          height: "1000px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Graph3D>;

export default meta;

export type Story = StoryObj<typeof Graph3D>;

export const Graph3DExample: Story = {
  name: "Graph3D",
  render: () => {
    return <Graph3D />;
  },
};
