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
        const dbInstance = req.app.get("db");
        const {name, price, img} = req.body;

        dbInstance.create_product([name, price, img])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong."})
                console.log(err)
            })
    }
}