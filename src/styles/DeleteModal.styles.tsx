import styled from 'styled-components'

const StyledDeleteModal = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 24px 32px;
	width: 548px;
	height: 290px;
	border-radius: 24px;
	background-color: #f9fbff;
	z-index: 11;

	.question {
		font-size: 24px;
		font-weight: 500;
		color: #000;
		margin-bottom: 12px;
	}

	.info {
		font-size: 18px;
		color: #000;
	}

	.student {
		margin-top: 25px;
		font-weight: 500;
		font-size: 24px;
		color: #000;
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
			background: #f9fbff;
			border: 2px solid #3d5584;
			border-radius: 12px;

			&:hover {
				background: #ecf3ff;
				border: 2px solid #3d5584;
			}
		}

		&__delete {
			color: #fff;
			background-color: #ea3636;
			border: none;

			&:hover {
				background: #f56767;
			}
		}
	}
`

export { StyledDeleteModal }
