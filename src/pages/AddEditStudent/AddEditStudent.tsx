import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Controller, useForm, FieldValues } from 'react-hook-form'
import { supabase } from '../../api/supabaseClient'
import Select from '../../components/Select/Select'
import { validPhone, validMail, validName } from '../../constants/regex'
import {
	AddEditPageBtns,
	BackBtn,
	ConfirmBtn,
	FormWrapper,
	StyledAddEditStudent,
} from './AddEditStudent.styles'
import Input from '../../components/Input/Input'
import { setStudentsData } from '../../redux/features/students/studentsSlice'
import { InputTitle } from '../../components/Input/Input.styles'
import { AddEditStudentProps, Option } from './AddEditStudents.types'

const AddEditStudent = ({ isEdit }: AddEditStudentProps) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({ mode: 'onChange' })

	const navigate = useNavigate()
	const location = useLocation()
	const selectedStudent = location.state?.selectedStudent

	const [grade, setGrade] = useState(selectedStudent?.grade || 1)

	const handleOptionChange = (option: Option) => {
		setGrade(option)
	}

	const goBack = () => {
		navigate(-1)
	}

	const handleAddEditStudent = async (data: FieldValues) => {
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
				<form onSubmit={handleSubmit(handleAddEditStudent)}>
					<Controller
						control={control}
						name="name"
						defaultValue={selectedStudent?.name || ''}
						rules={{ required: true, minLength: 3, maxLength: 30, pattern: validName }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									title="Imię"
									placeholder="Podaj imię ucznia"
									onChange={onChange}
									value={value}
									error={error ? 'Imię powinno mieć od 3 do 30 znaków i nie zawierać cyfr.' : null}
								/>
							</>
						)}
					/>

					<Controller
						control={control}
						name="surname"
						defaultValue={selectedStudent?.surname || ''}
						rules={{ required: true, minLength: 3, maxLength: 30, pattern: validName }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									title="Nazwisko"
									placeholder="Podaj nazwisko ucznia"
									onChange={onChange}
									value={value}
									error={error ? 'Nazwisko powinno mieć od 3 do 30 znaków i nie zawierać cyfr.' : null}
								/>
							</>
						)}
					/>

					<Controller
						control={control}
						name="phoneNumber"
						defaultValue={selectedStudent?.phoneNumber || ''}
						rules={{ required: true, minLength: 1, maxLength: 9, pattern: validPhone }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									title="Numer telefonu"
									placeholder="Podaj numer telefonu ucznia"
									onChange={onChange}
									value={value}
									error={error ? 'Numer telefonu powinien mieć od 1 do 9 cyfr.' : null}
								/>
							</>
						)}
					/>

					<Controller
						control={control}
						name="mail"
						defaultValue={selectedStudent?.mail || ''}
						rules={{ required: true, pattern: validMail }}
						render={({ field: { onChange, value }, fieldState: { error } }) => (
							<>
								<Input
									title="Adres e-mail"
									placeholder="Podaj e-mail ucznia"
									onChange={onChange}
									value={value}
									error={error ? 'Nieprawidłowy format adresu e-mail' : null}
								/>
							</>
						)}
					/>

					<Controller
						name="grade"
						control={control}
						render={({ field: { onChange } }) => (
							<>
								<InputTitle>Wybierz ocenę</InputTitle>
								<Select
									onChange={onChange}
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
						<ConfirmBtn type="submit">{isEdit ? 'Zatwierdź' : 'Dodaj ucznia'}</ConfirmBtn>
					</AddEditPageBtns>
				</form>
			</FormWrapper>
		</StyledAddEditStudent>
	)
}

export default AddEditStudent