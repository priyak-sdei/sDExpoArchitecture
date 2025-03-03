// theme/types.ts
export type Theme = {
  name: "light" | "dark";
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
    cardBackground: string;
    error?: string;
    // Add more colors as needed
  };
};
