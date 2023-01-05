import registerService from "../services/registerService";

let getRegister = (req, res) => {
    return res.render("register.ejs");
};

let createNewUser = async (req, res) => {
    console.log(req.body);
    try {
        let data = {
            fullName: req.body.fullName,
            email: req.body.email,
            userName: req.body.userName,
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