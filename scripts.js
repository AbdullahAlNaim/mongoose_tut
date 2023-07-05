const mongoose = require('mongoose');
const User = require('./users.js');

mongoose.connect('mongodb://127.0.0.1/testdb');

run();

async function run() {
    try {
        const user = await User.create({
            name: "Kayle",
            age: 26,
            email: 'test@email.com',
            hobbies: ["Weight Lifting", "Bowling"],
            address: {
                street: "main st"
            }
        })

        //this is how you change that data and calling 
        //save to commit change
        // user.name = "Sally"
        // user.save();

        //this the same way as above but longer
        //const user = new User({ name: "Kyle", age: 26 });
        //await user.save().then(() => console.log("user saved"));
        console.log(user)
    } catch (error) {
        console.log(error.message);
    }

}