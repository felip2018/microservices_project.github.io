const login = () => {
    console.log('This is the login service');
    let usuario = document.getElementById('usuario').value;
    let clave = document.getElementById('clave').value;
    let resultado = document.getElementById('login_result');
    resultado.innerHTML = '';
    if (usuario === "") {
        resultado.innerHTML = '<div class="alert alert-warning">Ingrese el usuario</div>';
        return;
    }

    if (clave === "") {
        resultado.innerHTML = `<div class="alert alert-warning">Ingrese la contraseña</div>`;
        return;
    }

    fetch('https://hfo87sow46.execute-api.us-east-1.amazonaws.com/v1/uniminuto_services/login', {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Accept": "*/*",
        },
        body: JSON.stringify({
            usuario,
            clave
        })
    })
    .then(response => response.json()) 
    .then(json => {
        let message;
        if (json.validation) {
            message = `<div class="alert alert-success">¡Se ha iniciado sesión correctamente!</div>`
        } else {
            message = `<div class="alert alert-danger">¡No ha sido posible iniciar sesión, verifique usuario y/o contraseña!</div>`
        }
        resultado.innerHTML = message;
    })
    .catch((error) => {
        console.error('Something was wrong with login service > ',error);
    })

}

const getPokemonsList = () => {
    console.log('This is the get pokemons list service');
    let resultado = document.getElementById('pokemons_result');
    resultado.innerHTML = '';

    fetch('https://hfo87sow46.execute-api.us-east-1.amazonaws.com/v1/uniminuto_services/get-pokemons', {
        method: "GET",
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Accept": "*/*",
        },
    })
    .then(response => response.json()) 
    .then(json => {
        let list = '';
        json.result.list.forEach(element => {
            list += `<li>${element.name}</li>`;
        });
        resultado.innerHTML = list;
    })
    .catch((error) => {
        console.error('Something was wrong with pokemons service > ',error);
    })
}