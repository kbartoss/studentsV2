import { useState } from 'react'
import { StyledStudents } from '../styles/Students.styles'
import StudentsHeader from '../components/StudentsHeader'
import StudentsTable from '../components/StudentsTable'
import Overlay from '../components/Overlay'
import DeleteModal from '../components/DeleteModal'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'

const Students = ({ isOpen }: any) => {
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
	const [showAddPage, setShowAddPage] = useState<boolean>(false)
	const [showEditPage, setShowEditPage] = useState<boolean>(false)

	const deleteStudent = () => {
		setShowDeleteModal(true)
	}

	const cancelDelete = () => {
		setShowDeleteModal(false)
	}

	const closeModal = () => {
		setShowDeleteModal(false)
	}

	const addStudent = () => {
		setShowAddPage(true)
	}

	const editStudent = () => {
		setShowEditPage(true)
	}

	const previousPage = () => {
		setShowAddPage(false)
		setShowEditPage(false)
	  }
	

	return (
		<>
			{showAddPage ? (
				<AddStudent previousPage={previousPage}/>
			) : showEditPage ? (
				<EditStudent previousPage={previousPage}/>
			) : (
				<StyledStudents isOpen={isOpen}>
					<StudentsHeader setSearchQuery={setSearchQuery} addStudent={addStudent} />
					<StudentsTable searchQuery={searchQuery} deleteStudent={deleteStudent} />
					{showDeleteModal && (
						<>
							<Overlay closeModal={closeModal}></Overlay>
							<DeleteModal cancelDelete={cancelDelete} />
						</>
					)}
				</StyledStudents>
			)}
		</>
	)
}

export default Students
