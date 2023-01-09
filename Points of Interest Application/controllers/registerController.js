const registerService =require("../services/registerService");

const getRegister = (req, res) => {
    return res.render("register.ejs");
};

const createNewUser = async (req, res) => {
    console.log(req.body);
    try {
        const data = {
            fullname: req.body.fullName,
            email: req.body.email,
            username: req.body.userName,
            password: req.body.password
        };

        //create a new user
        await registerService.createNewUser(data);
        return res.status(200).json({
            message: "User created Successfully!"
        });
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getRegister: getRegister,
    createNewUser: createNewUser
}