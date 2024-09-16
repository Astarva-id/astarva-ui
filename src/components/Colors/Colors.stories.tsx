import { BoxProps } from "@components/Box/Box.types";
import Box from "@components/Box/index";
import Flex from "@components/Flex";
import Text from "@components/Text";
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
      flexDirection="column"
      gap="64px"
      style={{
        fontFamily: "sans-serif",
      }}
    >
      {groupColors(Object.keys(colors)).map((arrColor, index) => {
        return (
          <Flex gap="8px" key={index}>
            {arrColor.map((color, idx) => {
              return (
                <Flex flexDirection="column" gap="8px" key={idx}>
                  <Box
                    backgroundColor={color}
                    width="120px"
                    height="40px"
                    padding="16px"
                    borderRadius="12px"
                  />
                  <Flex flexDirection="column" justifyContent="center">
                    <Text variant="small">{color}</Text>
                    <Text variant="small" color="black400">
                      {colors[color]}
                    </Text>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        );
      })}
    </Flex>
  );
};
