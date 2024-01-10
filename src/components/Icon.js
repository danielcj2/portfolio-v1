import { useState } from "react"

const Icon = ({svgPath, styleTrue, iconName}) => {
    const [hover, setHover] = useState(false);

    return (
    <div onMouseOver={() => setHover(!hover)} className={hover ? "" : "bg-hover-false"} style={hover ? styleTrue : {color : 'rgba(187,209,234, 0.8)'}}>
      {svgPath}
      <label className="skill-text row justify-content-center">{iconName}</label>
    </div>
  )
}

export default Icon
