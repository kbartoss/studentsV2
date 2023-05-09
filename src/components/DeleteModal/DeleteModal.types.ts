import { Student } from "../../pages/Students/Students.types"

export type DeleteModalProps = {
	cancelDelete: () => void
	confirmDelete: () => void
	selectedStudent: Student | null
}
