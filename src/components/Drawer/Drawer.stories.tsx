import Button from "@components/Button";
import Flex from "@components/Flex";
import Text from "@components/Text";
import useDisclosure from "@hooks/useDisclosure";
import { Meta } from "@storybook/react";
import React from "react";

import Drawer from ".";

export default {
  title: "Components/Drawer",
  component: Drawer,
} as Meta;

export const DrawerAll: React.FC = () => {
  const defaultDrawer = useDisclosure({ open: false });

  return (
    <Flex
      flexDirection="column"
      gap="1rem"
      style={{
        fontFamily: "sans-serif",
      }}
    >
      {/* Default Drawer - Max Height */}
      <Drawer
        height="max-content"
        gap="1.25rem"
        isVisible={defaultDrawer.isOpen}
        onClose={defaultDrawer.onClose}
      >
        <Text textAlign="center" variant="large" weight="semi-bold">
          Confirmation
        </Text>
        <Text textAlign="center" color="black300" variant="small">
          Are you sure want to delete this?
        </Text>

        <Flex gap=".75rem">
          <Button
            isBlock
            variant="primary"
            size="small"
            shape="semi-round"
            onClick={defaultDrawer.onClose}
          >
            Oke
          </Button>
          <Button
            isBlock
            variant="secondary"
            size="small"
            shape="semi-round"
            onClick={defaultDrawer.onClose}
          >
            Cancel
          </Button>
        </Flex>
      </Drawer>
      <Button size="small" shape="semi-round" onClick={defaultDrawer.onOpen}>
        Default Drawer
      </Button>

      {/* Drawer Custom Height */}
      <Drawer
        height="60%"
        gap="1.25rem"
        isVisible={defaultDrawer.isOpen}
        onClose={defaultDrawer.onClose}
      >
        <Text textAlign="center" variant="large" weight="semi-bold">
          Confirmation
        </Text>
        <Text textAlign="center" color="black300" variant="small">
          Are you sure want to delete this?
        </Text>

        <Flex gap=".75rem">
          <Button
            isBlock
            variant="primary"
            size="small"
            shape="semi-round"
            onClick={defaultDrawer.onClose}
          >
            Oke
          </Button>
          <Button
            isBlock
            variant="secondary"
            size="small"
            shape="semi-round"
            onClick={defaultDrawer.onClose}
          >
            Cancel
          </Button>
        </Flex>
      </Drawer>
      <Button size="small" shape="semi-round" onClick={defaultDrawer.onOpen}>
        Custom Height Drawer
      </Button>

      <Drawer
        isFullHeight
        gap="1.25rem"
        isVisible={defaultDrawer.isOpen}
        onClose={defaultDrawer.onClose}
      >
        <Text textAlign="center" variant="large" weight="semi-bold">
          Confirmation
        </Text>
        <Text textAlign="center" color="black300" variant="small">
          Are you sure want to delete this?
        </Text>

        <Flex gap=".75rem">
          <Button
            isBlock
            variant="primary"
            size="small"
            shape="semi-round"
            onClick={defaultDrawer.onClose}
          >
            Oke
          </Button>
          <Button
            isBlock
            variant="secondary"
            size="small"
            shape="semi-round"
            onClick={defaultDrawer.onClose}
          >
            Cancel
          </Button>
        </Flex>
      </Drawer>
      <Button size="small" shape="semi-round" onClick={defaultDrawer.onOpen}>
        Full Height Drawer
      </Button>
    </Flex>
  );
};
