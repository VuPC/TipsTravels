import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, RefreshControl } from 'react-native'
import GlobalDataModel from '../../data/DataCommon'
import BoxImageContent from '../components/BoxImageContent'
import Header from '../components/Header'
import firebase from '../../firebase'
import { useDispatch } from 'react-redux'
import { setSelectCategory } from '../../redux/category/action'
import CircularProgress from '../components/CircularProgress'

export default function Category() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [listCategories, setListCategories] = useState([])
    const [listSearchCategories, setListSearchCategories] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [isScroll, setIsScroll] = useState(false)

    const getValueSearch = (search) => {
        if(search) {
            let arrSearch = listSearchCategories.filter((item) => 
                item.country.toLowerCase().includes(search.toLowerCase())
            )
            setListCategories(arrSearch)
        } else {
            setListCategories(listSearchCategories)
        }
    }

    const getListCategories = async (val) => {
        let listArrCategories = []
        let listArrData = []

        await firebase.firestore().collection('categories-list')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(snapshot => {
                    let data = snapshot.data()
                    listArrCategories.push(data["list-data"])
                })
            })
            .catch((error) => {
                console.log('Get error: ', error)
            })

        if(val == 'list') {
            setListCategories(listArrCategories)
            setListSearchCategories(listArrCategories)
        } else {
            listArrCategories.map((value) => {
                if(value.category == val) {
                    listArrData.push(value)
                }
            })
            setListCategories(listArrData)
            setListSearchCategories(listArrData)
        }
    }

    const getSelectCategories = async () => {
        let listArrSelectCategories = []
        await firebase.firestore().collection('select-categories')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(snapshot => {
                    let data = snapshot.data()
                    listArrSelectCategories.push(data)
                })
            })
            .catch((error) => {
                console.log('Get error: ', error)
            })
            dispatch(setSelectCategory(listArrSelectCategories))
    }

    const handleTicketPlace = (value) => {
        getListCategories(value)
    }

    useEffect(() => {
        getListCategories('list')
        getSelectCategories()
        
        setTimeout(() => {
            setIsLoading(true)
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <Header name="Category" getValueSearch={getValueSearch} />
            <View style={{ paddingHorizontal: 20, paddingVertical: 10, zIndex: -1 }}>
                <ScrollCategoriesHorizontal handleTicketPlace={handleTicketPlace} />
                <ListCategories 
                    datas={listCategories} 
                    isFetching={isFetching} 
                    setIsFetching={setIsFetching} 
                    isScroll={isScroll}
                    setIsScroll={setIsScroll}
                />
            </View>
            { !isLoading ? <CircularProgress /> : <></> }
        </View>
    )
}

const TicketPlace = ({ ticket, handleTicketPlace }) => (
    <TouchableOpacity
        activeOpacity={1}
        style={{
            paddingHorizontal: 25,
            paddingVertical: 10,
            borderWidth: 1,
            borderRadius: 20,
            marginRight: 10,
        }}
        onPress={() => handleTicketPlace(ticket)}
    >
        <Text style={{ fontSize: 16 }}>{ ticket }</Text>
    </TouchableOpacity>
)

const ScrollCategoriesHorizontal = ({ handleTicketPlace }) => {
    let ItemsTicket = GlobalDataModel.listTicketPlace.map((v,i) => {
        return <TicketPlace key={i} ticket={v} handleTicketPlace={handleTicketPlace} />
    })

    return (
        <View>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
            >
                { ItemsTicket }
            </ScrollView>
        </View>
    )
}

const ListCategories = ({ datas, isFetching, setIsFetching, isScroll, setIsScroll }) => {
    if(datas == undefined) {
        return null
    } else {
        let ItemCategory = datas.map((data,index) => {
            return <BoxImageContent key={index} url={data.image} title={data.title} country={data.country} />
        })

        const isLoadingData = ({layoutMeasurement, contentOffset, contentSize}) => {
            const paddingToBottom = 20;
            return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
        }

        const renderItem = ({item, index}) => {
            return <BoxImageContent key={index} url={item.image} title={item.title} country={item.country} />
        }

        const onRefresh = () => {
            setIsFetching(true)

            setTimeout(() => {
                setIsFetching(false)
            }, 2000)
        }

        const onScroll = () => {
            console.log('onScroll')
            // if(!isScroll) return null
            //     setIsScroll(true)
        }
        
        return (
            <View style={styles.scrollView}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={isFetching} onRefresh={() => onRefresh()} />
                    }
                    scrollEventThrottle={400}
                    onScroll={({nativeEvent}) => {
                        if (isLoadingData(nativeEvent)) {
                            onScroll()
                        }
                    }}
                >
                    { ItemCategory }
                </ScrollView>
            </View>

            // <View style={styles.scrollView}>
            //     <FlatList 
            //         data={datas}
            //         renderItem={renderItem}
            //         keyExtractor={item => item.id}
            //         onRefresh={() => onRefresh()}
            //         refreshing={isFetching}
            //         onEndReached={onScroll}
            //     />
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 30,
    },
    scrollView: {
        marginTop: 15,
        height: '78%'
    }
})
