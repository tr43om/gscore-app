import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
// CSS RESET
*, *::before, *::after {
    box-sizing: border-box; 
}

* {
  margin: 0;
}

html, body {
  font-family: 'Poppins', sans-serif;
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  
}

:root {
  // 🎨 COLOR VARIABLES
  --c-accent:         #FC5842; 

  --c-red-secondary:  #D1311C;
  --c-pink-secondary: #FFF0EE;

  --c-neutral-800:    #0C0C0C;
  --c-neutral-700:    #393939 ;
  --c-neutral-600:    #737373;
  --c-neutral-500:    #969696;
  --c-neutral-400:    #C7C7C7;
  --c-neutral-300:    #D7D7D7;
  --c-neutral-200:    #FBFBFB;
  --c-neutral-100:    #FFFFFF; 

  --c-system-green:   #05C168;
  --c-system-red-400: #DC2B2B;
  --c-system-red-300: #FF5A65;
  --c-system-red-200: #FFBEC2;
  --c-system-red-100: #FFEFF0;
  --c-system-orange:  #FF9E2C;
}  

`;
