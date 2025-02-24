const getHomePage = (req, res) => {
    // process data
    // call model  
    res.send('Hello World! & Nodemon')
}

const getABC = (req, res) => {
    res.send('check ABC!')
}

const getTest = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage, getABC, getTest
}