let modal = document.querySelector('.modal')
let hamburger = document.getElementById('hamburger')

document.querySelectorAll('.btn-show')
  .forEach(btn => {
    btn.addEventListener('click', openModal)
  })

function openModal(e) {
  console.log(e.target.parentNode.parentNode.firstChild.parentNode.children[1])
  /* let html = '' */
  //console.log(e.target.parentNode.parentNode)
  let node = e.target.parentNode.parentNode
  let cloneNode = node.cloneNode(true)
  let projectName = cloneNode.id

  cloneNode.style.boxShadow = 'none'

  let title = `Projeto: ${cloneNode.children[0].children[1].textContent}`

  //remove o botão visualizar
  let btnNode = cloneNode.children[1].children[0]
  btnNode.remove()

  //centraliza os breadcrumbs
  let breadcrumbs = cloneNode.firstChild.parentNode.children[1]
  breadcrumbs.style.justifyContent = 'center'

  const user = 'dezoliveira'
  const github = `https://www.github.com/${user}/${projectName}`
  const gitPages = `https://${user}.github.io/${projectName}`

  modal.classList.add('active')
  document.body.style.overflow = 'hidden'

  let div = document.createElement('div')
  let closeButton = document.createElement('div')
  let closeIcon = document.createElement('i')
  let header = document.createElement('header')
  let modalTitle = document.createElement('h2')
  let footer = document.createElement('footer')
  let btnLive = document.createElement('button')
  let linkLive = document.createElement('a')
  let btnGithub = document.createElement('button')
  let linkGithub = document.createElement('a')
  let gitIcon = document.createElement('i')
/*   let projectIcon = document.createElement('i') */

  div.classList.add('modal-content')
  closeButton.classList.add('close-button')
  closeIcon.classList.add('fas', 'fa-times')
  header.classList.add('modal-header')
  footer.classList.add('modal-footer')

  closeButton.id = 'closeButton'
  closeButton.addEventListener('click', ()=> {
    let div = document.querySelector('.modal-content')
    modal.classList.remove('active')
    div.parentNode.removeChild(div)
    document.body.style.overflow = 'auto'
  })

  modal.appendChild(div)
  div.appendChild(closeButton)
  closeButton.appendChild(closeIcon)
  div.appendChild(header)
  header.appendChild(modalTitle)
  modalTitle.textContent = title
  div.appendChild(cloneNode)
  div.appendChild(footer)
  footer.appendChild(linkLive)

  linkLive.href = gitPages

  linkLive.appendChild(btnLive)
  btnLive.textContent = "Projeto"
  btnLive.classList.add('btn', 'btn-show')

/*   btnLive.appendChild(projectIcon)
  projectIcon.classList.add('fab', 'fa-github')
  projectIcon.style.padding = "0 3px" */

  footer.appendChild(linkGithub)

  linkGithub.href = github

  linkGithub.appendChild(btnGithub)
  btnGithub.textContent = "Github"
  btnGithub.classList.add('btn', 'btn-primary')

  btnGithub.appendChild(gitIcon)
  gitIcon.classList.add('fab', 'fa-github')
  gitIcon.style.padding = "0 3px"

/*   html += `
    <div class="modal-content">
    <div class="close-button"></div>
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

  if (e.target.classList.contains('active')) {
    modal.classList.remove('active')
    div.parentNode.removeChild(div)
    document.body.style.overflow = 'auto'
  }
}

function openHamburgerMenu() {
  alert('Essa funcionalidade ainda está sendo criada!')
  /* let div = document.createElement('div')
  modal.appendChild(div)
  div.classList.add('menu-content')
  modal.classList.add('active') */
}

modal.addEventListener('click', cancelModal)
hamburger.addEventListener('click', openHamburgerMenu)