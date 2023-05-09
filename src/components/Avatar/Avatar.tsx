import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { StyledAvatar } from './Avatar.styles'
import { AvatarProps } from './Avatar.types'


const Avatar = ({ initials }: AvatarProps) => {
	const { theme } = useContext(ThemeContext)

	const avatarColor = React.useMemo(() => {
		const asciiValue = initials.charCodeAt(0) + initials.charCodeAt(initials.length - 1)
		const colors = theme.avatarColors
		const index = asciiValue % colors.length
		return colors[index]
	}, [initials])

	return (
		<StyledAvatar style={{ backgroundColor: avatarColor }}>
			{initials}
		</StyledAvatar>
	)
}

export default Avatar
