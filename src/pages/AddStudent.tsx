import { StyledAddStudent } from '../styles/AddStudent.styles'

const AddStudent = ({ previousPage }: any) => {
	return (
		<StyledAddStudent>
			<h1>Dodaj nowego ucznia</h1>
			<p className="title">Imię</p>
			<input type="text" className="input" name="name" required minLength={3} maxLength={30} />

			<div className="btns">
				<button onClick={previousPage}>Powrót</button>
				<button>Dodaj ucznia</button>
			</div>
		</StyledAddStudent>
	)
}

export default AddStudent
