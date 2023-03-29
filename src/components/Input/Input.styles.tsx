import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledInput = styled.input`
	padding: 14px 18px;
	width: 80%;
	height: 60px;
	font-size: 18px;
	font-weight: 400;
	margin-bottom: 32px;
	color: ${({ theme }) => theme.color.blackColor};
	background: ${({ theme }) => theme.color.whiteColor};
	border: 1px solid #818181;
	border-radius: 12px;

	&:focus {
		outline: 1px solid ${({ theme }) => theme.color.blackColor};
	}

	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		display: none;
	}

	${md} {
		width: 100%;
		margin-bottom: 24px;
	}
`

const InputTitle = styled.p`
	font-weight: 500;
	font-size: 20px;
	margin-bottom: 12px;
`

export { StyledInput, InputTitle }
