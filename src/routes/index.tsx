import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { useAuth } from '../context';
import Private from './components/Private';
import Public from './components/Public';

export default function Routes() {
    const {user} = useAuth()
    return user ? <Private/> : <Public/> 
}
