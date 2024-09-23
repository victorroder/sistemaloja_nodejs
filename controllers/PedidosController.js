import express from 'express';
const router = express.Router();

// No PedidosController.js
router.get("/pedidos", function(req, res) {
    const pedidos = [
        { numero: "983721931", valor: 1200 },
        { numero: "983721932", valor: 900 },
        { numero: "983721933", valor: 3200 },
        { numero: "983721934", valor: 150 },
        { numero: "983721935", valor: 600 },
        { numero: "983721936", valor: 800 },
        { numero: "983721937", valor: 400 },
        { numero: "983721938", valor: 700 },
        { numero: "983721939", valor: 1000 },
        { numero: "983721940", valor: 300 }
    ];

    const total = pedidos.reduce((acc, pedido) => acc + pedido.valor, 0);

    res.render("pedidos", { pedidos, total });
});

// ROTA PARA OBTER O TOTAL
router.get("/total", function(req, res) {
    const pedidos = [
        { numero: "983721931", valor: 1200 },
        { numero: "983721932", valor: 900 },
        { numero: "983721933", valor: 3200 },
        { numero: "983721934", valor: 150 },
        { numero: "983721935", valor: 600 },
        { numero: "983721936", valor: 800 },
        { numero: "983721937", valor: 400 },
        { numero: "983721938", valor: 700 },
        { numero: "983721939", valor: 1000 },
        { numero: "983721940", valor: 300 }
    ];

    const total = pedidos.reduce((acc, pedido) => acc + pedido.valor, 0);

    res.json({ total });
});

export default router;
