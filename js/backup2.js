let modal = document.querySelector('.modal')

document.querySelectorAll('.btn-show').forEach(btn => {
  btn.addEventListener('click', openModal)
})

function openModal(e) {
  let html = '' 
  let node = e.target.parentNode.parentNode
  let node2 = e.target.parentNode
  console.log(node2)
  let projectName = node.id

  const user = 'dezoliveira'
  const github = `https://www.github.com/${user}/${projectName}`
  const gitPages = `https://${user}.github.io/${projectName}`

  html += `
    <div class="modal-content">
      <div class="close-button">
        <i class="fas fa-cross"></i>
      </div>
      <header class="modal-header">
      
      </header>
      <div class="modal-body">
        <section id="userapi" class="section">
          <article class="article">
            <figure>
              <img src="./src/./img/project9.png" alt="" class="projectImage"/>
            </figure>
            <h3>Random Users</h3> 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Labore porro rem assumenda, incidunt accusantium libero 
              deserunt quia hic maxime esse quo temporibus voluptate 
              placeat fuga molestias fugiat veniam asperiores! Inventore?
            </p>
          </article>
          <div class="btn-group" style="justify-content: center">
            <span class="tag-group">
              <div class="breadcrumb html-css">HTML/CSS</div>
              <div class="breadcrumb javascript">Javascript</div>
              <div class="breadcrumb api">API</div>
            </span>
          </div>
        </section>
      </div>
      <footer class="modal-footer">
        <a href="${gitPages}" target="_blank">
          <button class="btn btn-show">
            Projeto
          </button>
        </a>
        <a href="${github}" target="_blank">
          <button class="btn btn-primary">
            Github
          </button>
        </a>
      </footer>
    </div>
  `  

  modal.innerHTML = html
  modal.classList.add('active')

/*   

<section id="userapi" class="section">
  <article class="article">
    <figure>
      <img src="./src/./img/project9.png" alt="" class="projectImage"/>
    </figure>
    <h3>Random Users</h3> 
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Labore porro rem assumenda, incidunt accusantium libero 
      deserunt quia hic maxime esse quo temporibus voluptate 
      placeat fuga molestias fugiat veniam asperiores! Inventore?
    </p>
  </article>
  <div class="btn-group">
    <button class="btn btn-show">Visualizar</button>
    <span class="tag-group">
      <div class="breadcrumb html-css">HTML/CSS</div>
      <div class="breadcrumb javascript">Javascript</div>
      <div class="breadcrumb api">API</div>
    </span>
  </div>
</section>

*/


}

function cancelModal(e) {
  let div = document.querySelector('.modal-content')

  if(e.target.classList.contains('active')){
    modal.classList.remove('active')
    div.parentNode.removeChild(div)
    console.log(div.parentNode)
  }
}

modal.addEventListener('click', cancelModal)