import { useEffect } from 'react'
import { StyledStudents } from './Students.styles'
import StudentsHeader from '../../components/StudentsHeader/StudentsHeader'
import StudentsTable from '../../components/StudentsTable/StudentsTable'
import Overlay from '../../components/Overlay/Overlay'
import DeleteModal from '../../components/DeleteModal/DeleteModal'
import Pagination from '../../components/Pagination/Pagination'
import { supabase } from '../../api/supabaseClient'
import { LoaderContainer } from '../../styles/LoaderContainer.styles'
import { MoonLoader } from 'react-spinners'
import theme from '../../theme/theme'
import {
	setStudentsData,
	setAllStudentsNumber,
	setCurrentPage,
	setShowDeleteModal,
	setSelectedStudent,
	setSearchQuery,
} from '../../redux/features/students/studentsSlice'
import { useNavigate } from 'react-router-dom'
import { Student } from '../../theme/types'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStudents } from '../../redux/thunks/students.thunks'
import { AppDispatch, RootState } from '../../redux/store'

const Students = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const {
		isOpen,
		studentsData,
		allStudentsNumber,
		loading,
		currentPage,
		showDeleteModal,
		selectedStudent,
		searchQuery,
		itemsPerPage,
	} = useSelector((state: RootState) => state.students)

	useEffect(() => {
		dispatch(fetchStudents())
	}, [])

	useEffect(() => {
		dispatch(setCurrentPage(1))
	}, [itemsPerPage, searchQuery])

	const filteredStudentsData = studentsData.filter(student => {
		const fullName = `${student.name} ${student.surname}`
		const searchQueryArr = searchQuery.toLowerCase().split(' ')
		const containsSearchQuery = searchQueryArr.every(query => {
			return (
				student.name.toLowerCase().includes(query) ||
				student.surname.toLowerCase().includes(query) ||
				fullName.toLowerCase().includes(query)
			)
		})
		return containsSearchQuery
	})

	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const displayedStudents = filteredStudentsData.slice(startIndex, endIndex).reverse()

	const deleteStudent = async (student: Student) => {
		dispatch(setSelectedStudent(student))
		dispatch(setShowDeleteModal(true))
	}

	const confirmDelete = async () => {
		try {
			await supabase.from('listStudents').delete().eq('id', selectedStudent?.id)
			const updatedData = studentsData.filter(student => student.id !== selectedStudent?.id)
			dispatch(setStudentsData(updatedData))
			dispatch(setSelectedStudent(null))
			dispatch(setAllStudentsNumber(allStudentsNumber - 1))
		} catch (error) {
			console.error('error deleting student', error)
		}
		dispatch(setShowDeleteModal(false))
	}

	const cancelDelete = () => {
		dispatch(setShowDeleteModal(false))
		dispatch(setSelectedStudent(null))
	}

	const addStudent = () => {
		navigate('/students/add', { state: { setStudentsData } })
	}

	const editStudent = async (student: Student) => {
		dispatch(setSelectedStudent(student))
		navigate(`/students/${student.id}`, { state: { selectedStudent: student } })
	}

	const closeModal = () => {
		dispatch(setShowDeleteModal(false))
		dispatch(setSelectedStudent(null))
	}

	return (
		<>
			<StyledStudents isOpen={isOpen}>
				<StudentsHeader setSearchQuery={query => dispatch(setSearchQuery(query))} addStudent={addStudent} />
				<LoaderContainer>
					<MoonLoader
						color={theme.color.primaryColor}
						loading={loading}
						size={150}
						aria-label="Loading Spinner"
						data-testid="loader"
					/>
				</LoaderContainer>
				<StudentsTable
					filteredStudentsData={displayedStudents}
					deleteStudent={deleteStudent}
					editStudent={editStudent}
				/>
				<Pagination studentsNumber={displayedStudents.length} />
				{showDeleteModal && (
					<>
						<Overlay closeModal={closeModal}></Overlay>
						<DeleteModal cancelDelete={cancelDelete} confirmDelete={confirmDelete} selectedStudent={selectedStudent} />
					</>
				)}
			</StyledStudents>
		</>
	)
}
export default Students
