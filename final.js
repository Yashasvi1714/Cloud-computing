require('dotenv').config();
//console.log(process.env)
const express = require('express');

const sql = require('mssql');

const app = express();

const PORT = 5000;


var config = {
    user: "yashasvi1998",
    password: "University@uab",
    server: "myser123.database.windows.net",
    database: "mysql",
    options: {
        encrypt: true
    }
};

  
app.get('/most_experience', (req, res) => {

    const skillName = req.query.skill_name;

    if (!skillName) {

        res.status(400).send('Skill name not provided in request');

        return;

    }

    sql.connect(config, (err) => {

        if (err) {

            console.log(err);

            res.status(500).send('Error connecting to database');

            return;

        }

        const request = new sql.Request();

        request.query(`SELECT TOP 1 * FROM consultants WHERE skill = '${skillName}' ORDER BY experience DESC`, (err, result) => {

            if (err) {

                console.log(err);

                res.status(500).send('Error querying database');

                return;

            }

            if (result.recordset.length === 0) {

                res.status(404).send(`No consultants found with skill '${skillName}'`);

                return;

            }

            res.json(result.recordset[0]);

        });

    });

});

 

app.get('/lowest_rate', (req, res) => {

    const skillName = req.query.skill_name;

    if (!skillName) {

        res.status(400).send('Skill name not provided in request');

        return;

    }

    sql.connect(config, (err) => {

        if (err) {

            console.log(err);

            res.status(500).send('Error connecting to database');

            return;

        }

        const request = new sql.Request();

        request.query(`SELECT TOP 1 * FROM consultants WHERE skill = '${skillName}' ORDER BY hourlyRate ASC`, (err, result) => {

            if (err) {

                console.log(err);

                res.status(500).send('Error querying database');

                return;

            }

            if (result.recordset.length === 0) {

                res.status(404).send(`No consultants found with skill '${skillName}'`);

                return;

            }

            res.json(result.recordset[0]);

        });

    });

});

 

app.listen(PORT, () => {

    console.log(`Server is listening on port ${PORT}`);

});