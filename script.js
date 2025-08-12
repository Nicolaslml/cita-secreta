function validar() {
    let respuestasCorrectasP4 = ["cowork", "trabajamos juntos"];
    
    let p1 = document.getElementById("pregunta1").value.trim().toLowerCase();
    let p2 = document.getElementById("pregunta2").value.trim();
    let p3 = document.getElementById("pregunta3").value.trim().toLowerCase();
    let p4 = document.getElementById("pregunta4").value.trim().toLowerCase();

    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");
    let check4 = document.getElementById("check4");
    let errorMsg = document.getElementById("error-message");

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
        document.getElementById("form-container-2").style.display = "block";
    } else {
        errorMsg.textContent = "Respuestas incorrectas, mi amor ❤️";
    }
}

function validarSegundaPantalla() {
    let respuestas = {
        pregunta5: "flores",
        pregunta6: "quinoa cafe",
        pregunta7: "te amo mucho mi amorcito precioso",
        pregunta8: "starbucks"
    };

    let p5 = document.getElementById("pregunta5").value.trim().toLowerCase();
    let p6 = document.getElementById("pregunta6").value.trim().toLowerCase();
    let p7 = document.getElementById("pregunta7").value.trim().toLowerCase();
    let p8 = document.getElementById("pregunta8").value.trim().toLowerCase();

    let checks = [
        document.getElementById("check5"),
        document.getElementById("check6"),
        document.getElementById("check7"),
        document.getElementById("check8")
    ];

    let allCorrect = true;

    function marcarCheck(element, esCorrecto) {
        if (esCorrecto) {
            element.textContent = "✔";
            element.classList.add("correct");
            element.classList.remove("wrong");
        } else {
            element.textContent = "✘";
            element.classList.add("wrong");
            element.classList.remove("correct");
            allCorrect = false;
        }
    }

    marcarCheck(checks[0], p5 === respuestas.pregunta5);
    marcarCheck(checks[1], p6 === respuestas.pregunta6);
    marcarCheck(checks[2], p7 === respuestas.pregunta7);
    marcarCheck(checks[3], p8 === respuestas.pregunta8);

    let errorMsg2 = document.getElementById("error-message-2");

    if (allCorrect) {
        errorMsg2.textContent = "";
        document.getElementById("form-container-2").style.display = "none";

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
        errorMsg2.textContent = "Respuestas incorrectas, mi amor ❤️";
    }
}