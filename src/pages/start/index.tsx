
import React from 'react'
import { View, StyleSheet, Dimensions, Animated, Image} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Link, useNavigation } from '@react-navigation/native';
import { Text} from 'native-base'
import UIButton from '../../components/UIButton'
import UILogo from '../../components/UILogo'

import { GetSlides } from '../../service/slides';
import Loading from '../../components/Loadding';
import CountryModal from '../../components/CountryModal';
import { dataStatic } from './data';
import { LinearGradient } from 'expo-linear-gradient';

const SCREEN_height = Dimensions.get('window').height
const SCREEN_width = Dimensions.get('window').width


export default function Start() {
    const navigation = useNavigation();

    const [index, setIndex] = React.useState(0)
    const scrollX = React.useRef(new Animated.Value(0)).current;
    // const { isLoading, isError, data, isSuccess, error} = useQuery(['todos'], GetSlides) 

    const Indicator = ({scrollX} : any) => {
        return <View style={{position: "absolute", bottom: -20, right: "45%", flexDirection: "row"}}>
            {dataStatic?.map ((item: any, index: number) => {
                const inputRange = [(index - 1) * SCREEN_width, index * SCREEN_width, (index + 1) * SCREEN_width]
                const scale = scrollX.interpolate ({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: "clamp",
                })
                return <Animated.View
                    key={`indicator-${index}`}
                    style= {{
                        width: 6,
                        height: 6,
                        borderRadius: 5,
                        margin: 5,
                        backgroundColor: "white",
                        transform: [{
                            scale,
                        }],
                    }}
                />
            })}
        </View>
    }

    return (  
    <View style={styles.background}>
        <LinearGradient
        colors={['#3D9FE0', '#8834F5']}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.shape}
      />
        <View style={styles.container}>
            <UILogo style={{top: 120}}/>
            <View style={styles.card}>
                <Animated.FlatList
                    data={dataStatic}
                    keyExtractor={ (item) => item.key}
                    scrollEventThrottle={32}
                    onScroll={ Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}],
                        {useNativeDriver: false}
                    )}
                    renderItem={({item}) => {
                        return <View key={index}>
                            <View style={styles.cardContainer}>
                                {item.icon ? <Image style={styles.icon} source={item?.icon} />: null}
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.paragraph}>{item.slide}</Text>
                            </View>
                        </View>
                    }}
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <Indicator scrollX={scrollX}/>
            </View>
        

        <View style={styles.gap}>
            <UIButton 
                title='Vamos Começar'
                onPress={() => {navigation.navigate('Register')}}
                loading={false}
            />
            <View style={styles.redirection}>
                <Text style={{color: "#454545"}}>Já tem uma conta?</Text>
                <Link to={{ screen: 'Login' }} style={{color: "#454545" , marginLeft: 6}}>Entrar</Link>
            </View>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    gap: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
    background: {
        backgroundColor: '#fff',
        height: SCREEN_height,
        margin: 0,
        padding: 0,
    },
    shape: {
        backgroundColor: "#6961ec",
        height: 800, 
        width: 600, 
        borderRadius: SCREEN_height/2,
        position: "absolute", 
        zIndex: 0, 
        top: -230, 
        left: -100,
    },
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: '100%',
    },
    redirection: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: 'baseline', 
    },
    card: {
        marginTop: 120,
        height: 200,
    },
    title: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 10,
    },
    paragraph: {
        color: "white",
        maxWidth: "60%",
        textAlign: "center",
      },
    cardContainer: {
        width: SCREEN_width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    rotate: {
        transform: [{ rotate: "35deg"}]
    },
    icon: {
        marginBottom: 10,
    }
});