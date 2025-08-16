// components/DatePickerInput.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerInput = ({ label, placeholder, onDateChange }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    // Chama a função passada via prop para notificar o componente pai
    if (onDateChange) {
      onDateChange(currentDate);
    }
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity onPress={showDatePicker} style={styles.touchableArea}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          value={date.toLocaleDateString('pt-BR')} // Formata para PT-BR
          editable={false} // Impede a digitação manual
        />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date" // Define o seletor para o modo de data
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2e4057',
    marginBottom: 5,
  },
  touchableArea: {
    width: '100%',
  },
  textInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#ecececff',
  },
});

export default DatePickerInput;