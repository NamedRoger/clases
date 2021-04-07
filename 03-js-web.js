(() => {
    document.addEventListener("DOMContentLoaded",function(e) {
        const personas = ["Rogelio","Daniel","Kevin","","asdf"];

        let listaPersonas = document.querySelector("#personas");

        const loadList = (lista) => lista.forEach(dato => listaPersonas.append(createLi(dato)));
        
        const createLi = (texto) => {
            const li = document.createElement('li');
            li.textContent = texto;
            return li;
        }

        loadList(personas);
    });
})();
