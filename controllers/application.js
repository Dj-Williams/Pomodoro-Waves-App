const applicationController = {
    index: (req, res) => {
        res.send(`Yo! This is the app index! If you can see me, then I'm working!`)
    }
}

module.exports = applicationController