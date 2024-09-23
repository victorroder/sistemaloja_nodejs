import express from 'express';
const router = express.Router();

// ROTA CLIENTES
router.get("/clientes", function(req, res) {
    const clientes = [
        { nome: "Ana Silva", cpf: "123.456.789-00", endereco: "Rua das Flores, 123, Bairro Jardim Primavera" },
        { nome: "Pedro Almeida", cpf: "987.654.321-00", endereco: "Avenida Central, 456, Bairro Centro" },
        { nome: "Marina Oliveira", cpf: "456.789.123-00", endereco: "Travessa dos Sonhos, 789, Bairro Vista Linda" },
        { nome: "Rafael Santos", cpf: "321.654.987-00", endereco: "Praça da Amizade, 321, Bairro Bela Vista" },
        { nome: "Lucas Martins", cpf: "111.222.333-44", endereco: "Rua do Sol, 321, Bairro Jardim dos Sonhos" },
        { nome: "Juliana Costa", cpf: "222.333.444-55", endereco: "Avenida das Palmeiras, 456, Bairro Nova Era" },
        { nome: "Thiago Pereira", cpf: "333.444.555-66", endereco: "Travessa do Conhecimento, 789, Bairro Intelecto" },
        { nome: "Fernanda Lima", cpf: "444.555.666-77", endereco: "Praça da Liberdade, 123, Bairro Liberdade" },
        { nome: "Roberto Silva", cpf: "555.666.777-88", endereco: "Rua do Amigo, 654, Bairro Amizade" },
        { nome: "Carla Rodrigues", cpf: "666.777.888-99", endereco: "Avenida da Vida, 321, Bairro Vida" }
    ];
    res.render("clientes", { clientes });
});

export default router;
