import { useMemo } from 'react'
import { format } from 'date-fns'
import { useTable } from 'react-table'
import { StyledTable } from './StudentsTable.styles'
import Avatar from '../Avatar/Avatar'
import Grade from '../Grade/Grade'
import IconBox from '../IconBox/IconBox'
import Table from '../Table/Table'

const StudentsTable = ({ studentsData, searchQuery, editStudent, deleteStudent }: any) => {
	const columns = useMemo(
		() => [
			{
				accessor: 'avatar',
				Cell: ({ row }: any) => {
					const nameInitial = row.original.name[0].toUpperCase()
					const surnameInitial = row.original.surname[0].toUpperCase()
					return <Avatar initials={`${nameInitial}${surnameInitial}`} />
				},
			},
			{
				Header: 'Imię',
				accessor: 'name',
				Cell: ({ row }: any) => {
					const fullName = `${row.original.name} ${row.original.surname}`
					return <p style={{ fontWeight: '500' }}>{fullName}</p>
				},
			},
			{
				Header: 'Adres e-mail',
				accessor: 'mail',
			},
			{
				Header: 'Nr. telefonu',
				accessor: 'phoneNumber',
				Cell: ({ value }: any) => {
					const phoneNumber = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
					return <p>+48 {phoneNumber}</p>
				},
			},
			{
				Header: 'Data dod.',
				accessor: 'created_at',
				Cell: ({ value }: any) => {
					return <p>{format(new Date(value), 'dd.MM.yyyy')}</p>
				},
			},
			{
				Header: 'Ocena',
				accessor: 'grade',
				Cell: ({ value }: any) => {
					return <Grade value={value} />
				},
			},
			{
				Header: '',
				accessor: 'actions',
				Cell: ({ row }) => {
					return <IconBox editStudent={editStudent} deleteStudent={deleteStudent} rowData={row.original} />
				},
			},
		],
		[]
	)

	const search = () => {
		return studentsData.filter(student => {
			const fullName = `${student.name} ${student.surname}`
			const searchQueryArr = searchQuery.toLowerCase().split(' ')
			const containsSearchQuery = searchQueryArr.every(query => {
				return (
					student.name.toLowerCase().includes(query) ||
					student.surname.toLowerCase().includes(query) ||
					fullName.toLowerCase().includes(query)
				)
			})
			return containsSearchQuery
		})
	}
	const data = useMemo(
		() =>
			search()
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
		[studentsData, searchQuery]
	)

	return <Table columns={columns} data={data} onRowClick={editStudent} />
}

export default StudentsTable