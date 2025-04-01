const txtEfeito = document.querySelector(".txtEfeito span");
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let intervalo = null;

if (txtEfeito) {
    txtEfeito.addEventListener("mouseover", (e) => {
        let contador = 0;
        clearInterval(intervalo);

        intervalo = setInterval(() => {
            e.target.innerText = e.target.innerText
                .split("")
                .map((letter, index) => {
                    return index < contador
                        ? e.target.dataset.value[index]
                        : alfabeto[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (contador >= e.target.dataset.value.length) {
                clearInterval(intervalo);
            }

            contador += 1 / 3;
        }, 50);
    });
}