import { StyledOverlay } from './Overlay.styles'

const Overlay = ({ closeModal }: any) => {
	return <StyledOverlay onClick={closeModal}></StyledOverlay>
}

export default Overlay
