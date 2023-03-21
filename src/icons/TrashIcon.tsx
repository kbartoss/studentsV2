import { StyledIconBoxIcon } from "../styles/IconBoxIcons.styles"

function TrashIcon({deleteStudent}: any) {
	return (
		<StyledIconBoxIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 28 28" className="trash" onClick={deleteStudent}>
			<path
				stroke="#444"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="3.042"
				d="M9.5 6.5a4.5 4.5 0 019 0m-9 0h9m-9 0H5m13.5 0H23m-18 0H2m3 0V23a3 3 0 003 3h12a3 3 0 003-3V6.5m0 0h3"></path>
		</StyledIconBoxIcon>
	)
}

export default TrashIcon
