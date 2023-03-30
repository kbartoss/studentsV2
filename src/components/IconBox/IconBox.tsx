import EditIcon from '../../icons/IconBoxIcons/EditIcon'
import TrashIcon from '../../icons/IconBoxIcons/TrashIcon'
import { StyledIconBox } from './IconBox.styles'

const IconBox = ({ editStudent, deleteStudent, rowData }: any) => {
	const handleDelete = (e: any) => {
		e.stopPropagation()
		deleteStudent(rowData)
	}

	const handleEdit = (e: any) => {
		e.stopPropagation()
		editStudent(rowData)
	}
	return (
		<StyledIconBox>
			<TrashIcon handleDelete={handleDelete} />
			<EditIcon editStudent={handleEdit} />
		</StyledIconBox>
	)
}

export default IconBox
