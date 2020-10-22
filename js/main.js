const enlaces = document.getElementsByTagName('a');
for (i = 0; i < enlaces.length; i++) {
    enlaces[i].className = 'enlace';
}

const parrafos = document.getElementsByTagName('p');
for (i = 0; i < parrafos.length; i++) {
    parrafos[i].className = 'parrafo';
}

const imagenes = document.getElementsByTagName('img');
for (i = 0; i < imagenes.length; i++) {
    iD = 'myImg';
    iD = iD.concat(i);
    imagenes[i].id = iD;
}

const botones = document.getElementsByTagName('button');
for (i = 0; i < botones.length; i++) {
    iD = 'myBtn';
    iD = iD.concat(i);
    botones[i].id = iD;
}

const secciones = document.getElementsByTagName('section');
for (i = 0; i <= botones.length; i++) {
    iD = 'S';
    iD = iD.concat(i.toString());
    secciones[i].id = iD;
    console.log(iD);
}

const h1 = document.getElementsByTagName('h1');
h1[0].removeChild(h1[0].firstChild);
h1[0].appendChild(document.createTextNode('Ahora trabajando con DOM dinámico'));

const img = document.getElementById('myImg0');
const boton = document.getElementById('myBtn0');

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'myCbx';
const elemLbl = document.createElement('label');
elemLbl.setAttribute('for', 'myCbx');
checkbox.setAttribute('onchange', 'SeleccionaImagen()');
elemLbl.appendChild(document.createTextNode('Seleccionar imagen'));


document.getElementById('S1').insertBefore(checkbox, img);
document.getElementById('S1').insertBefore(elemLbl, img);

function SeleccionaImagen() {
    if (document.getElementById('myCbx').checked === true) {
        document.getElementById('myBtn0').className = 'boton';
    } else {
        document.getElementById('myBtn0').className = 'botonDeshabilitado';
    }
}

function cambioImagen() {
    const elemBtn = document.getElementById('myBtn0');
    if (elemBtn.className == 'boton') {
        const imagen1 = 'https://art.ngfiles.com/images/648000/648317_decemyriagone_remastered-madness-sierra-nevada-thumbnail.png?f1538625954';
        const imagen2 = 'https://i.pinimg.com/736x/b3/c5/00/b3c500244d9ad1cbfc70be4ea3ad012a.jpg';
        const elemImg = document.getElementById('myImg0');
        (elemImg.src == imagen1) ? elemImg.src = imagen2 : elemImg.src = imagen1;
        elemBtn.className = 'botonDeshabilitado';
        document.getElementById('myCbx').checked = false;
    }

}

