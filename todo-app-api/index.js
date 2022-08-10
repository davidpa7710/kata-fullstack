const express = require('express')
const app = express()
const PORT = 5050

app.get('/', (req, res) => {
    console.log('Se ejecutara la ruta base');
    res.send('El servidor esta corriendo 🚀');
})

app.post('/todos', (req, res) => {
    console.log('Crear la tarea');
    res.send('Se creo la tarea con exito 🟢')
})

app.get('/todos/:id', (req, res) => {
    console.log('leer una tarea');
    res.send('Una sola tarea mostrada 1️⃣ 📖')
})
app.get('/todos', (req, res) => {
    console.log();
    res.send('Todas las tareas mostradas 📖')
})
app.patch('/todos/:id', (req, res) => {
    const { id: todoId } = req.params
    console.log('Actualizar una tarea');
    res.send(`Se actualizo la tarea  ${todoId}  con exito 🟣`)
})
app.delete('/todos/:id', (req, res) => {
    const { id: todoId } = req.params
    console.log('Eliminar una tarea');
    res.send(`Se elimino la tarea ${todoId} con exito 🛑`)
})

app.listen(PORT, () => {
    console.log(`API funcionando en el puerto ${PORT} ✅`);
})