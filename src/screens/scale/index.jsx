import { View, SafeAreaView, FlatList,  } from 'react-native';
import { ScaleItem } from '../../components';
import  DATA  from '../../constants/data/data.json'
import styles from './styles.js';

const Scale = ( { onSelectedScale }) => {  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>       
       <FlatList 
       data={DATA}
       style={styles.scaleContainer}
       contentContainerStyle={styles.listScale}
       renderItem={({ item }) => (
        <ScaleItem
          {...item}
          onSelectedScale={() =>
            onSelectedScale({ scaleId: item.id, color: item.backgroundColor })
          }      
        />
        )}
       
       keyExtractor={(item) => item.id}
       showsVerticalScrollIndicator={false}
       />
      </View>
    </SafeAreaView>
  );
}

export default Scale;