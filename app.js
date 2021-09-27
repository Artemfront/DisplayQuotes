(function() {
    let btn = document.getElementById('btn')
    const quotes = [
        {
            quote: 'Build your own dreams, or someone else will hire you to build theirs',
            author: 'Farrah Gray'
        },
        {
            quote: 'Fall seven times and stand up eight',
            author: 'Japanese Proverb'
        },
        {
            quote: 'There are no shortcuts to any place worth going',
            author: 'Helen Keller'
        },
        {
            quote: 'Success is not the key to happiness. Happiness is the key to success',
            author: 'Herman Cain'
        },
        {
            quote: 'You only live once, but if you do it right, once is enough',
            author: 'Mae West'
        }
    ]


    btn.addEventListener('click', () => {
        let random = Math.floor(Math.random() * quotes.length)

        document.getElementById('quote').textContent = quotes[random].quote
        document.getElementById('author').textContent = quotes[random].author
    })
})()