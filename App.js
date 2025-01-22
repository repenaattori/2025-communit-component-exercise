import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import { PaperProvider, RadioButton } from 'react-native-paper';
import { Dropdown, DropdownInput } from 'react-native-paper-dropdown';


const TRAIN_SPLIT = {
  Day1: ['Bench press', 'Incline dumbbell press', 'Cable crossovers', 'Overhead press', 'Lateral raises'],
  Day2: ['Cable row', 'Lat Pulldown', 'Bent over flies', 'Hyperextensions', 'Bicep barbell curls'],
  Day3: ['Squat', 'Leg press', 'Leg extension', 'Leg curl', 'Standing calf raises', 'Plank']
}


export default function App() {

  const [splitday, setSplitday] = useState('Day1');
  const [exercise, setExercise] = useState(TRAIN_SPLIT.Day1[0]);
  const [repetitions, setRepetitions] = useState(0);

  const options = TRAIN_SPLIT[splitday].map(e => ({ label: e, value: e }));

  function updateSplitDay(day) {
    //Update the first exercise for the dropdown from the split day array
    setExercise(TRAIN_SPLIT[day][0]);
    //Update the splitday state
    setSplitday(day);
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <RadioButton.Group value={splitday} onValueChange={updateSplitDay}>
          <View style={styles.radioButtonView}>
            <RadioButtonView label={'Day1'} />
            <RadioButtonView label={'Day2'} />
            <RadioButtonView label={'Day3'} />
          </View>
        </RadioButton.Group>
        <Dropdown
          options={options}
          value={exercise}
          onSelect={setExercise}
          mode='outlined'
        />
        <View style={styles.spinnerView}>
          <Text>Repetition:</Text>
          <View>
            <InputSpinner
              value={repetitions}
              onChange={setRepetitions}
              skin='modern'
            />
          </View>
        </View>
        <Text style={styles.result}>{exercise} x {repetitions}</Text>

      </View>
    </PaperProvider>
  );
}

function RadioButtonView({ label }) {
  return (
    <View style={styles.radioButtonView}>
      <Text>{label}</Text>
      <RadioButton value={label} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
    gap: 10
  },
  radioButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  spinnerView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10
  },
  result:{
    fontSize: 22,
    fontWeight: 'bold'
  }
});
