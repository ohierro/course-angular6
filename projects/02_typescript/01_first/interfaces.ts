interface LabelledValue {
    label: string;
    //
    name?: string;
    age?: number;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
    if (labelledObj.name !== undefined) {
        console.log('your name' + labelledObj.name);
    }
}

let myObj = {size: 10, label: "Size 10 Object", name: 'John'};
printLabel(myObj);