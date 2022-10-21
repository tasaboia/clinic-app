import { PresenceTransition } from 'native-base'
import React from 'react'
import { useState } from 'react'
import { ReactNode } from 'react'
import { Children } from 'react'

interface IWrapper {
  children?: React.ReactNode | React.ReactNode []
  from?: number,
  to?: number,
  visible?: boolean
}

export default function TranslateX(props: IWrapper) {
  return (
    <PresenceTransition visible={true} initial={{
      opacity: 0,
      translateX: props.from,
    }} animate={{
      opacity: 1,
      translateX: props.to,
      transition: {
        duration: 500
      }
    }}>
      {props.children}
    </PresenceTransition>
  )
}
