import styled from 'styled-components'

const StyledStudents = styled.div<{ isOpen: boolean }>`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 32px 48px;
	flex: 1 1 auto;
	width: 100vw;

	@media (max-width: 768px) {
		max-width: 100vw;
		overflow: scroll;
		padding: 24px 24px;
		transition: opacity 0.3s;
		opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
	}
`

export { StyledStudents }
