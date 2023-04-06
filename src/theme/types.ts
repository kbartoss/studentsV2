export type Student = {
	created_at: string
	grade: number
	id: number
	mail: string
	name: string
	phoneNumber: number
	surname: string
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

export type IsOpenProps = {
	isOpen: boolean
}

export type Option = number

export type TableProps<Data extends object> = {
	columns: []
	data: Data[]
	onRowClick: (data: Data) => void
}

export type StudentsTableProps = {
	filteredStudentsData: Student[]
	editStudent: (student: Student) => void
	deleteStudent: (student: Student) => void
}

export type StudentsHeaderProps = {
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>
	addStudent: () => void
}

export type SelectProps = {
	onOptionChange: (option: string) => void
	initialOption: string
	options: string[]
	field?: Record<string, unknown>
}

export type PaginationProps = {
	studentsNumber: number
}

export type OverlayProps = {
	closeModal: () => void
}

export type NavbarProps = {
	toggle: () => void
}

export type InputProps = {
	name: string
	title: string
	placeholder: string
	defaultValue?: string
}

export type IconBoxProps = {
	editStudent: (rowData: Student) => void
	deleteStudent: (rowData: Student) => void
	rowData: Student
}

export type AvatarProps = {
	initials: string
}

export type DeleteModalProps = {
	cancelDelete: () => void
	confirmDelete: () => void
	selectedStudent: Student | null
}

export type GradeProps = {
	value: number
}

export type SidebarProps = {
	isOpen: boolean
}
