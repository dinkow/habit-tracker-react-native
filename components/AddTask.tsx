import { useResponsive } from "@/hooks/useResponsive";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

export default function AddTask({ onPress }: {onPress: () => void}) {
  const { button } = useResponsive();

  return (
    <Pressable 
      style={({pressed}) => [ styles.button, pressed && styles.pressed, {width: button, height: button} ]}
      onPress={ onPress }
      accessibilityRole="button"
      accessibilityLabel="Add task"
    >
      <MaterialIcons name="add" size={48} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
    margin: 6,
    width: 80,
    height: 80,
    
    // shadow for iOS and Web
    shadowColor: 'black',
    shadowOffset: { 
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.10,
    shadowRadius: 5,

    // shadow for Android
    elevation: 6,
  },
  pressed: {
    opacity: 0.8,

    // shadow for iOS and Web
    shadowColor: 'black',
    shadowOffset: { 
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,

    // shadow for Android
    elevation: 2,
  },
})