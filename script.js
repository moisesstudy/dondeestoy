document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const greeting = `Hola ${name}, tienes ${age} años.`;
    document.getElementById('greeting').textContent = greeting;
});
