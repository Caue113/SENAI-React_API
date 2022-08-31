import React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'

import api from '../utils/Api';

import Titulo from '../components/Titulo';
import Cliente from '../components/Cliente';
import Adicionar from '../components/Adicionar';


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

    useEffect(() => {Listar()}, []);

    /**
     * Render
     */

    return(
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <Titulo titulo="Clientes" />
                <Adicionar tipo="Cliente" navigation={navigation} />
            </View>

            <View style={styles.lista}>
                {clientes.map((item) =>
                    <Cliente 
                        key = {item.id}
                        id = {item.id}
                        nome = {item.nome}
                        inicial = {item.inicial}

                        valorTotal = {SomarSaldos(item.saldos)}
                        navigation = {navigation}
                    />
                )}
            </View>
            
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


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F56A4D",
        paddingVertical: "0px",
        paddingHorizontal: "30px",
        
    },
    lista:{
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: "30px",        
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px"
    },
});
