const sayHello = () => {
    [1, 2, 3].forEach((element) => {
        console.log('Hello ' + element);
    });
};

function component() {

    sayHello();
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const abc = '';
    console.log(abc);
    return element;
}

document.body.appendChild(component());