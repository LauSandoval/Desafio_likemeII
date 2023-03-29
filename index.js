const express = require('express');
const app = express();
const {agregarPosts, leerPosts, editarPosts} = require('./consulta');
const cors = require('cors');
app.use(cors())
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/posts', async(req, res) => {
    const resultados = await leerPosts();
    res.json(resultados);
    //console.log(res)
});

app.post('/posts', async(req, res) => {
    const {titulo, url, descripcion} = req.body;
    await agregarPosts(titulo,url,descripcion);
    // res.json(post);
});

app.put('/posts/:id', async (req, res) => {
  const {titulo, url, descripcion} = req.body;
  console.log(req.params.id);
  await editarPosts(req.params.id,titulo,url,descripcion);
  })
