import * as Styles from "./Styles"
import { base } from "../../main"
import { Link } from "react-router-dom"

export function Nav(){
    return (
        <Styles.Nav>
            <Link to={base + "/shopping"}>Oswaldinho</Link>
            <Link to={base}>Mustache</Link>
            <Link to={base}>Sandals</Link>
            <Link to={base}>WumpaLumpa</Link>
        </Styles.Nav>
    )
}