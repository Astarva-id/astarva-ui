import React from "react";

import { SkeletonProps } from "./Skeleton.types";
import { StyledBox } from "./styled";

const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <StyledBox borderRadius="8px" backgroundColor="black5" {...props} />;
};

export default Skeleton;
