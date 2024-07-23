import * as Styled from './Styles'
import Logo from "../../assets/spartans_logo.png"
import { Nav } from '../Nav/Nav'

export function Header(){
    return (
        <Styled.Header>
            <img src={Logo} width="100px" alt="Logo Spartans" />
            <Nav />
        </Styled.Header>
        
    )
}