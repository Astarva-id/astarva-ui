import { Meta } from "@storybook/react/*";
import React from "react";

import Flex from "../Flex";
import Text from "../Text";
import { DividerProps } from "./Divider.types";
import Divider from "./index";

const meta: Meta<DividerProps> = {
  title: "Components/Divider",
  component: Divider,
} as Meta<DividerProps>;

export default meta;

export const AllDivider = () => (
  <Flex flexDirection="column" rowGap="16px" fontFamily="sans-serif">
    <Flex flex={1} flexDirection="column" rowGap="10px">
      <Text variant="heading2" weight="bold">
        Horizontal Divider
      </Text>
      <Divider />
      <Text variant="small">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Divider />

      <Text variant="small">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </Flex>
    <Flex flex={1} flexDirection="column" rowGap="10px">
      <Text variant="heading2" weight="bold">
        Vertical Divider
      </Text>
      <Flex flexDirection="row">
        <Divider orientation="vertical" marginX="10px" />
        <Text variant="small" color="black500">
          Link
        </Text>
        <Divider orientation="vertical" marginX="10px" />
        <Text variant="small" color="black500">
          Link
        </Text>
      </Flex>
    </Flex>
    <Flex flex={1} flexDirection="column" rowGap="10px">
      <Text variant="heading2" weight="bold">
        Divider with Text
      </Text>
      <Text variant="medium" weight="bold">
        Left Text
      </Text>
      <Divider align="left">Ini divider dengan text sebelah kiri</Divider>
      <Text variant="small">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Text variant="medium" weight="bold">
        Center Text
      </Text>
      <Divider align="center">Ini divider dengan text sebelah tengah</Divider>
      <Text variant="small">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Text variant="medium" weight="bold">
        Right Text
      </Text>
      <Divider align="right">Ini divider dengan text sebelah kanan</Divider>
      <Text variant="small">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </Flex>
  </Flex>
);
