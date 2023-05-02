import { Router } from "express";
import { loginSchema, signupSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { signIn, signOut, signUp } from "../controllers/auth.controllers.js";

const usersRouter = Router();
usersRouter.post("/cadastro", validateSchema(signupSchema), signUp);
usersRouter.post("/login", validateSchema(loginSchema), signIn);
usersRouter.post("/logout", authValidation, signOut);

export default usersRouter;
