import styled from 'styled-components'

const Nav = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 82px;
	background-color: #3d5584;
	overflow: hidden;

	@media (max-width: 768px) {
		justify-content: flex-end;
	}
`

const HamburgerDiv = styled.div`
	margin-left: 32px;

	@media (max-width: 768px) {
		margin-right: 32px;
	}
`

export { Nav, HamburgerDiv }
