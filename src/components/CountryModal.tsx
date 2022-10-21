import React, { useState } from 'react'
import { View, Text, StyleSheet, PixelRatio, Switch,ViewProps } from 'react-native'
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal'


export default function CountryModal() {
  const [countryCode, setCountryCode] = useState<CountryCode>('FR')
  const [country, setCountry] = useState<Country>()
  const [withCountryNameButton, setWithCountryNameButton] = useState<boolean>(
    true,
  )
  const [withFlag, setWithFlag] = useState<boolean>(true)
  const [withEmoji, setWithEmoji] = useState<boolean>(true)
  const [withFilter, setWithFilter] = useState<boolean>(true)
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2)
    setCountry(country)
    console.log(country.name)
  }
  return (
    <View style={styles.container}>
      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withEmoji,
          onSelect,
        }}
        visible
      />
      
    </View>
  )
}


export const Row = (
  props: ViewProps & { children?: React.ReactNode; fullWidth?: boolean }
) => (
  <View
    {...props}
    style={[
      styles.row,
      props.style,
      props.fullWidth && {
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 50
      }
    ]}
  />
)
  
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
      },
    container: {
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcome: {
      fontSize: 17,
      textAlign: 'center',
      margin: 5,
    },
    instructions: {
      fontSize: 10,
      textAlign: 'center',
      color: '#888',
      marginBottom: 0,
    },
    data: {
      maxWidth: 250,
      padding: 10,
      marginTop: 7,
      backgroundColor: '#ddd',
      borderColor: '#888',
      borderWidth: 1 / PixelRatio.get(),
      color: '#777',
    },
  })
  