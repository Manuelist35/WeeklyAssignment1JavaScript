const btnRepos = document.getElementById("buttonRepos")
btnRepos.addEventListener("click", getRepos);
async function getRepos() {
    const url = "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues"
    //const url = "https://docs.github.com/v3/search/repositories?q=stars:10..20"
    const response = await fetch(url)
    const result =  await response.json()
    console.log(result, response)

    /*result.map(value =>{
        const title = value.title;
        const avatarUrl = value.user.avatar_url;
        console.log(title)
        console.log(avatarUrl)
        const ul = document.getElementById("listRepoIssues");
        ul.innerHTML += `<li><div class="name"><a> Name: ${title}</a></div><div><div class="status">${avatarUrl}<div></li>`
    })*/
}