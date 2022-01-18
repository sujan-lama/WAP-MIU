import { Account } from "./account.js";
var loader = function () {
    "use strict";
    let accountInfoList = [];
    const createAccountBtn = document.getElementById("createAccount");

    //module
    const createAccountModule = (function () {
        //private fields
        const nameField = document.getElementById("name");
        const depositField = document.getElementById("deposit");
        const detailsArea = document.getElementById("details");

        //private function
        function validate() {
            return nameField.value !== "" && depositField.value !== "";
        }

        //private function
        function create() {
            return new Account(nameField.value, parseFloat(depositField.value));
        }

        //private function
        function displayDetails() {
            detailsArea.value = "";
            for (let i = 0; i < accountInfoList.length; i++) {
                let account = accountInfoList[i];
                detailsArea.value += "Account Name:   " + account.name + "   Balance: " + account.deposit + "\n";
            }
        }

        //private function
        function clearField() {
            nameField.value = "";
            depositField.value = "";
        }

        return {
            //public function 
            validate: validate,
            createAccount: create,
            showDetails: displayDetails,
            clearField: clearField
        };
    })();



    createAccountBtn.onclick = function onCreateAccountClick() {
        //validate field
        if (!createAccountModule.validate()) {
            alert("Please enter account name and deposit");
            return;
        }

        //created account
        const account = createAccountModule.createAccount();

        //adding to global account info list
        accountInfoList.push(account);

        //showing details in textarea
        createAccountModule.showDetails();

        //clear fields after adding
        createAccountModule.clearField();

    };
};

window.onload = loader;