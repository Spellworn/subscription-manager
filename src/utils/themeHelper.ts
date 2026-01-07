type Color = string;

export interface Palette {
  background: Color;
  text: {
    primary: Color;
    secondary: Color;
    muted: Color;
    accent: Color;
    yearlySubscriptionText: Color;
  };
  overlay: Color;
  modalBackground: Color;
  button: {
    addButton: Color;
    addButtonHover: Color;
    cancelButton: Color;
    cancelButtonHover: Color;
  };
  inputBorder: Color;
  inputBackground: Color;
  container: Color;
  treemapBackground: Color;
}

const setColorPalette = (isDark: boolean) => {
  if (isDark) {
    return {
      background: "#0A0A0E",
      text: {
        primary: "#ffffff",
        secondary: "#A1A1AA",
        muted: "#98989f",
        accent: "#FFFFFF",
        yearlySubscriptionText: "#6466F1",
      },
      overlay: "rgba(12, 12, 18, 0.28)",
      modalBackground: "#15151F",
      button: {
        addButton: "#6466F1",
        addButtonHover: "#5658E3",
        cancelButton: "#1A1A28",
        cancelButtonHover: "#27272A",
      },
      inputBorder: "#DADADC",
      inputBackground: "#0A0A0E",
      container: "#ededed",
      treemapBackground: "#15151F",
    };
  }

  return {
    background: "#ffffff",
    text: {
      primary: "#0A0A0A",
      secondary: "#717182",
      muted: "#7F7F80",
      accent: "#FFFFFF",
      yearlySubscriptionText: "#6466F1",
    },
    overlay: "rgba(12, 12, 18, 0.28)",
    modalBackground: "#ffffff",
    button: {
      addButton: "#6466F1",
      addButtonHover: "#5658E3",
      cancelButton: "#EDEFF2",
      cancelButtonHover: "#E6E7EB",
    },
    inputBorder: "#DADADC",
    inputBackground: "#F3F3F5",
    container: "#ededed",
    treemapBackground: "#f4f4f4",
  };
};

export const themeHelper = { setColorPalette };
