import MagnetFramer from "./MagnetFramer";

const Icon = ({svgPath, styleTrue, iconName}) => {
    return (
      <>
        <MagnetFramer colorTrue={styleTrue}>{svgPath}</MagnetFramer>
        <label className="skill-text row justify-content-center">{iconName}</label>
      </>
      
  )
}

export default Icon
