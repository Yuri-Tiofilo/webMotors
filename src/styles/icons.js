import styled from 'styled-components';
import {
  FaUserAlt,
  FaTimesCircle,
  FaEye,
  FaEyeSlash,
  FaUserPlus,
  FaUserLock,
  FaBackspace,
  FaRegEnvelope,
  FaPhone,
  FaCheck,
  FaUsers,
  FaRegAddressBook,
  FaTimes,
  FaPlusCircle,
  FaFonticons,
  FaUserFriends,
  FaInfoCircle,
  FaSave,
  FaUserEdit,
  FaRegCheckSquare,
  FaRegSquare,
  FaMapMarkerAlt,
  FaAngleRight,
} from 'react-icons/fa';
import colors from './colors';
import metrics from './metrics';

export const IconLeft = styled(FaAngleRight)`
  color: ${() => colors.dark};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
export const IconCheckSquare = styled(FaRegCheckSquare)`
  color: ${() => colors.dark};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const IconUncheckSquare = styled(FaRegSquare)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
export const IconDefault = styled(FaFonticons)`
  color: ${() => colors.dark};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const UserIcon = styled(FaUserAlt)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const UserIconLastname = styled(FaUserFriends)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const EyeOpenIcon = styled(FaEye)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const EyeClosedIcon = styled(FaEyeSlash)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const UserPlusIcon = styled(FaUserPlus)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const UserForgotPassword = styled(FaUserLock)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const BackIcon = styled(FaBackspace)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const EmailIcon = styled(FaRegEnvelope)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const PhoneIcon = styled(FaPhone)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const CorrectIcon = styled(FaCheck)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const UserListIcon = styled(FaUsers)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const UserContactIcon = styled(FaRegAddressBook)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const ClosedTimesIcon = styled(FaTimes)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
const PlusIconAdd = styled(FaPlusCircle)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
export const IconInformation = styled(FaInfoCircle)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
export const IconSave = styled(FaSave)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
export const IconUserEdit = styled(FaUserEdit)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
export const IconPointer = styled(FaMapMarkerAlt)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
export const IconCircleTimes = styled(FaTimesCircle)`
  color: ${({ color = colors.pickerOne }) => color};
  font-size: ${({ aditional = 6 }) => metrics.fontSize + aditional}px;
`;
export default {
  IconLeft,
  IconCircleTimes,
  UserIcon,
  IconDefault,
  EyeOpenIcon,
  EyeClosedIcon,
  UserPlusIcon,
  UserForgotPassword,
  BackIcon,
  EmailIcon,
  PhoneIcon,
  CorrectIcon,
  UserListIcon,
  UserContactIcon,
  ClosedTimesIcon,
  PlusIconAdd,
  UserIconLastname,
  IconInformation,
  IconSave,
  IconUserEdit,
  IconCheckSquare,

  IconUncheckSquare,
  IconPointer,
};
