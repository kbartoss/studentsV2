import EditIcon from '../../icons/IconBoxIcons/EditIcon'
import TrashIcon from '../../icons/IconBoxIcons/TrashIcon'
import { StyledIconBox } from './IconBox.styles'

const IconBox = ({ editStudent, deleteStudent, rowData }: any) => {
	const handleDelete = (e: any) => {
		e.stopPropagation()
		deleteStudent(rowData)
	}
	return (
		<StyledIconBox>
			<TrashIcon handleDelete={handleDelete} />
			<EditIcon editStudent={() => editStudent(rowData)} />
		</StyledIconBox>
	)
}

export default IconBox
