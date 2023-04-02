import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '../../api/supabaseClient'

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
	const { data: studentsData, count } = await supabase
		.from(`listStudents`)
		.select('*', { count: 'exact' })
		.order('created_at', { ascending: true })
	return { studentsData, count }
})
