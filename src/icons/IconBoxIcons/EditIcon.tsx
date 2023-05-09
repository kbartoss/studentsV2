import { EditIconProps } from "./IconBoxIcons.types"
import { StyledIconBoxIcon } from './IconBoxIcons.styles'

function EditIcon({ editStudent }: EditIconProps) {
	return (
		<StyledIconBoxIcon
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 28 28"
			onClick={editStudent}>
			<path
				stroke="#444"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2.934"
				d="M16.47 5.742l3.318-3.318a1.447 1.447 0 012.046 0l3.742 3.742a1.447 1.447 0 010 2.046l-3.318 3.318M16.47 5.742L2.424 19.788c-.271.271-.424.64-.424 1.023v3.742A1.447 1.447 0 003.447 26h3.742c.384 0 .752-.153 1.023-.424L22.258 11.53M16.47 5.742l5.788 5.788"></path>
		</StyledIconBoxIcon>
	)
}

export default EditIcon
