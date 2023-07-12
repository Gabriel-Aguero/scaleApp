import { View, StyleSheet, SafeAreaView, FlatList,  } from 'react-native';
import { Header, ScaleItem } from './components';

import data from '../src/data'
import { COLORS } from './components/themes';

const App = () => { 

  const onSelectedScale = (scaleId) => {
    console.warn({ scaleId });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
       <Header title='Escalas de Sedo Analgesia'/>
       <FlatList 
       data={data}
       style={styles.scaleContainer}
       contentContainerStyle={styles.listScale}
       renderItem={({item}) => <ScaleItem {...item} onSelectedScale={onSelectedScale}/> }
       keyExtractor={(item) => item.id}
       showsVerticalScrollIndicator={false}
       />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scaleContainer:{
    marginHorizontal:15,
    marginTop:15,
  },
  listScale:{
    gap:15,
    paddingBottom: 20,
  }
})

export default App;