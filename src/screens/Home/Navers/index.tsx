import React from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../api';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../../assets/Logo.svg';
import Input from '../../../components/Input';
import DeleteIcon from '../../../assets/icons/deleteicon.svg';
import EditIcon from '../../../assets/icons/editicon.svg';
import Modal from 'react-native-modal';
import Close from '../../../assets/icons/clear.svg';
import HandleModal from '../../../components/Modal';
import {
  Avatar,
  Container,
  HeaderText,
  ListAllNavers,
  ListContainer,
  HeaderContainer,
  SingleNaverName,
  AddNewButtonText,
  SingleNaverJobRole,
  SingleNaverContainer,
  AddNewButtonContainer,
  SingleNaverInfoContainer,
  SingleNaverActionsContainer,
} from './styles';

interface INaverPayload {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  user_id: string;
  project: string;
  birthdate: string;
  url: string;
}
const Navers: React.FC = () => {
  const navigation = useNavigation();
  const [modalState, setModalState] = React.useState<boolean>(false);
  const [hasLoading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<INaverPayload[]>([]);
  const [selectedID, setSelectedID] = React.useState<string>('');

  const fetchData = async () => {
    setLoading(true);
    const tokenAsync = await AsyncStorage.getItem('@nave::token');
    if (tokenAsync) {
      const {data: payload} = await api.get('/navers', {
        headers: {
          Authorization: `Bearer ${tokenAsync}`,
        },
      });

      setLoading(false);
      setData(payload);
    } else {
      navigation.reset({index: 0, routes: [{name: 'Login'}]});
    }
  };

  const handleDelete = async () => {
    try {
      const response = await AsyncStorage.getItem('@nave::token');
      if (response) {
        const {data: payload} = await api.delete(`/navers/${selectedID}`, {
          headers: {
            Authorization: `Bearer ${response}`,
          },
        });
        if (payload) {
          setModalState(false);
          fetchData();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Container>
        <HeaderContainer>
          <HeaderText>Navers</HeaderText>

          <AddNewButtonContainer
            onPress={() => navigation.navigate('AddNewNaver')}>
            <AddNewButtonText>Adicionar naver</AddNewButtonText>
          </AddNewButtonContainer>
        </HeaderContainer>

        <ListAllNavers
          data={data}
          keyExtractor={e => e.id}
          numColumns={2}
          onRefresh={() => fetchData()}
          refreshing={hasLoading}
          renderItem={({item, index}) => (
            <ListContainer>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailedNaver', {data: item})
                }>
                <SingleNaverContainer index={index}>
                  <Avatar source={{uri: item.url}} />
                </SingleNaverContainer>
                <SingleNaverInfoContainer index={index}>
                  <SingleNaverName>{item.name}</SingleNaverName>
                  <SingleNaverJobRole>{item.job_role}</SingleNaverJobRole>
                </SingleNaverInfoContainer>
              </TouchableOpacity>
              <SingleNaverActionsContainer index={index}>
                <TouchableOpacity
                  onPress={() => {
                    setModalState(true);
                    setSelectedID(item.id);
                  }}>
                  <DeleteIcon width={24} height={24} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('AddNewNaver', {info: item})
                  }>
                  <EditIcon width={24} height={24} />
                </TouchableOpacity>
              </SingleNaverActionsContainer>
            </ListContainer>
          )}
        />
      </Container>
      <HandleModal
        showModal={modalState}
        setModalState={setModalState}
        title="Excluir naver"
        description="Tem certeza que deseja excluir este naver?"
        deleteButton={handleDelete}
      />
    </>
  );
};

export default Navers;
