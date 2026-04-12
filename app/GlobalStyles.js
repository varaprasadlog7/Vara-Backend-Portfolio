import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


      /* Styling the main scrollbar */
   ::-webkit-scrollbar {
        width: 0.42rem;
    }

/* Styling the thumb part of the scrollbar */
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #3f7bff, #2ecdf2, #f6a62f);
  border-radius: 999px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
}

::-webkit-scrollbar-track {
  background: rgba(8, 14, 24, 0.6);
}



`