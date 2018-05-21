enum MyEnum { FIRST, SECOND };

class Types {
    aBoolean: boolean;
    aNumber: number;
    aString: string;
    anArray: string[];
    aEnum: MyEnum;
    anAny: any;
    aVoid: void;

    public printValues() {
        console.log(`this.aBoolean ${this.aBoolean}`);
        console.log(`this.aNumber ${this.aNumber}`);
        console.log(`this.aString ${this.aString}`);
        console.log(`this.anArray ${this.anArray}`);
        console.log(`this.aEnum ${this.aEnum}`);
        console.log(`this.anAny ${this.anAny}`);
        console.log(`this.aVoid ${this.aVoid}`)
    }
}

new Types().printValues();