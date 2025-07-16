import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@mui/material";
import { CubePOC } from "../index";
import { useState } from "react";
import { useCubeStyles } from "../styles";

const meta = {
  title: "Cube/POC",
  component: CubePOC,
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
  argTypes: {
    setClickedCategory: {
      control: false,
    },
    setHoveredSide: {
      control: false,
    },
  },
} satisfies Meta<typeof CubePOC>;

export default meta;

export type Story = StoryObj<typeof CubePOC>;

export const CubePOCExample: Story = {
  name: "Cube",
  render: () => {
    const [hoveredSide, setHoveredSide] = useState<string | null>(null);
    const [clickedCategory, setClickedCategory] = useState<string | null>(null);
    const { classes } = useCubeStyles();

    return (
      <div className={classes.root}>
        <div className={classes.card}>
          <Typography variant="h5">
            <b>Hovered side: </b>
            {hoveredSide ? hoveredSide : "none"}
          </Typography>
          <Typography variant="h5">
            <b>Clicked category: </b>
            {clickedCategory ? clickedCategory : "none"}
          </Typography>
        </div>
        <CubePOC
          setHoveredSide={setHoveredSide}
          setClickedCategory={setClickedCategory}
        />
      </div>
    );
  },
};
