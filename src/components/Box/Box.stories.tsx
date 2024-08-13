import Flex from "@components/Flex";
import { Meta } from "@storybook/react";
import React from "react";

import Box from "./index";
import { BoxProps } from "./Box.types";

const meta: Meta<BoxProps> = {
  title: "Components/Box",
  component: Box,
} as Meta<BoxProps>;

export default meta

export const AllBox: React.FC = () => (
  <Flex
    flexDirection="column"
    gap="16px"
    style={{
      fontFamily: "sans-serif",
    }}
  >
    <Box backgroundColor="red25" width="max-content" padding="16px" borderRadius="4px">
      <div style={{ color: 'white' }}>
        Box Component
      </div>
    </Box>
  </Flex>
);
