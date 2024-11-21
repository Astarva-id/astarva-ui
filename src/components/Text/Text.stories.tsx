import Flex from "@components/Flex";
import { Meta } from "@storybook/react";
import React from "react";

import Text from "./index";
import { TextProps } from "./Text.types";

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
} as Meta<TextProps>;

export default meta;

export const AllText: React.FC = () => (
  <Flex
    flexDirection="column"
    gap="3rem"
    style={{
      fontFamily: "sans-serif",
    }}
  >
    <Flex flexDirection="column" gap=".5rem">
      <Text variant="heading1">Variant Heading 1</Text>
      <Text variant="heading2">Variant Heading 2</Text>
      <Text variant="heading3">Variant Heading 3</Text>
      <Text variant="heading4">Variant Heading 4</Text>
      <Text variant="heading5">Variant Heading 5</Text>
      <Text variant="heading6">Variant Heading 6</Text>
      <Text variant="large">Variant Large</Text>
      <Text variant="medium">Variant Medium</Text>
      <Text variant="small">Variant Small</Text>
      <Text variant="extra-small">Variant Extra Small</Text>
    </Flex>

    <Flex flexDirection="column" gap=".5rem">
      <Text variant="medium" weight="thin">
        Variant Medium & Weight Thin
      </Text>
      <Text variant="medium" weight="extra-light">
        Variant Medium & Weight Extra Light
      </Text>
      <Text variant="medium" weight="light">
        Variant Medium & Weight Light
      </Text>
      <Text variant="medium" weight="regular">
        Variant Medium & Weight Regular
      </Text>
      <Text variant="medium" weight="medium">
        Variant Medium & Weight Medium
      </Text>
      <Text variant="medium" weight="semi-bold">
        Variant Medium & Weight Semi Bold
      </Text>
      <Text variant="medium" weight="bold">
        Variant Medium & Weight Bold
      </Text>
      <Text variant="medium" weight="extra-bold">
        Variant Medium & Weight Extra Bold
      </Text>
    </Flex>

    <Flex flexDirection="column" gap=".5rem" maxWidth="25rem">
      <Text variant="medium" weight="regular" strikeThrough>
        Text Strike Through
      </Text>
      <Text variant="medium" weight="regular" italic>
        Text Italic
      </Text>
      <Text variant="medium" weight="regular" lineClamp={1}>
        Text Lineclamp 1: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptate obcaecati modi voluptatem quaerat sunt atque repellat
        magnam, nobis quibusdam quos.
      </Text>
      <Text variant="small" weight="regular" lineClamp={2}>
        Text Lineclamp 2: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptate obcaecati modi voluptatem quaerat sunt atque repellat
        magnam, nobis quibusdam quos.
      </Text>
    </Flex>

    <Flex flexDirection="column" gap=".5rem" maxWidth="25rem">
      <Text variant="medium" weight="regular" textAlign="left">
        Text Left
      </Text>
      <Text variant="medium" weight="regular" textAlign="center">
        Text Center
      </Text>
      <Text variant="medium" weight="regular" textAlign="right">
        Text Right
      </Text>
      <Text variant="medium" weight="regular" textAlign="justify">
        Text Justify. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Modi, libero nesciunt quo eos atque pariatur magnam ex sint unde culpa
        architecto explicabo sequi corporis sapiente provident deserunt,
        repudiandae sed.
      </Text>
    </Flex>
  </Flex>
);
