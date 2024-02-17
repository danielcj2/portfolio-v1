import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTheme } from './ThemeContext';

export default function MagnetFramer({children, colorTrue}) {
    const darkTheme = useTheme();

    const ref = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});
    const [isHover, setHover] = useState(false)


    const handleMouse = (event) => {
        const { clientX, clientY } = event;
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        const x = clientX - (left + width/2)
        const y = clientY - (top + height/2)

        setPosition({x, y})
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;

    return (
        <motion.div
            className={isHover ? "hoverTrue" : ""}
            style={{position: "relative", color: darkTheme ? "rgba(187,209,234, 0.8)" : "rgba(24, 24, 46, 0.8)" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onHoverStart={() => setHover(!isHover)}
            animate={{x, y, color : isHover ? colorTrue : (darkTheme ? "rgba(187,209,234, 0.8)" : "rgba(24, 24, 46, 0.8)")}}
            transition={{type: "spring", stiffness: 300, damping: 15, mass: 0.1}}>
            {children}
        </motion.div>
    )
}
