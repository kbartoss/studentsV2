import AddEditStudent from "../pages/AddEditStudent/AddEditStudent";
import Start from "../pages/StartPage/Start";
import Students from "../pages/Students/Students";

export const routes = [
	{
		path: '/',
		element: <Start />,
	},
	{
		path: '/students',
		element: <Students />,
	},
	{
		path: '/students/:studentId',
		element: <AddEditStudent />,
	},
]
