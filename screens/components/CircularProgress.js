import React from 'react'
import { StyleSheet, View } from 'react-native'
import CircularProgressWithChild from 'react-native-circular-progress-indicator'

export default function CircularProgress() {
    return (
        <View 
            style={{
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '100%',
                zIndex: 10
            }}
        > 
            <CircularProgressWithChild
                value={100}
                duration={2000}
                radius={35}
                activeStrokeColor={'#F38000'}
                inActiveStrokeColor={'#F38000'}
                inActiveStrokeOpacity={0.2}
                textColor={'#F38000'}
                valueSuffix={'%'}
                fontSize={14}
                onAnimationComplete={() => console.log('CompletedProgress')}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
