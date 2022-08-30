import React from "react";
import { View, Text, Button } from "react-native";

import api from "../utils/Api";

const Saldo = (props) => {

    const Deletar = (id) =>{
        
         api.delete("usuarios/"+props.idCliente+"/saldos/"+id)
         .then(() => props.navigation.push("Saldos", { id: props.idCliente, nome: props.nome})
         );
        
    }
    
    return(
        <View>
            <Text>{props.valor}</Text>

            <Button
                title="Remover (Saldo)"
                onPress={() => Deletar(props.id)} 
            />
        </View>
    );
}

export default Saldo;
