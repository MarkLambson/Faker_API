const FakerController = require("../controllers/faker.controller");

module.exports = (app) => {
    // Get new ⁡⁢⁣⁢user⁡
    app.get("/api/users/new", FakerController.getUser);
    // Get new ⁡⁣⁢⁣company⁡
    app.get("/api/companies/new", FakerController.getCompany);
    // Get ⁡⁢⁣⁢user⁡ and ⁡⁣⁢⁣company⁡
    app.get("/api/user/company", FakerController.getUserCompany);
}