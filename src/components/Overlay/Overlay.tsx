import { OverlayProps } from '../../theme/types'
import { StyledOverlay } from './Overlay.styles'

const Overlay = ({ closeModal }: OverlayProps) => {
	return <StyledOverlay onClick={closeModal}></StyledOverlay>
}

export default Overlay
