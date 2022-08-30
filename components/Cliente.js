import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import api from "../utils/Api";

const Cliente = (props) => {

    const Deletar = (id) =>{
        return(
            api.delete("usuarios/"+id)
            .then(() => props.navigation.push("Clientes"))
        );
    }

    return(
        <View>
            <Text>{props.inicial}</Text>

            <TouchableOpacity
                onPress={() => {props.navigation.push("Saldos", {id: props.id, nome: props.nome})}}
            >
                <Text>{props.nome}</Text>
                <Text>R$ {props.valorTotal}</Text>
            </TouchableOpacity>
 
            <Button title="Remover"
                onPress={() => Deletar(props.id)}
            />
        </View>
    );
}


export default Cliente;
