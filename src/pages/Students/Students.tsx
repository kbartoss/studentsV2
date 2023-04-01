import { useEffect, useState } from 'react'
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
	setLoading,
	setCurrentPage,
	setShowDeleteModal,
	setIsEdit,
	setSelectedStudent,
} from '../../redux/features/students/studentsSlice'
import { connect } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import { StateProps, Student, StudentProps } from '../../theme/types'

const Students = ({
	studentsData,
	allStudentsNumber,
	loading,
	currentPage,
	showDeleteModal,
	selectedStudent,
	setStudentsData,
	setAllStudentsNumber,
	setLoading,
	setCurrentPage,
	setShowDeleteModal,
	setIsEdit,
	setSelectedStudent,
	isOpen,
}: StudentProps) => {
	const [searchQuery, setSearchQuery] = useState('')
	const [itemsPerPage, setItemsPerPage] = useState(10)
	const navigate = useNavigate()

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const { data: studentsData, count } = await supabase
					.from(`listStudents`)
					.select('*', { count: 'exact' })
					.order('created_at', { ascending: true })
				setStudentsData(studentsData as Student[])
				setAllStudentsNumber(count ?? 0)
				setLoading(false)
			} catch (error) {
				console.log('fetching error', error)
			}
		}
		fetchStudents()
	}, [])

	useEffect(() => {
		setCurrentPage(1)
	}, [itemsPerPage])

	const totalStudents = studentsData.length
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const displayedStudents = studentsData.slice(startIndex, endIndex).reverse()

	const deleteStudent = async (student: Student) => {
		setSelectedStudent(student)
		setShowDeleteModal(true)
	}

	const confirmDelete = async () => {
		try {
			await supabase.from('listStudents').delete().eq('id', selectedStudent?.id)
			const updatedData = studentsData.filter(student => student.id !== selectedStudent?.id)
			setStudentsData(updatedData)
			setSelectedStudent(null)
		} catch (error) {
			console.error('error deleting student', error)
		}
		setShowDeleteModal(false)
	}

	const cancelDelete = () => {
		setShowDeleteModal(false)
		setSelectedStudent(null)
	}

	const addStudent = () => {
		navigate('/students/add', { state: { setStudentsData } })
	}

	const editStudent = async (student: Student) => {
		setSelectedStudent(student)
		setIsEdit(true)
		navigate(`/students/${student.id}`, { state: { isEdit: true, selectedStudent: student } })
	}

	const closeModal = () => {
		setShowDeleteModal(false)
		setSelectedStudent(null)
	}

	const studentsNumber = displayedStudents.length

	return (
		<>
			<StyledStudents isOpen={isOpen}>
				<StudentsHeader setSearchQuery={setSearchQuery} addStudent={addStudent} />
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
					studentsData={displayedStudents}
					searchQuery={searchQuery}
					deleteStudent={deleteStudent}
					editStudent={editStudent}
				/>
				<Pagination
					studentsNumber={studentsNumber}
					allStudentsNumber={allStudentsNumber}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					itemsPerPage={itemsPerPage}
					setItemsPerPage={setItemsPerPage}
				/>
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

const mapStateToProps = (state: StateProps) => ({
	studentsData: state.students.studentsData,
	allStudentsNumber: state.students.allStudentsNumber,
	loading: state.students.loading,
	currentPage: state.students.currentPage,
	showDeleteModal: state.students.showDeleteModal,
	isEdit: state.students.isEdit,
	selectedStudent: state.students.selectedStudent,
})

const mapDispatchToProps = {
	setStudentsData,
	setAllStudentsNumber,
	setLoading,
	setCurrentPage,
	setShowDeleteModal,
	setIsEdit,
	setSelectedStudent,
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
