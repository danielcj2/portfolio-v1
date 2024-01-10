import Framer from "./Framer";

const Icon = ({svgPath, styleTrue, iconName}) => {
    return (
      <>
        <Framer colorTrue={styleTrue}>{svgPath}</Framer>
        <label className="skill-text row justify-content-center">{iconName}</label>
      </>
      
  )
}

export default Icon
