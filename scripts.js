let baseUrl = 'https://api.github.com/users/jonathaningersoll/repos'
fetchResults();
function fetchResults(){

    fetch(baseUrl)
    .then(function(result){
        return result.json();
    }).then(function(json) {
        displayResults(json);
    });
}

function displayResults(json) {
console.log(json);    
    let repos = json;
    for(repo of repos){

        let repoDesc;
        let homePage;
        if(repo.description == "null"){
            repoDesc = "";
        }else{
            repoDesc = repo.description;
        }

        if(repo.homepage == "null"){
            homePage = "";
        }else{
            homePage = repo.homepage;
        }

        
        let pageLink = document.createElement('a');
        let homepageLink = document.createElement('a');
        let container = document.createElement('div');
        let head = document.createElement('h3');
        let p = document.createElement('p');
        let cloneP = document.createElement('p');
        
        pageLink.href = repo.html_url;
        pageLink.textContent = repo.name;
        homepageLink.href = homePage;
        homepageLink.textContent = " - Homepage";
        p.innerText = repoDesc;
        container.className = 'repo';
        
        document.querySelector('.github-repos').appendChild(container);

        container.appendChild(head);
        head.appendChild(pageLink);
        container.appendChild(p);
        container.appendChild(cloneP);
        if(homepageLink != homePage){
        }else {
            cloneP.appendChild(homepageLink);
        }

    }
}