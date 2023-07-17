import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  containerButon:{    
    paddingHorizontal:15,
    paddingVertical:10,
    gap:10,
    justifyContent: 'space-between',
  },
  scaleName:{
    fontWeight: 'bold',    
    fontSize: 20,
    color: COLORS.white,
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 6,
  },
});