var MyEnum;
(function (MyEnum) {
    MyEnum[MyEnum["FIRST"] = 0] = "FIRST";
    MyEnum[MyEnum["SECOND"] = 1] = "SECOND";
})(MyEnum || (MyEnum = {}));
;
var Types = (function () {
    function Types() {
    }
    Types.prototype.printValues = function () {
        console.log("this.aBoolean " + this.aBoolean);
        console.log("this.aNumber " + this.aNumber);
        console.log("this.aString " + this.aString);
        console.log("this.anArray " + this.anArray);
        console.log("this.aEnum " + this.aEnum);
        console.log("this.anAny " + this.anAny);
        console.log("this.aVoid " + this.aVoid);
    };
    return Types;
})();
new Types().printValues();
