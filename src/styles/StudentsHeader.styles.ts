import styled from 'styled-components'

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h1 {
		font-size: 32px;
	}

	.search-box {
		display: flex;
		position: relative;
		margin-left: auto;

		img {
			position: absolute;
			left: 12px;
			top: 50%;
			transform: translateY(-50%);
			width: 24px;
			height: 24px;
			cursor: pointer;
		}

		input {
			padding-left: 45px;
			width: 271px;
			height: 52px;
			margin-left: auto;
			border: 1px solid #000000;
			// filter: drop-shadow(0px 2px 40px rgba(166, 172, 237, 0.5));
			border-radius: 12px;
			font-size: 18px;
		}

		input[type='search']::-webkit-search-cancel-button {
			margin-right: 16px;
		}

		button {
			margin-left: 14px;
			width: 52px;
			height: 52px;
			background: #3d5584;
			color: #fff;
			font-size: 32px;
			border: none;
			border-radius: 12px;
			cursor: pointer;
		}
	}
`

export { StyledHeader }
