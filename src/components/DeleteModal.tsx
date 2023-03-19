import { StyledDeleteModal } from "../styles/DeleteModal.styles"

type DeleteModalProps = {
	cancelDelete: () => void
	confirmDelete: () => void
	selectedStudent: {
		name: string
		surname: string
	}
}

const DeleteModal = ({ cancelDelete, confirmDelete, selectedStudent }: DeleteModalProps) => {
	return (
		<StyledDeleteModal>
			<p className="question">Na pewno chcesz usunąć tego ucznia z listy?</p>
			<p className="info">Ta operacja bezpowrotnie skasuje danego ucznia z bazy danych.</p>
			<p className="student">
				{selectedStudent.name} {selectedStudent.surname}
			</p>
			<div className="btns">
				<button className="btns_cancel" onClick={cancelDelete}>
					Anuluj
				</button>
				<button className="btns__delete" onClick={confirmDelete}>
					Usuń
				</button>
			</div>
		</StyledDeleteModal>
	)
}

export default DeleteModal
