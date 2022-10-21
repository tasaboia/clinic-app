import AnimatedLottieView from 'lottie-react-native'
import React from 'react'

export default function SucessFeedback() {
  return (
    <AnimatedLottieView
        style={{width: 120, height:120}}
        autoPlay
        source={require("../../../assets/lottie/ok-animation.json")}
    />
  )
}
