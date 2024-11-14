import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {

  onPress?: () => void;
};

export default function DeleteButton({ onPress }: Props) {
    return (
        <View style={styles.buttonContainer}>  
              <Pressable style={styles.button } onPress={onPress}>
                <Text style={styles.buttonLabel}>❌</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 25,
      height: 25,
      marginLeft: 10
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