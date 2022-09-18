function time() {
    setInterval(x(), 1000);

}

var x = () => {
    var body = document.getElementById('body')
    var p = document.getElementById('p')
    if (body.classList == 'white') {
        body.classList = 'black'
        p.classList = 'black'
        p.innerHTML = 'WOOOOOOO'
    } else {
        body.classList = 'white'
        p.classList = 'white'
        p.innerHTML = 'HEYYYYYYY'
    }
}