import { createGlobalStyle } from 'styled-components';

const LightMode = createGlobalStyle`
    :root {
        --bg-main: #E7ECEF; /**/
        --bg-secondary: #EBF5F4; /**/
        --bg-tertiary: #266DD3;
        --bg-tertiary-rgb: 38, 109, 211;  
        --font-primary: #000000;  
        --font-secondary: #0E131F; 
        --font-tertiary: #4C5760; 
        --border-font-tertiary-rgb: 76, 87, 96;
        --outline-important: #D72638; 
        --outline-focus: rgb(0,102,255);
        --hr-break: #000000;
        --btn-theme-hover: #7F96FF; 
        --stroke-primary: #5C80BC; 
        --stroke-secondary: #FF3A20; 
        --scroll-thumb: #070600;
    }

    body{
        background: rgb(231,236,239);
        background-image: linear-gradient(to right bottom, #fffffc, #fefffc, #fdfffc, #fbfffc, #fafffd, #f9fefc, #f7fefc, #f6fdfb, #f3fbf9, #f0f9f7, #eef7f6, #ebf5f4);
    }
`;
 
export default LightMode;
    