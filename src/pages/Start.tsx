import { StartText, StyledStart } from "../styles/Start.styles"

const Start = ({ isOpen }: any) => {
  return (
    <StyledStart isOpen={isOpen}>
        <img src="/src/images/start-img.png" alt="Animated image of person sitting next to desk and using laptop" />
        <StartText>Witamy w panelu administratora.</StartText>
    </StyledStart>
  )
}

export default Start
