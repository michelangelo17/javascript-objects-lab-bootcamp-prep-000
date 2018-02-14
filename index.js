var recipeParts = [
  'Ingredients',
  'Directions'
]
var recipes = new Object({
  Pizza: [recipeParts],
  Burrito: [recipeParts],
  Hotdog: [recipeParts]
})

function updateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign({} obj: [key])
}