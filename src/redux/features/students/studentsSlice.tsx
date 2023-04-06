import { createSlice } from '@reduxjs/toolkit'
import { fetchStudents } from '../../thunks/students.thunks'
import { Student } from '../../../theme/types'

type StudentsState = {
	studentsData: Student[]
	allStudentsNumber: number
	loading: boolean
	currentPage: number
	showDeleteModal: boolean
	showAddEditPage: boolean
	selectedStudent: Student | null
	itemsPerPage: number
	searchQuery: string
	selectIsOpen: boolean
}

const initialState: StudentsState = {
	studentsData: [],
	allStudentsNumber: 0,
	loading: true,
	currentPage: 1,
	showDeleteModal: false,
	showAddEditPage: false,
	selectedStudent: {},
	itemsPerPage: 3,
	searchQuery: '',
	selectIsOpen: false,
}

const studentsSlice = createSlice({
	name: 'students',
	initialState,
	reducers: {
		setStudentsData: (state, action) => {
			state.studentsData = action.payload
		},
		setAllStudentsNumber: (state, action) => {
			state.allStudentsNumber = action.payload
		},
		setLoading: (state, action) => {
			state.loading = action.payload
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		},
		setShowDeleteModal: (state, action) => {
			state.showDeleteModal = action.payload
		},
		setShowAddEditPage: (state, action) => {
			state.showAddEditPage = action.payload
		},
		setSelectedStudent: (state, action) => {
			state.selectedStudent = action.payload
		},
		setSearchQuery: (state, action) => {
			state.searchQuery = action.payload
		},
		setItemsPerPage: (state, action) => {
			state.itemsPerPage = action.payload
		},
		setSelectIsOpen: (state, action) => {
			state.selectIsOpen = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchStudents.pending, state => {
			state.loading = true
		})
		builder.addCase(fetchStudents.fulfilled, (state, action) => {
			state.loading = false
			state.studentsData = action.payload.studentsData
			state.allStudentsNumber = action.payload.count
		})
		builder.addCase(fetchStudents.rejected, state => {
			state.loading = false
		})
	},
})

export const {
	setStudentsData,
	setAllStudentsNumber,
	setLoading,
	setCurrentPage,
	setShowDeleteModal,
	setShowAddEditPage,
	setSelectedStudent,
	setSearchQuery,
	setItemsPerPage,
	setSelectIsOpen,
} = studentsSlice.actions

export default studentsSlice.reducer
