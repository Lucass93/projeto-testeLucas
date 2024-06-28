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
    margin-top: 20px;
    color: white;
    background-color: red;
    height: 5vh;
    display: flex;
    flex-direction: column;

`
const Fornecedor = styled.div `
 color: black;
 margin-top: 20px;
 display: flex;
 flex-direction: column;
 height: 5vh;
 align-items: center;
`
function Cadastrar ({ 
    
            nomeCadastro}) {
       
    return (
        <CadastrarConteiner> 
             <NomeCadastro>
                <h2>Pesquise seu produto aqui</h2>
                <input 
                    placeholder="Digite o produto" 
                />
                
                <Fornecedor>
                    <h2>Fornecedores</h2>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={marcasChuteiras}
                        sx={{ 
                            width: 300,
                            borderColor: "white",
                        }}
                        renderInput={(params) => <TextField {...params} label="Marcas" />}
                    />
                </Fornecedor>
                </NomeCadastro>
        </CadastrarConteiner>
    );
}
export default Cadastrar;