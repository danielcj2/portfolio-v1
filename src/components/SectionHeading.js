import RevealFramer from "./RevealFramer";

const SectionHeading = ({head, title}) => {
  return (
    <RevealFramer>
      <div className="section-heading">{head}</div>
      <h2 className="section-title">{title}</h2>
    </RevealFramer>
  )
}

export default SectionHeading
