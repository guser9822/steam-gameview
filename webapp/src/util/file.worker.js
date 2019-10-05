self.addEventListener('message', function (e) {
    self.postMessage(e.data+' updated eight');
}, false);