const photoText = document.querySelector('.photo-text')

const fileUrl = '/text.txt' // provide file location

fetch(fileUrl)
   .then( r => r.text() )
   .then( t => photoText.textContent = t )
