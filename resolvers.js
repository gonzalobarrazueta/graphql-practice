const friendDatabase = {}

class Friend {
    constructor(id, { firstName, lastName, age, gender, email, contacts }) {
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.gender = gender,
        this.email = email,
        this.contacts = contacts
    }
}

const resolvers = { 
    /*
    friend: () => {
        return {
            "id": 46261730012771,
            "firstName": "Jaemin",
            "lastName": "Na",
            "gender": "Male",
            "emails": [
                { "email": "dream_jaemin@nctworld.com" },
                { "email": "jaeminatography@picsbyjae.com" }
            ]
        }
    }
    */
    getFriend: ({id}) => {
        return new Friend(id, friendDatabase[id])
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
};

export default resolvers;