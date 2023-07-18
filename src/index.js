const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise') ;
const env = require('dotenv');
env.config();
const server = express();

server.use(cors());
server.set('view engine', 'ejs');
server.use(express.json({limit: '100mb'}));

const getConnection = async () => {
    const connection = await mysql.createConnection( {
        host: process.env.HOSTDB,
        database: process.env.DATABASEDB,
        user: process.env.USERNAMEDB,
        password: process.env.PASS,
    });
    await connection.connect();
    console.log(`Conexion establecidad ${connection.threadId}`);
    return connection;
}
getConnection();

const serverPort = 4000;
server.listen( serverPort, () => {
    console.log(`Nuestro servidor ha arrancado en http://localhost:${serverPort}/`);
});

server.get('/api/allprojects', async (req, res) => {
    const selectProjects = 'SELECT * FROM projects, author WHERE projects.fk_author = author.idautor';
    const conn = await getConnection();
    const [result] = await conn.query(selectProjects);
    console.log(result);
    conn.end();
    res.json(result);
});

server.post("/api/projectCard", async (req,res) => {
    const body = req.body;
    console.log(body);
    let insertAuthor = `INSERT INTO author (autor, job, image)
    VALUES (?, ?, ?)`;
    const conn = await getConnection();
    const [resultAuthor] = await conn.query(insertAuthor, [
      body.autor,
      body.job,
      body.image,
    ]);
    const idAuthor = resultAuthor.insertId;
    console.log(resultAuthor);
    let insertProject = `INSERT INTO projects (name, slogan, technologies, demo, repo, description, photo, fk_author)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const [resultProject] = await conn.query(insertProject, [
      body.name,
      body.slogan,
      body.technologies,
      body.demo,
      body.repo,
      body.description,
      body.photo,
      idAuthor,
    ]);
    conn.end();
    console.log(resultProject.insertId);
    res.json({success:true, cardURL:`http://localhost:4000/project/${resultProject.insertId}`});
  });

server.get('/api/projectCard/:idProject', async (req, res) => {
  const id = req.params.idProject;
  const sql = `SELECT * FROM author INNER JOIN projects ON fk_author = idautor WHERE idprojects= ? `;
  const conn = await getConnection();
  const [results] = await conn.query(sql, id);
  res.render('detail', results[0]);
})

const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));

const pathServerPublicStyles = './src/public-css';
server.use(express.static(pathServerPublicStyles));

const staticServerPathImages = './src/public-images/';
server.use(express.static(staticServerPathImages));
