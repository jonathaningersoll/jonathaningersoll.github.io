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

        let card = document.createElement('div');
        card.classList.add('card');
        let cardBody = document.createElement('div');
        card.classList.add('card-body');
        let head = document.createElement('h5');
        head.classList.add('card-title');
        let p = document.createElement('p');
        p.classList.add('card-text');
        p.innerText = `${repoDesc}`;
        let link = document.createElement('a');
        link.href = `${homePage}`;
        link.classList.add('btn');
        link.classList.add('btn-primary');
        link.innerText = "Homepage";

        document.querySelector('.github-repos').appendChild(card);

        card.appendChild(cardBody);
        cardBody.appendChild(head);
        cardBody.appendChild(p);
        cardBody.appendChild(link);
    }
}