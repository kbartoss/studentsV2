import styled from 'styled-components'

const StyledAddEditStudent = styled.div`
	padding: 32px 48px;
	flex: 1 1 auto;

	h1 {
		margin-bottom: 32px;
	}

	.title {
		font-weight: 500;
		font-size: 20px;
		margin-bottom: 12px;
	}

	.input {
		padding: 14px 18px;
		width: 80%;
		height: 60px;
		font-size: 18px;
		margin-bottom: 32px;
		background: ${({ theme }) => theme.color.whiteColor};
		border: 1px solid #818181;
		border-radius: 12px;
	}

	.btns {
		display: flex;
		width: 80%;
		justify-content: space-between;

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

			&:hover
			{
				background: #5270AB;
			}
		}

		.back {
			color: ${({ theme }) => theme.color.blackColor};
			background-color: ${({ theme }) => theme.color.secondaryColor};
			border: 1.5px solid #a0a0a0;
			border-radius: 12px;
			margin-right: 24px;

			&:hover
			{
				background: #E5EBF7;
			}
		}
	}
`

export { StyledAddEditStudent }
