import { Student } from '../../pages/Students/Students.types'

export type PaginationProps = {
	studentsNumber: number
}

export type StateProps = {
	students: {
		studentsData: Student[]
		allStudentsNumber: number
		loading: boolean
		currentPage: number
		showDeleteModal: boolean
		selectedStudent: Student | null
		searchQuery: string
		itemsPerPage: number
		selectIsOpen: boolean
	}
}
