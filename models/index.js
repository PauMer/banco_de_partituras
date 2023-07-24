const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = ENGINE_DB === "nosql" ? "./nosql" : "./mysql";

const models = {
    userModel: require(`${pathModels}/users`),
    partituraModel: require(`${pathModels}/partituras`),
    storageModel: require(`${pathModels}/storage`),
    compositorModel: require(`${pathModels}/compositores`),
    periodoModel: require(`${pathModels}/periodos`)
}


module.exports = models