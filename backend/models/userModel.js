const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")


const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})
userSchema.statics.signup = async function (email, password) {
    if (!validator.isEmail(email)) {
        throw Error("Not a valid email")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password Must be Strong")
    }
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error("Email already exists")
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })
    return user;
}

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("All Field must be filled")
    }
    const user = await this.findOne({ email })
    if (!user) {
        throw Error("Incorrect Email")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error("Invalid Password")
    }
    return user
}

module.exports = mongoose.model('User', userSchema)