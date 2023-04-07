import { Route, Routes } from 'react-router-dom'
import AddEditStudent from '../pages/AddEditStudent/AddEditStudent'
import Start from '../pages/StartPage/Start'
import Students from '../pages/Students/Students'

function CustomRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Start />} />
			<Route path="/students" element={<Students />} />
			<Route path="/students/add" element={<AddEditStudent />} />
			<Route path="/students/:studentId/*" element={<AddEditStudent isEdit />} />
		</Routes>
	)
}

export default CustomRoutes
