import {
	CancelBtn,
	DeleteBtn,
	DeleteModalBtns,
	DeleteModalInfo,
	DeleteModalQuestion,
	DeleteModalStudentInfo,
	StyledDeleteModal,
} from './DeleteModal.styles'
import { DeleteModalProps } from './DeleteModal.types'

const DeleteModal = ({ cancelDelete, confirmDelete, selectedStudent }: DeleteModalProps) => {
	return (
		<StyledDeleteModal>
			<DeleteModalQuestion>Na pewno chcesz usunąć tego ucznia z listy?</DeleteModalQuestion>
			<DeleteModalInfo>Ta operacja bezpowrotnie skasuje danego ucznia z bazy danych.</DeleteModalInfo>
			<DeleteModalStudentInfo>
				{selectedStudent?.name} {selectedStudent?.surname}
			</DeleteModalStudentInfo>
			<DeleteModalBtns>
				<CancelBtn onClick={cancelDelete}>Anuluj</CancelBtn>
				<DeleteBtn onClick={confirmDelete}>Usuń</DeleteBtn>
			</DeleteModalBtns>
		</StyledDeleteModal>
	)
}

export default DeleteModal
