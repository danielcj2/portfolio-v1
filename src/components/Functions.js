export function scrollWidthOffset(el){ 
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    var yOffset = -150; 

    if(el.id === "contact"){
        yOffset = -440;
    }

    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}