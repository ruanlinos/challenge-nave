import styled from 'styled-components';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding-horizontal: 16px;
  margin-top: 32px;
`;

export const HeaderContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderText = styled(Text)`
  font-family: ${props => props.theme.fontBold};
  font-size: ${props => props.theme.fontSizeTitle};
  line-height: 32px;
`;

export const AddNewButtonContainer = styled(TouchableOpacity)`
  background-color: ${props => props.theme.dark};
  padding: 8px;
  width: 155px;
  align-items: center;
`;

export const AddNewButtonText = styled(Text)`
  font-family: ${props => props.theme.fontBold};
  font-size: ${props => props.theme.fontSizeButton};
  color: ${props => props.theme.white};
  line-height: 24px;
`;

export const ListAllNavers = styled(FlatList)`
  margin-top: 28px;
`;

export const ListContainer = styled(View)`
  width: 50%;
  margin-bottom: 26px;
`;

export const SingleNaverContainer = styled(View)`
  align-items: ${props => (props.index % 2 === 0 ? 'flex-start' : 'flex-end')};
`;

export const Avatar = styled(Image)`
  width: 170px;
  height: 156px;
`;

export const SingleNaverInfoContainer = styled(View)`
  align-items: flex-start;
  padding-horizontal: ${props => (props.index % 2 === 0 ? '5%' : 0)};
`;

export const SingleNaverName = styled(Text)`
  text-align: left;
  font-family ${props => props.theme.fontBold};
  font-size: ${props => props.theme.fontSizeNaverInfo};
  line-height: 20px;
`;

export const SingleNaverJobRole = styled(Text)`
  text-align: left;
  font-family ${props => props.theme.fontSizeNaverInfo};
  font-size: ${props => props.theme.fontSizeNaverInfo};
  line-height: 20px;
`;

export const SingleNaverActionsContainer = styled(View)`
    flex-direction: row;
    width: 40%;
    margin-top: 8px;
    align-items: flex-start;
    margin-left ${props => (props.index % 2 === 1 ? '3%' : 0)};
    justify-content: space-between;
`;
