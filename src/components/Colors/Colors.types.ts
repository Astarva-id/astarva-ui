import { CSSProperties } from "react";

import colors from "./index";

export type colorIndex = keyof typeof colors | CSSProperties["color"];
export type colorType = (typeof colors)[keyof typeof colors];
