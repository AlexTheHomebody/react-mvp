const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const config = require('./config.js')[process.env.NODE_ENV||"dev"]
console.log(config)
const port = config.port;

const client = new Client({
    connectionString: config.connectionString,
});

client.connect();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test', (req, res)=>{
    res.send('Its working!')
})

app.get('/players', (req, res)=> {
    
    client.query(`SELECT * FROM players`)
    .then(result =>{
        res.send(result.rows)
    })
    .catch(e=> {
        res.status(500).send(e)
    })
});

app.get('/players/:id', (req, res)=> {
    async function getPlayer(){
        try{
            const result = await client.query(`SELECT * FROM players WHERE players_id = ${req.params.id}`)
            if(result.row.length == 0){
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.end('Not Found');
        }
        res.send(result.rows)
        } catch (e){
        console.log(e.stack);
    }
    }
    getPlayer();
});

app.post('/players', (req, res)=>{
    console.log('new')
    let newPlayer = (req.body);
    let name = newPlayer.name;
    let character_name = newPlayer.character_name;
    let skill_level = newPlayer.skill_level;
    
    var values = [name, character_name, skill_level] 
    client.query(`INSERT INTO players(name, character_name, skill_level) 
    VALUES($1, $2, $3) RETURNING *`, values)
    .then(result => {
        res.status(201).send(result.rows);
    })
    .catch(e=>{
        console.error(e.stack);
    })
})

app.patch('/players/:id', (req, res)=>{
    console.log('editing')
    let newPlayer = (req.body);
    let name = newPlayer.name || '';
    let character_name = newPlayer.character_name || '';
    let skill_level = newPlayer.skill_level || -1;
    let species = newPlayer.species || '';
    async function fixingPlayer(){
        try{
            const result = await client.query(`UPDATE players SET 
            name = COALESCE(NULLIF('${name}', ''), name), 
            character_name = COALESCE(NULLIF('${character_name}', ''), character_name), 
            skill_level = COALESCE(NULLIF(${skill_level}, -1), skill_level), 
            species = COALESCE(NULLIF('${species}', ''), species)
            WHERE players_id = ${req.params.id} RETURNING *`)
            res.send(result.rows);
        }catch(e){
            console.error(e.stack);
        }

    }
    fixingPlayer();
})

app.delete('/players/:id', (req, res) => {
    async function deletePlayer(){
        try{
            const result = await client.query(`DELETE FROM players WHERE players_id = ${req.params.id}`)
            res.send(result.rows);
        } catch (e){
            console.error(e.stack)
        }
    }
    deletePlayer();
})

app.listen(port, () => {
    console.log(`Our app running on ${port}`)
})