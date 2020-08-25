import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Logo from '../../../assets/Logo.svg';
import Input from '../../../components/Input';
import DeleteIcon from '../../../assets/icons/deleteicon.svg';
import EditIcon from '../../../assets/icons/editicon.svg';
const data = [
  {
    id: '985d2997-f512-438d-a05d-62e7c55c873d',
    name: 'Thiago Nunes Batista',
    admission_date: '2020-06-01T00:00:00.000Z',
    job_role: 'Chefe de nada',
    user_id: 'ea44a85f-3e6b-4443-9f66-1d974c498900',
    project: 'Arroz Sul e Saturn',
    birthdate: '2000-06-07T00:00:00.000Z',
    url: 'https://avatars3.githubusercontent.com/u/67487679?v=4',
  },
  {
    id: '985d2998-f512-438d-a05d-62e7c55c873d',
    name: 'Thiago Nunes Batista',
    admission_date: '2020-06-01T00:00:00.000Z',
    job_role: 'Chefe de nada',
    user_id: 'ea44a85f-3e6b-4443-9f66-1d974c498900',
    project: 'Arroz Sul e Saturn',
    birthdate: '2000-06-07T00:00:00.000Z',
    url: 'https://avatars3.githubusercontent.com/u/67487679?v=4',
  },
  {
    id: '985d2999-f512-438d-a05d-62e7c55c873d',
    name: 'Thiago Nunes Batista',
    admission_date: '2020-06-01T00:00:00.000Z',
    job_role: 'Chefe de nada',
    user_id: 'ea44a85f-3e6b-4443-9f66-1d974c498900',
    project: 'Arroz Sul e Saturn',
    birthdate: '2000-06-07T00:00:00.000Z',
    url: 'https://avatars3.githubusercontent.com/u/67487679?v=4',
  },
  {
    id: '985d2990-f512-438d-a05d-62e7c55c873d',
    name: 'Thiago Nunes Batista',
    admission_date: '2020-06-01T00:00:00.000Z',
    job_role: 'Chefe de nada',
    user_id: 'ea44a85f-3e6b-4443-9f66-1d974c498900',
    project: 'Arroz Sul e Saturn',
    birthdate: '2000-06-07T00:00:00.000Z',
    url: 'https://avatars3.githubusercontent.com/u/67487679?v=4',
  },
  {
    id: '985d2991-f512-438d-a05d-62e7c55c873d',
    name: 'Thiago Nunes Batista',
    admission_date: '2020-06-01T00:00:00.000Z',
    job_role: 'Chefe de nada',
    user_id: 'ea44a85f-3e6b-4443-9f66-1d974c498900',
    project: 'Arroz Sul e Saturn',
    birthdate: '2000-06-07T00:00:00.000Z',
    url: 'https://avatars3.githubusercontent.com/u/67487679?v=4',
  },
  {
    id: '985d2992-f512-438d-a05d-62e7c55c873d',
    name: 'Thiago Nunes Batista',
    admission_date: '2020-06-01T00:00:00.000Z',
    job_role: 'Chefe de nada',
    user_id: 'ea44a85f-3e6b-4443-9f66-1d974c498900',
    project: 'Arroz Sul e Saturn',
    birthdate: '2000-06-07T00:00:00.000Z',
    url: 'https://avatars3.githubusercontent.com/u/67487679?v=4',
  },
];

const Navers: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 16,
          marginTop: 32,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 22,
              lineHeight: 32,
            }}>
            Navers
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#000',
              padding: 8,
              width: 155,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 14,
                lineHeight: 24,
                color: '#fff',
              }}>
              Adicionar naver
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={e => e.id}
          numColumns={2}
          style={{
            marginTop: 28,
          }}
          renderItem={({item, index}) => (
            <View
              style={{
                width: '50%',
                marginBottom: 26,
              }}>
              <View
                style={{
                  alignItems: index % 2 === 0 ? 'flex-start' : 'flex-end',
                }}>
                <Image
                  style={{width: 170, height: 156}}
                  source={{uri: item.url}}
                />
              </View>
              <View
                style={{
                  alignItems: 'flex-start',
                  paddingHorizontal: index % 2 === 1 ? '5%' : 0,
                }}>
                <Text
                  style={{
                    textAlign: 'left',
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 14,
                    lineHeight: 20,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    textAlign: 'left',
                    fontSize: 14,
                    lineHeight: 20,
                  }}>
                  {item.job_role}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '40%',
                  marginTop: 8,
                  alignItems: 'flex-start',
                  marginLeft: index % 2 === 1 ? '3%' : 0,
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity>
                  <DeleteIcon width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <EditIcon width={24} height={24} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default Navers;
