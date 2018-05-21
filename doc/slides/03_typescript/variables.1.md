## Variables

Por qué no usar var?

### Scope global
```javascript
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'
```
### Ámbito
```javascript
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}
```
### Re-declarations and Shadowing
```javascript
function f(x) {
    var x;
    var x;

    if (true) {
        var x;
    }
}
```