const Contact = require("../model/contact.model");

exports.addContact = async (req, res) => {
    try {
        await Contact.create({
            email: req.body.email,
            name: req.body.name
        });
        res.send('new contact cretated')
    } catch (error) {
        res.status(500).send({ error: 'Something went wrong while adding contact' })
        console.log(error)
    }
}

exports.updateContact = async (req, res) => {
    const payload = req.body;
    try {
        await Contact.update(
            payload,
            { where: { id: req.params.id } }
        )
        res.send('contact Updated')
    } catch (error) {
        res.status(500).send({ error: 'Something went wrong while updating contact' })
        console.log(error)
    }
}

exports.deleteContact = async (req, res) => {
    try {
        let data = await Contact.destroy({
            where: { id: req.params.id }
        });
        res.status(204).send({ msg: 'Contact deleted successfully', data })
    } catch (error) {
        res.status(500).send({ error: 'Something went wrong while deleting contact' })
        console.log(error)
    }
}

exports.getAllContact = async (req, res) => {
    try {
        let data = await Contact.findAll()
        if (data.length) return res.status(200).send(data);
        data = data.splice(0, (page*10)-1);
        return res.status(204)
    } catch (error) {
        res.status(500).send({ error: 'Something went wrong while getting contact' })
        console.log(error)
    }
}

exports.searchContact = async (req, res) => {
    let query = req.query.name ? req.query.name : req.query.email ? req.query.email : undefined;
    let page = req.query.page ? req.query.page : 1;
    try {
        if (query == undefined)
            return res.status(400).send('Invalid seach parameters: \n Query parameter must include name or email');

        const data = await Contact.findOne({ where: { $or: [{ name: req.query.name }, { email: req.query.email }] } });

        data = data.splice(0, (page*10)-1);
        if (data) return res.status(200).send(data);
        return res.status(404).send(`No contact found matching query ${query}`);
    } catch (error) {
        res.status(500).send({ error: `Something went wrong while getting contact with query ${query}` })
        console.log(error)
    }
}
