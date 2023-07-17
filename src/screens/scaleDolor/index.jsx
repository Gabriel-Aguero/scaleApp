import { View, Text, Button } from 'react-native';

import { Styles } from './styles';

const ScaleDolor = ( { onHandleGoBack }) => {
  return (
    <View>
        <Button title="volver" onPress={onHandleGoBack}/>
        <Text>Escala elegida</Text>
    </View>
  )
}

export default ScaleDolor