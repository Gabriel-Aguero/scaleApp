import { TouchableHighlight, Text, View } from "react-native";

import { styles } from './styles.js'
import { COLORS, FONTS } from '../themes';

const ScaleItem = ({ id, title, backgroundColor, description, onSelectedScale }) => {

        return(
           <TouchableHighlight 
                onPress={()=> onSelectedScale(id)} 
                style={[styles.container, { backgroundColor}]}
                underlayColor={COLORS.secondary}>
            <View style={styles.containerButon}>
                <Text style={styles.scaleName}>{title}</Text>
                <Text style={styles.scaleDescription}>{description}</Text>
            </View>
           </TouchableHighlight> 
        )
}

export default ScaleItem;