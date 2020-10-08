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
        
        let pageLink = document.createElement('a');
        let cloneLink = document.createElement('a');
        let container = document.createElement('div');
        let head = document.createElement('h3');
        let p = document.createElement('p');
        let cloneP = document.createElement('p');
        
        pageLink.href = repo.html_url;
        pageLink.textContent = repo.name;
        cloneLink.href = repo.clone_url;
        cloneLink.textContent = " - Clone Repository";
        p.innerHTML = `repo.description + <a href="repo.homepage">Homepage</a>`;
        container.className = 'repo';
        
        document.querySelector('.github-repos').appendChild(container);

        container.appendChild(head);
        head.appendChild(pageLink);
        container.appendChild(p);
        container.appendChild(cloneP);
        cloneP.appendChild(cloneLink);

    }
}