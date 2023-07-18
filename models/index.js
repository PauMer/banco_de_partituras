const models = {
    userModel: require('./nosql/users'),
    partituraModel: require('./nosql/partituras'),
    storageModel: require('./nosql/storage'),
    compositorModel: require('./nosql/compositores'),
    periodoModel: require('./nosql/periodos')
}

module.exports = models