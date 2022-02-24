container = document.getElementById("container")
const getData = async() => {
    let response = await fetch('https://api.github.com/users/UmejrZukorlic');
    let res = await response.json();
    img = document.createElement("img")
    img.src = res.avatar_url
    container.appendChild(img);
    let ime = res.name
    h1 = document.createElement('h1')
    container.appendChild(h1);
    h1.innerHTML = ime;
    let login = res.login
    h5 = document.createElement('h5')
    container.appendChild(h5)
    h5.innerHTML = login
    div = document.createElement('div')
    container.appendChild(div)
    div.setAttribute('id', 'podaci')
    podaci = document.getElementById('podaci')
    foll = document.createElement('p')
    followers = res.followers
    foll.innerHTML = followers + " followers"
    podaci.appendChild(foll);
    foll = document.createElement('p');
    following = res.following
    foll.innerHTML = following + " following"
    podaci.appendChild(foll)
    br = document.createElement("br")
    container.appendChild(br)
    br = document.createElement("br")
    container.appendChild(br)
    foll = document.createElement('p')
    createDate = res.created_at
    foll.innerHTML = "created at " + createDate.substr(0, 10)
    container.appendChild(foll)
}
getData();