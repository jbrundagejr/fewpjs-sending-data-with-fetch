function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then (res => res.json())
  .then (function(obj){
    let body = document.querySelector("body")
    body.append(obj.id)
  })
  .catch(function(error){
    let body = document.querySelector("body")
    body.append(error.message)
  })
}
