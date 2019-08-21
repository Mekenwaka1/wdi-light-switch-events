document.addEventListener('DOMContentLoaded', function(event1) {

    const button = document.querySelector('button')
    button.addEventListener('click', function(event2) {

        event2.target.classList.toggle('on')
        event2.target.classList.toggle('off')

        document.body.classList.toggle('dark')
        document.body.classList.toggle('light')

        const status = document.querySelector('h1.status')
        status.textContent = document.body.classList.contains('light') ? "It's so bright in here!" : "Hey, who turned off the lights?"
    })
})
