import styled from 'styled-components'

const StyledStart = styled.div<{ isOpen: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1 1 auto;

	@media (max-width: 768px) {
		transition: opacity 0.3s;
		opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
	}
`

const StartText = styled.h1`
	text-align: center;
	margin-top: 48px;
	font-size: 42px;
	letter-spacing: 0.015em;

	@media (max-width: 768px) {
		font-size: 36px;
		margin-top: 36px;
	}
`

export { StyledStart, StartText }
