import Flex from "@components/Flex";
import Text from "@components/Text";
import { Meta } from "@storybook/react";
import React from "react";

import Progress from ".";

export default {
  title: "Components/Progress",
  component: Progress.Bar,
} as Meta;

export const ProgressBar: React.FC = () => (
  <Flex
    flexDirection="column"
    gap="16px"
    style={{
      fontFamily: "sans-serif",
    }}
  >
    <Progress.Bar width="500px" percent={40} />
    <Progress.Bar color="blue400" width="500px" percent={30} />
    <Progress.Bar color="greenyellow500" width="500px" percent={80} />
  </Flex>
);

export const ProgressCircle: React.FC = () => (
  <Flex
    flexDirection="column"
    gap="16px"
    style={{
      fontFamily: "sans-serif",
    }}
  >
    <Progress.Circle
      size="42px"
      total={10}
      value={4}
      _text={{ variant: "medium" }}
    />
    <Progress.Circle
      color="red600"
      size="42px"
      total={10}
      value={4}
      _text={{ variant: "heading6" }}
    />
    <Progress.Circle color="greenyellow500" size="96px" total={10} value={4}>
      <Flex flexDirection="column" alignItems="center">
        <Text variant="small" weight="semi-bold">
          4 / 10
        </Text>
        <Text variant="micro" color="black300">
          Sisa 6 lagi
        </Text>
      </Flex>
    </Progress.Circle>
  </Flex>
);
