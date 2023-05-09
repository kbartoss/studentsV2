export type InputProps = {
	title: string
	placeholder: string
	defaultValue?: string
	type?: string
	error?: string | null
	value: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
}
