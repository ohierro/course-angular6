function printLabel(labelledObj) {
    console.log(labelledObj.label);
    if (labelledObj.name !== undefined) {
        console.log('your name' + labelledObj.name);
    }
}
var myObj = { size: 10, label: "Size 10 Object", name: 'John' };
printLabel(myObj);
