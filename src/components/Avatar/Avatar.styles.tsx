import styled from 'styled-components'

const StyledAvatar = styled.div`
	width: 52px;
	height: 52px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	color: ${({ theme }) => theme.color.blackColor};
	font-weight: 500;
	font-size: 18px;
`

export { StyledAvatar }
