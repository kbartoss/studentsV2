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

	.title {
		font-weight: 500;
		font-size: 20px;
		margin-bottom: 12px;
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

	.error {
		display: block;
		text-align: left;
		font-size: 16px;
		margin-top: -24px;
		margin-bottom: 20px;
		color: #ea3636;
	}

	.btns {
		display: flex;
		width: 80%;
		justify-content: space-between;
		margin-top: 32px;

		button {
			width: 454px;
			height: 60px;
			font-weight: 600;
			font-size: 20px;
			color: ${({ theme }) => theme.color.whiteColor};
			background-color: ${({ theme }) => theme.color.primaryColor};
			border: none;
			border-radius: 12px;
			cursor: pointer;
			transition: background-color 0.3s;

			&:hover {
				background: #5270ab;
			}
		}

		.back {
			color: ${({ theme }) => theme.color.blackColor};
			background-color: ${({ theme }) => theme.color.secondaryColor};
			border: 1.5px solid #a0a0a0;
			border-radius: 12px;
			margin-right: 24px;

			&:hover {
				background: #e5ebf7;
			}
		}
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

		.error {
			font-size: 12px;
			margin-top: -18px;
			margin-bottom: 10px;
		}

		.btns {
			flex-direction: column;
			width: 100%;

			button {
				width: 100%;
			}

			.back {
				margin-bottom: 16px;
			}
		}
	}
`

export { StyledAddEditStudent }
