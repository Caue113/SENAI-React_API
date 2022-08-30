import React, { useEffect, useState } from 'react';
import {View, Text, Button} from 'react-native'

import api from '../utils/Api';

import Titulo from '../components/Titulo';
import Saldo from '../components/Saldo';
import { TabRouter } from '@react-navigation/native';


const Saldos = ({route, navigation}) => {
    
    const [saldos, setSaldos] = useState([]);

    const ListarSaldos = async () => {
        try{
            const resultado = await api.get("usuarios/"+route.params.id+"/saldos");
            if(resultado !== null){
                setSaldos(resultado.data);
            }
        }
        catch(error){
            console.log(error);
        }
    }

    const SomarSaldos = (...saldos) => {
        const somados = [];

        saldos[0].map((value) => {
            somados.push(value.valor);
        });

        try {
            if(somados !== null){
                return somados.reduce((acumulador, value) => acumulador + value);
            }else{
                console.log(`SALDOS.JS: ${typeof somados} somados: ${somados}`);
                return 0;
            }
        } catch (error) {
            console.log(error);
            return 0;
        }
    }

    useEffect(() => {
        ListarSaldos();
    }, [])

    return(
        <View>
            <Titulo titulo="Saldos" />

            <Text>{route.params.nome}</Text>
            <Text>TOTAL : R$ {SomarSaldos(saldos)}</Text>
            {saldos.map((item) =>
                <Saldo 
                    key={item.id}
                    id={item.id}
                    idCliente={route.params.id}
                    nome={route.params.nome}
                    valor={item.valor}
                    navigation={navigation}
                />
            )}
            <Button 
                title="Ir para Clientes"
                onPress={() => { navigation.navigate("Clientes")}}
            />
        </View>
    );    
}

export default Saldos;