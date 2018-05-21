class MyClass {
	quote: string;
	age: number;

	constructor(quote: string) {
		this.quote = quote;
		this.age = 0;
	}

	greet() {
		console.log('Hello world ' + this.quote);
		if (this.age !== undefined) {
			console.log('You are ' + this.age + ' years old');
		}
	}

	setAge(whatAge: number) {
		this.age = whatAge;
	}
}


new MyClass('Foo').greet();
let myClass = new MyClass('John');
myClass.setAge(36);
myClass.greet();
