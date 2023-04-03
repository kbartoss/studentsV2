import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledAddEditStudent = styled.div`
	padding: 32px 48px;
	flex: 1 1 auto;
	height: 100vh;
	display: flex;
	flex-direction: column;

	h1 {
		margin-bottom: 32px;
	}

	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		display: none;
	}

	${md} {
		padding: 24px 25px;
		height: 100vh;
		overflow: scroll;

		h1 {
			font-size: 24px;
			font-weight: 500;
			margin-bottom: 24px;
		}
	}
`

const ErrorText = styled.p`
	display: block;
	text-align: left;
	font-size: 16px;
	margin-top: -24px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.color.errorText};

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
		background: ${({ theme }) => theme.color.confirmBtnBgHover};
	}
`

const BackBtn = styled.button`
	color: ${({ theme }) => theme.color.blackColor};
	background-color: ${({ theme }) => theme.color.secondaryColor};
	border: 1.5px solid #a0a0a0;
	border-radius: 12px;
	margin-right: 24px;

	&:hover {
		background: ${({ theme }) => theme.color.backBtnBgHover};
	}

	${md} {
		margin-bottom: 16px;
	}
`

const FormWrapper = styled.div`
	height: 100%;
	overflow-y: auto;
	max-height: calc(100% - 120px);

	${md} {
		height: 100%;
		overflow-y: auto;
		max-height: calc(100% - 120px);
	}
`

export { StyledAddEditStudent, ErrorText, AddEditPageBtns, BackBtn, ConfirmBtn, FormWrapper }
