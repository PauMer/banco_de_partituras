const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key
        if(apiKey == 'holis') {
            next()
        } else {
            res.status(403)
            res.send({error:'API_KEY_NO_ES_CORRECTA'})    
        }
    } catch (e) {
        res.status(403)
        res.send({error:'Algo salió mal con el custom header'})
    }
} 

module.exports = customHeader