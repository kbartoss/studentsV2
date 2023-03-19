import TrashIcon from '../images/trash-icon.png'
import EditIcon from '../images/edit-icon.png'
import { StyledIconBox } from '../styles/IconBox.styles'

const IconBox = ({}: any) => {
	return (
		<StyledIconBox>
			<img src={TrashIcon} alt="Trash Icon" className="student-icon trash" />
			<img src={EditIcon} alt="Edit Icon" className="student-icon edit" />
		</StyledIconBox>
	)
}

export default IconBox
