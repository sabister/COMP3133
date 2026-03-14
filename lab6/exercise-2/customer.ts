class Customer {
    firstname: string;
    lastname: string;

    public greeter() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
}

let customer = new Customer();
customer.firstname = "Jog";
customer.lastname = "smith";
customer.greeter();