import Flex from "@components/Flex";
import { Meta } from "@storybook/react";
import React from "react";

import { ButtonProps } from "./Button.types";
import Button from "./index";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
} as Meta<ButtonProps>;

export default meta;

export const AllButton: React.FC = () => (
  <Flex
    flexDirection="column"
    gap="36px"
    width="1100px"
    style={{
      fontFamily: "sans-serif",
    }}
  >
    {/* Large */}
    <Flex flexDirection="column" gap="12px">
      <div>Size Large</div>
      <Flex flexWrap="wrap" gap="32px">
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button>Primary</Button>
          <Button disabled>Primary</Button>
          <Button shape="semi-round">Primary</Button>
          <Button shape="semi-round" disabled>
            Primary
          </Button>
          <Button shape="rounded">Primary</Button>
          <Button shape="rounded" disabled>
            Primary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button variant="secondary" shape="semi-round">
            Secondary
          </Button>
          <Button variant="secondary" shape="semi-round" disabled>
            Secondary
          </Button>
          <Button variant="secondary" shape="rounded">
            Secondary
          </Button>
          <Button variant="secondary" shape="rounded" disabled>
            Secondary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="tertiary" disabled>
            Tertiary
          </Button>
          <Button variant="tertiary" shape="semi-round">
            Tertiary
          </Button>
          <Button variant="tertiary" shape="semi-round" disabled>
            Tertiary
          </Button>
          <Button variant="tertiary" shape="rounded">
            Tertiary
          </Button>
          <Button variant="tertiary" shape="rounded" disabled>
            Tertiary
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column" gap="12px">
      <div>Size Medium</div>
      <Flex flexWrap="wrap" gap="32px">
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button size="medium">Primary</Button>
          <Button size="medium" disabled>
            Primary
          </Button>
          <Button size="medium" shape="semi-round">
            Primary
          </Button>
          <Button size="medium" shape="semi-round" disabled>
            Primary
          </Button>
          <Button size="medium" shape="rounded">
            Primary
          </Button>
          <Button size="medium" shape="rounded" disabled>
            Primary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button size="medium" variant="secondary">
            Secondary
          </Button>
          <Button size="medium" variant="secondary" disabled>
            Secondary
          </Button>
          <Button size="medium" variant="secondary" shape="semi-round">
            Secondary
          </Button>
          <Button size="medium" variant="secondary" shape="semi-round" disabled>
            Secondary
          </Button>
          <Button size="medium" variant="secondary" shape="rounded">
            Secondary
          </Button>
          <Button size="medium" variant="secondary" shape="rounded" disabled>
            Secondary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button size="medium" variant="tertiary">
            Tertiary
          </Button>
          <Button size="medium" variant="tertiary" disabled>
            Tertiary
          </Button>
          <Button size="medium" variant="tertiary" shape="semi-round">
            Tertiary
          </Button>
          <Button size="medium" variant="tertiary" shape="semi-round" disabled>
            Tertiary
          </Button>
          <Button size="medium" variant="tertiary" shape="rounded">
            Tertiary
          </Button>
          <Button size="medium" variant="tertiary" shape="rounded" disabled>
            Tertiary
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column" gap="12px">
      <div>Size Small</div>
      <Flex flexWrap="wrap" gap="32px">
        <Flex flexWrap="wrap" gap="16px" width="260px">
          <Button size="small">Primary</Button>
          <Button size="small" disabled>
            Primary
          </Button>
          <Button size="small" shape="semi-round">
            Primary
          </Button>
          <Button size="small" shape="semi-round" disabled>
            Primary
          </Button>
          <Button size="small" shape="rounded">
            Primary
          </Button>
          <Button size="small" shape="rounded" disabled>
            Primary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="260px">
          <Button size="small" variant="secondary">
            Secondary
          </Button>
          <Button size="small" variant="secondary" disabled>
            Secondary
          </Button>
          <Button size="small" variant="secondary" shape="semi-round">
            Secondary
          </Button>
          <Button size="small" variant="secondary" shape="semi-round" disabled>
            Secondary
          </Button>
          <Button size="small" variant="secondary" shape="rounded">
            Secondary
          </Button>
          <Button size="small" variant="secondary" shape="rounded" disabled>
            Secondary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="260px">
          <Button size="small" variant="tertiary">
            Tertiary
          </Button>
          <Button size="small" variant="tertiary" disabled>
            Tertiary
          </Button>
          <Button size="small" variant="tertiary" shape="semi-round">
            Tertiary
          </Button>
          <Button size="small" variant="tertiary" shape="semi-round" disabled>
            Tertiary
          </Button>
          <Button size="small" variant="tertiary" shape="rounded">
            Tertiary
          </Button>
          <Button size="small" variant="tertiary" shape="rounded" disabled>
            Tertiary
          </Button>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);

