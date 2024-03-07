var lists = document.querySelectorAll('.bOqzBs')
var items = document.querySelectorAll('.lhIavR')
var perItems = document.querySelectorAll('.cvnOVA ')
var img = document.querySelector('.Image--image')
var title = document.querySelector('.item--title')
var description = document.querySelector('.item--description-text')

var arrs = {
  name: title.textContent,
  description: description.textContent,
  image: img.src,
}
var arr = []
for (var i = 0; i < lists.length; i++) {
  var txt = lists[i].textContent
  arr = [
    ...arr,
    {
      [txt]: `${items[i].textContent} ${perItems[i].textContent}`,
    },
  ]
}
var list = { ...arrs, attribute: arr }

let urlSplit = location.href.split('/')
let urlId = Number(urlSplit[urlSplit.length - 1])
var thea = document.createElement('a')
document.body.appendChild(thea)
thea.href =
  'data:application/json;charset=utf-8,' +
  encodeURIComponent(JSON.stringify(list))
thea.setAttribute('download', `${urlId}.json`)
thea.click()
