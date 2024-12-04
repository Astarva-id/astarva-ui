import Flex from "@components/Flex";
import Text from "@components/Text";
import { Meta } from "@storybook/react";
import React from "react";

import { BoxProps } from "./Box.types";
import Box from "./index";

const meta: Meta<BoxProps> = {
  title: "Components/Box",
  component: Box,
} as Meta<BoxProps>;

export default meta;

export const AllBox: React.FC = () => (
  <Flex
    flexDirection="column"
    gap="1rem"
    style={{
      fontFamily: "sans-serif",
    }}
  >
    <Box
      backgroundColor="red200"
      width="max-content"
      padding="1rem"
      borderRadius=".25rem"
    >
      <Text color="#db00d4">Box Component</Text>
    </Box>
    <Box
      backgroundColor="#00db2c"
      width="max-content"
      padding="1rem"
      borderRadius=".25rem"
    >
      <Text color="white">Box Component</Text>
    </Box>
  </Flex>
);
