import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import firebase from '../../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Timeline from './components/Timeline'
import Header from '../components/Header'
import DrawHome from './components/DrawHome'
import CustomModal from './components/CustomModal'
import CircularProgress from '../components/CircularProgress'

export default function Home({navigation}) {
    const [isLoading, setIsLoading] = useState(false)
    const [listPopular, setListPopular] = useState([])
    const [listExplore, setListExplore] = useState([])
    const [listCategories, setListCategories] = useState([])
    const [isShowDraw, setIsShowDraw] = useState(false)
    const [isShowModal, setIsShowModal] = useState(false)

    const getValueSearch = (search) => {
        console.log('Home: ',search)
    }

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            AsyncStorage.setItem('isLogin', JSON.stringify(false));
            AsyncStorage.setItem('isGetStart', JSON.stringify(false));
            navigation.replace("SignIn");
        }).catch(error => {
            console.log(error.message);
        })
    }

    const getPopularData = async () => {
        let listArrPopular = []
        await firebase.firestore().collection('home-popular').get().then((querySnapshot) => {
            querySnapshot.forEach(snapshot => {
                let data = snapshot.data()
                listArrPopular.push(data["list-data"])
            })
        })
        setListPopular(listArrPopular)
    }
    
    const getExploreData = async () => {
        let listArrExplore = []
        await firebase.firestore().collection('home-explore').get().then((querySnapshot) => {
            querySnapshot.forEach(snapshot => {
                let data = snapshot.data()
                listArrExplore.push(data["list-data"])
            })
        })
        setListExplore(listArrExplore)
    }

    const getCategoriesData = async () => {
        let listArrCategories = []
        await firebase.firestore().collection('home-categories').get().then((querySnapshot) => {
            querySnapshot.forEach(snapshot => {
                let data = snapshot.data()
                listArrCategories.push(data["list-data"])
            })
        })
        setListCategories(listArrCategories)
    }

    const handleDrawHome = (title) => {
        console.log(title)
        if(title != '') {
            if(title == 'LogOut') {
                setIsShowModal(true)
            } else {
                console.log('Go to Screen: ',title)
                setIsShowDraw(!isShowDraw)
            }
        } else {
            setIsShowDraw(!isShowDraw)
        }
    }

    const handleButton = (val,key) => {
        setIsShowModal(key)
        if(val == 'cancel') {
            console.log('cancel')
        } else {
            console.log('yes')
            handleSignOut()
        }
    }

    useEffect(() => {
        getPopularData()
        getExploreData()
        getCategoriesData()

        setTimeout(() => {
            setIsLoading(true)
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <Header name="Home" getValueSearch={getValueSearch} showDrawHome={handleDrawHome} />
            <Timeline listPopular={listPopular} listExplore={listExplore} listCategories={listCategories} />
            { !isLoading ? <CircularProgress /> : <></> }
            { isShowDraw ? <DrawHome handleDrawHome={handleDrawHome} /> : <></> }
            { isShowModal ? <CustomModal isShowModal={isShowModal} handleButton={handleButton} /> : <></> }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 30
    }
})
