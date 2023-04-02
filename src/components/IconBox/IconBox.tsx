import EditIcon from '../../icons/IconBoxIcons/EditIcon'
import TrashIcon from '../../icons/IconBoxIcons/TrashIcon'
import { IconBoxProps } from '../../theme/types'
import { StyledIconBox } from './IconBox.styles'

const IconBox = ({ editStudent, deleteStudent, rowData }: IconBoxProps) => {
	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		deleteStudent(rowData)
	}

	const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
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
