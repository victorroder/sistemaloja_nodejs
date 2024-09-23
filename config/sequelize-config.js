// Importando o Sequelize
import Sequelize from "sequelize";
// Criando os dados de conexão com o banco de dados
const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "", //Alunos deixem a senha em branco
  // Comente essa linha na primeira execução da aplicação
  database: 'loja',
  timezone: "-03:00",
});
export default connection;
