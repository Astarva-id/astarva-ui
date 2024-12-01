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
};
