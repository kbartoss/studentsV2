import { useMemo } from 'react'
import { format } from 'date-fns'
import { useSelector } from 'react-redux'
import { StudentsTableProps, TableRow } from './StudentsTable.types'
import { RootState } from '../../../../redux/store'
import { TableContainer } from './StudentsTable.styles'
import Avatar from '../../../../components/Avatar/Avatar'
import Grade from '../../../../components/Grade/Grade'
import IconBox from '../../../../components/IconBox/IconBox'
import Table from '../../../../components/Table/Table'

const StudentsTable = ({ filteredStudentsData, editStudent, deleteStudent }: StudentsTableProps) => {
	const isOpen = useSelector((state: RootState) => state.students.isOpen)
	const columns = useMemo(
		() => [
			{
				accessor: 'avatar',
				width: '8%',
				Cell: ({ row }: { row: TableRow }) => {
					const nameInitial = row.original.name[0].toUpperCase()
					const surnameInitial = row.original.surname[0].toUpperCase()
					return <Avatar initials={`${nameInitial}${surnameInitial}`} />
				},
			},
			{
				Header: 'Imię',
				accessor: 'name',
				width: '15%',
				Cell: ({ row }: { row: TableRow }) => {
					const fullName = `${row.original.name} ${row.original.surname}`
					return <p style={{ fontWeight: '500' }}>{fullName}</p>
				},
			},
			{
				Header: 'Adres e-mail',
				accessor: 'mail',
				width: '15%',
			},
			{
				Header: 'Nr. telefonu',
				accessor: 'phoneNumber',
				width: '15%',
				Cell: ({ value }: { value: number }) => {
					const phoneNumber = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
					return <p>+48 {phoneNumber}</p>
				},
			},
			{
				Header: 'Data dod.',
				accessor: 'created_at',
				width: '12%',
				Cell: ({ value }: { value: string }) => {
					return <p>{format(new Date(value), 'dd.MM.yyyy')}</p>
				},
			},
			{
				Header: 'Ocena',
				accessor: 'grade',
				width: '10%',
				Cell: ({ value }: { value: number }) => {
					return <Grade value={value} />
				},
			},
			{
				Header: '',
				accessor: 'actions',
				width: '10%',
				Cell: ({ row }: { row: TableRow }) => {
					return <IconBox editStudent={editStudent} deleteStudent={deleteStudent} rowData={row.original} />
				},
			},
		],
		[]
	)

	const data = useMemo(
		() =>
			filteredStudentsData
				.map(student => ({
					id: student.id,
					name: student.name,
					surname: student.surname,
					mail: student.mail,
					phoneNumber: student.phoneNumber,
					created_at: student.created_at,
					grade: student.grade,
					actions: '',
				}))
				.sort((a, b) => a.id - b.id),
		[filteredStudentsData]
	)

	return (
		<TableContainer isOpen={isOpen}>
			<Table columns={columns} data={data} onRowClick={editStudent} isOpen={isOpen} />
		</TableContainer>
	)
}

export default StudentsTable
