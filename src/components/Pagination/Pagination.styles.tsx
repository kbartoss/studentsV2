import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledPagination = styled.div`
	display: flex;
	justify-content: space-between;

	${md} {
		display: none;
	}
`

const Dropdown = styled.div`
	display: flex;
	margin-top: 30px;
	align-items: center;

	p {
		font-weight: 400;
		font-size: 18px;
		color: #8f8f8f;
		white-space: nowrap;
	}
`
const SelectContainer = styled.div`
	width: 112px;
	margin-left: 8px;
	margin-right: 0;
`

const PaginationContainer = styled.div`
	display: flex;
	align-items: flex-end;
	margin-top: 30px;
	gap: 10px;

	button {
		height: 36px;
		padding: 6px 10px;
		background: ${({ theme }) => theme.color.whiteColor};
		border: 1px solid #818181;
		border-radius: 8px;
		cursor: pointer;
		font-size: 14px;
		color: ${({ theme }) => theme.color.blackColor};
	}

	.active {
		background: rgba(109, 125, 157, 0.2);
	}

	span {
		display: flex;
		align-items: flex-end;
		font-size: 36px;
		color: #b6b6b6;
	}
`

const SideButton = styled.button`
	padding: 6px 17px;
`

const StyledInputArrow = styled.svg`
	position: absolute;
	right: 28px;
	pointer-events: none;
`

export { StyledPagination, Dropdown, SelectContainer, PaginationContainer, StyledInputArrow, SideButton }
