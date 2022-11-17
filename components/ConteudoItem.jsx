import { Text, View, StyleSheet, Image } from "react-native";

function ConteudoItem(props) {

    if(props.tipo === "1")
            return(
            <View style={[styles.viewStyle]}>
                <Text style={[styles.textStyle, styles.titleStyle]}>{props.titulo}</Text>
                
                <Text style={[styles.textStyle]}>{props.conteudo.substring(0, 30)}...</Text>
                <Image style={[styles.imageStyle]} source={{
                        uri: `data:image/jpeg;base64,${props.imagemCapa}`
                            }} />
            </View>
            );
    else 
            return(
                <View style={[styles.viewStyle2]}>
                    <Text style={[styles.textStyle2, styles.titleStyle2]}>{props.titulo}</Text>
                    <Image style={[styles.imageStyle]} source={{
                            uri: `data:image/jpeg;base64,${props.imagemConteudo}`
                                }} />
                    
                    <Text style={[styles.textStyle]}>{props.conteudo.substring(0, 30)}...</Text>
                </View>
                );
    
} 

const styles = StyleSheet.create({
    viewStyle: {
        with: "100%",
        height: "auto",
        backgroundColor: "#FFFFFFAB",
        padding: 20,
        borderRadius: 8,
        margin: 10
    },
    viewStyle2: {
        with: "100%",
        height: "auto",
        backgroundColor: "#F5FFFA",
        padding: 20,
        borderRadius: 8,
        margin: 10
    },
    textStyle: {
        color: "black",
        fontSize: 20
    },
    textStyle2: {
        color: "gray",
        fontSize: 20
    },
    titleStyle: {
        marginBottom: 10,
        fontWeight: "700",
        color:"#000099"
    },
    titleStyle2: {
        marginBottom: 10,
        fontWeight: "700",
        color:"#990099"
    },
    imageStyle: {
        width: "100%",
        height: 200,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8
    }
});

export default ConteudoItem;


