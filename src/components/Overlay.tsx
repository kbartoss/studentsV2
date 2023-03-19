import { StyledOverlay } from "../styles/Overlay.styles"

const Overlay = ({ closeModal }:any) => {
  return (
    <StyledOverlay onClick={closeModal}></StyledOverlay>
  )
}

export default Overlay