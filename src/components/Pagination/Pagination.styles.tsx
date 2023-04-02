import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledPagination = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;

	${md} {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		margin-bottom: 20px;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
`

const Dropdown = styled.div`
	display: flex;
	margin-top: 30px;
	align-items: center;
	height: 10px;

	p {
		font-weight: 400;
		font-size: 18px;
		color: ${({ theme }) => theme.color.dropdownP};
		white-space: nowrap;
	}

	${md} {
		margin-right: 10px;
		p {
			font-size: 16px;
		}
	}
`
const SelectContainer = styled.div`
	width: 112px;
	margin-left: 8px;
	margin-right: 0;

	${md} {
		width: 86px;
		margin-right: 8px;

		& > * {
			height: 40px;
		}
	}
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
		border: 1px solid ${({ theme }) => theme.color.inputBorder};
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
		color: ${({ theme }) => theme.color.paginationSpan};
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
