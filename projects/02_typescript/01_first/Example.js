var Example = (function () {
    function Example() {
    }
    Example.prototype.greet = function () {
        console.log('Hello world');
    };
    return Example;
})();
new Example().greet();
