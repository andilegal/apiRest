(function () {
  'use strict'

  let ajax = new XMLHttpRequest()
  ajax.open("POST", 'http://localhost:3000/user')
  ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
  ajax.send("username=Anderson&name=Anderson&age=30")

  console.log("cadastrando usuario ....")
  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4) {
      console.log("Usuario cadastrado", ajax.responseText)
    }
  }

  let get = new XMLHttpRequest()
  get.open("GET", "http://localhost:3000/user/anderson")
  get.send()
  get.onreadystatechange = () => {
    if (get.readyState === 4) {
      let data = JSON.parse(get.responseText)
      console.log(data)
    }
  }

})()