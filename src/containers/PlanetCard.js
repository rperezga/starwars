import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Card } from 'react-native-elements'

class PlanetCard extends React.Component {

    render() {
        return (
            <Card
                title={this.props.data.name}
            >
                <View style={styles.body}>
                    <View style={styles.leftColumn}>
                        <Text style={styles.textSep}>
                            Rotation period: {this.props.data.rotation_period}
                        </Text>
                        <Text style={styles.textSep}>
                            Orbital Period: {this.props.data.orbital_period}
                        </Text>
                        <Text style={styles.textSep}>
                            Diameter: {this.props.data.diameter}
                        </Text>
                        <Text style={styles.textSep}>
                            Climate: {this.props.data.climate}
                        </Text>
                    </View>
                    <View>                        
                        <Text style={styles.textSep}>
                            { parseFloat(this.props.data.population) > 1000000 ? `Polupation: ${this.props.data.population.slice(0, -6)} M` : `Population ${this.props.data.population}` }                            
                        </Text>
                        <Text style={styles.textSep}>
                            Residents: {this.props.data.residents.length}
                        </Text>
                        <Text style={styles.textSep}>
                            Films: {this.props.data.films.length}
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
        marginRight: 30
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

export default PlanetCard;
