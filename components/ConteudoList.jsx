import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ToastAndroid, FlatList, ProgressBarAndroidComponent } from 'react-native';
import LeiturinhaApi from '../api/LeiturinhaApi';
import ConteudoItem from './ConteudoItem';


function ConteudoList(props) {
   
      const [conteudos, setConteudos] = useState([]);

      const api = new LeiturinhaApi(props.tipo);

      useEffect(() => {
         api.list()
          .then(res => {
            setConteudos(res);
          });
      }, []);


    return(
        <View style={styles.container}>
            <FlatList style={styles.flatListStyle}
                data={conteudos}
                renderItem={({item}) => <ConteudoItem tipo={props.tipo} titulo={item.titulo} conteudo={item.conteudo} imagemCapa={item.imagemCapa}  imagemConteudo={item.imagemConteudo} />}
                keyExtractor={item => item.id}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00000011',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatListStyle: {
      minWidth: "90%"
    }
  });

export default ConteudoList;