import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from '../assets/icons/selection.json'; // path to your IcoMoon selection.json

const IcoMoonIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'IcoMoon',
  'IcoMoon.ttf'
);

export default IcoMoonIcon;
