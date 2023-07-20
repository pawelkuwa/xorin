const logs = document.getElementById(`logs`);
const commandLine = document.getElementsByClassName(`console-command`)[0];
const autoScroll = document.getElementsByClassName(`auto-scroll`)[0];

function writeLogs() {
    data = new FormData();
    data.append("type", "console");
    
    fetch("http://localhost:8001/xorin", {
        method: "POST",
        body: data
    }).then(function (response) {
        if (!response.ok) {
            console.log('coś się wysrało');
        } else {
            return response.json();
        }
    }).then(function (data) {
        var l = JSON.parse(data.logs);
        const logDivs = logs.querySelectorAll("div");
        
        if (l.length < logDivs.length) {
            for (let i = l.length; i < logDivs.length; i++) {
                logs.removeChild(logDivs[i]);
            }
        }
        
        for (let i = 0; i < l.length; i++) {
            if (logDivs[i]) {
                logDivs[i].textContent = l[i];
            } else {
                const newDiv = document.createElement("div");
                if (l[i].includes('WARN')) newDiv.style.color = 'yellow';
                if (l[i].includes('ERROR')) newDiv.style.color = 'red';
                newDiv.textContent = l[i];
                logs.appendChild(newDiv);
            }
        }
        if (autoScroll.checked) {
            logs.scrollTop = logs.scrollHeight - logs.clientHeight;
        }
    }).catch(function (err) {
        console.error(err + " błąd");
    });
}

function executeCommand(command) {
    data = new FormData();
    data.append("type", "command");
    data.append("command", command);
    
    fetch("http://localhost:8001/xorin", {
        method: "POST",
        body: data
    }).then(function (response) {
        if (!response.ok) {
            console.log('coś się wysrało');
        } else {
            return response.json();
        }
    }).then(function (data) {
    }).catch(function (err) {
        console.error(err);
    });
}

commandLine.addEventListener('keydown', function (event){
    if (event.key != 'Enter') return;
    var command = commandLine.value;
    commandLine.value = '';
    executeCommand(command);
});

writeLogs();

setInterval(function () {
    writeLogs();
}, 1000);