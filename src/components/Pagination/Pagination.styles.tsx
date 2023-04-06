import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'
import { StyledSelect, Options, Option } from '../Select/Select.styles'
import { StyledDropdownIcon } from '../../icons/DropdownIcon/DropdownIcon.style'

const { md, lg, mdPaginationWrap } = MEDIA_QUERIES

const StyledPagination = styled.div`
	display: flex;
	justify-content: space-between;
	position: absolute;
	bottom: 80px;
	left: 0;
	right: 0;
	padding: 0 48px;
	margin-top: 20px;

	${lg} {
		bottom: 60px;
	}

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

	p {
		font-weight: 400;
		font-size: 18px;
		color: ${({ theme }) => theme.color.dropdownP};
		white-space: nowrap;
	}

	${md} {
		p {
			font-size: 16px;
		}
	}
`
const SelectContainer = styled.div`
	margin-left: 8px;
	margin-right: 16px;

	${StyledSelect} {
		width: 73px;
		height: 48px;
		font-size: 18px;

		div {
			span {
				margin-left: -6px;
			}
		}

		${StyledDropdownIcon} {
			right: 12px;

			${md} {
				right: 12px;
			}
		}

		${md} {
			div {
				span {
					margin-left: -10px;
				}
			}
		}
	}

	${Options} {
		top: auto;
		bottom: 100%;

		span {
			margin-left: -6px;
		}
	}

	${Option} {
		${md} {
			span {
				padding-left: 2px;
			}
		}
	}
`

const PaginationContainer = styled.div`
	display: flex;
	align-items: flex-end;
	padding-left: 30px;
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
		font-size: 32px;
		color: ${({ theme }) => theme.color.paginationSpan};
	}

	${md} {
		margin-top: 12px;
		padding: 0;
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
