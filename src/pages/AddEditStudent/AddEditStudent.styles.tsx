import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledAddEditStudent = styled.div`
	padding: 32px 48px;
	flex: 1 1 auto;
	height: 100%; /* Add height: 100% to take up full screen height */
	overflow: scroll; /* Add overflow: scroll to enable scrolling */

	h1 {
		margin-bottom: 32px;
	}

	input {
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
	}

	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		display: none;
	}

	${md} {
		padding: 24px 25px;
		height: 100%; /* Add height: 100% to take up full screen height */
		overflow: scroll; /* Add overflow: scroll to enable scrolling */

		h1 {
			font-size: 24px;
			font-weight: 500;
			margin-bottom: 24px;
		}

		input {
			width: 100%;
			margin-bottom: 24px;
		}
	}
`

const InputTitle = styled.p`
	font-weight: 500;
	font-size: 20px;
	margin-bottom: 12px;
`

const ErrorText = styled.p`
	display: block;
	text-align: left;
	font-size: 16px;
	margin-top: -24px;
	margin-bottom: 20px;
	color: #ea3636;

	${md} {
		font-size: 12px;
		margin-top: -18px;
		margin-bottom: 10px;
	}
`

const AddEditPageBtns = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
	margin-top: 32px;

	button {
		width: 454px;
		height: 60px;
		font-weight: 600;
		font-size: 20px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	${md} {
		flex-direction: column;
		width: 100%;

		button {
			width: 100%;
		}
	}
`

const ConfirmBtn = styled.button`
	color: ${({ theme }) => theme.color.whiteColor};
	background-color: ${({ theme }) => theme.color.primaryColor};
	border: none;
	border-radius: 12px;

	&:hover {
		background: #5270ab;
	}
`

const BackBtn = styled.button`
	color: ${({ theme }) => theme.color.blackColor};
	background-color: ${({ theme }) => theme.color.secondaryColor};
	border: 1.5px solid #a0a0a0;
	border-radius: 12px;
	margin-right: 24px;

	&:hover {
		background: #e5ebf7;
	}

	${md} {
		margin-bottom: 16px;
	}
`

export { StyledAddEditStudent, InputTitle, ErrorText, AddEditPageBtns, BackBtn, ConfirmBtn }
