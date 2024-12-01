export const datePicker = {
  rangeOfYears(startYear: number, endYear = new Date().getFullYear()) {
    if (startYear > endYear) {
      throw new Error("Start year must be less than or equal to end year.");
    }

    const years: number[] = [];
    for (let year = endYear; year >= startYear; year--) {
      years.push(year);
    }
    return years;
  },
};
