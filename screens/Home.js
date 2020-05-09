import 'react-native-gesture-handler';
import React, { useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator, Image} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

export default function Home({ navigation }){
// ========== Structure of the Home Page =========== //
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
          .then((response) => response.json())
          .then((json) => setData(json.data))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    // const pressHandler = () => {
    //     navigation.navigate('Elevators', item );
    //   }

// ================================================== //

// ========== Structure of the Home Page =========== //
    return (
        <View style={globalStyles.container}>
        <View style={styles.backgroundContainer}>
        <Image style={styles.backgroundImage} source={require('../assets/darkbuildingbackground.jpg')}/>

        </View>
        {isLoading ? <ActivityIndicator/> : (
        <FlatList
            data={data}
            // keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Elevators', item )}>
                <Card>
                <Text>{item.employee_name}, {item.id}</Text>
                </Card>
                </TouchableOpacity>
            )}
        />)}
        </View>
        );
};// ================================================== //


// ======== Styling of the Home Page ================ //
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0000',
        alignContent: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        width: '80%',
    },
    logo: {
        position: 'relative',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    backgroundContainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      },
      backgroundImage:{
        flex: 1,
        width: null,
        height: null
      },
});
