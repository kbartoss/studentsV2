import React from 'react'
import { StyledAvatar } from '../styles/Avatar.styles'

type AvatarProps = {
	initials: string
}

const Avatar = ({ initials }: AvatarProps) => {
	const avatarColor = React.useMemo(() => {
		const asciiValue = initials.charCodeAt(0) + initials.charCodeAt(initials.length - 1)
		const colors = ['#A8A1C1', '#F7CAC9', '#B8CDA4', '#FFEBC5', '#e0d0a8', '#b1b9f8', '#f7d2ff' ]
		const index = asciiValue % colors.length
		return colors[index]
	}, [initials])

	return (
		<StyledAvatar className="avatar" style={{ backgroundColor: avatarColor }}>
			{initials}
		</StyledAvatar>
	)
}

export default Avatar
