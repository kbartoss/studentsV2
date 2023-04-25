import { StyledDropdownIcon } from './DropdownIcon.style'
import { DropdownIconProps } from '../../theme/types'

function DropdownIcon({ selectIsOpen }: DropdownIconProps) {
	return (
		<StyledDropdownIcon
			selectIsOpen={selectIsOpen}
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="12"
			fill="none"
			viewBox="0 0 20 12">
			<path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="3.333"
				d="M18.333 1.667L10 10 1.667 1.667"></path>
		</StyledDropdownIcon>
	)
}

export default DropdownIcon
