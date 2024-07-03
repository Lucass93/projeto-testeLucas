import React from "react";
import styled from "styled-components";
import { Autocomplete, Button, TextField } from "@mui/material";


const marcasChuteiras = [
    { label: "Nike"},
    { label: "Puma"},
    { label: "Adidas"},
    { label:"Penalty"},
    { label:"Umbro"},
    { label:"Mizuno"},
    { label:"Topper"},
    { label:"Joma"},
]

const CadastrarConteiner = styled.main`
background-color: gray;
height:90vh; 
display: flex;
flex-direction: column;
align-items: center;

`
const NomeCadastro = styled.div `
margin-top: 15px;
color: white;
background-color: red;
height: 5vh;
display: flex;
flex-direction: column;

`
const Fornecedor = styled.div `
 color: black;
 margin-top: 15px;
 display: flex;
 flex-direction: column;
 height: 5vh;
 align-items: center;
`

const Descricao = styled.div `
margin-top: 15px;
display: flex;
flex-direction: column;
align-items: center; 

`
const Preco = styled.div `
margin-top: 15px;
display: flex;
flex-direction: column;
height: 5vh;
align-items: center;   
`

const FretePagamento = styled.div `
margin-top: 15px;
`




function Cadastrar ({ 
    
            nomeCadastro}) {
       
    return (
        <CadastrarConteiner> 
             <NomeCadastro>
                <h3>Pesquise seu produto aqui</h3>
                <input 
                    placeholder="Digite o produto" 
                />
                
                <Fornecedor>
                    <h3>Fornecedores</h3>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={marcasChuteiras}
                        sx={{ 
                            width: 310,
                            borderColor: "white",
                        }}
                        renderInput={(params) => <TextField {...params} label="Marcas" />}
                    />
                    <Descricao>
                        <h3> Descrição </h3>
                      <input
                        placeholder="Descreva o Produto"
                      />
                    
                    <Preco>
                        <h3> Preço </h3>
                        <input/>

                    <FretePagamento> 
                    <label> Frete gratis </label>
                    <input type = "radio" /> 
                    <label> Calcular Frete </label>
                    <input type = "radio"/> <br/>
                    <br/>         
                    <label>  Boleto </label> 
                    <input type = "checkbox" /> 
                    <label> Pix </label>
                    <input type = "checkbox" />  
                    <label> Cartão </label>
                    <input type = "checkbox" /> <br/>
                    <br/>    
                    <label> Garantia </label>
                    <input type = "radio" /> <br/>  
                    <br/>  
                    <label> Quantidade em estoque </label> <br/> 
                    <input type = "number" />

                    </FretePagamento>
                    </Preco>
                    </Descricao>
                </Fornecedor>  
                </NomeCadastro>
                
        </CadastrarConteiner>
    );
}
export default Cadastrar;