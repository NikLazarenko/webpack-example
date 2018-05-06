import '../../scss/general.scss';
import 'normalize.css';

import header from '../../components/header';
var menu = header(['Featured', 'Suits', 'Shirts', 'Shoes'], 'menu');

$('body').append(menu);