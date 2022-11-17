import { View } from 'react-native';
import ConteudoList from './ConteudoList';



export default ConteudosProfessoresScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ConteudoList tipo="2" />
        </View>
    );
};
