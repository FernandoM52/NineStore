import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { deleteProductFromCart, editProductFromCart, listProductsFromCart } from "../controllers/products.controllers.js";

const productsRouter = Router();
/*transactionsRouter.get("/produtos/:tipo", getProductByType);
transactionsRouter.post("/carrinho", authValidation, createCartShop);
transactionsRouter.post("/finalizar-compra", authValidation, createCartShop);*/

productsRouter.delete("/carrinho/:id", authValidation, deleteProductFromCart);
productsRouter.get("/carrinho", authValidation, listProductsFromCart);
productsRouter.put("/carrinho:id", authValidation, editProductFromCart);

export default productsRouter;