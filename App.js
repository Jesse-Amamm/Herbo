import React from 'react';
import {StyleSheet, Text, Dimensions, Platform, View, Image, TextInput, Button, ActivityIndicator,} from 'react-native';
import Splash from './components/Splash';
import axios from 'axios';
import SQLite from 'react-native-sqlite-storage';
import {StackNavigator} from 'react-navigation';
import {AppLoading, Font} from 'expo';
/*import { Avatar } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import FontAwesome
    from './node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import MaterialIcons
    from './node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';*/

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
var db = SQLite.openDatabase({name: 'test.db',createFromLocation: '~Herbo.db'});

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timePassed: false, value: ''};
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM data', (tx, results) => {

                var len = results.row.length;
                if (len > 0){
                    var row = results.rows.item(0);
                    this.setState({value: row.name})
                }
            })
        })
    }componentDidMount() {

    }

    render() {
        setTimeout(() => {
            this.setState({timePassed: true})
        }, 4000);
        if (!this.state.timePassed) {
            return <Splash/>;
        } else {
            return (
                <View style={BackStyles.main}>
                    <View style={BackStyles.container}>
                        <TextInput placeholder="Search for your herbs..."
                                   underlineColorAndroid={'transparent'} style={BackStyles.textBox}/>
                    </View><View style={BackStyles.herb_box}>
                    <Image style={BackStyles.image} source={require('./aloevera.jpg')}/>
                <View style={{flexDirection: 'column',}}><Text style={BackStyles.header}>Aloe Vera</Text>
                    <Text style={BackStyles.sub}>Aloe Barbadensis</Text></View>
                </View>
                    <View style={BackStyles.herb_box}>
                        <Image style={BackStyles.image} source={require('./basil.jpg')}/>
                        <View style={{flexDirection: 'column',}}><Text style={BackStyles.header}>Basil</Text>
                            <Text style={BackStyles.sub}>Ocimum basilicum</Text></View>

                    </View>
                </View>
            );
        }
    }
}

const BackStyles = StyleSheet.create({
    image: {
        width: '30%'
    },
    header: {
        marginLeft: 20,
      //  fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15,

    },
    sub: {
     fontWeight: '300',
        marginLeft: 20,
        fontSize: 10,
        fontStyle: 'italic',
    },
    herb_box: {
        backgroundColor: '#fff',
        borderRadius: 7,
        marginTop: 20,
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        height: '10%'
        //  justifyContent: 'center',

    },
    main: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#E2E2E2',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        marginTop: 20,
        //  width: '100%'
    },
    textBox: {
        flex: 1,
        height: 45,
        padding: 4,
        paddingLeft: 20,
        // marginRight: 5,
        flexGrow: 1,
        //  fontSize: 18,
        color: '#000',
        backgroundColor: '#fff',
        // textAlign: 'center'
    },
    /*  searchIcon:{
          position: 'absolute',
          alignSelf: 'stretch',
          height: 45,
          flex: 1,
          top: 50,
          flexGrow: 1,
          padding: 4
      }*/
});
