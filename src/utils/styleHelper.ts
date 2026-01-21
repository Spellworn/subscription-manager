const remToPx = (rem: number) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

const getRandomHexColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")
  );
};

export const getFontSizeByWidthAndRem = (width: number, baseRem: number) => {
  const minRem = baseRem * 0.75;
  const maxRem = baseRem * 1.1;

  const scaledPx = width * 0.04;

  return Math.max(remToPx(minRem), Math.min(scaledPx, remToPx(maxRem)));
};

export const fitFontSizeToWidth = (
  text: string | undefined,
  width: number,
  baseRem: number,
) => {
  if (!text) return remToPx(baseRem);
  const minRem = 0;
  const basePx = remToPx(baseRem);
  const minPx = remToPx(minRem);
  const avgCharPx = basePx * 0.55;
  const textWidthPx = text.length * avgCharPx;

  if (textWidthPx <= width) {
    return basePx;
  }

  const scale = width / textWidthPx;

  return Math.max(minPx, basePx * scale);
};

export const styleHelper = {
  remToPx,
  getRandomHexColor,
  getFontSizeByWidthAndRem,
  fitFontSizeToWidth,
};
