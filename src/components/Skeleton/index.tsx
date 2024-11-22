import React from "react";

import { StyledBox } from "./Skeleton.styled";
import { SkeletonProps } from "./Skeleton.types";

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "1.5rem",
  ...props
}) => {
  return (
    <StyledBox
      borderRadius=".5rem"
      backgroundColor="black50"
      height={height}
      width={width}
      {...props}
    />
  );
};

export default Skeleton;
