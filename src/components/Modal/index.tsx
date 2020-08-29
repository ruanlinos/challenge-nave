import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  HeaderText,
  DescriptionText,
  FooterContainer,
  HeaderContainer,
  CancelButtonText,
  DeleteButtonText,
  CancelButtonContainer,
  DeleteButtonContainer,
} from './styles';

interface IModalProps {
  title: string;
  description: string;
  showModal: boolean;
  deleteButton?: Function;
  setModalState: Function;
}

const HandleModal: React.FC<IModalProps> = ({
  title,
  description,
  showModal,
  deleteButton,
  setModalState,
}) => {
  return (
    <Modal
      isVisible={showModal}
      hasBackdrop
      onBackdropPress={() => setModalState(false)}>
      <Container>
        <HeaderContainer>
          <HeaderText>{title}</HeaderText>
          <TouchableOpacity onPress={() => setModalState(false)}>
            <MaterialIcons name="close" size={22} color="#212121" />
          </TouchableOpacity>
        </HeaderContainer>
        <DescriptionText>{description}</DescriptionText>

        {deleteButton && (
          <FooterContainer>
            <CancelButtonContainer onPress={() => setModalState(false)}>
              <CancelButtonText>Cancelar</CancelButtonText>
            </CancelButtonContainer>
            <DeleteButtonContainer onPress={() => deleteButton()}>
              <DeleteButtonText>Excluir</DeleteButtonText>
            </DeleteButtonContainer>
          </FooterContainer>
        )}
      </Container>
    </Modal>
  );
};
export default HandleModal;
