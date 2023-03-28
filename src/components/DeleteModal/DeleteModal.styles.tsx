import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledDeleteModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	padding: 24px 32px;
	transform: translate(-50%, -50%);
	width: 548px;
	height: 290px;
	border-radius: 24px;
	background-color: ${({ theme }) => theme.color.secondaryColor};
	z-index: 11;

	.question {
		font-size: 24px;
		font-weight: 500;
		color: ${({ theme }) => theme.color.blackColor};
		margin-bottom: 12px;
	}

	.info {
		font-size: 18px;
		color: ${({ theme }) => theme.color.blackColor};
	}

	.student {
		margin-top: 25px;
		font-weight: 500;
		font-size: 24px;
		color: ${({ theme }) => theme.color.blackColor};
	}

	.btns {
		margin-top: 48px;
		display: flex;
		justify-content: space-around;

		button {
			border-radius: 12px;
			padding: 18px 85px;
			font-weight: 600;
			font-size: 18px;
			cursor: pointer;
			transition: background-color 0.3s, color 0.3s;
		}

		&__cancel {
			background-color: ${({ theme }) => theme.color.secondaryColor};
			border: 2px solid ${({ theme }) => theme.color.primaryColor};
			border-radius: 12px;

			&:hover {
				background: #ecf3ff;
				border: 2px solid ${({ theme }) => theme.color.primaryColor};
			}
		}

		&__delete {
			color: ${({ theme }) => theme.color.whiteColor};
			background-color: ${({ theme }) => theme.color.deleteButton};
			border: none;

			&:hover {
				background: ${({ theme }) => theme.color.deleteButtonHover};
			}
		}
	}

	${md} {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 0;
		padding: 68px 24px;

		.question {
			margin-bottom: 24px;
		}

		.student {
			margin-top: 58px;
		}

		.btns {
			flex-direction: column;
			justify-content: flex-end;

			&__cancel {
				margin-bottom: 16px;
			}
		}
	}
`

export { StyledDeleteModal }
