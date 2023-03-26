import { useEffect, useState } from 'react'
import { StyledStudents } from '../styles/Students.styles'
import StudentsHeader from '../components/StudentsHeader'
import StudentsTable from '../components/StudentsTable'
import Overlay from '../components/Overlay'
import DeleteModal from '../components/DeleteModal'
import AddEditStudent from './AddEditStudent'
import Pagination from '../components/Pagination'
import { supabase } from '../api/supabaseClient'
import { LoaderContainer } from '../styles/LoaderContainer.styles'
import { MoonLoader } from 'react-spinners'
import theme from '../theme/theme'

type StudentProps = {
	id: number
	name: string
	surname: string
	mail: string
	phoneNumber: string
	created_at: string
	grade: number
}

const Students = ({ isOpen }: any) => {
	const [studentsData, setStudentsData] = useState<StudentProps[]>([])
	const [searchQuery, setSearchQuery] = useState('')
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [showAddEditPage, setShowAddEditPage] = useState(false)
	const [isEdit, setIsEdit] = useState(false)
	const [selectedStudent, setSelectedStudent] = useState({})
	const [allStudentsNumber, setAllStudentsNumber] = useState(0)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const { data: studentsData, count } = await supabase.from(`listStudents`).select('*', { count: 'exact' })
				setStudentsData(studentsData as StudentProps[])
				setAllStudentsNumber(count)
				setLoading(false)
			} catch (error) {
				console.log('fetching error', error)
			}
		}
		const delay = 500
		const timeoutId = setTimeout(() => {
			fetchStudents()
		}, delay)

		return () => clearTimeout(timeoutId)
	}, [studentsData])

	const displayedStudents = studentsData.slice(0, 10)

	// ======================= DELETE ======================= //

	const deleteStudent = async (student: StudentProps) => {
		setSelectedStudent(student)
		setShowDeleteModal(true)
	}

	const confirmDelete = async () => {
		try {
			await supabase.from('listStudents').delete().eq('id', selectedStudent?.id)
			const updatedData = studentsData.filter(student => student.id !== selectedStudent?.id)
			setStudentsData(updatedData)
			setSelectedStudent({})
		} catch (error) {
			console.error('error deleting student', error)
		}
		setShowDeleteModal(false)
	}

	const cancelDelete = () => {
		setShowDeleteModal(false)
		setSelectedStudent({})
	}

	// ======================= ADD ======================= //

	const addStudent = () => {
		setShowAddEditPage(true)
	}

	// ======================= EDIT ======================= //

	const editStudent = async (student: StudentProps) => {
		setSelectedStudent(student)
		setIsEdit(true)
		setShowAddEditPage(true)
	}

	const confirmEditing = () => {
		setShowAddEditPage(false)
		setSelectedStudent({})
		setIsEdit(false)
	}

	const previousPage = () => {
		setShowAddEditPage(false)
		setIsEdit(false)
		setSelectedStudent({})
	}

	const closeModal = () => {
		setShowDeleteModal(false)
		setSelectedStudent({})
	}

	// ======================= NUMBER OF STUDENTS ======================= //

	const studentsNumber = displayedStudents.length

	return (
		<>
			{showAddEditPage ? (
				<AddEditStudent
					previousPage={previousPage}
					isEdit={isEdit}
					confirmEditing={confirmEditing}
					selectedStudent={selectedStudent}
					setStudentsData={setStudentsData}
				/>
			) : (
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
					<Pagination studentsNumber={studentsNumber} allStudentsNumber={allStudentsNumber} />
					{showDeleteModal && (
						<>
							<Overlay closeModal={closeModal}></Overlay>
							<DeleteModal
								cancelDelete={cancelDelete}
								confirmDelete={confirmDelete}
								selectedStudent={selectedStudent}
							/>
						</>
					)}
				</StyledStudents>
			)}
		</>
	)
}

export default Students
