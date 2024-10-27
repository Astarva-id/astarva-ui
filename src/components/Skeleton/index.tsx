import React from "react";

import { SkeletonProps } from "./Skeleton.types";
import { StyledBox } from "./styled";

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "24px",
  ...props
}) => {
  return (
    <StyledBox
      borderRadius="8px"
      backgroundColor="black50"
      height={height}
      width={width}
      {...props}
    />
  );
};

export default Skeleton;
