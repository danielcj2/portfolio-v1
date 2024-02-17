import { createGlobalStyle } from 'styled-components';

const LightMode = createGlobalStyle`
    :root {
        --bg-main: #FFFFFF; 
        --bg-secondary: #FFFFFF; 
        --bg-tertiary: #18182E;
        --bg-tertiary-rgb: 24, 24, 46;  
        --font-primary: #000000;  
        --font-secondary: #0E131F; 
        --font-tertiary: #080B13; 
        --border-font-tertiary-rgb: 24, 24, 46;
        --outline-important: #D72638; 
        --outline-focus: rgb(0,102,255);
        --hr-break: #000000;
        --btn-theme-hover: #7F96FF; 
        --stroke-primary: #FF3A20; 
        --stroke-secondary: #FF3A20; 
        --scroll-thumb: #18182E;
    }

    body{
        background: #EEF1F9;
    }
`;
 
export default LightMode;
    