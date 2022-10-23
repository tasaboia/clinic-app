import { Avatar, Divider, ScrollView } from 'native-base'
import React, { useEffect, useState } from 'react'
import { StatusBar, View ,StyleSheet } from 'react-native'
import UIButton from '../../components/UIButton'
import { UIHeading } from '../../components/UIText'
import { useQuery, useMutation } from '@tanstack/react-query'
import { allPro } from '../../service/data'
import Loading from '../../components/Loading';
import { IPro } from '../../service/data/types'
import { useProData } from '../../context/Professional'

export default function Psychologists() {
  const { professionals, getAllPro } = useProData()
  
  if(!professionals) {
    getAllPro()
  }
  return ( 
    <ScrollView showsVerticalScrollIndicator>
      { professionals ? professionals.map((item, key) => (
          <Card key={key} name={item.name} avatar={item.avatar} focus={item.focus} bio={item.bio}/>
      ))
      :  <Loading/> }
    </ScrollView>
    )
}

const Card = (item: IPro) => {
  return (
    <View style={{margin: 10, padding: 8, borderRadius:10, backgroundColor: "#fff", 
      justifyContent: "center", flexDirection: "column"}}>
        <View style={styles.cardHead}>
          <Avatar source={{uri: item.avatar}} size={'xl'}/>
          <View style={{paddingLeft: 10, maxWidth: "80%"}} >
            <UIHeading  size="medium">{item.name}</UIHeading>
            <UIHeading style={{paddingLeft: 2}} size="xSmall" color="gray/800">{item.focus}</UIHeading>
        </View>
       
      </View>
      <Divider/>
      <UIHeading style={{paddingTop: 4}} size="2xSmall" Weight="light">
        {item.bio}
        </UIHeading>
        <UIButton title='Agenda' onPress={()=> console.log("aqui")}/>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  cardHead: {
    flexDirection: "row", 
    alignItems: "center",
    marginBottom: 8,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 6,
  }
});
