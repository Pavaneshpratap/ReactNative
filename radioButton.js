import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class RadioButton extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} activeOpacity={0.8} style={styles.radioButton}>
                <View style={[styles.radioButtonHolder, { height: this.props.button.size, width: this.props.button.size, borderColor: this.props.button.color }]}>
                    {
                        (this.props.button.selected)
                            ?
                            (<View style={[styles.radioIcon, { height: this.props.button.size / 2, width: this.props.button.size / 2, backgroundColor: this.props.button.color }]}></View>)
                            :
                            null
                    }
                </View>
                <Text style={[styles.label, { color: this.props.button.color }]}>{this.props.button.label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    radioButton: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioButtonHolder: {
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    radioIcon: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        marginLeft: 10,
        fontSize: 20
    },

});




// in other file
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import RadioButton  from "./src/components/RadioButton.js"

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      radioItems:
        [
          {
            label: 'Radio Button #1',
            size: 30,
            color: '#636c72',
            selected: false
          },

          {
            label: 'Radio Button #2',
            color: '#0275d8',
            size: 35,
            selected: true,
          },

          {
            label: 'Radio Button #3',
            size: 40,
            color: '#5cb85c',
            selected: false
          },

          {
            label: 'Radio Button #4',
            size: 45,
            color: '#d9534f',
            selected: false
          }
        ], selectedItem: ''
    }
  }

  componentDidMount() {
    this.state.radioItems.map((item) => {
      if (item.selected == true) {
        this.setState({ selectedItem: item.label });
      }
    });
  }

  changeActiveRadioButton(index) {
    this.state.radioItems.map((item) => {
      item.selected = false;
    });

    this.state.radioItems[index].selected = true;

    this.setState({ radioItems: this.state.radioItems }, () => {
      this.setState({ selectedItem: this.state.radioItems[index].label });
    });
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.ColorHolder }]} >

        {
          this.state.radioItems.map((item, key) =>
            (
              <RadioButton key={key} button={item} onClick={this.changeActiveRadioButton.bind(this, key)} />
            ))
        }
        <View style={styles.selectedTextHolder}>
          <Text style={styles.selectedText}>Selected Item: {this.state.selectedItem}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",

    },
    selectedTextHolder: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: 15,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    selectedText: {
      fontSize: 18,
      color: 'white'
    }
  });

