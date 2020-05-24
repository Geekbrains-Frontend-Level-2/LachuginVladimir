const modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.trigger) {
                e.preventDefault()
            }

            modal.style.display = "block"

        })

        close.addEventListener('click', () => {
            modal.style.display = "none"
        })
    }

    const callBtn = document.getElementById('btnCloce'),
        modalForm = document.querySelector('.form-list'),
        modalClose = document.getElementById('formBlock')

    bindModal(callBtn, modalForm, modalClose)
}

modals()



