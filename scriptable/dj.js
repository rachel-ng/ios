// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: magic;

function data(key, data) {
  return {
    "key": key,
    "data": data
  }
}

function set(d) {
  let url = new CallbackURL("shortcuts://run-shortcut")
  
  url.addParameter('name', `dj_set_value`)
  url.addParameter('input', JSON.stringify(d))
  
  return url.open()
}

function get(d) {
  let url = new CallbackURL("shortcuts://run-shortcut")
  
  url.addParameter('name', `dj_get_value`)
  url.addParameter('input', JSON.stringify(d))
  
  return url.open()
}

module.exports = {
  data,
  set,
  get
}
