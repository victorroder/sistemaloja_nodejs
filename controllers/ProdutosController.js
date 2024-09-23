import express from 'express';
const router = express.Router();

// ROTA PRODUTOS
router.get("/produtos", function(req, res) {
  
        const produtos = [
            {nome: "Capacete Moto X", preco: 500, categoria: "Equipamento", imagem: "imgs/capacete.png"},
            {nome: "Luva de Moto Couro", preco: 150, categoria: "Equipamento", imagem: "imgs/luva.png"},
            {nome: "Bota de Moto Adventure", preco: 300, categoria: "Equipamento", imagem: "imgs/bota.png"},
            {nome: "Capa de Chuva", preco: 80, categoria: "Acessório", imagem: "imgs/capa.png"},
            {nome: "Mochila para Moto", preco: 200, categoria: "Acessório", imagem: "imgs/mochila.png"},
            {nome: "Suporte para Celular", preco: 70, categoria: "Acessório", imagem: "imgs/suporte.png"}
        ];
        
    
    res.render("produtos", { produtos });
});

export default router;
