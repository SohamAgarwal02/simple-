const usersContainer = document.getElementById("users");
const searchInput = document.getElementById("search");

let users = [];

async function fetchUsers() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    users = await response.json();

    displayUsers(users);
}

function displayUsers(usersList) {

    usersContainer.innerHTML = "";

    usersList.map(user => {

        usersContainer.innerHTML += `
            <div>
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Company: ${user.company.name}</p>
                <hr>
            </div>
        `;
    });
}

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchText)
    );

    displayUsers(filteredUsers);
});

fetchUsers();




async function generateUser() {

    const response = await fetch(
        "https://randomuser.me/api/"
    );

    const data = await response.json();

    const user = data.results[0];

    document.getElementById("userCard").innerHTML = `
        <div>
            <img src="${user.picture.large}" alt="Profile Picture">

            <h2>
                ${user.name.first} ${user.name.last}
            </h2>

            <p>Email: ${user.email}</p>

            <p>Country: ${user.location.country}</p>
        </div>
    `;
}