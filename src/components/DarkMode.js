import { createGlobalStyle } from 'styled-components';

const DarkMode = createGlobalStyle`
    :root {
        --bg-main: #04080F; 
        --bg-secondary: #0D1320; 
        --bg-tertiary: #507DBC;
        --bg-tertiary-rgb: 80, 125, 188;  
        --font-primary: #DAE3E5;  
        --font-secondary: #A1C6EA; 
        --font-tertiary: #BBD1EA; 
        --border-font-tertiary-rgb: 187,209,234;
        --outline-important: #D72638; 
        --outline-focus: rgb(0,102,255);
        --hr-break: rgb(187,209,234);
        --btn-theme-hover: #FF9F1C; 
        --stroke-primary: #034078; 
        --stroke-secondary: #1282a2; 
        --scroll-thumb: #263758;
    }

    body{
        background: rgb(4,8,15);
        background: linear-gradient(129deg, rgba(4,8,15,1) 0%, rgba(8,13,22,1) 50%, rgba(13,19,32,1) 80%, rgba(4,8,15,1) 100%);
    }

    .loading-screen{
        background: var(--bg-secondary);
    }
`;
 
export default DarkMode;

/* rich-black */
/* black-blue */
/* glacuous */
/* glacuous rgb */
/* platinum */
/* powder-blue */
/* columbia-blue */
/* columbia-blue code */
/* crimson */
/* blue */
/* gray */
/* orange */
/* indigo-dye */
/* cerulean */
    