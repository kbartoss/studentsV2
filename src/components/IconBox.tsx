import EditIcon from '../icons/EditIcon'
import TrashIcon from '../icons/TrashIcon'
import { StyledIconBox } from '../styles/IconBox.styles'

const IconBox = ({editStudent, deleteStudent}: any) => {
	return (
		<StyledIconBox>
			<TrashIcon deleteStudent={deleteStudent}/>
			<EditIcon editStudent={editStudent}/>
		</StyledIconBox>
	)
}

export default IconBox
