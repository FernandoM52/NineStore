import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware";

const productsRouter = Router();
transactionsRouter.get("/produtos/:tipo", getProductByType);
transactionsRouter.post("/carrinho", authValidation, createCartShop);
transactionsRouter.post("/finalizar-compra", authValidation, createCartShop);

export default productsRouter;