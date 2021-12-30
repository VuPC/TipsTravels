import React from 'react'
import { 
    StyleSheet, Text, View, 
    TouchableOpacity, Image, TextInput
} from 'react-native'
import SelectCountry from '../category/components/SelectCountry'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

export default function Header({ name, getValueSearch, showDrawHome }) {
    return (
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
            <HeaderForm title={name} funcShowDrawHome={showDrawHome} />
            <SearchForm funcSearch={getValueSearch} />
        </View>
    )
}

const FuncHeaderForm = ({ nameHeader, funcShowDrawHome }) => {
    const navigation = useNavigation()

    switch (nameHeader) {
        case 'Home':
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => funcShowDrawHome('')}
                >
                    <Image
                        style={{
                            tintColor: '#F38000',
                            resizeMode: "contain",
                            height: 30,
                            width: 30
                        }}
                        source={require('../../assets/images/icons/icon_hamburger.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )
        case 'Category':
            return (
                <SelectCountry />
            )
        case 'Popular Destination':
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="arrow-left" size={25} color="#F38000" />
                </TouchableOpacity>
            )
        default:
            return;
    }
}

const HeaderForm = ({ title, funcShowDrawHome }) => (
    <View style={styles.menu}>
        <View style={{ position: 'absolute', left: 0, top: 0 }}>
            <FuncHeaderForm nameHeader={title} funcShowDrawHome={funcShowDrawHome} />
        </View>
        <Text style={styles.titleHeader}>{ title }</Text>
    </View>
)

const SearchForm = ({ funcSearch }) => (
    <View style={{ justifyContent: 'center' }}>
        <Image
            style={{
                tintColor: '#F38000',
                resizeMode: "contain",
                height: 25,
                width: 25,
                position: 'absolute',
                left: 14,
                zIndex: 10,
            }}
            source={require('../../assets/images/icons/icon_search.png')}
            resizeMode="contain"
        />
        <TextInput
            style={styles.inputSearch}
            placeholder="Search"
            onChangeText={(search) => {
                funcSearch(search)
            }}
        />
    </View>
)

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
        elevation: 3,
        zIndex: 10
    },
    titleHeader: {
        color: '#F38000',
        fontSize: 26,
        fontWeight: 'bold',
    },
    inputSearch: {
        backgroundColor: '#EDEDED',
        padding: 10,
        fontSize: 18,
        borderRadius: 8,
        paddingLeft: 50,
        color: '#BCBCBC'
    },
})
