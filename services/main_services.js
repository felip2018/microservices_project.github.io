const login = () => {
    console.log('This is the login service');
    let usuario = document.getElementById('usuario').value;
    let clave = document.getElementById('clave').value;
    let resultado = document.getElementById('login_result');
    resultado.innerHTML = '';
    if(usuario === "") {
        resultado.innerHTML = '<div class="alert alert-warning">Ingrese el usuario</div>';
        return;
    }

    if(clave === "") {
        resultado.innerHTML = `<div class="alert alert-warning">Ingrese la contraseña</div>`;
        return;
    }

    fetch('https://hfo87sow46.execute-api.us-east-1.amazonaws.com/v1/uniminuto_services/login', {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: {
            usuario,
            clave
        }
    })
    .then(response => response.json()) 
    .then(json => {
        console.log("LOGIN RES:: ",json)
    })
    .catch((error) => {
        console.error('Something was wrong with login service > ',error);
    })

}

const getPokemonsList = () => {
    console.log('This is the get pokemons list service');
    fetch('https://hfo87sow46.execute-api.us-east-1.amazonaws.com/v1/uniminuto_services/get-pokemons', {
        method: 'GET'
    })
    .then((res) => {
        console.log("POKEMONS RES:: ",res);
    })
    .catch((error) => {
        console.error('Something was wrong with pokemons service > ',error);
    })
}