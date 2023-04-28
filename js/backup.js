let modal = document.querySelector('.modal')

document.querySelectorAll('.btn-show').forEach(btn => {
  btn.addEventListener('click', openModal)
})

function openModal(e) {
  console.log(e.srcElement)
  let html = '' 
  //console.log(e.target.parentNode.parentNode)
  let node = e.target.parentNode.parentNode
  let cloneNode = node.cloneNode(true)
  let projectName = cloneNode.id

  //remove o botão visualizar
  let btnNode = cloneNode.children[1].children[0]
  btnNode.remove()

  const user = 'dezoliveira'
  const github = `https://www.github.com/${user}/${projectName}`
  const gitPages = `https://${user}.github.io/${projectName}`

  modal.classList.add('active')

  let div = document.createElement('div')
  let header = document.createElement('header')  
  let footer = document.createElement('footer')  
  let btnLive = document.createElement('button')
  let linkLive = document.createElement('a')
  let btnGithub = document.createElement('button')
  let  linkGithub = document.createElement('a')

  div.classList.add('modal-content')
  header.classList.add('modal-header')
  
  modal.appendChild(div)
  div.appendChild(header)
  div.appendChild(cloneNode)
  div.appendChild(footer)
  footer.appendChild(linkLive)

  linkLive.href = gitPages

  footer.appendChild(btnLive)
  btnLive.textContent = "Live Project"

  footer.appendChild(linkGithub)

  linkGithub.href = github

  footer.appendChild(btnGithub)
  btnGithub.textContent = "Github"

/*   html += `
    <div class="modal-content">
      <header class="modal-header">
        <h3>${content.id}</h3>
      </header>
      <footer>
        <a href="${gitPages}" target="_blank">
          <button>
            Live Project
          </button>
        </a>
        <a href="${github}" target="_blank">
          <button>
            Github
          </button>
        </a>
      </footer>
    </div>
  `

  modal.innerHTML = html */


}

function cancelModal(e) {
  let div = document.querySelector('.modal-content')

  if(e.target.classList.contains('active')){
    modal.classList.remove('active')
    div.parentNode.removeChild(div)
  }
}

modal.addEventListener('click', cancelModal)