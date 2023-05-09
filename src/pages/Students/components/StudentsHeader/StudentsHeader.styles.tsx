import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../../../constants/mediaQueries'

const { md, openSidebarWrap } = MEDIA_QUERIES

const StyledHeader = styled.div<{ isOpen: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h1 {
		font-size: 32px;
	}

	${openSidebarWrap} {
		flex-direction: ${({ isOpen }) => (isOpen ? 'column' : 'row')};
		align-items: ${({ isOpen }) => (isOpen ? 'flex-start' : '')};
		margin-left: ${({ isOpen }) => (isOpen ? '0' : '0')};

		h1 {
			font-size: ${({ isOpen }) => (isOpen ? '30px' : '')};
			margin-bottom: ${({ isOpen }) => (isOpen ? '24px' : '0')};
		}
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

const SearchBox = styled.div<{ isOpen: boolean }>`
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

	${openSidebarWrap} {
		margin-left: ${({ isOpen }) => (isOpen ? '0' : '')};

		input {
			width: ${({ isOpen }) => (isOpen ? '42vw' : '')};
		}
	}

	${md} {
		margin-left: 0;

		input {
			width: 70vw;
		}
	}
`

export { StyledHeader, SearchBox }
