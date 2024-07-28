import colors from "./index";

export type colorIndex = keyof typeof colors;
export type colorType = (typeof colors)[keyof typeof colors];
