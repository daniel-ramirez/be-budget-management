const db = require('../util/db');

const create = ({ userAccountId, accountNumber, accountName, bankName, balance }) => {
    return new Promise((resolve, reject) => {
        try {
            db.bankAccount.push(
                {
                    id: db.bankAccount[db.bankAccount.length - 1].id + 1,
                    userAccountId,
                    accountNumber,
                    accountName,
                    bankName,
                    balance
                }
            );
            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

const findAll = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve(db.bankAccount);
        } catch (error) {
            reject(error);
        }
    })
};

const findAllByUser = ({ userAccountId }) => {
    return new Promise((resolve, reject) => {
        try {
            const list = db.bankAccount.filter((item) => item.userAccountId === userAccountId);
            resolve(list);
        } catch (error) {
            reject(error);
        }
    })
};


const findById = ({ id }) => {
    return new Promise((resolve, reject) => {
        try {
            const list = db.bankAccount.filter((item) => item.id === id);
            resolve(list);
        } catch (error) {
            reject(error);
        }
    })
};

const updateById = ({ id, userAccountId, accountNumber, accountName, bankName, balance }) => {
    return new Promise((resolve, reject) => {
        try {
            db.bankAccount.map((item) => {
                if (item.id === id) {
                    item.userAccountId = userAccountId;
                    item.accountNumber = accountNumber;
                    item.accountName = accountName;
                    item.bankName = bankName;
                    item.balance = balance;
                }
                return item;
            })
            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

const deleteById = ({ id }) => {
    return new Promise((resolve, reject) => {
        try {
            db.bankAccount.map((item, index) => {
                if (item.id === id) {
                    db.splice(index, 1);
                }
                return item;
            })
            resolve();
        } catch (error) {
            reject(error);
        }
    })
};

module.exports = {
    create, findAll, findAllByUser, findById, updateById, deleteById
};
