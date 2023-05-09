import { Student } from "../../pages/Students/Students.types"

export type IconBoxProps = {
	editStudent: (rowData: Student) => void
	deleteStudent: (rowData: Student) => void
	rowData: Student
}
