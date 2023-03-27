import styled from 'styled-components'

const StyledSidebar = styled.div<{ isOpen: boolean }>`
	background-color: ${({ theme }) => theme.color.secondaryColor};
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
	transition: flex 0.3s;
	flex: ${({ isOpen }) => (isOpen ? '0 0 310px' : '0 0 0px')};

	a {
		padding: 18px 26px 18px 32px;
		height: 68px;
		display: flex;
		flex-direction: row;
		align-items: center;
		transition: max-width 0.3s;
		border-bottom: 0.5px solid #cecece;
		cursor: pointer;
		text-decoration: none;
		font-weight: 500;
		font-size: 1.125rem;
		color: ${({ theme }) => theme.color.blackColor};
		

		svg {
			width: 24px;
			height: 24px;
			margin-right: 12px;
		}

		span {
			transition: max-width 0.3s;
			max-width: ${({ isOpen }) => (isOpen ? '310px' : '0')};
			overflow: hidden;
		}
	}

	.active {
		background-color: #6d7d9d;
		color: ${({ theme }) => theme.color.whiteColor};
	}

	@media (max-width: 768px) {
		position: absolute;
		height: 100%;
		width: 70%;
		right: 0;
		background: ${({ theme }) => theme.color.primaryColor};
		box-shadow: none;
		transition: max-width 0.3s;
		max-width: ${({ isOpen }) => (isOpen ? '70%' : '0px')};
		overflow: hidden;
		z-index: 10;

		a {
			border: none;
			padding: 22px 40px;
		}

		span {
			color: ${({ theme }) => theme.color.whiteColor};
		}

		svg {
			path {
				stroke: ${({ theme }) => theme.color.whiteColor};
			}
		}
	}
`

export { StyledSidebar }
