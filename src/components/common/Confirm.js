import React from 'react';
import {Text, View, Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Card} from './Card';
import {Button} from './Button';

const Confirm = ({children, visible, onAccept, onDecline}) => {
    const {containerStyle, textStyle, cardSectionStyle} = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}>
            <View style={containerStyle}>
                <Card>
                    <CardSection style={cardSectionStyle}>
                        <Text style={textStyle}>{children}</Text>
                    </CardSection>

                    <CardSection style={{backgroundColor:'white'}}>
                        <Button onPress={onAccept}>
                            Yes
                        </Button>
                        <Button onPress={onDecline}>
                            No
                        </Button>
                    </CardSection>
                </Card>
            </View>
        </Modal>
    )
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
        backgroundColor:'white'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export {Confirm};