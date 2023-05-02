import db from "../database/database.connection.js"
import { ObjectId } from "mongodb"



export async function listProductsFromCart(req, res) {
    const { idUser } = res.locals.session;

    try {
        const products = await db.collection("cart").find({ idUser }).toArray();
        res.send(products);
        
    } catch (err) {
        res.status(500).send(err.message);
    }
}


export async function deleteProductFromCart(req, res) {
    const { id } = req.params;
    if (!id) res.sendStatus(404);
    const { idUser } = res.locals.session;

    try {
        const result = await db.collection("cart").deleteOne({ _id: new ObjectId(id), idUser });
        if (result.deleteCount === 0) return res.sendStatus(404);
        res.sendStatus(202);
        
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function editProductFromCart(req, res) {
    const { id } = req.params;
    const { idUser } = res.locals.session;
    const { quantidade } = req.body;
    if (!id) return res.sendStatus(404);

    try {
        const result = await db.collection("cart").updateOne({ _id: new ObjectId(id), idUser }, { $set: { quantidade } });
        if (result.matchedCount === 0) return res.sendStatus(404);
        res.sendStatus(200);

    } catch (err) {
        res.status(500).send(err.message);
    }


}