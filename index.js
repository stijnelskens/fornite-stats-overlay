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
        setTimeout(function() {
            var sgMessage = document.getElementById('sg-message');
            fadeIn(sgMessage);
            function fadeIn(el, display) {
                el.style.opacity = 0;
                el.style.display = display || "block";
                (function fade() {
                    var val = parseFloat(el.style.opacity);
                    if (!((val += .05) > 1)) {
                        el.style.opacity = val;
                        requestAnimationFrame(fade);
                    }
                })();
            };
        }, 3000);
        setTimeout(function() {
            var sgMessage = document.getElementById('sg-message');
            fadeOut(sgMessage);
            function fadeOut(e) {
                e.style.opacity = 1;
                (function fade() {
                    if ((e.style.opacity -= .05) < 0) {
                        e.style.display = "none";
                    } else {
                        requestAnimationFrame(fade);
                    }
                })();
            };
        }, 6500);
  });
}
  