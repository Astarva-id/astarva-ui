import Button from "@components/Button";
import Flex from "@components/Flex";
import Text from "@components/Text";
import useDisclosure from "@hooks/useDisclosure";
import { Meta } from "@storybook/react";
import React from "react";

import Modal from ".";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

export const ModalAll: React.FC = () => {
  const defaultCenteredModal = useDisclosure({ open: false });
  const verticlCenteredModal = useDisclosure({ open: false });
  const closeableCenteredModal = useDisclosure({ open: false });
  return (
    <Flex
      flexDirection="column"
      gap="1rem"
      style={{
        fontFamily: "sans-serif",
      }}
    >
      {/* Modal - Default */}
      <Modal
        isVisible={defaultCenteredModal.isOpen}
        width="18.75rem"
        flexDirection="column"
        padding="1.25rem"
        gap="1.5rem"
        onClose={defaultCenteredModal.onClose}
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
            onClick={defaultCenteredModal.onClose}
          >
            Oke
          </Button>
          <Button
            isBlock
            variant="secondary"
            size="small"
            shape="semi-round"
            onClick={defaultCenteredModal.onClose}
          >
            Cancel
          </Button>
        </Flex>
      </Modal>
      <Button
        size="small"
        shape="semi-round"
        onClick={defaultCenteredModal.onOpen}
      >
        Modal Default
      </Button>

      {/* Modal - Vertical Center */}
      <Modal
        isVisible={verticlCenteredModal.isOpen}
        width="18.75rem"
        flexDirection="column"
        padding="1.25rem"
        gap="1.5rem"
        verticalCentered
        onClose={verticlCenteredModal.onClose}
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
            onClick={verticlCenteredModal.onClose}
          >
            Oke
          </Button>
          <Button
            isBlock
            variant="secondary"
            size="small"
            shape="semi-round"
            onClick={verticlCenteredModal.onClose}
          >
            Cancel
          </Button>
        </Flex>
      </Modal>
      <Button
        size="small"
        shape="semi-round"
        onClick={verticlCenteredModal.onOpen}
      >
        Modal Vertical Center
      </Button>

      {/* Modal - Closeable Center */}
      <Modal
        isVisible={closeableCenteredModal.isOpen}
        width="18.75rem"
        flexDirection="column"
        verticalCentered
        closable
        padding="1.25rem"
        gap="1.5rem"
        onClose={closeableCenteredModal.onClose}
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
            onClick={closeableCenteredModal.onClose}
          >
            Oke
          </Button>
          <Button
            isBlock
            variant="secondary"
            size="small"
            shape="semi-round"
            onClick={closeableCenteredModal.onClose}
          >
            Cancel
          </Button>
        </Flex>
      </Modal>
      <Button
        size="small"
        shape="semi-round"
        onClick={closeableCenteredModal.onOpen}
      >
        Modal Closeable
      </Button>
    </Flex>
  );
};
