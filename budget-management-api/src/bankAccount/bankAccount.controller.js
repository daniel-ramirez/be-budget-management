const BankAccount = require('./bankAccount.model');

//GET ALL ---> GET
const getAll = async (req, res, next) => {
    try {
        const rows = await BankAccount.findAll();
        res.status(200).json({ data: rows });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
};

//GET ALL ---> GET
const getAllByUser = async (req, res, next) => {
    const { userAccountId } = req.params;
    const args = {
        userAccountId: Number(userAccountId)
    }
    try {
        const rows = await BankAccount.findAllByUser(args);
        res.status(200).json({ data: rows });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
};

//GET BY ID ---> GET
const getByID = async (req, res, next) => {
    const { id } = req.params;
    const args = {
        id: Number(id)
    }
    try {
        const rows = await BankAccount.findById(args);
        res.status(200).json({ data: rows });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
};

//CREATE ---> POST
const create = async (req, res, next) => {
    //console.log(req.body);
    if (!req.body.id ||
        !req.body.userAccountId ||
        !req.body.accountNumber ||
        !req.body.accountName ||
        !req.body.bankName ||
        !req.body.balance
    ) {
        return res.status(400).json({ message: "missing to enter data" });
    }
    const args = {
        userAccountId: req.body.userAccountId,
        accountNumber: req.body.accountNumber,
        accountName: req.body.accountName,
        bankName: req.body.bankName,
        balance: req.body.balance
    }
    try {
        await BankAccount.create(args);
        res.status(200).json({ message: 'created' });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
};

//DELETE ---> DELETE
const remove = async (req, res, next) => {
    if (!req.body.id) {
        return res.status(400).json({ message: "missing to enter data" });
    }
    const args = {
        id: Number(req.body.id),
    }
    try {
        await BankAccount.deleteById(args);
        res.status(200).json({ message: 'deleted' });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
};

//UPDATE ---> PUT
const update = async (req, res, next) => {
    if (!req.body.id ||
        !req.body.userAccountId ||
        !req.body.accountNumber ||
        !req.body.accountName ||
        !req.body.bankName ||
        !req.body.balance
    ) {
        return res.status(400).json({ message: "missing to enter data" });
    }
    const args = {
        id: req.body.id,
        userAccountId: req.body.userAccountId,
        accountNumber: req.body.accountNumber,
        accountName: req.body.accountName,
        bankName: req.body.bankName,
        balance: req.body.balance
    }
    try {
        await BankAccount.updateById(args);
        res.status(200).json({ message: 'update' });
    } catch (error) {
        res.status(400).json({ error: error });
        //next(error);
    }
};

module.exports = {
    getAll,
    getAllByUser,
    getByID,
    create,
    remove,
    update
};
