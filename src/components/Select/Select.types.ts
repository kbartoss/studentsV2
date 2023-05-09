export type Option = number

export type SelectProps = {
	onOptionChange?: (option: Option) => void
	initialOption: string
	options: string[]
	onChange: React.ChangeEventHandler<HTMLInputElement>
}
