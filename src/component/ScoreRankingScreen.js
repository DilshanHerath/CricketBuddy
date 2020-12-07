import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const { width: WIDTH, height: height } = Dimensions.get('window');

export default class ScoreRankingScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={Styles.container}>
          <View style={{ position: 'absolute' }}>
            <Image
              source={require('../assets/img/circle.png')}
              style={{
                width: WIDTH / 1.6,
                height: height / 2.5,
                transform: [{ rotate: '60deg' }],
                marginLeft: '-40%',
              }}
            />
          </View>
          <View style={{ marginLeft: '3%', marginTop: '5%' }}>
            <View style={{ marginTop: '5%' }}>
              <Text
                style={{ fontSize: 35, fontWeight: 'bold', color: 'white' }}
              >
                Score
              </Text>
            </View>
            <View style={{ marginTop: '3%' }}>
              <Text
                style={{ fontSize: 25, fontWeight: 'bold', color: '#0CE68B' }}
              >
                Ranking
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
                width: WIDTH / 1.1,
              }}
            >
              <View style={{ width: '50%', alignItems: 'center' }}>
                <Text style={Styles.text1}>NAME</Text>
              </View>
              <View style={{ width: '30%', alignItems: 'center' }}>
                <Text style={Styles.text1}>POINTS</Text>
              </View>
              <View style={{ width: '20%', alignItems: 'center' }}>
                <Text style={Styles.text1}>RANK</Text>
              </View>
            </View>
            <View style={Styles.line} />
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: WIDTH / 1.1,
                  marginTop: '5%',
                }}
              >
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    marginLeft: '8%',
                  }}
                >
                  <View>
                    <Image
                      style={Styles.proimg}
                      source={require('../assets/icon/vivek.png')}
                    />
                  </View>
                  <View style={{ marginLeft: '5%' }}>
                    <Text style={Styles.text1}>Vivek Thakur</Text>
                    <Text style={Styles.text3}>ID: 00025</Text>
                  </View>
                </View>
                <View style={{ width: '25%', alignItems: 'center' }}>
                  <View>
                    <Text style={Styles.text1}>116</Text>
                  </View>
                </View>
                <View style={{ width: '25%' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.text1}>#1</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.line2} />
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: WIDTH / 1.1,
                  marginTop: '5%',
                }}
              >
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    marginLeft: '8%',
                  }}
                >
                  <View>
                    <Image
                      style={Styles.proimg}
                      source={require('../assets/icon/Zean.png')}
                    />
                  </View>
                  <View style={{ marginLeft: '5%' }}>
                    <Text style={Styles.text1}>Zean Ronen</Text>
                    <Text style={Styles.text3}>ID: 00052</Text>
                  </View>
                </View>
                <View style={{ width: '25%', alignItems: 'center' }}>
                  <View>
                    <Text style={Styles.text1}>110</Text>
                  </View>
                </View>
                <View style={{ width: '25%' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.text1}>#2</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.line2} />
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: WIDTH / 1.1,
                  marginTop: '5%',
                }}
              >
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    marginLeft: '8%',
                  }}
                >
                  <View>
                    <Image
                      style={Styles.proimg}
                      source={require('../assets/icon/sampath.png')}
                    />
                  </View>
                  <View style={{ marginLeft: '5%' }}>
                    <Text style={Styles.text1}>Sampath Priyankara</Text>
                    <Text style={Styles.text3}>ID: 00001</Text>
                  </View>
                </View>
                <View style={{ width: '25%', alignItems: 'center' }}>
                  <View>
                    <Text style={Styles.text1}>105</Text>
                  </View>
                </View>
                <View style={{ width: '25%' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.text1}>#3</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.line2} />
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: WIDTH / 1.1,
                  marginTop: '5%',
                }}
              >
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    marginLeft: '8%',
                  }}
                >
                  <View>
                    <Image
                      style={Styles.proimg}
                      source={require('../assets/icon/lica.png')}
                    />
                  </View>
                  <View style={{ marginLeft: '5%' }}>
                    <Text style={Styles.text1}>Lica Anera</Text>
                    <Text style={Styles.text3}>ID: 00010</Text>
                  </View>
                </View>
                <View style={{ width: '25%', alignItems: 'center' }}>
                  <View>
                    <Text style={Styles.text1}>110</Text>
                  </View>
                </View>
                <View style={{ width: '25%' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.text1}>#4</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.line2} />
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: WIDTH / 1.1,
                  marginTop: '5%',
                }}
              >
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    marginLeft: '8%',
                  }}
                >
                  <View>
                    <Image
                      style={Styles.proimg}
                      source={require('../assets/icon/ronen.png')}
                    />
                  </View>
                  <View style={{ marginLeft: '5%' }}>
                    <Text style={Styles.text1}>Zean Ronen</Text>
                    <Text style={Styles.text3}>ID: 00758</Text>
                  </View>
                </View>
                <View style={{ width: '25%', alignItems: 'center' }}>
                  <View>
                    <Text style={Styles.text1}>99</Text>
                  </View>
                </View>
                <View style={{ width: '25%' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.text1}>#5</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.line2} />
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: WIDTH / 1.1,
                  marginTop: '5%',
                }}
              >
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    marginLeft: '8%',
                  }}
                >
                  <View>
                    <Image
                      style={Styles.proimg}
                      source={require('../assets/icon/vivek.png')}
                    />
                  </View>
                  <View style={{ marginLeft: '5%' }}>
                    <Text style={Styles.text1}>Vivek Thakur</Text>
                    <Text style={Styles.text3}>ID: 00025</Text>
                  </View>
                </View>
                <View style={{ width: '25%', alignItems: 'center' }}>
                  <View>
                    <Text style={Styles.text1}>116</Text>
                  </View>
                </View>
                <View style={{ width: '25%' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.text1}>#1</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.line2} />
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: WIDTH / 1.1,
                  marginTop: '5%',
                }}
              >
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    marginLeft: '8%',
                  }}
                >
                  <View>
                    <Image
                      style={Styles.proimg}
                      source={require('../assets/icon/Zean.png')}
                    />
                  </View>
                  <View style={{ marginLeft: '5%' }}>
                    <Text style={Styles.text1}>Zean Ronen</Text>
                    <Text style={Styles.text3}>ID: 00052</Text>
                  </View>
                </View>
                <View style={{ width: '25%', alignItems: 'center' }}>
                  <View>
                    <Text style={Styles.text1}>110</Text>
                  </View>
                </View>
                <View style={{ width: '25%' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.text1}>#2</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.line2} />
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: WIDTH / 1.1,
                  marginTop: '5%',
                }}
              >
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    marginLeft: '8%',
                  }}
                >
                  <View>
                    <Image
                      style={Styles.proimg}
                      source={require('../assets/icon/sampath.png')}
                    />
                  </View>
                  <View style={{ marginLeft: '5%' }}>
                    <Text style={Styles.text1}>Sampath Priyankara</Text>
                    <Text style={Styles.text3}>ID: 00001</Text>
                  </View>
                </View>
                <View style={{ width: '25%', alignItems: 'center' }}>
                  <View>
                    <Text style={Styles.text1}>105</Text>
                  </View>
                </View>
                <View style={{ width: '25%' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={Styles.text1}>#3</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.line2} />
              <View>
                  <TouchableOpacity
                      style={{
                          flexDirection: 'row',
                          width: WIDTH / 1.1,
                          marginTop: '5%',
                      }}
                  >
                      <View
                          style={{
                              width: '50%',
                              flexDirection: 'row',
                              marginLeft: '8%',
                          }}
                      >
                          <View>
                              <Image
                                  style={Styles.proimg}
                                  source={require('../assets/icon/lica.png')}
                              />
                          </View>
                          <View style={{ marginLeft: '5%' }}>
                              <Text style={Styles.text1}>Lica Anera</Text>
                              <Text style={Styles.text3}>ID: 00010</Text>
                          </View>
                      </View>
                      <View style={{ width: '25%', alignItems: 'center' }}>
                          <View>
                              <Text style={Styles.text1}>110</Text>
                          </View>
                      </View>
                      <View style={{ width: '25%' }}>
                          <View style={{ alignItems: 'center' }}>
                              <Text style={Styles.text1}>#4</Text>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
              <View style={Styles.line2} />
              <View>
                  <TouchableOpacity
                      style={{
                          flexDirection: 'row',
                          width: WIDTH / 1.1,
                          marginTop: '5%',
                          marginBottom:'10%',
                      }}
                  >
                      <View
                          style={{
                              width: '50%',
                              flexDirection: 'row',
                              marginLeft: '8%',
                          }}
                      >
                          <View>
                              <Image
                                  style={Styles.proimg}
                                  source={require('../assets/icon/ronen.png')}
                              />
                          </View>
                          <View style={{ marginLeft: '5%' }}>
                              <Text style={Styles.text1}>Zean Ronen</Text>
                              <Text style={Styles.text3}>ID: 00758</Text>
                          </View>
                      </View>
                      <View style={{ width: '25%', alignItems: 'center' }}>
                          <View>
                              <Text style={Styles.text1}>99</Text>
                          </View>
                      </View>
                      <View style={{ width: '25%' }}>
                          <View style={{ alignItems: 'center' }}>
                              <Text style={Styles.text1}>#5</Text>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16185B',
  },
  text1: {
    fontSize: 18,
    color: 'white',
  },
  text2: {
    fontSize: 15,
    color: 'white',
  },
  text3: {
    fontSize: 15,
    color: '#B9B9B9',
  },
  line: {
    backgroundColor: '#0CE68B',
    width: WIDTH / 1.15,
    height: 1,
    marginLeft: '5%',
    marginTop: '5%',
  },
  line2: {
    backgroundColor: '#0CE68B',
    width: WIDTH / 1.15,
    height: 1,
    marginLeft: '5%',
    marginTop: '2%',
  },
  proimg: {
    width: 45,
    height: 45,
  },
});
