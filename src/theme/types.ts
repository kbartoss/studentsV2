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
	columns: any[]
	data: Data[]
	onRowClick: (data: Data) => void
	isOpen: boolean
}

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

export type StudentsHeaderProps = {
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>
	addStudent: () => void
}

export type SelectProps = {
	onOptionChange?: (option: Option) => void
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
	type?: string
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

export type Theme = {
	theme: {
		avatarColors: string[]
		grade: {
			high: string
			mid: string
			low: string
			border: string
		}
		color: {
			primaryColor: string
			secondaryColor: string
			blackColor: string
			whiteColor: string
			sidebarActiveBg: string
			tableRowBg: string
			deleteButton: string
			deleteButtonHover: string
			cancelButtonHover: string
			inputBorder: string
			dropdownP: string
			paginationSpan: string
			optionsBorder: string
			optionsMobileBackgroud: string
			optionsMobileBorder: string
			optionsMobileHover: string
			errorText: string
			confirmBtnBgHover: string
			backBtnBgHover: string
		}
	}
	setTheme: () => void
}

export type ThemeProviderProps = {
	children: React.ReactNode
}

export type DropdownIconProps = {
	selectIsOpen: boolean
}

export type EditIconProps = {
	editStudent: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

export type TrashIconProps = {
	handleDelete: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

export type StartIconProps = {
	stroke: string
}

export type StudentsIconProps = {
	stroke: string
}

export type AddEditStudentProps = {
	isEdit: boolean
}