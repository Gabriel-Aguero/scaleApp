import { View, StyleSheet, SafeAreaView, Text, Button } from 'react-native';

import { Header, } from './components';
import { Scale, ScaleDolor } from './screens';
import { COLORS } from './themes'
import { useState } from 'react';

const App = () => { 

  const scaleDefault = {
    scaleId: null,
    color: COLORS.primary,
  }

  const [isScaleSelected, setIsScaleSelected] = useState(false);
  const [selectedScale, setSelectedScale] = useState(scaleDefault)

  const onHandleSelectedScale = (scaleId, color) => {
    setIsScaleSelected(!isScaleSelected)
    console.warn({ scaleId, color });
    setSelectedScale(scaleDefault);
  }

  const onHandleNavigate = () => {
    setIsScaleSelected(!isScaleSelected)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
       <Header title='Escalas de Sedo Analgesia'/> 
       {isScaleSelected ? <ScaleDolor onHandleGoBack={onHandleNavigate}/> : <Scale onSelectedScale={onHandleSelectedScale}/>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;