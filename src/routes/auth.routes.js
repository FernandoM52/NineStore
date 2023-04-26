import { Router } from "express";
import { loginSchema, signupSchema } from "../schemas/auth.schema";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { authValidation } from "../middlewares/authValidation.middleware";
import { signIn, signOut, signUp } from "../controllers/auth.controllers";

const usersRouter = Router();
usersRouter.post("/cadastro", validateSchema(signupSchema), signUp);
usersRouter.post("/login", validateSchema(loginSchema), signIn);
usersRouter.post("/logout", authValidation, signOut);

export default usersRouter;