const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise') ;

const server = express();

server.use(cors());
server.use(express.json({limit: '100mb'}));

const getConnection = async () => {
    const connection = await mysql.createConnection( {
        host: 'sql.freedb.tech',
        database: 'freedb_project-module-4-team-1',
        user: 'freedb_programadoras_junior',
        password: 'M#8aVHtn4SpqAbP',
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
    const selectProjects = 'SELECT * FROM projects';
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
  
  server.use(express.static("./src/public-react"));
  
  
  
  
  
  
  
  