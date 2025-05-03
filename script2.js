document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '60%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)';
    container.style.textAlign = 'center';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'nameInput';
    input.placeholder = 'Enter your name';
    input.style.padding = '10px';
    input.style.fontSize = '16px';
    input.style.borderRadius = '12px';
    input.style.border = '1px solid #ccc';

    const button = document.createElement('button');
    button.innerText = 'Say Hi!';
    button.style.backgroundColor = 'blue';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.padding = '10px 20px';
    button.style.textAlign = 'center';
    button.style.textDecoration = 'none';
    button.style.display = 'inline-block';
    button.style.fontSize = '16px';
    button.style.margin = '10px 2px';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '12px';
    button.onclick = sayHi;

    const greeting = document.createElement('p');
    greeting.id = 'greeting';

    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(greeting);
    document.body.appendChild(container);

    function sayHi() {
        var name = document.getElementById('nameInput').value;
        var greetingElement = document.getElementById('greeting');
        greetingElement.innerText = 'Hello ' + name + '!' + ' Enjoy the rest of your day!';
        greetingElement.style.fontSize = '24px';
        greetingElement.style.fontFamily = 'Courier New, Courier, monospace';
        greetingElement.style.textShadow = 'black 0px 0.3px';
        greetingElement.style.fontWeight = 'bold';
        greetingElement.style.color = 'white';
        document.getElementById('nameInput').style.display = 'none';
        button.style.display = 'none';
    }
});