export const AllButtonCustomColor: React.FC = () => (
  <Flex
    flexDirection="column"
    gap="36px"
    width="1100px"
    style={{
      fontFamily: "sans-serif",
    }}
  >
    {/* Large */}
    <Flex flexDirection="column" gap="12px">
      <div>Size Large</div>
      <Flex flexWrap="wrap" gap="32px">
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button backgroundColor="green500" backgroundColorHover="green700">
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            disabled
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            shape="semi-round"
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            shape="semi-round"
            disabled
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            shape="rounded"
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            shape="rounded"
            disabled
          >
            Primary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            variant="secondary"
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            variant="secondary"
            disabled
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            variant="secondary"
            shape="semi-round"
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            variant="secondary"
            shape="semi-round"
            disabled
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            variant="secondary"
            shape="rounded"
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            variant="secondary"
            shape="rounded"
            disabled
          >
            Secondary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button backgroundColor="green500" variant="tertiary">
            Tertiary
          </Button>
          <Button backgroundColor="green500" variant="tertiary" disabled>
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            variant="tertiary"
            shape="semi-round"
          >
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            variant="tertiary"
            shape="semi-round"
            disabled
          >
            Tertiary
          </Button>
          <Button backgroundColor="green500" variant="tertiary" shape="rounded">
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            variant="tertiary"
            shape="rounded"
            disabled
          >
            Tertiary
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column" gap="12px">
      <div>Size Medium</div>
      <Flex flexWrap="wrap" gap="32px">
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="medium"
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="medium"
            disabled
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="medium"
            shape="semi-round"
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="medium"
            shape="semi-round"
            disabled
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="medium"
            shape="rounded"
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="medium"
            shape="rounded"
            disabled
          >
            Primary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="medium"
            variant="secondary"
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="medium"
            variant="secondary"
            disabled
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="medium"
            variant="secondary"
            shape="semi-round"
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="medium"
            variant="secondary"
            shape="semi-round"
            disabled
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="medium"
            variant="secondary"
            shape="rounded"
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="medium"
            variant="secondary"
            shape="rounded"
            disabled
          >
            Secondary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="300px">
          <Button backgroundColor="green500" size="medium" variant="tertiary">
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            size="medium"
            variant="tertiary"
            disabled
          >
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            size="medium"
            variant="tertiary"
            shape="semi-round"
          >
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            size="medium"
            variant="tertiary"
            shape="semi-round"
            disabled
          >
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            size="medium"
            variant="tertiary"
            shape="rounded"
          >
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            size="medium"
            variant="tertiary"
            shape="rounded"
            disabled
          >
            Tertiary
          </Button>
        </Flex>
      </Flex>
    </Flex>

    <Flex flexDirection="column" gap="12px">
      <div>Size Small</div>
      <Flex flexWrap="wrap" gap="32px">
        <Flex flexWrap="wrap" gap="16px" width="260px">
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="small"
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="small"
            disabled
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="small"
            shape="semi-round"
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="small"
            shape="semi-round"
            disabled
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="small"
            shape="rounded"
          >
            Primary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green700"
            size="small"
            shape="rounded"
            disabled
          >
            Primary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="260px">
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="small"
            variant="secondary"
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="small"
            variant="secondary"
            disabled
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="small"
            variant="secondary"
            shape="semi-round"
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="small"
            variant="secondary"
            shape="semi-round"
            disabled
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="small"
            variant="secondary"
            shape="rounded"
          >
            Secondary
          </Button>
          <Button
            backgroundColor="green500"
            backgroundColorHover="green100"
            size="small"
            variant="secondary"
            shape="rounded"
            disabled
          >
            Secondary
          </Button>
        </Flex>
        <Flex flexWrap="wrap" gap="16px" width="260px">
          <Button backgroundColor="green500" size="small" variant="tertiary">
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            size="small"
            variant="tertiary"
            disabled
          >
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            size="small"
            variant="tertiary"
            shape="semi-round"
          >
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            size="small"
            variant="tertiary"
            shape="semi-round"
            disabled
          >
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            size="small"
            variant="tertiary"
            shape="rounded"
          >
            Tertiary
          </Button>
          <Button
            backgroundColor="green500"
            size="small"
            variant="tertiary"
            shape="rounded"
            disabled
          >
            Tertiary
          </Button>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
);
