import { useResponsive } from '@/hooks/useResponsive';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type TaskRowProps = {
  name: string;
}

export default function Task({ name }: TaskRowProps) {

  const { gapSm, cell } = useResponsive();

  const [checkBoxes, setCheckBoxes] = useState(Array(7).fill(false));

  const toggleCheckBox = (index: number) => {
    const nextCheckBoxes = checkBoxes.map(( box, i ) => {
      if (i === index) {
        return !box;
      } else {
        return box;
      }
    });
    setCheckBoxes(nextCheckBoxes);
  }

  return (
    <View style={[
      styles.taskContainer,
      { margin: gapSm },
      ]}>
      <View style={[ styles.checkBoxRow, { gap: gapSm } ]}>
        {checkBoxes.map((done, i) => (
          <Pressable
            key={i}
            style={[
              styles.cell, 
              { width: cell, height: cell },
              done && styles.cellDone
            ]}
            onPress={() => toggleCheckBox(i)}
          />
        ))}
      </View>
      <View style={ styles.labelContainer }>
        <Text style={ styles.label }>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 6,
    padding: 8,
    marginBottom: 6,
    
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
  checkBoxRow: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  cell: {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
  },
  cellDone: {
    backgroundColor: 'black',
  },
  labelContainer: {
  },
  label: {
    fontSize: 24
  },
});