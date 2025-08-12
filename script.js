function validar() {
    let respuestasCorrectasP4 = ["cowork", "trabajamos juntos"];
    
    // Obtener valores y normalizar
    let p1 = document.getElementById("pregunta1").value.trim().toLowerCase();
    let p2 = document.getElementById("pregunta2").value.trim();
    let p3 = document.getElementById("pregunta3").value.trim().toLowerCase();
    let p4 = document.getElementById("pregunta4").value.trim().toLowerCase();

    // Elementos para mostrar iconos
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");
    let check4 = document.getElementById("check4");
    let errorMsg = document.getElementById("error-message");
    
    // Función auxiliar para marcar iconos
    function marcarCheck(element, esCorrecto) {
        if (esCorrecto) {
            element.textContent = "✔";
            element.classList.add("correct");
            element.classList.remove("wrong");
        } else {
            element.textContent = "✘";
            element.classList.add("wrong");
            element.classList.remove("correct");
        }
    }

    // Validar cada campo
    let v1 = (p1 === "yock");
    let v2 = (p2 === "22/05/2023");
    let v3 = (p3 === "tambo");
    let v4 = respuestasCorrectasP4.includes(p4);

    marcarCheck(check1, v1);
    marcarCheck(check2, v2);
    marcarCheck(check3, v3);
    marcarCheck(check4, v4);

    if (v1 && v2 && v3 && v4) {
        errorMsg.textContent = "";
        document.getElementById("form-container").style.display = "none";

        let loader = document.getElementById("loader");
        loader.style.display = "block";
        loader.classList.add("fadeInScale");

        setTimeout(() => {
            loader.style.display = "none";

            let invitation = document.getElementById("invitation");
            invitation.style.display = "block";
            invitation.classList.add("fadeInScale");
        }, 2500);
    } else {
        errorMsg.textContent = "Respuestas incorrectas, mi amor ❤️";
    }
}
