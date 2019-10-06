onmessage = event => {
    console.log("App said : ", event.data)
    heavyTask()
    postMessage('heavy task executed');
}

onerror = event => {
    console.error(event.message)
}


function heavyTask() {
    console.log('HeavyTask')
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(response => {
            console.log('Response : ', response.json())
        })
        .catch(err => console.error(err));
}