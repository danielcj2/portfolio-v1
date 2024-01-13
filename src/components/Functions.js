export function scrollWidthOffset(el){ 
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -150; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 

}