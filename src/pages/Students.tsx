import { useState } from 'react'
import { StyledStudents } from '../styles/Students.styles'
import StudentsHeader from '../components/StudentsHeader'
import StudentsTable from '../components/StudentsTable'
import Overlay from '../components/Overlay'
import DeleteModal from '../components/DeleteModal'
import AddEditStudent from './AddEditStudent'
import Pagination from '../components/Pagination'

const Students = ({ isOpen }: any) => {
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
	const [showAddEditPage, setShowAddEditPage] = useState<boolean>(false)
	const [isEdit, setIsEdit] = useState<boolean>(false)

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
		setShowAddEditPage(true)
	}

	const editStudent = () => {
		setIsEdit(true)
		setShowAddEditPage(true)
	}

	const previousPage = () => {
		setShowAddEditPage(false)
		setIsEdit(false)
	}

	return (
		<>
			{showAddEditPage ? (
				<AddEditStudent previousPage={previousPage} isEdit={isEdit} />
			) : (
				<StyledStudents isOpen={isOpen}>
					<StudentsHeader setSearchQuery={setSearchQuery} addStudent={addStudent} />
					<StudentsTable searchQuery={searchQuery} deleteStudent={deleteStudent} editStudent={editStudent} />
					<Pagination />
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
