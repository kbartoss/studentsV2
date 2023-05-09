import { Squash as Hamburger } from 'hamburger-react'
import { Nav, HamburgerDiv } from './Navbar.styles'
import { NavbarProps } from './Navbar.types'

const Navbar = ({ toggle }: NavbarProps) => {
	return (
		<Nav>
			<HamburgerDiv onClick={toggle}>
				<Hamburger color="#fff" size={40} />
			</HamburgerDiv>
		</Nav>
	)
}

export default Navbar
