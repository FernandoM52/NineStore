import { Router } from "express";

const productsRouter = Router();
transactionsRouter.use(authValidation);
transactionsRouter.get("/produtos/:tipo", getProductByType);
transactionsRouter.post("/carrinho", createCartShop);
transactionsRouter.post("/finalizar-compra", createCartShop);

export default productsRouter;