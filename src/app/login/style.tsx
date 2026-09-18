import {Dimensions, StyleSheet} from "react-native"

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundColor: "black",
        gap: 30
    },

    textos:{
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        color: "white"
    },

    textosInput:{
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        color: "gray",
        borderColor: "white",
        borderRadius: 30,
        borderStyle: "solid",
        borderWidth: 1
    },


    botaologin:{
        borderRadius: 30,
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "red",
        color: "white",
        height: 30,
        width: 100
    },

    containertext:{
        borderColor: "white",
        borderStyle: "solid"
    },

    containercadastro:{
        color: "white"
    },

    cadastro:{
        color: "white",
        backgroundColor:"red"
    }
})

