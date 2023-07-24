const ramUsage = document.getElementById('ram-usage');
let usedRam = 0;
let freeRam = 0;
let maxRam = 0;

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function update() {
    let url = "http://localhost:8001/xorin";

    // Maksymalne użycie
    let data = new FormData();
    let token = getCookie("token");
    data.append("type", "max-ram");
    data.append("token", token);

    fetch(url, {
        method: 'POST',
        body: data
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            console.error('Wystąpił błąd: ');
            return;
        }
    })
    .then(function (data) {
        maxRam = data.value;
    })
    .catch(function (err) {
        console.error('Wystąpił błąd: ' + err);
    });

    // Zużyty
    let data2 = new FormData();
    data2.append("type", "used-ram");
    data2.append("token", token);

    fetch(url, {
        method: 'POST',
        body: data2
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            console.error('Wystąpił błąd: ');
            return;
        }
    })
    .then(function (data) {
        usedRam = data.value;

        freeRam = maxRam - usedRam;

        let usedRamPercentage = usedRam / maxRam;
        usedRamPercentage = usedRamPercentage * 100;
        ramUsage.style.setProperty("--p", usedRamPercentage);
        ramUsage.innerHTML = Math.floor(usedRamPercentage) + `%`;
    })
    .catch(function (err) {
        console.error('Wystąpił błąd: ' + err);
    });

}

update();

setInterval(() => {
    update();
}, 1000);