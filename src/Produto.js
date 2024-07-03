import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import React from "react";
import styled from "styled-components";

const Parede = styled.div `
background-color: gray;
height: 90vh;
display: flex;
`

const Barra = styled.div `
background-color: aqua;
height: 90vh;
width: 15%;

`
const Palavras = styled.div `
margin-top: 20px;
margin-left: 10px;
font-weight: 500;
font-size: larger;
text-align: left;
display: flex;
flex-direction: column;

`



function Produto () {
    return (
        <Parede> 
            <Barra>
        <Palavras>
        <label> NIKE </label>
        <input type = "checkbox"/> 
        <label> PUMA </label>
        <input type = "checkbox"/> 
        <label> ADIDAS </label>
        <input type = "checkbox"/> 
        <label> PENALTY </label>
        <input type = "checkbox" /> 
        <label> UMBRO </label>
        <input type = "checkbox"/> 
        <label> MIZUNO </label>
        <input type = "checkbox"/> 
        <label> TOPPER </label>
        <input type = "checkbox"/> 
        <label> JOMA </label>
        <input type = "checkbox"/> 
        </Palavras>
            </Barra>
        </Parede>
        
    );
   
}

export default Produto; 





