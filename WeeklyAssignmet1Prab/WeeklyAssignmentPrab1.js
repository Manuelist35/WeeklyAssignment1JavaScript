const btnRepos = document.getElementById("buttonRepos")
btnRepos.addEventListener("click", getRepos);
async function getRepos() {
    const url = "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues"
    //const url = "https://docs.github.com/v3/search/repositories?q=stars:10..20"
    const response = await fetch(url)
    const result =  await response.json()
    console.log(result, response)

    result.map(value =>{
        const title = value.title;
        const avatarUrl = value.user.avatar_url;
        const labelsName = value.labels;
        //console.log(labelsName)
        labelsName.map(value =>{
            nameLabel = value.name
            console.log(nameLabel)
            const ul = document.getElementById("listRepoIssues");
            ul.innerHTML += `<div class="card">${nameLabel}</div>`
        })
        const number = value.number;
        console.log(title)
        console.log(avatarUrl)
        const ul = document.getElementById("listRepoIssues");
        ul.innerHTML += `<div class="card"><li><img class="from-avatar avatar-user" src="${avatarUrl}" width="20" height="20" alt="@mrYbc"><span class="title"><a>${title}</a></span><span class="number">#${number}</span></li></div><div class="labels"></div>`
    })
}