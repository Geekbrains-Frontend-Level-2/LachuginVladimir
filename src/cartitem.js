import Renderer from './renderer'

export default class CartItem extends Renderer {
    constructor (data) {
      super()
      this._data = data
      this._counter = 1
    }
  
    get id () {
      return this._data.id
    }
  
    get totalPrice () {
      return this._data.price * this._counter
    }
  
  
    inc () {
      return Promise.resolve(this._counter++)
        .then(() => {
          this.render()
        })
    }
  
    dec () {
      if(this._counter = 1) {
        this.dec
      } else{
        return Promise.resolve(this._counter--)
          .then(() => {
            this.render()
          })
      }

    }
  
    del () {}
  
  
    initTemplate () {
      if (!this._template) {
        return
      }
      
      this._template.innerHTML = `<div class="cart__item">
        ${this._data.title} x ${this._counter} = ${this.totalPrice}
      </div>
      <div id="del">удалить</div>
      `

      const decbtn = document.getElementById('id')
    }
    
  }