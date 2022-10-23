import { Box, Center, CheckIcon, Pressable, ScrollView, Select } from 'native-base'
import React, { useState } from 'react'
import { Text, View , StyleSheet, StatusBar} from 'react-native'
import { Calendar } from 'react-native-calendars'
import UIButton from '../../components/UIButton'
import { UIHeading } from '../../components/UIText'
import { useProData } from '../../context/Professional'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { CaretRight } from 'phosphor-react-native'


export default function Add(id?: string) {
  const { professionals, getAllPro} = useProData()
  const [isProSelected, setIsProSelected] = useState(true)
  const [service, setService] = React.useState("");

  getAllPro()

  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  console.log(professionals)
  
  const SelectedPro = () => { 
    return (
      <View style={styles.addPage}>
            <Select selectedValue={service} minWidth="200" 
            accessibilityLabel="Psicologo" 
            placeholder="Psicologo"
            _selectedItem={{endIcon: <CheckIcon size="5" />}} 
            mt={1} 
            onValueChange={itemValue => setService(itemValue)}>
            {professionals?.map((item,key) => (
              <Select.Item key={key} label={item.name} value={item.name} />
            ))}
            </Select>
        </View>
    )
  }
  return (
    <ScrollView style={{marginTop:StatusBar.currentHeight, padding: 18 }}>
    <View  style={{marginTop: 10 }}>
      <UIHeading style={{marginVertical: 6}}  size="2xSmall" color="violet">
        Escolha seu psicologo
      </UIHeading>
      
    <SelectedPro/> 
    <UIHeading style={{marginVertical: 6}}  size="2xSmall" color="violet">Escolha uma data</UIHeading>
    <Calendar/>
    
    <Pressable style={{flexDirection: "row", alignItems: "center", marginVertical: 12}} onPress={showTimepicker}>
      <UIHeading color="violet">Escolher um horário</UIHeading>
      <CaretRight style={{marginLeft: 20}} size={18} />
    </Pressable>

    <UIButton  title='Solicitar' onPress={()=> console.log("data: ", date) }/>
    </View>

    

    </ScrollView>
    
  )
}




const styles = StyleSheet.create({
    addPage: {
        marginBottom: 8,
    }
})