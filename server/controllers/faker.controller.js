const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        _id: faker.database.mongodbObjectId()
    };
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newCompany;
}

// Get new ⁡⁢⁣⁢user⁡
module.exports.getUser = (req, res) => {
    res.json(createUser());
}
// Get new ⁡⁣⁢⁣company⁡
module.exports.getCompany = (req, res) => {
    res.json(createCompany());
}
// Get ⁡⁢⁣⁢user⁡ and ⁡⁣⁢⁣company⁡
module.exports.getUserCompany = (req, res) => {
    res.json([createUser(), createCompany()]);
}