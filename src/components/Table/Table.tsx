import { useTable } from 'react-table'
import { StyledTable } from '../StudentsTable/StudentsTable.styles'
import { TableProps } from '../../theme/types'

const Table = ({ columns, data, onRowClick, isOpen }: TableProps) => {
	const tableInstance = useTable({ columns, data })
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

	return (
		<StyledTable isOpen={isOpen} {...getTableProps()}>
			<thead>
				{headerGroups.map(headerGroup => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<th {...column.getHeaderProps()} style={{ width: column.width }}>
								{column.render('Header')}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map(row => {
					prepareRow(row)
					return (
						<tr {...row.getRowProps()} onClick={() => onRowClick(row.original)}>
							{row.cells.map(cell => (
								<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
							))}
						</tr>
					)
				})}
			</tbody>
		</StyledTable>
	)
}

export default Table
