const TIME_TO_READ_RATIO_TO_ADJUST = 1.25;

export const adjustTimeToReadByRatio = (timeToRead: number) =>
  Math.floor(timeToRead * TIME_TO_READ_RATIO_TO_ADJUST);
