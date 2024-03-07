var theDiv = document.createElement('div')
var json = []
for (var urlID = 873; urlID <= 999; urlID++) {
  theDiv.innerHTML = ''
  var req = new XMLHttpRequest()
  req.open(
    'GET',
    `https://opensea.io/assets/ethereum/0xed5af388653567af2f388e6224dc7c4b3241c544/${urlID}`,
    false
  )
  req.send(null)
  theDiv.innerHTML = req.response
  document.body.appendChild(theDiv)

  var lists = document.querySelectorAll('.bOqzBs')
  var items = document.querySelectorAll('.lhIavR')
  var perItems = document.querySelectorAll('.cvnOVA.kCzYzE')
  var img = document.querySelector('.Image--image')
  var title = document.querySelector('.item--title')
  var description = document.querySelector('.item--description-text')
  var arrs = {
    name: title.title,
    description: `${description === null ? '' : description.textContent}`,
    image: img.src,
  }
  var arr = []
  var indexList = lists.length / 2
  for (var i = indexList; i < lists.length; i++) {
    arr = [
      ...arr,
      {
        trait_type: lists[i].textContent,
        value: `${items[i].textContent} ${
          perItems.length === 0 ? '' : perItems[i].textContent
        }`,
      },
    ]
  }
  var list = { ...arrs, attributes: arr }
  json = [...json, list]
  console.log(urlID)
}
console.log(JSON.stringify(json))
