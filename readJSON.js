// Get the form and file field
let form = document.querySelector('#upload')
let file = document.querySelector('#file')

// Listen for submit events
form.addEventListener('submit', handleSubmit)

/**
 * Handle submit events
 * @param  {Event} event The event object
 */
function handleSubmit(event) {
  // Stop the form from reloading the page
  event.preventDefault()

  // If there's no file, do nothing
  if (!file.value.length) return

  for (var i = 0; i < file.files.length; i++) {
    // Create a new FileReader() object
    let reader = new FileReader()

    // Setup the callback event to run when the file is read
    reader.onload = logFile

    // Read the file
    reader.readAsText(file.files[i])
  }
}

/**
 * Log the uploaded file to the console
 * @param {event} Event The file loaded event
 */
var arr = []
function logFile(event) {
  let str = event.target.result
  let json = JSON.parse(str)
  arr = [...arr, json]
}

let download = document.querySelector('.download')
download.addEventListener('click', handleClick)
function handleClick() {
  //   var thea = document.createElement('a')
  //   document.body.appendChild(thea)
  //   thea.href =
  //     'data:application/json;charset=utf-8,' +
  //     encodeURIComponent(JSON.stringify(arr))
  //   thea.setAttribute('download', `dori1776.json`)
  //   thea.click()
}
