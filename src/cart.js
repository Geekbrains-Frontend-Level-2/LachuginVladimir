import Renderer from './renderer'
import CartItem from './cartItem'

export default class Cart extends Renderer {
    constructor (root) {
      super(root)
      this._items = []
      this.render()
    }
  
    add (data) {
      const ExistedItem = this._items.filter(item => item.id === data.id)[0]
      if (ExistedItem) {
        return ExistedItem.inc()
          .then(() => {
            this.totalCostTemplate()
          })
      }
      return Promise.resolve(this._items.push(new CartItem(data)) )
        .then(() => {
          this.render()
        })
    }
  
    remove (id) {
      // 
  
    }
  
  
    getTotalPrice () {
      return this._items.reduce((cost, item) => {
        return cost + item.totalPrice
      }, 0)
    }
  
  
    toggle () {
      if (!this._template) {
        return
      }
      this.template.classList.toggle('shown')
    }
  
    initTemplate () {
      if (!this._template) {
        return
      }
  
      if (!this._template.className) {
        this._template.className = 'cart__list'
        this.root.addEventListener('click', this.toggle.bind(this))
      }
  
      if (this._items.length) {
        this._template.innerHTML = ''
        this._items.forEach(item => item.render(this._template))
        this.totalCostTemplate()
      } else {
        this._template.innerHTML = `
          <div class="cart__empty">
            Вы пока не добавили товары в корзину!
          </div>
        `
      }
    }
    // 
    totalCostTemplate () {
      let summaryContainer = document.querySelector('.cart__total')
      if (!summaryContainer) {
        summaryContainer = document.createElement("div")
        summaryContainer.className = 'cart__total'
      }
  
      summaryContainer.innerHTML = this.getTotalPrice()
      this._template.appendChild(summaryContainer)
    }
  }