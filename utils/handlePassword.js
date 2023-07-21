const bcrypt = require('bcrypt')

const encrypt = async (passwordPlain) => {
    const hash = await bcrypt.hash(passwordPlain, 10)
    return hash
}

const compare = async (passwordPlain, hashPassword) => {
    const password = await bcrypt.compare(passwordPlain, hashPassword)
    return password
}

module.exports = { encrypt, compare }