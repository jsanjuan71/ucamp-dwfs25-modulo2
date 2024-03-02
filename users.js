const users_table_body = document.querySelector('#users_table_body');   

function handleSubmitUser(evt) {
    evt.preventDefault();
    const form = evt.target;
    const data = new FormData(form);

    const user = {
        name: data.get('name'),
        lastname: data.get('lastname')
    };

    const trow = document.createElement('tr');
    const name_td = document.createElement('td');
    name_td.innerHTML = user.name;
    const lastname_td = document.createElement('td');
    lastname_td.innerHTML = user.lastname;

    trow.appendChild(name_td);
    trow.appendChild(lastname_td);

    users_table_body.appendChild(trow);

    form.reset();

}

const add_user_form = document.querySelector('#add_user_form');
add_user_form.addEventListener('submit', handleSubmitUser);
add_user_form.addEventListener('reset', function() {
    console.log('reset');
    alert('Formulario reseteado');
});