import { css, Global } from "@emotion/react";
import { useAppTheme } from "./theme.ts";

export const GlobalStyles = () => {
  const theme = useAppTheme();

  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,1,100..900&display=swap");

          html {
              font-size: 16px; 
          }

          @media (max-width: 1024px) {
              html {
                  font-size: 14px; 
              }
          }
          
        @media (max-width: 768px) {
          html {
              font-size: 10px; 
          }
      }
        body {
          margin: 0;
          background: ${theme.palette.background};
          padding: 0;
          font-family: "Inter", sans-serif;
            transition:
                    background-color 0.3s ease,
                    color 0.3s ease,
                    border-color 0.3s ease,
                    fill 0.3s ease,
                    stroke 0.3s ease;
        }
          * {
              transition:
                      background-color 0.3s ease,
                      color 0.3s ease,
                      border-color 0.3s ease,
                      fill 0.3s ease,
                      stroke 0.3s ease;
          }
        }
      `}
    />
  );
};
