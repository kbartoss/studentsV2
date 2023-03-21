import styled from 'styled-components'

const StyledPagination = styled.div`
	display: flex;
	justify-content: space-between;

	.dropdown {
		display: flex;
		align-items: center;
		margin-top: 30px;

		p {
			font-weight: 400;
			font-size: 18px;
			color: #8f8f8f;
		}

		.select-container {
			display: flex;
			align-items: center;
			position: relative;

			select {
				width: 73px;
				height: 48px;
				background: ${({ theme }) => theme.color.whiteColor};
				border: 1px solid #818181;
				border-radius: 12px;
				margin-right: 16px;
				margin-left: 8px;
				padding: 12px;
				font-size: 18px;
				font-weight: 600;
				color: ${({ theme }) => theme.color.blackColor};
				appearance: none;
				-webkit-appearance: none;
				-moz-appearance: none;
			}
		}
	}

	.pagination {
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

        .side
        {
            padding: 6px 17px;
        }

        .active
        {
            background: rgba(109, 125, 157, 0.2);
        }

        span
        {
            display: flex;
            align-items: flex-end;
            font-size: 36px;
            color: #B6B6B6;
        }
	}

	@media (max-width: 768px) {
		
	}
`

const StyledInputArrow = styled.svg`
	position: absolute;
	right: 28px;
	pointer-events: none;
`

export { StyledPagination, StyledInputArrow }
