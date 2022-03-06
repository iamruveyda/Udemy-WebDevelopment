var account01 = {

    name: "Elena Drake",
    accountNo: "123456005",
    balance: 565389,
    additionalAccount: 1000
}

var account02 = {

    name: "Nathan Drake",
    accountNo: "123456006",
    balance: 700000,
    additionalAccount: 2000
}


function withdrawMoney(account, amount) {

    console.log(`Hello ${account.name}`);

    if (account.balance >= amount) {

        account.balance = account.balance - amount;

        console.log("You can get your money.");

    } else {

        var total = account.balance + account.additionalAccount;

        if (total >= amount) {

            if (confirm("Would you like to use your additional account?")) {

                console.log("You can get your money.");

                var balance = account.balance;

                var additionalAccount = amount - balance;

                account.balance = 0;

                account.additionalAccount = account.additionalAccount - additionalAccount;

            } else {

                console.log(`${account.accountNo} nolu hesabınızda ${amount} TL bulunmamaktnameır.`);
            }

        } else {

            console.log("Sorry, your balance is insufficient.");
        }
    }

}

withdrawMoney(account01, 2000);
withdrawMoney(account02,2000);