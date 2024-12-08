import colors from "@components/Colors";
import Flex from "@components/Flex";
import Icon from "@components/Icon";
import Text from "@components/Text";
import { useDisclosureProps } from "@hooks/useDisclosure";
import { Meta } from "@storybook/react";
import React from "react";

import Disclosure from ".";

const meta: Meta = {
  title: "Components/Disclosure",
  component: Disclosure,
} as Meta;

export default meta;

export const AllDisclosure: React.FC = () => (
  <Flex
    flexDirection="column"
    gap="1rem"
    style={{
      fontFamily: "sans-serif",
    }}
  >
    <Disclosure defaultOpen={false}>
      {({ isOpen, onToggle }: useDisclosureProps) => (
        <Flex
          flexDirection="column"
          border={`.0625rem solid ${colors.black200}`}
          padding=".75rem"
          width="60%"
          borderRadius=".375rem"
          cursor="pointer"
        >
          <Flex
            flex={1}
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            onClick={onToggle}
          >
            <Text>Hello World</Text>
            <Icon name="Down-outline" />
          </Flex>

          {isOpen && (
            <Flex paddingTop="1.5rem">
              <Text>Has Been OPEN</Text>
            </Flex>
          )}
        </Flex>
      )}
    </Disclosure>
  </Flex>
);
