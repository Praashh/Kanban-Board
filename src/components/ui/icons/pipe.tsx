type PipeProps = {
  css?: boolean | true
}
const Pipe = ({ css }: PipeProps) => {
  return (
    <svg width="1" height="32" className={`${css ? "hidden md:block" : ""}`} viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.1" width="1" height="32" rx="0.5" fill="black" />
    </svg>

  )
}

export default Pipe
