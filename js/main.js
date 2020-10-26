document.title = 'AE3_DOM_FORMULARIOS';

h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('AE3'));
p1 = document.createElement('p');
p1.appendChild(document.createTextNode('TBD'));
document.body.appendChild(h1);
document.body.appendChild(p1);

Callback = document.createElement('input');
Callback.setAttribute('type', 'url');
Callback.id = 'CallBackURL';
labelCallback = document.createElement('label');
labelCallback.setAttribute('for', 'CallBackUrl');
labelCallback.appendChild(document.createTextNode('URL: '));

boton1 = document.createElement('button');
boton1.setAttribute('class','botones');
boton1.appendChild(document.createTextNode('Continuar'));

form1 = document.createElement('form');
form1.setAttribute('action', 'TBD');
form1.appendChild(labelCallback);
form1.appendChild(Callback);
form1.appendChild(boton1);

document.body.appendChild(form1);

