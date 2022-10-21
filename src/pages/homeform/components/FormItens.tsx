import React, { useRef, useState, useEffect }  from 'react'
import { IAllQuestionsResponse } from '../../../service/data/types'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableHighlight, Dimensions, StyleSheet, TextInput, FlatList} from 'react-native'
import { CheckIcon, FormControl, Select } from 'native-base';
import DatePicker from 'react-native-modern-datepicker';
import PrevNextButton from './PrevNextButton';


const SCREEN_height = Dimensions.get('window').height
const SCREEN_width = Dimensions.get('window').width

interface IProps {
    index: number,
    setIndex: () => void,
}

export default function FormItens(itens : IAllQuestionsResponse, {index, setIndex}:) {

    const [index, setIndex] = useState(0);
    const [value, setValue] = useState("");
    const [selectedDate, setSelectedDate] = useState('');
    const ref = useRef<FlatList>(null);
    const navigation = useNavigation()
    
    const onToPrev = () => {
        if ( index === 1) { return navigation.navigate("Start") } 
        setIndex( index - 1)
    }

    const onToNext = () => {
        if ( itens && index === itens.data.length - 1) { return navigation.navigate("Private")  }
        setIndex( index + 1)
    }
    

    return( 
        <><FlatList
        data={itens?.data}
        keyExtractor={item => item.id}
        initialScrollIndex={index}
        scrollEnabled={true}
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
        return (
            <View key={item.id} style={{ width: SCREEN_width, alignItems: "flex-start" }}>
            <Text key={`superTitle-${item.id}`} style={styles.title}> {item.title}</Text>

                {item.questions ? item.questions?.map((question: string, key: number) => (
                <TouchableHighlight key={`questionArea-${item.id}-${key}`} style={styles.questions}>
                    <Text key={`questions-${item.id}-${key}`} style={{ color: "white", fontSize: 16 }}>{question}</Text>
                </TouchableHighlight> ))
                : null }

                {item.input ?
                <><Text key={`titleInput${item.id}`} style={styles.title}>{item.input}</Text>
                    <TextInput key={`input-${item.id}`} placeholder={item.input} style={styles.input} /></>
                : null}

                { item.scale ?
                <><View key={`scale${item.id}`} style={{ flexDirection: "row" }}>
                    {item.scale.map((scaleItem: string, key: number) => (
                    <TouchableHighlight style={{
                        padding: 10, margin: 4, flexDirection: "row", backgroundColor: "red",
                        borderRadius: 10, justifyContent: "center", alignItems: "center"
                    }} key={`scaleArea-${item.id}-${key}`}>
                        <Text key={`scaleItem-${item.id}-${key}`}>{scaleItem}</Text></TouchableHighlight>
                    ))}
                </View>
                </>
                : null}

                {item.select ?
                <><Text key={`selectArea-${item.id}`} style={styles.title}>{item.select.title}</Text>
                    <FormControl key={`selectform-${item.id}`} maxW="300" isRequired isInvalid>
                    <Select
                        key={`select-${item.id}`}
                        selectedValue={value}
                        onValueChange={itemValue => console.log(itemValue)}
                        minWidth="220"
                        placeholder={item.select.title}
                        _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size={5} />
                        }}>
                        {item.select.option.map((selectItem: string, key: number) => (
                        <Select.Item key={`selectitem-${item.id}-${key}`} label={selectItem} value={selectItem} />
                        ))}
                    </Select>
                    </FormControl></>
                : null}

                {item.birthday ? <View key={`calendararea-${item.id}`} style={styles.calendar}>
                <Text key={`birthday-${item.id}`} style={styles.birthday}>{item.birthday}</Text>
                <DatePicker
                    key={`calendar-${item.id}`}
                    options={{
                    backgroundColor: '#fff',
                    textHeaderColor: '#0E283F',
                    textDefaultColor: '#0E283F',
                    selectedTextColor: '#fff',
                    mainColor: '#0E283F',
                    textSecondaryColor: '#0E283F',
                    }}
                    current="2022-09-29"
                    minimumDate="1900-01-01"
                    maximumDate="2022-09-29"
                    mode="calendar"
                    minuteInterval={30}
                    style={{ borderRadius: 10 }}
                    onSelectedChange={(date) => setSelectedDate(date)} />
                </View>
                : null}
            </View>
            )}}/>
            <PrevNextButton ontoNext={onToNext} onToPrev={onToPrev} /></>
    )
}



const styles = StyleSheet.create({
    background: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0E283F",
      height: '100%',
    },
    logo: {
      position: "absolute",
      top: 20,
      zIndex:1,
      padding: 20,
    },
    painel: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      height: "80%",
      width: "90%",
      borderRadius: 50,
    },
    container: {
      height: "80%",
      width: "90%",
      paddingTop: "30%",
    },
    input:{
      height: 40,
      backgroundColor: "#fff",
      borderRadius: 5,
      borderWidth: 0.5,
      padding: 10,
      marginTop: 10,
      width: "70%",
    },
    questions: {
      width: "70%",
      flexDirection: "column",
      backgroundColor: "#0E283F",
      borderRadius: 20,
      height: 40,
      marginTop: 10,
      paddingLeft: 10,
      color: "white",
      fontSize: 16,
      justifyContent: "center",
    },
    title: {
      width: "75%",
      fontSize: 16,
      marginTop: 10,
      fontWeight: "bold",
      flexShrink: 1,
      margin: 2,
    },
    buttonArea: {
      flexDirection: "row",
      justifyContent: "space-between",
      top: "100%",
    },
    calendar: {
      width: "80%",
      height: 300,
    },
    birthday: {
      fontWeight: "bold",
      fontSize: 16,
      marginVertical: 8,
    }
  })
  
  