import styled from "styled-components"
import teste from "../../assets/time_01.jpg"

export const FundoImg = styled.div`
    height: 75vh;
    background-color: #2d3091;
`

export const Img = styled.div`
    height: 97%;
    background-image: url(${teste});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`