// este codigo forma parte de la pagina de "contacto", tuve problemas al tratar de vincular con este archivo //

<script>
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#mailpersonal')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `camilanieto10@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}
</script>