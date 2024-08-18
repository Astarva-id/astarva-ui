import { BoxProps } from "@components/Box/Box.types";
import Box from "@components/Box/index";
import Flex from "@components/Flex";
import { Meta } from "@storybook/react";
import React from "react";

import colors from ".";

const meta: Meta<BoxProps> = {
  title: "Theme/Colors",
  component: Box,
} as Meta<BoxProps>;

export default meta;

export const Colors: React.FC = () => {
  const groupColors = (colors: string[]): string[][] => {
    const groupedColors: { [prefix: string]: string[] } = {};

    colors.forEach((color) => {
      const prefix = color.replace(/\d+$/, "");
      if (!groupedColors[prefix]) {
        groupedColors[prefix] = [];
      }
      groupedColors[prefix].push(color);
    });

    return Object.values(groupedColors);
  };

  return (
    <Flex
      width="800px"
      flexDirection="column"
      gap="32px"
      style={{
        fontFamily: "sans-serif",
      }}
    >
      {groupColors(Object.keys(colors)).map((arrColor, index) => {
        return (
          <Flex key={index}>
            {arrColor.map((color, idx) => {
              return (
                <Flex flexDirection="column" gap="4px" key={idx}>
                  <div style={{ color: "black", fontSize: "12px" }}>
                    {color}
                  </div>
                  <Box
                    backgroundColor={color}
                    width="60px"
                    height="60px"
                    padding="16px"
                  />
                </Flex>
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
};
