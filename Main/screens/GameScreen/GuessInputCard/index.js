import React, { useRef } from 'react';
import { Modal, Text, View } from 'react-native';
import Card from '../../../common/components/Card';
import CustomButton from '../../../common/components/CustomButton';
import Input from '../../../common/components/Input';
import styles from '../styles';

const GuessInputCard = ({ visible, inputValue, guessHandler, round, onInputChange }) => {
    const inputRef = useRef(null);

    return (
        <Modal transparent={true} animationType="fade" visible={visible} onShow={() => inputRef.current.focus()}>
            <View style={styles.guessContainer}>
                <Card style={styles.guess}>
                    <Text style={styles.roundText}>ROUND {round}</Text>
                    <Text style={styles.info}>Your Guess:</Text>
                    <Input
                        caretHidden
                        blurOnSubmit
                        keyboardType="numeric"
                        maxLength={2}
                        style={styles.guessInput}
                        value={inputValue}
                        onChangeText={onInputChange}
                        ref={inputRef}
                    />
                    <CustomButton
                        onPress={guessHandler}
                        textStyle={styles.guessButtonText}
                        style={styles.guessButton}>
                        Guess!
                    </CustomButton>
                </Card>
            </View>
        </Modal>
    );
}

export default GuessInputCard;