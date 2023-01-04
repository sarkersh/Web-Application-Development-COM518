let getRegister = (req, res) => {
    return res.render("register.ejs");
};

module.exports = {
    getRegister: getRegister
}