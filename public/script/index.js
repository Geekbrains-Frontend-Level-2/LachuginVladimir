import Cart from './cart'
import ItemList from './itemlist'









const CartObject = new Cart(document.querySelector('.cart'))
const List = new ItemList(document.querySelector('main'), CartObject)