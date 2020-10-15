const img = document.getElementById('myImg');
const boton = document.getElementById('myBtn');
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'myCbx';
const elemLbl = document.createElement('label');
elemLbl.setAttribute('for', 'myCbx');
checkbox.setAttribute('onchange', 'SeleccionaImagen()');
elemLbl.appendChild(document.createTextNode('Seleccionar imagen'));
document.getElementById('S2').insertBefore(checkbox, img);
document.getElementById('S2').insertBefore(elemLbl, img);

function SeleccionaImagen() {
    if (document.getElementById('myCbx').checked === true) {
        document.getElementById('myBtn').className = 'boton';
    } else {
        document.getElementById('myBtn').className = 'botonDeshabilitado';
    }
}

function cambioImagen() {

    if (document.getElementById('myBtn').className == 'boton') {
        const imagen1 = 'https://art.ngfiles.com/images/648000/648317_decemyriagone_remastered-madness-sierra-nevada-thumbnail.png?f1538625954';
        const imagen2 = 'https://i.pinimg.com/736x/b3/c5/00/b3c500244d9ad1cbfc70be4ea3ad012a.jpg';
        const elemImg = document.getElementById('myImg');
        (elemImg.src == imagen1) ? elemImg.src = imagen2 : elemImg.src = imagen1;
        const elemBtn = document.getElementById('myBtn');
        elemBtn.className = 'botonDeshabilitado';
        document.getElementById('myCbx').checked = false;
    }

}

