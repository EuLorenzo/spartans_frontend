import {  ProductDto } from "../../Product.dto"
import * as Styled from "./Styles"

interface ItemProps{
    product : ProductDto
}


export function Item({product} : ItemProps){
    return (
        <Styled.Container>
            


            <img src={product.image} alt="Foto" width="150px"/>
            <h1>{product.name}</h1>
            

        </Styled.Container>
    )

}