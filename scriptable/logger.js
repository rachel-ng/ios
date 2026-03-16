// Variables used by Scriptable.

// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: magic;

function data(title, msg) {
  return {
    "title": title,
    "msg": msg
  }
}

function log(d) {
  let url = new CallbackURL("shortcuts://run-shortcut")
  
  let s = "data" in d ? " " : "_"
  url.addParameter('name', `log${s}scriptable`)
  url.addParameter('input', JSON.stringify(d))
  
  return url.open()
}

// log("test", "testing")

module.exports = {
  data,
  log
}
