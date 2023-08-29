/*Задание 1: Получение данных с открытого API
Выберите открытое API (например, JSONPlaceholder, https://jsonplaceholder.typicode.com/) с данными о пользователях.
Используя Fetch API, получите список пользователей с сервера.
Отобразите их имена и адреса на веб-странице.*/
//=================================================================================================================
const url = 'https://jsonplaceholder.typicode.com/users'
const usersList = document.getElementById('usersList')

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const li = document.createElement('li')
            li.innerText = `Name: ${element.name}
                            Username: ${element.username}
                            Email: ${element.email}
                            Address: 
                            - Street:    ${element.address.street}
                            - Suite:     ${element.address.suite}
                            - City:      ${element.address.city}
                            `
            usersList.append(li)
        });
    })
//=================================================================================================================


/*Задание 2: Отправка данных на сервер
Создайте HTML-форму для добавления новой задачи.
Используя Fetch API, отправьте POST-запрос с данными о новой задаче на сервер.*/
//=================================================================================================================
const form = document.forms.form
function getUsersValue (event) {
    event.preventDefault()
    const {name, email, username} = form
    const values = {
        name: name.value,
        email: email.value,
        username: username.value
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    }).then(response => {
        if(response.status === 201) {
            alert("Success")
        } else {
            alert(`Error: ${response.status}`)
        }
    })
}
form.addEventListener('submit', getUsersValue)

//=================================================================================================================