import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default {
    API_URL: 'https://ecolifestrapi.herokuapp.com',
    THEME_COLOR: '#ff6000',
    FONT_BOLD: 'nunito_bold',
    FONT_REGULAR: 'nunito',
    WIDTH: windowWidth,
    HEIGHT: windowHeight,
    SHIRT_IMAGE: 'https://purepng.com/public/uploads/large/purepng.com-t-shirtt-shirtfabrict-shapegramnets-1421526429337ircsl.png',
    BG_COLOR: '#f2f2f2',
    GRAY_TEXT: '#777',
    GRAY: '#f0f1f3'
}