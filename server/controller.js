module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance.get_inventory()
            .then(items => res.status(200).json(items))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong."})
                console.log(err)
            })
    },
    create: (req, res, next) => {
        const {name, price, img} = req.body;
        res.status(200).send(`I got something!`)
    }
}