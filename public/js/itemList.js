import Renderer from './renderer'
import Item from './item'

export default class ItemList extends Renderer {
    constructor (root , cart) {
      super(root)
      this._cart = cart
      this.fetchData()
        .then(this.render.bind(this))
    }
  
    fetchData () {
      return fetch('http://localhost:3000/items.json')
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then((res) => {
          this._items = res.data.map(item => {
              return new Item(item, this._cart)
            })
        })
  
    }
  
    get items () {
      return this._items
    }
  
    initTemplate () {
      if (!this._template) {
        return
      }
  
      this._template.className = 'items-list'
      this.items.forEach(item => item.render(this._template))
    }
  }