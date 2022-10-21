import React from 'react'
import { ViewProps } from 'react-native'
import { Image, View, StyleSheet } from 'react-native'

interface IView extends ViewProps {}
export default function UILogo(props: IView) {
  return (  
    <View {...props}>
        <Image
            source={require('./img/logo.png')}
        />
    </View>
  )
}