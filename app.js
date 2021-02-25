const modalOverlay = document.querySelector('.modal-overlay')
const posts = document.querySelectorAll('.post')
const modal = document.querySelector('.modal')

for (let post of posts) {
  post.addEventListener('click', function () {
    const postID = post.getAttribute('id')
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${postID}`;
  })
}

document.querySelector('.close-modal').addEventListener("click", function () {
  modalOverlay.classList.remove("active")
})

document.querySelector('.max-modal').addEventListener('click', function () {
  modal.classList.add('maximize')
})

document.querySelector('.min-modal').addEventListener('click', function () {
  modal.classList.remove('maximize')
})