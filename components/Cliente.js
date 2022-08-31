import React from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";

import api from "../utils/Api";

const Cliente = (props) => {

    const Deletar = (id) =>{
        return(
            api.delete("usuarios/"+id)
            .then(() => props.navigation.push("Clientes"))
        );
    }

    return(
        <View style={styles.card}>
            <View style={styles.clienteBox}>
                <Text style={styles.inicialContainer}>
                    {props.inicial}
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => {props.navigation.push("Saldos", {id: props.id, nome: props.nome})}}
            >
                <Text>{props.nome}</Text>
                <Text style={styles.valorTotalContainer}>
                    R$ {props.valorTotal}
                </Text>

            </TouchableOpacity>
 
            <TouchableOpacity onPress={() => Deletar(props.id)}>
                <Image 
                    style={styles.lixeira}
                    source={require("../assets/Images/lixeira.png")} 
                />
            </TouchableOpacity>

        </View>
    );
}


export default Cliente;

const styles = StyleSheet.create({
    card:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: "12px",
        marginVertical: "10px",
        paddingVertical: "20px",

        //Shadow Properties
        shadowColor: "#3F3D46",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inicialContainer:{
        color: "#FFFFFF",
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    valorTotalContainer: {
       color: "#F56A4D" ,
       fontWeight: "bold",
       fontSize: "18px"
    },
    lixeira:{
        width: 20,
        height: 20,
    },
    clienteBox: {
        backgroundColor: "#F56A4D",
        paddingHorizontal: "20px",
        paddingVertical: "20px",
        borderRadius: "12px",
    },
})