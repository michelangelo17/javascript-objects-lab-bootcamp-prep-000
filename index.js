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
  return Object.assign({}, obj, { [key]: val })
}

function destructivelyUpdateObjectWithKeyAndValue (obj, key, val) {
  obj[key] = val;
  return obj;
}