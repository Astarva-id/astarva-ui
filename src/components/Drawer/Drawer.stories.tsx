import Button from "@components/Button";
import Flex from "@components/Flex";
import Modal from "@components/Modal";
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
  const customDrawer = useDisclosure({ open: false });
  const fullHeightDrawer = useDisclosure({ open: false });

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
        isVisible={customDrawer.isOpen}
        onClose={customDrawer.onClose}
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
            onClick={customDrawer.onClose}
          >
            Oke
          </Button>
          <Button
            isBlock
            variant="secondary"
            size="small"
            shape="semi-round"
            onClick={customDrawer.onClose}
          >
            Cancel
          </Button>
        </Flex>
      </Drawer>
      <Button size="small" shape="semi-round" onClick={customDrawer.onOpen}>
        Custom Height Drawer
      </Button>

      {/* Drawer Full Height */}
      <Drawer
        isFullHeight
        gap="1.25rem"
        isVisible={fullHeightDrawer.isOpen}
        onClose={fullHeightDrawer.onClose}
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
            onClick={fullHeightDrawer.onClose}
          >
            Oke
          </Button>
          <Button
            isBlock
            variant="secondary"
            size="small"
            shape="semi-round"
            onClick={fullHeightDrawer.onClose}
          >
            Cancel
          </Button>
        </Flex>
      </Drawer>
      <Button size="small" shape="semi-round" onClick={fullHeightDrawer.onOpen}>
        Full Height Drawer
      </Button>
    </Flex>
  );
};

export const NestDrawerModal: React.FC = () => {
  const drawerDisclosure = useDisclosure({ open: false });
  const modalDisclosure = useDisclosure({ open: false });

  return (
    <Flex gap="1.5rem">
      {/* Drawer Nested Modal */}
      <Drawer
        isFullHeight
        gap="1.25rem"
        isVisible={drawerDisclosure.isOpen}
        onClose={drawerDisclosure.onClose}
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
            onClick={modalDisclosure.onOpen}
          >
            Oke
          </Button>
          <Button
            isBlock
            variant="secondary"
            size="small"
            shape="semi-round"
            onClick={drawerDisclosure.onClose}
          >
            Cancel
          </Button>
        </Flex>
      </Drawer>
      <Button size="small" shape="semi-round" onClick={drawerDisclosure.onOpen}>
        Full Height Drawer
      </Button>

      {/* Modal - Vertical Center */}
      <Modal
        isVisible={modalDisclosure.isOpen}
        width="18.75rem"
        flexDirection="column"
        padding="1.25rem"
        gap="1.5rem"
        verticalCentered
        zIndex={10}
        onClose={modalDisclosure.onClose}
      >
        <Flex flex={1} justifyContent="center">
          <Text variant="large" weight="semi-bold">
            Confirmation
          </Text>
        </Flex>
        <Text textAlign="center" color="black300" variant="small">
          Are you sure want to delete this?
        </Text>

        <Flex gap=".75rem">
          <Button
            isBlock
            variant="primary"
            size="small"
            shape="semi-round"
            onClick={modalDisclosure.onClose}
          >
            Oke
          </Button>
          <Button
            isBlock
            variant="secondary"
            size="small"
            shape="semi-round"
            onClick={modalDisclosure.onClose}
          >
            Cancel
          </Button>
        </Flex>
      </Modal>
    </Flex>
  );
};
