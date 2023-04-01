import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledStudents = styled.div<{ isOpen: boolean }>`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 32px 48px;
	flex: 1 1 auto;
	width: 100vw;
	overflow: auto;

	${md} {
		max-width: 100vw;
		padding: 24px 24px;
		transition: opacity 0.3s;
		opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
	}
`

export { StyledStudents }
