import styled from 'styled-components'

const StyledSidebar = styled.div`
	background-color: #f9fbff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
	transition: all 0.3s;
	flex: 0 0 310px;

	a {
		padding: 18px 26px 18px 32px;
		height: 68px;
		gap: 12px;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 0.5px solid #cecece;
		transition: all 0.3s;
		cursor: pointer;
		text-decoration: none;
		font-weight: 500;
		font-size: 1.125rem;
		color: #000;

		svg {
			width: 24px;
			height: 24px;
		}
	}

	.active {
		background-color: #6d7d9d;
		color: #fff;
	}
`

export { StyledSidebar }
