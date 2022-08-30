import React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, Button} from 'react-native'

import api from '../utils/Api';

import Titulo from '../components/Titulo';
import Cliente from '../components/Cliente';


const Clientes = ({navigation}) => {
        
    const [clientes, setClientes] = useState([]);

    const Listar = async () => {
        try{
          const resultado = await api.get("/usuarios")
      
          if(resultado !== null){
            setClientes(resultado.data);
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }
    
    const SomarSaldos = (...saldos) => {
        const somados = [];
    
        saldos[0].map((val) => {somados.push(val.valor)});
      
        try {
          if(somados !== null)
          {
            return(somados.reduce((acumulador, valor) => acumulador + valor));
          }
          else
          {
            return 0;
          }
        }
        catch(error)
        {
            console.log(error);
            return 0;
        }
    }

    useEffect(() => {Listar();}, []);

    /**
     * Render
     */

    return(
        <View>
            <Titulo titulo="Clientes" />

            {clientes.map((item) =>
                <Cliente 
                    key = {item.id}
                    id = {item.id}
                    nome = {item.nome}

                    valorTotal = {SomarSaldos(item.saldos)}
                    navigation = {navigation}
                />
            )}
        </View>
    );
}

/**
 * Functions
 */


{/**
* DEPRECATED. NO USER SELECTED DOES NOT RETURN ANY VALUE 
* 
*   <Button
        title="Ir para Saldos"
        onPress={() => navigation.navigate("Saldos") }
    />
*/}
export default Clientes;