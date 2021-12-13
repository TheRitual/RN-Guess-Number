import React from 'react';
import { Modal, Text, View, FlatList } from 'react-native';
import Card from '../../../../common/components/Card';
import CustomButton from '../../../../common/components/CustomButton';
import styles from './styles';

const MovesList = ({ title, moves, visible, onClose }) => {
    return (
        <Modal transparent={true} visible={visible}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    <View style={styles.listContainer}>
                        <FlatList keyExtractor={item => item} data={moves} renderItem={({ item, index, separators }) => {
                            return (
                                <View style={styles.listItem}>
                                    <Text style={styles.listText}>{moves.length - index}</Text>
                                    <Text style={styles.listText}>---</Text>
                                    <Text style={styles.listText}>{item}</Text>
                                </View>
                            )
                        }} />
                    </View>
                    <CustomButton style={styles.closeButton} onPress={onClose}>Close</CustomButton>
                </Card>
            </View>
        </Modal>
    );
}

export default MovesList;