module.exports = {
    userAccount: [
        {
            id: 1,
            firstName: "Daniel",
            lastName: "Ramirez",
            email: "daniel.ramirez@mail.com",
            password: "darf1234",
            sessionToken: ""
        },
    ],
    bankAccount: [
        {
            id: 1,
            userAccountId: 1,
            accountNumber: "1234567890",
            accountName: "City Bank",
            bankName: "City Bank",
            balance: 100.00
        },
    ],
    transaction: [
        {
            id: 1,
            type: "EXP",
            category: "TSFR",
            accountId: 1,
            amount: 10.00,
            transactionDate: "2023-01-31"
        }
    ],
    fieldValueList: [
        {
            id: 1,
            name: "Expense",
            description: "Expense",
            value: "EXP",
            listCode: "TRX_TYPE"
        },
        {
            id: 2,
            name: "income",
            description: "income",
            value: "EXP",
            listCode: "TRX_TYPE"
        },
        {
            id: 3,
            name: "Deposit",
            description: "Deposit",
            value: "DEP",
            listCode: "TRX_CAT"
        },
        {
            id: 4,
            name: "Withdrawal",
            description: "Withdrawal",
            value: "W_D",
            listCode: "TRX_CAT"
        },
        {
            id: 5,
            name: "Payment",
            description: "Payment",
            value: "PYMT",
            listCode: "TRX_CAT"
        },
        {
            id: 6,
            name: "Transfer",
            description: "Transfer",
            value: "TSFR",
            listCode: "TRX_CAT"
        },
        {
            id: 7,
            name: "City Bank",
            description: "City Bank",
            value: "CB",
            listCode: "BANK"
        }
    ]
};
