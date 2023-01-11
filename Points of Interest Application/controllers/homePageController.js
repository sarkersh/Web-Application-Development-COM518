let getHomePage = (req, res) => {
    return res.render("main.ejs", {
        user: req.user
    })
};

module.exports = {
    getHomePage: getHomePage
};