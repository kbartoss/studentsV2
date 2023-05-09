import { Student } from "../../Students.types"

export type TableRow = {
	original: {
		id: number
		name: string
		surname: string
		mail: string
		phoneNumber: number
		created_at: string
		grade: number
	}
}

export type StudentsTableProps = {
	filteredStudentsData: Student[]
	editStudent: (student: Student) => void
	deleteStudent: (student: Student) => void
}