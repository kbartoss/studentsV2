import { createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '../../api/supabaseClient'
import { Student } from '../../theme/types'

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
	try {
		const { data: studentsData, count } = await supabase
			.from(`listStudents`)
			.select('*', { count: 'exact' })
			.order('created_at', { ascending: true })

		return { studentsData: studentsData as Student[], count: count ?? 0 }
	} catch (error) {
		console.log('fetching error', error)
		throw error
	}
})
