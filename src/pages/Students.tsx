import { useEffect, useState } from 'react'
import { StyledStudents } from '../styles/Students.styles'
import StudentsHeader from '../components/StudentsHeader'
import StudentsTable from '../components/StudentsTable'
import Overlay from '../components/Overlay'
import DeleteModal from '../components/DeleteModal'
import AddEditStudent from './AddEditStudent'
import Pagination from '../components/Pagination'
import { supabase } from '../api/supabaseClient'

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

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const { data: studentsData } = await supabase.from(`listStudents`).select(`*`)
				setStudentsData(studentsData as StudentProps[])
			} catch (error) {
				console.log('fetching error', error)
			}
		}
		fetchStudents()
	}, [])

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
		} catch (error) {
			console.error('error deleting student', error)
		}
		setShowDeleteModal(false)
	}

	const cancelDelete = () => {
		setShowDeleteModal(false)
	}

	// ======================= DELETE ======================= //

	// ======================= ADD ======================= //

	const addStudent = () => {
		setShowAddEditPage(true)
	}

	// ======================= ADD ======================= //

	// ======================= EDIT ======================= //

	const editStudent = async (student: StudentProps) => {
		setSelectedStudent(student)
		setIsEdit(true)
		setShowAddEditPage(true)
	}

	const confirmEditing = () => {
		setShowAddEditPage(false)
	}

	// ======================= EDIT ======================= //

	const previousPage = () => {
		setShowAddEditPage(false)
		setIsEdit(false)
	}

	const closeModal = () => {
		setShowDeleteModal(false)
	}

	return (
		<>
			{showAddEditPage ? (
				<AddEditStudent previousPage={previousPage} isEdit={isEdit} confirmEditing={confirmEditing} selectedStudent={selectedStudent} setStudentsData={setStudentsData}/>
			) : (
				<StyledStudents isOpen={isOpen}>
					<StudentsHeader setSearchQuery={setSearchQuery} addStudent={addStudent} />
					<StudentsTable
						studentsData={studentsData}
						searchQuery={searchQuery}
						deleteStudent={deleteStudent}
						editStudent={editStudent}
					/>
					<Pagination />
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
