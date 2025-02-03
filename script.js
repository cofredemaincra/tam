document.addEventListener("DOMContentLoaded", () => {
    const okButton = document.getElementById("okButton")
    const noButton = document.getElementById("noButton")
    const errorMessages = document.getElementById("errorMessages")
    const heartsContainer = document.getElementById("hearts")
    const videoLinkContainer = document.getElementById("videoLink")
  
    const yesVideoUrl = "https://vm.tiktok.com/ZMkq92pwq/" // Reemplaza esta URL con la del video para "sí"
    const noVideoUrl = "https://vm.tiktok.com/ZMkqHc2y8/" // Reemplaza esta URL con la del video para "no"
  
    function showVideoLink(message, url) {
      videoLinkContainer.innerHTML = `
              <p>${message}</p>
              <a href="${url}" target="_blank">Haz clic aquí para ver los video</a>
          `
    }
  
    okButton.addEventListener("click", () => {
      showVideoLink("¡YEIII! ¡VAMOS A TENER HIJOS!:", yesVideoUrl)
    })
  
    let errorCount = 0
    noButton.addEventListener("click", () => {
      errorCount++
      const error = document.createElement("p")
      error.textContent = `Error ${errorCount}: ESTOY EMBARAZADA 😭`
      error.classList.add("error")
      errorMessages.appendChild(error)
  
      createHeart()
  
      showVideoLink("Aunque dijiste que no, mira estos videos para reflexionar:", noVideoUrl)
    })
  
    function createHeart() {
      const heart = document.createElement("div")
      heart.innerHTML = "💔"
      heart.classList.add("heart")
      heart.style.left = `${Math.random() * 100}vw`
      heart.style.animationDuration = `${Math.random() * 2 + 2}s`
      heartsContainer.appendChild(heart)
  
      setTimeout(() => {
        heart.remove()
      }, 4000)
    }
  })
  
  