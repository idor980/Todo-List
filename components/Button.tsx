import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  theme?: 'confirm' | 'cancel';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'cancel') {
        return (
            <View style={[styles.buttonContainer, {backgroundColor: '#ff0000'}]}>  
                  <Pressable style={styles.button } onPress={onPress}>
                    <FontAwesome name="minus-square" size={18} color="#fff" style={styles.buttonIcon} />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    return (
        <View style={[styles.buttonContainer, {backgroundColor: '#008000'}]}>  
        <Pressable style={styles.button } onPress={onPress}>
            <FontAwesome name="plus-square" size={18} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    </View>
      );
   
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 150,
      height: 68,
      padding: 3,
      marginBottom: 10,
      borderRadius: 10,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });