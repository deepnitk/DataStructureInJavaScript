Function.prototype.myBind = function(...args) {
    const obj = this;
    params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }

}
let name = {
    firstName: 'John',
    lastName: 'Doe',
}

let printFullName = function (hometown, state) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown + ' ' + state);
}

const printMyName = printFullName.myBind(name, "Pune");
printMyName("Maharastra");