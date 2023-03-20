import { StyledAddStudent } from '../styles/AddStudent.styles'

const EditStudent = ({ previousPage }: any) => {
	return (
		<StyledAddStudent>
			<h1>Edytuj ucznia</h1>
			<p className="title">Imię</p>
			<input type="text" className="input" name="name" required minLength={3} maxLength={30} />

			<div className="btns">
				<button onClick={previousPage}>Powrót</button>
				<button>Zatwierdź</button>
			</div>
		</StyledAddStudent>
	)
}

export default EditStudent
