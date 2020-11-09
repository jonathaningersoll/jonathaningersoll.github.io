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

        let titleText = repo.name;
        // let repoUrl = repo.html_url
        

        let langs = fetch('https://api.github.com/repos/jonathaningersoll/${titleText}/languages')
        .then(function(res){
            return res.json();
        }).then(function(json) {
            console.log(json);
        })
        console.log(langs);
        // let x = repo.
        // let bulbOne = function(asdf[0]); 

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

        /* SVG Variables */



        /* NEW CARD THEME */

        let card = document.createElement('div');
        card.classList.add('card');

        // Image Row
        let square = document.createElement('div');
        let cardNumber = document.createElement('div');
        let small = document.createElement('span');

        // Image Row Classes
        square.classList.add('square');
        cardNumber.classList.add('card-number');
        small.classList.add('small');

        // Title Row
        let titleRow = document.createElement('div');
        let title = document.createElement('div');
        let titleRowOne = document.createElement('row');
        let br = document.createElement('br');
        let titleRowTwo = document.createElement('row');

        // Title Row Classes
        titleRow.classList.add('row');
        titleRow.classList.add('title-row');
        title.classList.add('col-12');
        title.classList.add('title');
        
        // Stats Row
        let statsArea = document.createElement('div');
        let statsAreaColumnOne = document.createElement('div');
        let techBubbleOne = document.createElement('div');
        let techBubbleTwo = document.createElement('div');
        let techBubbleThree = document.createElement('div');
        let description = document.createElement('div');

        // Stats Row Classes
        statsArea.classList.add('row');
        statsArea.classList.add('stats-area');
        statsAreaColumnOne.classList.add('col-2');
        techBubbleOne.classList.add('row');
        techBubbleOne.classList.add('tech-bubble');
        techBubbleTwo.classList.add('row');
        techBubbleTwo.classList.add('tech-bubble');
        techBubbleThree.classList.add('row');
        techBubbleThree.classList.add('tech-bubble');
        description.classList.add('col-10');
        description.classList.add('description');

        // Bottom Row
        let bottom = document.createElement('div');
        let pTwo = document.createElement('p');
        let pOne = document.createElement('p');
       
        // Bottom Row Classes
        bottom.classList.add('row');
        bottom.classList.add('bottom');
        pTwo.classList.add('card');
        pOne.classList.add('card');
        
        // Card Children
        card.appendChild(square);
            square.appendChild(cardNumber);
                cardNumber.appendChild(small);
        card.appendChild(titleRow);
            titleRow.appendChild(title);
                title.appendChild(titleRowOne);
                title.appendChild(br);
                title.appendChild(titleRowTwo);
        card.appendChild(statsArea);
            statsArea.appendChild(statsAreaColumnOne);
                statsAreaColumnOne.appendChild(techBubbleOne);
                statsAreaColumnOne.appendChild(techBubbleTwo);
                statsAreaColumnOne.appendChild(techBubbleThree);
            statsArea.appendChild(description);
        card.appendChild(bottom);
            bottom.appendChild(pOne);
            bottom.appendChild(pTwo);

        /* OLD CARD THEME */

        /*
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
        */
    }
}