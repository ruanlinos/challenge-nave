import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik, FormikHelpers} from 'formik';
import AsyncStorage from '@react-native-community/async-storage';
import * as Yup from 'yup';
import Input from '../../../components/Input';
import MaskedInput from '../../../components/MaskedInput';
import Modal from '../../../components/Modal';
import api from '../../../api';
import {parse, isDate, format} from 'date-fns';
import {Title, Container, SaveButton, SaveButtonText} from './styles';

interface IAddNaver {
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
}

const AddNewNaver: React.FC = ({route}) => {
  const [modalState, setModalState] = React.useState<boolean>(false);
  const navigation = useNavigation();

  function parseDateString(value, originalValue) {
    const parsedDate = isDate(originalValue)
      ? originalValue
      : parse(originalValue, 'dd/MM/yyyy', new Date());

    return parsedDate;
  }

  const today = new Date();

  const schema = Yup.object().shape({
    name: Yup.string().required('Você precisa informar um nome!'),
    job_role: Yup.string().required('Você precisa informar um cargo!'),
    admission_date: Yup.date()
      .transform(parseDateString)
      .max(today, 'Deve ser uma data válida!')
      .required('Você precisa informar uma data !'),
    birthdate: Yup.date()
      .transform(parseDateString)
      .max(today, 'Deve ser uma data válida!')
      .required('Você precisa informar uma data !'),
    url: Yup.string()
      .url('Precisa ser uma url válida!')
      .required('Você precisa inserir uma url para foto!'),
    project: Yup.string().required('Você precisa informar um cargo!'),
  });

  const handleInitialDate: string = date => {
    const arrayDate = date.split('-');
    const removeHour = arrayDate[2].split('T');

    return removeHour[0] + '/' + arrayDate[1] + '/' + arrayDate[0];
  };

  const initialValues: IAddNaver = {
    job_role: route.params ? route.params.info.job_role : '',
    admission_date: route.params
      ? handleInitialDate(route.params.info.admission_date)
      : '',
    birthdate: route.params
      ? handleInitialDate(route.params.info.birthdate)
      : '',
    project: route.params ? route.params.info.project : '',
    name: route.params ? route.params.info.name : '',
    url: route.params ? route.params.info.url : '',
  };

  const handleSubmit = async (
    values: IAddNaver,
    {resetForm}: FormikHelpers<IAddNaver>,
  ) => {
    try {
      const response = await AsyncStorage.getItem('@nave::token');
      if (response) {
        if (!route.params) {
          setModalState(true);
          const {data} = await api.post('/navers', values, {
            headers: {
              Authorization: `Bearer ${response}`,
            },
          });
          if (data) {
            setModalState(true);
            resetForm();
          }
        } else {
          const {data} = await api.put(
            `/navers/${route.params.info.id}`,
            values,
            {
              headers: {
                Authorization: `Bearer ${response}`,
              },
            },
          );
          if (data) {
            setModalState(true);
            resetForm();
          }
        }
      }
    } catch (error) {
      //do something?
      console.log(error);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <KeyboardAwareScrollView>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{
            flex: 1,
          }}>
          <Container>
            <Title>{route.params ? 'Editar naver' : 'Adicionar naver'}</Title>

            <Formik
              initialValues={initialValues}
              onSubmit={(values, resetForm) => handleSubmit(values, resetForm)}
              validationSchema={schema}>
              {({
                values,
                setFieldTouched,
                handleChange,
                errors,
                handleSubmit,
                isValid,
                resetForm,
              }) => (
                <>
                  <Input
                    label="Nome"
                    placeholder="Nome"
                    hasError={errors.name}
                    props={{
                      value: values.name,
                      onChangeText: handleChange('name'),
                      onBlur: () => setFieldTouched('name'),
                      mask: '',
                    }}
                  />
                  <Input
                    label="Cargo"
                    placeholder="Cargo"
                    hasError={errors.job_role}
                    props={{
                      value: values.job_role,
                      onChangeText: handleChange('job_role'),
                      onBlur: () => setFieldTouched('job_role'),
                    }}
                  />
                  <MaskedInput
                    label="Idade"
                    placeholder="Idade"
                    hasError={errors.birthdate}
                    props={{
                      keyboardType: 'numeric',
                      value: values.birthdate,
                      onChangeText: handleChange('birthdate'),
                      onBlur: () => setFieldTouched('birthdate'),
                      mask: '[00]/[00]/[0000]',
                    }}
                  />
                  <MaskedInput
                    label="Tempo de empresa"
                    placeholder="Tempo de empresa"
                    hasError={errors.admission_date}
                    props={{
                      keyboardType: 'numeric',
                      value: values.admission_date,
                      onChangeText: handleChange('admission_date'),
                      onBlur: () => setFieldTouched('admission_date'),
                      mask: '[00]/[00]/[0000]',
                    }}
                  />
                  <Input
                    label="Projetos que participou"
                    placeholder="Projetos que participou"
                    hasError={errors.project}
                    props={{
                      value: values.project,
                      onChangeText: handleChange('project'),
                      onBlur: () => setFieldTouched('project'),
                    }}
                  />
                  <Input
                    label="URL da foto do naver"
                    placeholder="URL da foto do naver"
                    hasError={errors.url}
                    props={{
                      keyboardType: 'url',
                      value: values.url,
                      onChangeText: handleChange('url'),
                      onBlur: () => setFieldTouched('url'),
                    }}
                  />
                  <SaveButton
                    isValid={isValid}
                    disabled={!isValid}
                    onPress={handleSubmit}>
                    <SaveButtonText>Salvar</SaveButtonText>
                  </SaveButton>
                </>
              )}
            </Formik>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
      <Modal
        title={route.params ? 'Naver editado' : 'Naver adicionado'}
        description={
          route.params
            ? ' Naver adicionado com sucesso'
            : 'Naver adicionado com sucesso'
        }
        showModal={modalState}
        setModalState={setModalState}
      />
    </>
  );
};

export default AddNewNaver;
