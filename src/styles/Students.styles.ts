import styled from 'styled-components'

const StyledStudents = styled.div<{ isOpen: boolean }>`
	

	@media (max-width: 768px) {
		transition: opacity 0.3s;
		opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
	}
`

export { StyledStudents }
