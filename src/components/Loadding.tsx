import { HStack, Spinner } from 'native-base';
import React from 'react'

const Loading = () => {
    return (
    <><HStack space={8} justifyContent="center">
        <Spinner color="#0E283F" />
    </HStack></>
)}

export default Loading