let modal = document.querySelector('.modal')
let closeBtn

document
  .querySelectorAll('.btn-show')
  .forEach(btn => {
    btn.addEventListener('click', openModal)
  })

function openModal(e) {
  console.log(e.target.parentNode.parentNode.firstChild.parentNode.children[1])
  let html = ''
  //console.log(e.target.parentNode.parentNode)
  let node = e.target.parentNode.parentNode
  let cloneNode = node.cloneNode(true)
  let projectName = cloneNode.id

  //remove o botão visualizar
  let btnNode = cloneNode.children[1].children[0]
  btnNode.remove()

  //centraliza os breadcrumbs
  let breadcrumbs = cloneNode.firstChild.parentNode.children[1]
  breadcrumbs.style.justifyContent = 'center'

  const user = 'dezoliveira'
  const github = `https://www.github.com/${user}/${projectName}`
  const gitPages = `https://${user}.github.io/${projectName}`

  modal
    .classList
    .add('active')

  let div = document.createElement('div')
  let closeButton = document.createElement('div')
  let closeIcon = document.createElement('i')
  let header = document.createElement('header')
  let footer = document.createElement('footer')
  let btnLive = document.createElement('button')
  let linkLive = document.createElement('a')
  let btnGithub = document.createElement('button')
  let linkGithub = document.createElement('a')

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
  })

  modal.appendChild(div)
  div.appendChild(closeButton)
  closeButton.appendChild(closeIcon)
  div.appendChild(header)
  div.appendChild(cloneNode)
  div.appendChild(footer)
  footer.appendChild(linkLive)

  linkLive.href = gitPages

  linkLive.appendChild(btnLive)
  btnLive.textContent = "Projeto"
  btnLive.classList.add('btn', 'btn-show')

  footer.appendChild(linkGithub)

  linkGithub.href = github

  linkGithub.appendChild(btnGithub)
  btnGithub.textContent = "Github"
  btnGithub.classList.add('btn', 'btn-primary')

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
  console.log(div)
  if (e.target.classList.contains('active')) {
    modal.classList.remove('active')
    div.parentNode.removeChild(div)
  }
}

modal.addEventListener('click', cancelModal)