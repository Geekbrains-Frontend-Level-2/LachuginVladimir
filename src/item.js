import Renderer from './renderer'

export default class Item extends Renderer {
    constructor (data = {}, cart, root) {
      super(root)
      this._cart = cart
      this._data = data
    }
  
    addInCart () {
      if (!this._cart) {
        return
      }
  
      this._cart.add(this._data)
    }
  
    initTemplate () {
      if (!this._template) {
        return
      }
  
      const { title, price } = this._data
      this._template.className = 'item'
      this._template.innerHTML = `
        <div class="item__img">
          <div>NO IMAGE AVAILABLE</div>
        </div>
        <div class="item__meta">Товар: <span>${title}</span></div>
        <div class="item__meta">Цена: <span>${price}</span></div>
        <button class="btn btn_primary">Купить</button>
      `
  
      const btn = this._template.querySelector('button')
      btn.addEventListener('click', this.addInCart.bind(this))
    }
  }