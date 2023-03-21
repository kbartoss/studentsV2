import { StyledAddEditStudent } from '../styles/AddEditStudent.styles'

const AddStudent = ({ previousPage, isEdit }: any) => {
	return (
		<StyledAddEditStudent>
			<h1>{isEdit ? 'Edytuj' : 'Dodaj nowego'} ucznia</h1>
			<p className="title">Imię</p>
			<input 
				type="text" 
				className="input" 
				name="name" 
				required 
				minLength={3} 
				maxLength={30} 
			/>
			<p className="title">Nazwisko</p>
			<input 
				type="text" 
				className="input" 
				name="name" 
				required 
				minLength={3} 
				maxLength={30} 
			/>
			<p className="title">Numer telefonu</p>
			<input 
				type="text" 
				className="input" 
				name="name" 
				required 
				minLength={3} 
				maxLength={30} 
			/>
			<p className="title">Adres e-mail</p>
			<input 
				type="text" 
				className="input" 
				name="name" 
				required 
				minLength={3} 
				maxLength={30} 
			/>
			
			<p className="title">Wstaw ocenę</p>
			<select 
				className="input" 
				name="name" 
				required 
				defaultValue='1'
			/>

			<div className="btns">
				<button onClick={previousPage} className='back'>Powrót</button>
				<button className='confirm'>{isEdit ? 'Zatwierdź' : 'Dodaj ucznia'}</button>
			</div>
		</StyledAddEditStudent>
	)
}

export default AddStudent
