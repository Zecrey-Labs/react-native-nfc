import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Camera from 'react-native-camera';

class RNCamera extends Component {
    constructor(props) {
        super(props);
    }

    takePicture() {
        const options = {};
        this.camera.capture({ metadata: options })
                .then((data) => {
                    console.log(5555);
                    this.props.takePicture(data)
                })
                .catch(err => console.error(err));
    }

    render() {
        return (
                <View style={styles.container}>
                <Camera ref={(cam) => {
                    this.camera = cam;
                }}
                        style={styles.preview}
                        aspect={Camera.constants.Aspect.fill}
                        captureTarget={Camera.constants.CaptureTarget.temp}
                >

                            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE2]</Text >

                </Camera >
                </View >
        );
    }
}

const styles = StyleSheet.create(
        {
            container: {
                flex: 1,
                flexDirection: 'row'
            },
            preview: {
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center'
            },
            capture: {
                flex: 0,
                backgroundColor: '#fff',
                borderRadius: 5,
                color: '#000',
                padding: 10,
                margin: 40
            }
        }
);

export default RNCamera;