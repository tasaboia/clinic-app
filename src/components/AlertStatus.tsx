import React from "react";
import { Stack, Alert , VStack, HStack, IconButton, CloseIcon, Collapse} from "native-base";
import { Text } from 'react-native'

interface IProp {
    status: string,
    title: string,
    isOpen: boolean,
    SetIsOpen: (value: boolean) => void,
}

export function AlertStatus({status, title, isOpen}: IProp) {

    return(
    <Stack space={3} w="100%" maxW="400">
        <Collapse isOpen={isOpen}>
        <Alert w="100%" status={status}>
            <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} justifyContent="space-between">
                    <HStack space={2} flexShrink={1}>
                    <Alert.Icon mt="1" />
                    <Text>{title}</Text>
                    </HStack>
                    <IconButton variant="unstyled" _focus={{
                        borderWidth: 0
                        }} icon={<CloseIcon size="3" />} _icon={{
                        color: "coolGray.600"
                        }} />
                </HStack>
            </VStack>
        </Alert>
        </Collapse>
    </Stack>
        
)}