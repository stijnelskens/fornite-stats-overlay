const axios = require('axios').default;
const submitButton = document.getElementById('js-submit');

submitButton.addEventListener('click', function(){
    const input = document.getElementById('textInput');
    const inputValue = input.value;
    getStats(inputValue);
});

function getStats(inputValue) {
    axios.get(`https://fortnite-api.com/v1/stats/br/v2/${inputValue}`)
    .then(function (response) {
        // handle success
        console.log(response);

        const wins = document.getElementById('wins');
        const kills = document.getElementById('kills');
        const kd = document.getElementById('kd');

        wins.innerHTML = response.data.data.stats.all.overall.wins;
        kills.innerHTML = response.data.data.stats.all.overall.kills;
        kd.innerHTML = Math.round(response.data.data.stats.all.overall.kd * 100) / 100;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
        console.log('ajuuu lastest');
  });
}
  