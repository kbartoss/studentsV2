import EditIcon from '../icons/EditIcon'
import TrashIcon from '../icons/TrashIcon'
import { StyledIconBox } from '../styles/IconBox.styles'

const IconBox = ({editStudent, deleteStudent, rowData}: any) => {
	return (
		<StyledIconBox>
			<TrashIcon deleteStudent={() => deleteStudent(rowData)}/>
			<EditIcon editStudent={() => editStudent(rowData)}/>
		</StyledIconBox>
	)
}

export default IconBox
