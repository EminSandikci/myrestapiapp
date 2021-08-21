async function singinFetch() {
    await fetch("http://localhost:3000/singin", { method: 'POST' })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.getElementById("message").innerHTML = JSON.stringify(data);
        })
        .catch((err) => {
            alert(err);
        })
}