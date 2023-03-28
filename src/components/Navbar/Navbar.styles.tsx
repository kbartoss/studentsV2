import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const Nav = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 82px;
	background-color: ${({ theme }) => theme.color.primaryColor};
	overflow: hidden;

	${md} {
		justify-content: flex-end;
		width: 100vw;
	}
`

const HamburgerDiv = styled.div`
	margin-left: 32px;

	${md} {
		margin-right: 32px;
	}
`

export { Nav, HamburgerDiv }
