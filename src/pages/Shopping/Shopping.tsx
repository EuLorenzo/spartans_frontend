import { Item } from "../../components/Item/Item"
import {ProductDto, Products} from "../../Product.dto"
import * as Styled from "./Styles"

export function Shopping(){
    return (
        <Styled.Container>
            <Styled.Itens>
            {Products.map((produto : ProductDto) => {
                return <Item product={produto}/>
            })}
            </Styled.Itens>
        </Styled.Container>

    )
}
