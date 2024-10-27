import React from "react";

import { StyledBox } from "./styled";
import { SkeletonProps } from "./types";

const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <StyledBox borderRadius="8px" backgroundColor="black5" {...props} />;
};

export default Skeleton;
