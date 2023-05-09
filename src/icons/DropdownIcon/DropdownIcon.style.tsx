import styled from 'styled-components'
import { DropdownIconProps } from './DropdownIcon.types'

const StyledDropdownIcon = styled.svg<DropdownIconProps>`
	position: absolute;
	right: 14px;
	margin-top: 10px;
	margin-bottom: 10px;
	transform: ${({ selectIsOpen }) => (selectIsOpen ? 'rotate(180deg)' : 'rotate(0)')};
	transition: transform 0.2s;
`

export { StyledDropdownIcon }
