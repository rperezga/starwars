import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Card } from 'react-native-elements'

class PeopleCard extends React.Component {

    render() {
        return (
            <Card
                title={this.props.data.name}
            >
                <View style={styles.body}>
                    <View style={styles.leftColumn}>
                        <Text style={styles.textSep}>
                            Height: {this.props.data.height}
                        </Text>
                        <Text style={styles.textSep}>
                            Mass: {this.props.data.mass}
                        </Text>
                        <Text style={styles.textSep}>
                            Genre: {this.props.data.genre}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.textSep}>
                            Hair color: {this.props.data.hair_color}
                        </Text>
                        <Text style={styles.textSep}>
                            Skin color: {this.props.data.skin_color}
                        </Text>
                        <Text style={styles.textSep}>
                            Eye color: {this.props.data.eye_color}
                        </Text>
                    </View>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    body: { 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        flexDirection: 'row', 
        flex: 1
    },
    leftColumn: { 
        marginRight: 50
    },
    textSep: { 
        marginBottom: 10 
    },
    btnStyle: {
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0
    }
});

export default PeopleCard;
