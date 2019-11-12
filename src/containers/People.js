import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    ActivityIndicator
} from 'react-native';
import PeopleCard from './PeopleCard';

class PeopleScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.findPeople();
    }

    findPeople = async () => {
        const rawResponse = await fetch(`https://swapi.co/api/people`, {
            method: 'GET'
        });

        const status = await rawResponse.status;
        const content = await rawResponse.json();

        if (status === 200) {
            this.setState({ data: content.results, isLoading: false })
        }
    }


    render() {
        return (
            <View >
                <View style={styles.titleView}>
                    <Text style={styles.title}>People List</Text>
                </View>
                {this.state.isLoading ?
                    <ActivityIndicator size='large' />
                    :
                    <SafeAreaView style={styles.container}>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => <PeopleCard data={item} />}
                            keyExtractor={item => item.url}
                        />
                    </SafeAreaView>
                }
            </View>
        );
    }
}

const styles = {
    container: {
        marginBottom: 120
    },
    mainView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column'
    },
    titleView: {
        alignItems: 'center',
        flexDirection: 'column',
        marginVertical: 8
    },
    title: {
        fontSize: 25,
    }
};

export default PeopleScreen;