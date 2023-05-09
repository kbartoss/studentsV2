export type TableProps<Data extends object> = {
	columns: any[]
	data: Data[]
	onRowClick: (data: Data) => void
	isOpen: boolean
}