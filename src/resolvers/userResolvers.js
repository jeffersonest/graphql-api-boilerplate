const User = require('../models/User');

const userQuery = {
    users: () => User.find(),
    user: (_,{id}) => User.findById(id)
};

const userMutation = {
    createUser: (_, {name, email}) => 
            User.create({
                name,
                email
            })
    ,
}

module.exports = {
    userQuery,
    userMutation
}