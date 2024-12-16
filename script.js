function showAlert() {
    var input = document.getElementById("input").value;
    var wish = document.getElementById("wish").value;
    var messege = document.getElementById("messege").value;

    if (input && wish && messege) {
        alert("Sus datos fueron registrados correctamente");
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('seccion1').scrollIntoView({ behavior: 'smooth' });
});