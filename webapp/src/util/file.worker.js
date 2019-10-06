onmessage = event => {
    fetchGames(event.data)
}

onerror = event => {
    console.error(event.message)
}

function fetchGames(data) {
    fetch(data.url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(r => r.json().then(data => ({ status: r.status, body: data })))
        .then(obj => { postMessage(obj); })
        .catch(err => console.error(err));
}