import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h1 {
		font-size: 32px;
	}

	${md} {
		flex-direction: column;
		align-items: flex-start;
		margin-left: 0;

		h1 {
			font-size: 24px;
			margin-bottom: 24px;
		}
	}
`

const SearchBox = styled.div`
	display: flex;
	position: relative;
	margin-left: auto;

	input {
		padding-left: 58px;
		width: 271px;
		height: 52px;
		margin-left: auto;
		border: 1px solid ${({ theme }) => theme.color.blackColor};
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
		background-color: ${({ theme }) => theme.color.primaryColor};
		color: ${({ theme }) => theme.color.whiteColor};
		font-size: 32px;
		border: none;
		border-radius: 12px;
		cursor: pointer;
	}

	${md} {
		margin-left: 0;

		input
		{
			width: 70vw;
		}
	}
`

export { StyledHeader, SearchBox }
