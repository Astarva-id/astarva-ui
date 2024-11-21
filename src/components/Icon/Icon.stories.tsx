import Flex from "@components/Flex";
import Icon from "@components/Icon";
import Text from "@components/Text";
import { Meta } from "@storybook/react";
import React from "react";

import { IconProps } from "./Icon.types";
import iconSet from "./selection.json";

const meta: Meta<IconProps> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
} as Meta<IconProps>;

export default meta;

export const AllIcon: React.FC = () => {
  const groupIcons = () => {
    const groups = { circle: [], outline: [] };

    iconSet.icons
      .map((icon) => icon.properties.name)
      .forEach((icon) => {
        if (icon.includes("solid")) {
          groups.circle.push(icon);
        } else if (icon.includes("outline")) {
          groups.outline.push(icon);
        }
      });

    return groups;
  };

  return (
    <Flex
      flexDirection="column"
      gap="120px"
      style={{
        fontFamily: "sans-serif",
      }}
    >
      {/* Circle */}
      <Flex flexDirection="column" gap="24px">
        <Text>Circle Icon</Text>
        <Flex gap="24px" maxWidth="80%" flexWrap="wrap">
          {groupIcons().circle.map((icon, index) => {
            return (
              <Flex
                width="100px"
                flexWrap="wrap"
                flexDirection="column"
                alignItems="center"
                gap="8px"
                textAlign="center"
                key={index}
              >
                <Icon name={icon} />
                <Text variant="extra-small">{icon}</Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
      <Flex flexDirection="column" gap="24px">
        <Text>Outline Icon</Text>
        <Flex gap="24px" maxWidth="80%" flexWrap="wrap">
          {groupIcons().outline.map((icon, index) => {
            return (
              <Flex
                width="100px"
                flexWrap="wrap"
                flexDirection="column"
                alignItems="center"
                gap="8px"
                textAlign="center"
                key={index}
              >
                <Icon name={icon} />
                <Text variant="extra-small">{icon}</Text>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
