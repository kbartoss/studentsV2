import styled from 'styled-components'

const Nav = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 82px;
	background-color: ${({ theme }) => theme.color.primaryColor};
	overflow: hidden;

	@media (max-width: 768px) {
		justify-content: flex-end;
		width: 100vw;
	}
`

const HamburgerDiv = styled.div`
	margin-left: 32px;

	@media (max-width: 768px) {
		margin-right: 32px;
	}
`

export { Nav, HamburgerDiv }
