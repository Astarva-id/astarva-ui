import { ProgressProps } from "./Progress.types";
import { ProgressBar } from "./ProgressBar";
import { ProgressCircle } from "./ProgressCircle";

const Progress: ProgressProps = {
  Bar: ProgressBar,
  Circle: ProgressCircle,
};

export default Progress;
