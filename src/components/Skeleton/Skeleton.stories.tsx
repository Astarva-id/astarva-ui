import { Meta } from "@storybook/react";
import React from "react";

import Flex from "../Flex";
import Text from "../Text";
import Skeleton from "./index";
import { SkeletonProps } from "./Skeleton.types";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
} as Meta<SkeletonProps>;

export const AllSkeleton = () => (
  <Flex flexDirection="column" rowGap="1rem" fontFamily="sans-serif">
    <Text variant="heading3">Default Skeleton</Text>
    <Flex width="60%" fontFamily="sans-serif" columnGap=".5rem">
      <Skeleton />
    </Flex>
  </Flex>
);
