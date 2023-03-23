const { Schema, model } = require("mongoose")

const headCount = async () =>
    User.aggregate().count("userCount")
    .then((numberOfUsers) => numberOfUsers)