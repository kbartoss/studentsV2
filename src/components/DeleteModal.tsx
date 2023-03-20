import { StyledDeleteModal } from "../styles/DeleteModal.styles"

type DeleteModalProps = {
	cancelDelete: () => void
}

const DeleteModal = ({ cancelDelete }: DeleteModalProps) => {
	return (
		<StyledDeleteModal>
			<p className="question">Na pewno chcesz usunąć tego ucznia z listy?</p>
			<p className="info">Ta operacja bezpowrotnie skasuje danego ucznia z bazy danych.</p>
			<p className="student">
				adam grzybol
			</p>
			<div className="btns">
				<button className="btns__cancel" onClick={cancelDelete}>
					Anuluj
				</button>
				<button className="btns__delete">
					Usuń
				</button>
			</div>
		</StyledDeleteModal>
	)
}

export default DeleteModal
