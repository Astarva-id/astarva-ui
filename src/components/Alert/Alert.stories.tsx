import Flex from "@components/Flex";
import useDisclosure from "@hooks/useDisclosure";
import { Meta } from "@storybook/react";
import React from "react";

import Alert from ".";
import { AlertProps } from "./Alert.types";

const meta: Meta<AlertProps> = {
  title: "Components/Alert",
  component: Alert,
} as Meta<AlertProps>;

export default meta;

export const AllAlert: React.FC = () => {
  const successDisclosure = useDisclosure({ open: true });
  const warningDisclosure = useDisclosure({ open: true });
  const errorDisclosure = useDisclosure({ open: true });

  return (
    <Flex
      flexDirection="column"
      gap="2rem"
      style={{
        fontFamily: "sans-serif",
      }}
    >
      <Flex flexDirection="column" gap=".75rem">
        <Alert variant="error" message="Hello World!" />
        <Alert variant="success" message="Hello World!" />
        <Alert variant="warning" message="Hello World!" />
      </Flex>

      <Flex flexDirection="column" gap=".75rem">
        {successDisclosure.isOpen && (
          <Alert
            variant="success"
            message="Hello World!"
            onClose={successDisclosure.onClose}
          />
        )}
        {warningDisclosure.isOpen && (
          <Alert
            variant="warning"
            message="Hello World!"
            onClose={warningDisclosure.onClose}
          />
        )}
        {errorDisclosure.isOpen && (
          <Alert
            variant="error"
            message="Hello World!"
            onClose={errorDisclosure.onClose}
          />
        )}
      </Flex>
    </Flex>
  );
};
