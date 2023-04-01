import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	studentsData: [],
	allStudentsNumber: 0,
	loading: true,
	currentPage: 1,
	showDeleteModal: false,
	showAddEditPage: false,
	isEdit: false,
	selectedStudent: {},
	itemsPerPage: 10,
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
		setIsEdit: (state, action) => {
			state.isEdit = action.payload
		},
		setSelectedStudent: (state, action) => {
			state.selectedStudent = action.payload
		},
		setItemsPerPage: (state, action) => {
			state.itemsPerPage = action.payload
		},
	},
})

export const {
	setStudentsData,
	setAllStudentsNumber,
	setLoading,
	setCurrentPage,
	setShowDeleteModal,
	setShowAddEditPage,
	setIsEdit,
	setSelectedStudent,
	setItemsPerPage,
} = studentsSlice.actions

export default studentsSlice.reducer
