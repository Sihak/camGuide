//import liraries
import React, { Component} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity ,Dimensions, SafeAreaView } from 'react-native';
import { Provider ,connect } from 'react-redux';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import PrimaryHeader from '../../component/primaryHeader';

const filters =  [
    { name: 'all',
    forShow: 'All'
 },
    { name: 'phnompenh',
    forShow: 'PhnomPenh'
 },
    { name: 'kompot',
    forShow: 'Kompot'    
 },
    { name: 'Kep' ,
    forShow: 'Kep'        
},
    { name: 'sihanoukville',
    forShow: 'Sihanoukville'        
 },
    { name : 'kampungchhnang' ,
    forShow: 'Kampungchhnang'        
},
    { name: 'pursat' ,
    forShow: 'Pursat'            
},
    { name: 'battambang',
    forShow: 'Battambang'                
 },
    { name: 'pailin',
    forShow: 'Pailin'                    
},
    { name: 'banteaymeanchey',
    forShow: 'Banteaymeanchey'                        
 },
    { name: 'siemreap',
    forShow: 'Siemreap'                            
},
    { name: 'kompungthom',
    forShow: 'Kompungthom'                            
},
    { name: 'kompungcham',
    forShow: 'Kompungcham'                                
},
    { name: 'preyveng',
    forShow: 'Preyveng'                                    
},
    { name: 'svayrieng',
    forShow: 'Svayrieng'                                    
},
    { name: 'takeo',
    forShow: 'Takeo'                                    
},
    { name: 'kandal',
    forShow: 'Kandal'                                        
},
    { name: 'kompungspue',
    forShow: 'Kompungspue'                                            
},
    { name: 'kratie',
    forShow: 'Kratie'                                                
},
    { name: 'steungtraeng',
    forShow: 'Steungtraeng'                                                    
},
    { name: 'mundolkiri',
    forShow: 'Mundolkiri'                                                    
    
},
    { name: 'preahvihear',
    forShow: 'Preahvihear'                                                        
},
    { name: 'rattanakiri',
    forShow: 'Rattanakiri'                                                            
},
    { name: 'kohkong',
    forShow: 'Kohkong'
},
    { name: 'oudormeanchey',
    forShow: 'Oudormeanchey'
}
];


class FilterScreen extends Component {

    onSelectData = (forShow,name) => {
        this.props.navigation.state.params.returnData(forShow,name);
        this.props.navigation.goBack()
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style = {{ paddingLeft: 25 }} >
                <PrimaryHeader 
                 color = '#333'
                 tittle={'back'}
                 onBackPressed={() => this.props.navigation.goBack()}
                />
                </View>
                <FlatList 
                data = {filters}
                keyExtractor={(item, index) => index.toString()}
                renderItem = { ({item}) => 
                    <TouchableOpacity
                     onPress = {() => this.onSelectData(item.forShow,item.name)}
                     style ={ styles.itemContainer} > 
                    <Ionicons name='md-pin' style={{ fontSize: 16, color: '#32D6FA', marginRight:5 }} />                                            
                    <Text style = { styles.item } > {item.forShow} </Text>
                     </TouchableOpacity> }
                 />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        height: 50,
        flex:1,
        alignItems:'center',
        justifyContent: 'flex-start',
        paddingLeft: 15,
        flexDirection: 'row',
        borderBottomWidth:0.2
    }
});

// export default connect(mapStateToProps, null)(FilterScreen);
export default FilterScreen;

