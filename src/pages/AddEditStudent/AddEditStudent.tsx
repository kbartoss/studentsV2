import { Controller, useForm } from 'react-hook-form'
import Select from '../../components/Select/Select'
import { validPhone, validMail, validName } from '../../constants/regex'
import { supabase } from '../../api/supabaseClient'
import { useState } from 'react'
import {
	AddEditPageBtns,
	BackBtn,
	ConfirmBtn,
	ErrorText,
	FormWrapper,
	InputTitle,
	StyledAddEditStudent,
} from './AddEditStudent.styles'
import Input from '../../components/Input/Input'
import { useLocation, useNavigate } from 'react-router-dom'
import { setStudentsData } from '../../redux/features/students/studentsSlice'
import { Option, Student } from '../../theme/types'

const AddEditStudent = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({ mode: 'onChange' })
	const onSubmit = (data: Student) => console.log(data)

	const navigate = useNavigate()
	const location = useLocation()
	const isEdit = location.state?.isEdit
	const selectedStudent = location.state?.selectedStudent

	const [grade, setGrade] = useState(selectedStudent?.grade || 1)

	const handleOptionChange = (option: Option) => {
		setGrade(option)
	}

	const goBack = () => {
		navigate(-1)
	}

	const handleAddEditStudent = async (data: Student) => {
		try {
			const newData = { ...data, grade: grade || 1 }
			let error = null

			if (isEdit) {
				const { error: updateError } = await supabase.from('listStudents').update(newData).eq('id', selectedStudent.id)
				error = updateError
			} else {
				const { error: insertError } = await supabase.from('listStudents').insert(newData)
				error = insertError
			}

			if (error) {
				throw new Error(`Error ${isEdit ? 'updating' : 'adding'} student: ${error.message}`)
			}

			const { data: updatedData } = await supabase.from('listStudents').select('*')
			setStudentsData(updatedData)
			goBack()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<StyledAddEditStudent>
			<h1>{isEdit ? 'Edytuj' : 'Dodaj nowego'} ucznia</h1>

			<FormWrapper>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						title="Imię"
						placeholder="Podaj imię ucznia"
						defaultValue={selectedStudent?.name}
						{...register('name', { required: true, minLength: 3, maxLength: 30, pattern: validName })}
					/>
					{errors.name && <ErrorText>Imię powinno mieć od 3 do 30 znaków</ErrorText>}

					<Input
						title="Nazwisko"
						placeholder="Podaj nazwisko ucznia"
						defaultValue={selectedStudent?.surname}
						{...register('surname', { required: 'true', minLength: 3, maxLength: 30, pattern: validName })}
					/>
					{errors.surname && <ErrorText>Nazwisko powinno mieć od 3 do 30 znaków</ErrorText>}

					<Input
						title="Numer telefonu"
						type="number"
						placeholder="Podaj numer telefonu ucznia"
						defaultValue={selectedStudent?.phoneNumber}
						{...register('phoneNumber', { required: true, minLength: 1, maxLength: 9, pattern: validPhone })}
					/>
					{errors.phoneNumber && <ErrorText>Numer telefonu powinien mieć od 1 do 9 cyfr</ErrorText>}

					<Input
						title="Adres e-mail"
						placeholder="Podaj e-mail ucznia"
						defaultValue={selectedStudent?.mail}
						{...register('mail', { required: true, pattern: validMail })}
					/>
					{errors.mail && <ErrorText>Nieprawidłowy format adresu e-mail</ErrorText>}

					<Controller
						name="grade"
						control={control}
						render={({ field }) => (
							<>
								<InputTitle>Wybierz ocenę</InputTitle>
								<Select
									{...field}
									onOptionChange={handleOptionChange}
									initialOption={isEdit ? selectedStudent?.grade : 1}
									options={['1', '2', '3', '4', '5', '6']}
								/>
							</>
						)}
					/>

					<AddEditPageBtns>
						<BackBtn type="button" onClick={goBack}>
							Powrót
						</BackBtn>
						<ConfirmBtn type="submit" onClick={handleSubmit(handleAddEditStudent)}>
							{isEdit ? 'Zatwierdź' : 'Dodaj ucznia'}
						</ConfirmBtn>
					</AddEditPageBtns>
				</form>
			</FormWrapper>
		</StyledAddEditStudent>
	)
}

export default AddEditStudent
