import styled from "styled-components"
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(82, 82, 82, 0.25);
	z-index: 10;

	${md} {
		display: none;
	}
`

export { StyledOverlay }
