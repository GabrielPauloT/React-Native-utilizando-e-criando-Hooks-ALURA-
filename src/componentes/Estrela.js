import React from "react";
import { TouchableOpacity, Image, StyleSheet } from 'react-native'

import estrela from "../assets/produtores/estrela.png";
import estrelaCinza from "../assets/produtores/estrelaCinza.png";

export default function Estrela({ 
        onPress, 
        desabilitada = true,
        preenchida,
        grande = false,
    }){
    const estilos = estilosFuncao(grande);

    const getImagem = () => {
        if (preenchida) {
            return estrela;
        }
        return estrelaCinza;
    }

    return <TouchableOpacity
    onPress = {onPress}
    disable= {desabilitada}
    >
    <Image source={getImagem()} style={estrela}/>
</TouchableOpacity>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    }
});