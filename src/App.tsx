/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Option from './Components/Option';

const App = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <ImageBackground
      source={{
        uri: 'https://1.bp.blogspot.com/-yw9KqDnP2Ic/X-3LyYz4p3I/AAAAAAABMmE/r-K3LD6tzE4Mc-PtEjpTdsjdTI2CzPiXACLcBGAsYHQ/s2508/tumblr_d67316715923f506c45bafc154af9264_e3920ef7_1280.jpg',
      }}
      style={{height: '100%', width: '100%'}}>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor="rgba(0, 0, 0, 0)"
      />

      <View
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginRight: 10, marginTop: 10}}>
              <Text style={{color: '#fff', fontWeight: '500', fontSize: 18}}>
                Đếm ngược ngày thi
              </Text>
              <Text style={{color: '#fff', fontSize: 14}}>
                Kỳ thi tốt nghiệp THPT 2023
              </Text>
            </View>
            <Image
              source={require('./Assets/Images/down-arrow-solid-24.png')}
              style={{height: 7, width: 12, tintColor: '#fff'}}
              resizeMode="stretch"
            />
          </View>
          <Image
            source={require('./Assets/Images/refresh.png')}
            style={{height: 18, width: 18, tintColor: '#fff'}}
            resizeMode="stretch"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: 15}} />
          <View style={{alignItems: 'center', marginVertical: 50}}>
            <Text style={{color: '#fff', fontWeight: '500', fontSize: 60}}>
              94
            </Text>
            <Text style={{color: '#fff', fontWeight: '200', fontSize: 24}}>
              ngày
            </Text>
          </View>
          <Image
            source={require('./Assets/Images/right-arrow-solid-24.png')}
            style={{height: 30, width: 15, tintColor: '#fff'}}
            resizeMode="stretch"
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('./Assets/Images/alarm.png')}
            style={{height: 25, width: 25, tintColor: '#fff'}}
            resizeMode="stretch"
          />
          <Text style={{color: '#fff', fontSize: 18, marginTop: 10}}>
            Chính thức - 27/06/2023
          </Text>
          <Image
            source={require('./Assets/Images/comment.png')}
            style={{height: 32, width: 28, tintColor: '#fff', marginTop: 20}}
            resizeMode="stretch"
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginTop: 5,
              fontWeight: '300',
              textAlign: 'center',
              marginHorizontal: 30,
            }}>
            Dù sao kết cục cũng chỉ có hoặc là trượt hoặc là đỗ, nếu muốn tương
            lai không phải sống trong nước mắt phấn đấu ngay bây giờ vẫn còn kịp
          </Text>
        </View>
      </View>

      {showOptions && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        />
      )}

      <View
        style={{
          position: 'absolute',
          right: 10,
          bottom: 100,
          alignItems: 'flex-end',
        }}>
        {showOptions && (
          <View style={{marginBottom: 10}}>
            <Option
              name="Ghi chú của tôi"
              color="green"
              icon={require('./Assets/Images/exam-results.png')}
              onPress={() => {}}
            />
            <Option
              name="Tài liệu học tập"
              color="#38A750"
              icon={require('./Assets/Images/file.png')}
              onPress={() => {}}
            />
            <Option
              name="Đếm ngược chi tiết"
              color="#38A778"
              icon={require('./Assets/Images/alarm.png')}
              onPress={() => {}}
            />
            <Option
              name="Cài đặt và thiết lập khác"
              color="#3872A7"
              icon={require('./Assets/Images/image-gallery.png')}
              onPress={() => {}}
            />
            <Option
              name="Thông tin ứng dụng"
              color="#8A38A7"
              icon={require('./Assets/Images/info.png')}
              onPress={() => {}}
            />
          </View>
        )}
        <TouchableOpacity
          style={{
            width: 65,
            height: 65,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 300,
            backgroundColor: '#4EAAFF',
          }}
          onPress={() => setShowOptions(v => !v)}>
          <Image
            source={require('./Assets/Images/menu.png')}
            style={{
              height: 25,
              width: 25,
              tintColor: '#fff',
              transform: [{rotate: showOptions ? '45deg' : '0deg'}],
            }}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default App;
