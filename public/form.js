const forms = () {
    const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input')

    const message = {
        loading: 'Ждемс..',
        success: 'Вышло',
        failure: 'Не вышло ((('
    }

    const postData = (erl, data) => {
        document.querySelector('.status').textContent = message.loading
        let res = fetch(url, {
           method: "POST",
           body: data 
        })
    }

    form.forEach(item=> {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            item.appendChild(statusMessage)

            const formData = new FormData(item)


        })
    })
}