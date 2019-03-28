console.log('javascript')
window.addEventListener('DOMContentLoaded', function() {
  console.log('DOMen är laddad')

  const h1 = document.getElementById('test')
  const h2 = document.createElement('h2')
  h2.innerHTML = 'ett nytt element'
  document.body.appendChild(h2)

  const input = document.getElementById('input')
  const button = document.getElementById('button')

  button.addEventListener('click', clickHandler)

  function clickHandler(e) {
    console.log(h1, input.value)
    h1.innerHTML = input.value
  }
})
