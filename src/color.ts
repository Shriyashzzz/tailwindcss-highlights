export const defaultColors = {
  "--tw-highlight-color": "black",
};

const flattenColorPalette = (colors: Record<string, any>) => {
  return Object.assign(
    {},
    ...Object.entries(colors ?? {}).flatMap(([colorName, colorValue]) =>
      typeof colorValue === "object"
        ? Object.entries(colorValue).map(([key, val]) => ({
            [key === "DEFAULT" ? colorName : `${colorName}-${key}`]: val,
          }))
        : [{ [colorName]: colorValue }],
    ),
  );
};

export const color = (p: any) => {
  const { matchUtilities, theme } = p;

  matchUtilities(
    {
      highlight: (v) => ({ "--tw-highlight-color": `${v}` }),
    },
    { values: flattenColorPalette(theme("colors")) },
  );
};

export const colorStyles = {
  backgroundColor: "var(--tw-highlight-color)",
};
