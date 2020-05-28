import Cart from './cart'
import ItemList from './itemList'









const CartObject = new Cart(document.querySelector('.cart'))
const List = new ItemList(document.querySelector('main'), CartObject)