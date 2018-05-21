var MyClass = (function () {
    function MyClass(quote) {
        this.quote = quote;
        this.age = 0;
    }
    MyClass.prototype.greet = function () {
        console.log('Hello world ' + this.quote);
        if (this.age !== undefined) {
            console.log('You are ' + this.age + ' years old');
        }
    };
    MyClass.prototype.setAge = function (whatAge) {
        this.age = whatAge;
    };
    return MyClass;
})();
new MyClass('Foo').greet();
var myClass = new MyClass('John');
myClass.setAge(36);
myClass.greet();
