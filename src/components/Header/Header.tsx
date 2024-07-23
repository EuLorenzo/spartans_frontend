import * as Styled from './Styles'
import Logo from "../../assets/spartans_logo.png"

export function Header(){
    return (
        <Styled.Header>
            <img src={Logo} width="100px" alt="Logo do Spartans" />
        </Styled.Header>
        
    )
}