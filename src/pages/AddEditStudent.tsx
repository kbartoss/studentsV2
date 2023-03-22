import { useForm } from 'react-hook-form'
import Select from '../components/Select'
import { StyledAddEditStudent } from '../styles/AddEditStudent.styles'
import { validPhone, validMail, validName } from '../utils/regex'

const AddStudent = ({ previousPage, isEdit }: any) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()
	const onSubmit = (data:any)=> console.log(data)

	return (
		<StyledAddEditStudent>
			<h1>{isEdit ? 'Edytuj' : 'Dodaj nowego'} ucznia</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<p className="title">Imię</p>
				<input {...register('firstName', { required: true, minLength: 3, maxLength: 30, pattern: validName })} />
				{errors.firstName && <p className='error'>Imię powinno mieć od 3 do 30 znaków</p>}

				<p className="title">Nazwisko</p>
				<input {...register('lastName', { required: true, minLength: 3, maxLength: 30, pattern: validName })} />
				{errors.lastName && <p className='error'>Nazwisko powinno mieć od 3 do 30 znaków</p>}

				<p className="title">Numer telefonu</p>
				<input type='number' {...register('phoneNumber', { required: true, maxLength: 9, minLength: 1, pattern: validPhone })} />
				{errors.phoneNumber && <p className='error'>Numer telefonu powinien mieć od 1 do 9 cyfr</p>}

				<p className="title">Adres e-mail</p>
				<input {...register('email', { required: true, pattern: validMail })} />
				{errors.email && <p className='error'>Nieprawidłowy format adresu e-mail</p>}

				<p className="title">Wystaw ocenę</p>
				<Select />

				<div className="btns">
					<button onClick={previousPage} className="back">
						Powrót
					</button>
					<button type='submit' className="confirm">{isEdit ? 'Zatwierdź' : 'Dodaj ucznia'}</button>
				</div>
			</form>
		</StyledAddEditStudent>
	)
}

export default AddStudent
