import AddTask from '@/components/AddTask';
import DayHeader from '@/components/DayHeader';
import Task from '@/components/Task';
import { useCallback, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TaskItem = { id: number, name: string };
let nextId = 0;

export default function Index() {
  const [modal, setModal] = useState(false);
  const openModal = useCallback(() => setModal(true), [])
  const [text, onChangeText] = useState('')
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  return (
    <View style={{ flex: 1}}>
      <SafeAreaView style={ styles.safe }>
        <View style={ styles.container }>
          <DayHeader />
          {tasks.map((task, i) => (
            <Task key={task.id} name={task.name} />
          ))}
        </View>
        <AddTask onPress={openModal} />
      </SafeAreaView>

      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
        presentationStyle='overFullScreen'
        statusBarTranslucent={true}
        onRequestClose={() => setModal(false)}
      >
        <View style={[ styles.modalView, styles.backdrop ]}>
          <View style={ styles.modal}>
            <Text style={ styles.label }>Create a Task</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder='Go to the gym...'
              value={text}
            />
            <Pressable
              style={ ({pressed}) => [ styles.button, pressed && styles.pressed ] }
              onPress={() => {
                setModal(false)
                setTasks([
                  ...tasks,
                  { id: nextId++, name: text }
                ]);
                onChangeText('')
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Add Task</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    margin: 20,
    padding: 35,
    borderRadius: 20,

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
  label: {
    fontSize: 24,
    fontWeight: '600',
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 6,
    margin: 10,
    height: 40,
    width: 200,
    elevation: 1,
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 6,
    padding: 10,
    borderRadius: 10,
    
    // shadow for iOS and Web
    shadowColor: 'black',
    shadowOffset: { 
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.10,
    shadowRadius: 5,

    // shadow for Android
    elevation: 3,
  },
  pressed: {
    opacity: 0.9,

    // shadow for iOS and Web
    shadowColor: 'black',
    shadowOffset: { 
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,

    // shadow for Android
    elevation: 2,
  },
});
