// Event Listener
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/1`, true);

    xhr.onload = function(){
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            
            let output = '';

            if(response.type === 'success') {
                response.value.forEach(function(joke){
                    output += `<h3>${joke.joke}</h3>`;
                });
            } else {
                output += '<li>Something went wrong</li>'
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}