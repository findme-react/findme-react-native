/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    Fetch,
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    button,
    TextInput,
    Image,
    Alert,
    ListView,
    TouchableOpacity
} from 'react-native';
import ViewContainer from  '../components/frontend/ViewContainer'
import StatusBarBackground from  '../components/frontend/StatusBarBackground'
import ButtonContainer from '../components/frontend/ButtonContainer'
import _ from 'lodash'

import Profile from './../components/backend/Profile'

class AdminScreen extends Component {

    constructor(props) {
        super(props);

        data = [
            {User: "Ruben", Info: "beleidigung"},
            {User: "Bene", Info: "belästigung"},
        ];

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(data)
        }
    }

    renderRow(rowData) {
        return (
            <View style={styles.inputListView}>
                <Text style={{fontSize:18}}>
                    {rowData.User + " " + rowData.Info}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <ViewContainer>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>
                        Administration
                    </Text>
                </View>

                <ButtonContainer>
                    <TouchableHighlight onPress={(event) => this._navigateToAdminOpenCasesMenue()}>
                        <Text style={styles.btnText}> Offene Fälle </Text>
                    </TouchableHighlight>
                </ButtonContainer>

                <ButtonContainer>
                    <TouchableHighlight onPress={(event) => this._navigateToLoginScreen()}>
                        <Text style={styles.btnText}> Log Out </Text>
                    </TouchableHighlight>
                </ButtonContainer>

                <StatusBarBackground />
            </ViewContainer>
        );
    }

    _test() {
        return (
            <View style={styles.inputListView}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {return this.renderRow(rowData)}}>
                </ListView>
            </View>
        )
    }

    _navigateToAdminOpenCasesMenue() {
        this.props.navigator.push({
            ident: "AdminOpenCases"
        })
    }

    _navigateToMainMenue() {
        this.props.navigator.push({
            ident: "Main"
        })
    }

    _navigateToLoginScreen() {
        User.getInstance(1);
        
        this.props.navigator.push({
            ident: "Login"
        })
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
    titleView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 10
    },
    thumbnail: {
        marginBottom: 10,
        width: 300,
        height: 200
    },
    titleText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputContainerView: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 10
    },
    input: {
        height: 36,
        padding: 4,
        marginRight: 50,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4,
        color: '#000000',
        textAlign: 'center'
    },
    btnText: {
        fontSize: 18,
        color: '#fff',
        alignSelf: 'center',
        marginTop: 6
    },
    button: {
        flex: 1,
        height: 20,
        backgroundColor: '#48afdb',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 150,
        marginLeft: 100,
        marginRight: 100,
        marginBottom: 50
    },
    text: {
        flexDirection: 'row',
        padding: 5,
        height: 20,
        margin: 10
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#d7d7d7'
    },
    selectionText: {
        fontSize: 15,
        paddingTop: 3,
        color: '#b5b5b5',
        textAlign: 'right'
    },
    personRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"

    },
    personName: {
        flexDirection: "row"
    },
    inputListView: {
        padding: 5,
        marginRight: 50,
        marginLeft: 50,
        flex: 1,
        alignSelf: "flex-start"
    }
});

module.exports = AdminScreen;