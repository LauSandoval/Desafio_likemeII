const {
    Pool
} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'ivan2102',
    database: 'likeme',
    allowExitOnIdle: true,
});


const agregarPosts = async (titulo,img,descripcion,likes) => {
    const consulta = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)';
    const values = [titulo, img, descripcion, likes];
    const results = await pool.query(consulta, values);
    console.log('Post agregado');
}

const editarPosts = async (id,titulo,img,descripcion,likes) => {
    try {
        console.log(titulo)
        const buscar = "UPDATE posts SET titulo = " +"'" + titulo +"'" + " WHERE id = " + id 
        const results = await pool.query(buscar);
        // console.log(results.rows)
        console.log('Post editado');
    } catch (error) {
        console.log(error)
    }
}
  

const leerPosts = async () => {
    const {rows} = await pool.query('SELECT * FROM posts');
    // console.log(rows);
    return rows
}

module.exports = {
    agregarPosts,
    leerPosts,
    editarPosts
};