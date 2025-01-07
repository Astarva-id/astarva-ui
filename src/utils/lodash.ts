export const lodash = {
  range(start: number, end: number, sort = "Z-A") {
    if (start > end) {
      throw new Error("Start must be less than or equal to end.");
    }

    const numbers: number[] = [];

    if (sort === "Z-A") {
      for (let num = end; num >= start; num--) {
        numbers.push(num);
      }
    }

    if (sort === "A-Z") {
      for (let num = start; num <= end; num++) {
        numbers.push(num);
      }
    }
    return numbers;
  },

  formatTwoDigits(number: number): string {
    return number.toString().padStart(2, "0");
  },

  isObjectEqual<T extends object>(firstObject: T, secondObject: T): boolean {
    if (firstObject === secondObject) return true;

    if (
      typeof firstObject !== "object" ||
      typeof secondObject !== "object" ||
      firstObject == null ||
      secondObject == null
    ) {
      return false;
    }

    const keysFirstObject = Object.keys(firstObject) as (keyof T)[];
    const keysSecondObject = Object.keys(secondObject) as (keyof T)[];

    if (keysFirstObject.length !== keysSecondObject.length) return false;

    for (const key of keysFirstObject) {
      const value1 = firstObject[key];
      const value2 = secondObject[key];

      const areObjects =
        typeof value1 === "object" &&
        typeof value2 === "object" &&
        value1 != null &&
        value2 != null;

      if (
        !keysSecondObject.includes(key) ||
        (areObjects ? !this.isObjectEqual(value1, value2) : value1 !== value2)
      ) {
        return false;
      }
    }

    return true;
  },
};
