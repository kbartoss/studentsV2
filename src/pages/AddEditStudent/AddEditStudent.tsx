import { Controller, useForm } from 'react-hook-form'
import Select from '../../components/Select/Select'
import { validPhone, validMail, validName } from '../../constants/regex'
import { supabase } from '../../api/supabaseClient'
import { useEffect, useState } from 'react'
import {
	AddEditPageBtns,
	BackBtn,
	ConfirmBtn,
	ErrorText,
	InputTitle,
	StyledAddEditStudent,
} from './AddEditStudent.styles'
import Input from '../../components/Input/Input'

const AddEditStudent = ({ previousPage, isEdit, selectedStudent, setStudentsData, confirmEditing }: any) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({ mode: 'onChange' })
	const onSubmit = (data: any) => console.log(data)

	const [grade, setGrade] = useState(selectedStudent.grade)

	const handleOptionChange = (option: any) => {
		setGrade(option)
	}

	const handleConfirmEditing = async (data: any) => {
		try {
			const { error } = await supabase
				.from('listStudents')
				.update({ ...data, grade: grade || 1 })
				.eq('id', selectedStudent.id)

			if (error) {
				throw new Error(`Error updating student: ${error.message}`)
			}
			const { data: updatedData } = await supabase.from('listStudents').select('*')
			setStudentsData(updatedData)
			confirmEditing()
		} catch (error) {
			console.error(error)
		}
	}

	const handleAddStudent = async (data: any) => {
		try {
			const { error } = await supabase.from('listStudents').insert({ ...data, grade: grade || 1 })
			if (error) {
				throw new Error(`Error adding student: ${error.message}`)
			}
			const { data: updatedData } = await supabase.from('listStudents').select('*')
			setStudentsData(updatedData)
			previousPage()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<StyledAddEditStudent>
			<h1>{isEdit ? 'Edytuj' : 'Dodaj nowego'} ucznia</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					title="Imię"
					placeholder="Podaj imię ucznia"
					defaultValue={selectedStudent.name}
					{...register('name', { required: true, minLength: 3, maxLength: 30, pattern: validName })}
				/>
				{errors.name && <ErrorText>Imię powinno mieć od 3 do 30 znaków</ErrorText>}

				<Input
					title="Nazwisko"
					placeholder="Podaj nazwisko ucznia"
					defaultValue={selectedStudent.surname}
					{...register('surname', { required: 'true', minLength: 3, maxLength: 30, pattern: validName })}
				/>
				{errors.surname && <ErrorText>Nazwisko powinno mieć od 3 do 30 znaków</ErrorText>}

				<Input
					title="Numer telefonu"
					type="number"
					placeholder="Podaj numer telefonu ucznia"
					defaultValue={selectedStudent.phoneNumber}
					{...register('phoneNumber', { required: true, minLength: 1, maxLength: 9, pattern: validPhone })}
				/>
				{errors.phoneNumber && <ErrorText>Numer telefonu powinien mieć od 1 do 9 cyfr</ErrorText>}

				<Input
					title="Adres e-mail"
					placeholder="Podaj e-mail ucznia"
					defaultValue={selectedStudent.mail}
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
								initialOption={isEdit ? selectedStudent.grade : 1}
								options={[1, 2, 3, 4, 5, 6]}
							/>
						</>
					)}
				/>

				<AddEditPageBtns>
					<BackBtn onClick={previousPage}>Powrót</BackBtn>
					{isEdit ? (
						<ConfirmBtn type="submit" onClick={handleSubmit(handleConfirmEditing)}>
							Zatwierdź
						</ConfirmBtn>
					) : (
						<ConfirmBtn type="submit" onClick={handleSubmit(handleAddStudent)}>
							Dodaj ucznia
						</ConfirmBtn>
					)}
				</AddEditPageBtns>
			</form>
		</StyledAddEditStudent>
	)
}

export default AddEditStudent
