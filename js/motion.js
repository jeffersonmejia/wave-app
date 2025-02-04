const d = document,
  $main = d.querySelector('main')

function start() {
  let $sim = d.getElementById('sim'),
    $images = d.querySelectorAll('image'),
    $footer = d.querySelectorAll('#sim svg g')[658],
    $dashboardElements = d.querySelectorAll('#sim svg'),
    $dashboard = $dashboardElements[0],
    $string = $dashboardElements[1].querySelectorAll('g')[5],
    $balls = $string.querySelectorAll('image'),
    $wrench = $dashboardElements[2].querySelectorAll('image')[1],
    $clamp = $images[1],
    $btnContainer = d.querySelector('#sim svg g').querySelectorAll('g'),
    $btnOptions = $btnContainer[30],
    $btnRestart = $btnContainer[66],
    $btnExtrems = $btnContainer[70],
    $btnTypes = $btnContainer[107],
    $btnControl = $btnContainer[131],
    $btnPause = $btnContainer[442],
    $btnPauseInner = $btnContainer[435],
    $btnPlay = $btnContainer[448],
    $btnUpdate = $btnContainer[454],
    $title = d.querySelector('.title-app'),
    $simulationDescription = d.querySelector('.simulation-description')

  $wrench.classList.toggle('wrench')
  console.log([$wrench])
  const $btnsHidden = [
    $btnOptions,
    $btnRestart,
    $btnExtrems,
    $btnTypes,
    $btnControl,
    $btnPause,
    $btnPlay,
    $btnUpdate,
    $btnPauseInner,
  ]

  $btnsHidden.forEach((btn) => {
    btn.classList.toggle('hidden')
  })
  $btnControl.parentElement.removeChild($btnControl)
  Array.from($balls).forEach((ball, index) => {
    if (index % 2 == 0) {
      ball.setAttribute('href', 'img/ball_purple.png')
    } else {
      ball.setAttribute('href', 'img/ball_blue.png')
    }
  })
  $clamp.setAttribute('href', 'img/clamp.png')
  $wrench.setAttribute('href', 'img/wrench.png')
  $footer.style.display = 'none'
  setTimeout(() => {
    $main.classList.toggle('main-visible')
  }, 1000)
  setTimeout(() => {
    $sim.classList.toggle('sim-visible')
    $title.classList.toggle('title-app-visible')
    $simulationDescription.classList.toggle('simulation-description-visible')
  }, 3000)
}

d.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    start()
  }, 1000)
  d.title = 'Simulación: Onda en una cuerda'
})

d.addEventListener('click', (e) => {
  if (e.target.matches('.wrench')) {
    console.log('clicked')
  }
})
setTimeout(() => {
  d.title = 'Simulación: Onda en una cuerda'
}, 4000)
