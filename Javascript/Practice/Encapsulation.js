class BankAccount {
  #balance = 0;
  deposite(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let newAccount = new BankAccount();
newAccount.deposite(90);
console.log(newAccount.getBalance());
