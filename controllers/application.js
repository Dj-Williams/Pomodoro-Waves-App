const applicationController = {
    index: (req, res) => {
        // res.send(`Yo! This is the app index! If you can see me, then I'm working!`)
        res.render('app/index')
    }
}

module.exports = applicationController

// This is the controller for the welcome splash page. 