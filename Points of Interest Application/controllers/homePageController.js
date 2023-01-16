let getHomePage = (req, res) => {
    return res.render("main.ejs", {
        user: req.username
    })
};

module.exports = {
    getHomePage: getHomePage
};