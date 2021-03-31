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
    SHIRT_IMAGE: 'https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/men-s-travel-trekking-shirt-travel100-warm-bordeaux.jpg?&f=x',
    BG_COLOR: '#f2f2f2',
    GRAY: '#777'
}