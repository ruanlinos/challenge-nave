import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {differenceInYears, formatDistanceToNow} from 'date-fns';
import Logo from '../../../assets/Logo.svg';
import Input from '../../../components/Input';
import DeleteIcon from '../../../assets/icons/deleteicon.svg';
import EditIcon from '../../../assets/icons/editicon.svg';
import Modal from '../../../components/Modal';
import Close from '../../../assets/icons/clear.svg';
import ptBr from 'date-fns/locale/pt-BR';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import api from '../../../api';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Name,
  Avatar,
  JobRole,
  Container,
  EditButton,
  DeleteButton,
  EditButtonText,
  NaverInfoTitle,
  ActionsContainer,
  DeleteButtonText,
  NaverInfoContainer,
  NaverInfoDescription,
} from './styles';

const handleBirthday = (date: string) => {
  return `${differenceInYears(new Date(), new Date(date))} anos`;
};

const handleCompanyYears = (date: string) => {
  return formatDistanceToNow(new Date(date), {locale: ptBr});
};

const DetailedNaver: React.FC = ({route}) => {
  const navigation = useNavigation();
  const [modalState, setModalState] = React.useState<boolean>(false);
  const {data} = route.params;

  const handleDelete = async () => {
    try {
      const response = await AsyncStorage.getItem('@nave::token');
      if (response) {
        const {data: payload} = await api.delete(`/navers/${data.id}`, {
          headers: {
            Authorization: `Bearer ${response}`,
          },
        });
        if (payload) {
          setModalState(false);
          navigation.reset({index: 0, routes: [{name: 'Home'}]});
        }
      }
    } catch (error) {}
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView>
        <Container>
          <Avatar source={{uri: data.url}} />

          <NaverInfoContainer>
            <Name>{data.name}</Name>

            <JobRole>{data.job_role}</JobRole>
          </NaverInfoContainer>

          <NaverInfoContainer>
            <NaverInfoTitle>Idade</NaverInfoTitle>
            <NaverInfoDescription>
              {handleBirthday(data.birthdate)}
            </NaverInfoDescription>
          </NaverInfoContainer>

          <NaverInfoContainer>
            <NaverInfoTitle>Tempo de empresa</NaverInfoTitle>
            <NaverInfoDescription>
              {handleCompanyYears(data.admission_date)}
            </NaverInfoDescription>
          </NaverInfoContainer>

          <NaverInfoContainer>
            <NaverInfoTitle>Projetos que participou</NaverInfoTitle>

            <NaverInfoDescription>{data.project}</NaverInfoDescription>
          </NaverInfoContainer>

          <ActionsContainer>
            <DeleteButton onPress={() => setModalState(true)}>
              <DeleteIcon size={18} />
              <DeleteButtonText>Excluir</DeleteButtonText>
            </DeleteButton>

            <EditButton
              onPress={() => navigation.navigate('AddNewNaver', {info: data})}>
              <MaterialIcons name="edit" size={18} color="#fff" />
              <EditButtonText>Editar</EditButtonText>
            </EditButton>
          </ActionsContainer>
        </Container>
      </ScrollView>
      <Modal
        showModal={modalState}
        setModalState={setModalState}
        title="Excluir naver"
        description="Tem certeza que deseja excluir este naver?"
        deleteButton={handleDelete}
      />
    </>
  );
};

export default DetailedNaver;
