import React from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'

export default function CustomModal({ handleButton, isShowModal }) {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isShowModal}
                onRequestClose={() => {
                    console.log("Modal has been closed.")
                }}
            >
                <View style={styles.modal}>
                    <View style={{ 
                        backgroundColor: '#ffffff',
                        borderRadius: 10,
                        padding: 40,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Log Out</Text>
                        <Text style={{ fontSize: 16, marginTop: 10 }}>Are you sure log out?</Text>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => handleButton('cancel', !isShowModal)}
                                style={{
                                    backgroundColor: '#F38000',
                                    borderRadius: 6,
                                    padding: 10,
                                    marginRight: 10
                                }}
                            >
                                <Text style={{ color: '#ffffff', fontSize: 16 }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => handleButton('yes', !isShowModal)}
                                style={{
                                    backgroundColor: '#F38000',
                                    borderRadius: 6,
                                    padding: 10
                                }}
                            >
                                <Text style={{ color: '#ffffff', fontSize: 16 }}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'rgba(52,52,52,.8)',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
