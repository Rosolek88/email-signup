// const faker = require("faker")
const mysql = require("mysql")
const {promisify} = require("util")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "joinus"
});



const promisifedQuery = promisify (connection.query).bind(connection);


const runQuery = async () =>{
try{
let data = await promisifedQuery ('count(*) as total users');
return(data)
}
catch(error) {
    console.log(error.sqlMessage);

}
connection.end();
}

const addEmail = async (email) => {
    try {
        const queryStringAdd = `INSERT INTO users(email) VALUES ('${email}')`;
        let data = await promisifedQuery (queryStringAdd);
        return(data)
    }
    catch (error){
        console.log(error.sqlMessage)
    }
};


// const bulkAdd = () => {
//     let people = [];
//     for (i = 0; i <500; i++){
//         people.push([faker.internet.email(),faker.date.past()])
//     }
//     return people;
// };


module.exports = {
    addEmail,
    runQuery
}