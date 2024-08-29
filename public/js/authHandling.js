document.getElementById("deleteUserButton").addEventListener("click", function() {
    const username = prompt("Enter the username of the user you want to delete:");

    if (username) {
        fetch('/users/delete_user', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    }
});
