import { StyledNoStudentsMessage } from "./NoStudentsMessage.styles"
import strings from "../../../../constants/strings"

const NoStudentsMessage = () => {
	return (
		<StyledNoStudentsMessage>
			<h2>{strings.noStudentsText}</h2>
		</StyledNoStudentsMessage>
	)
}

export default NoStudentsMessage