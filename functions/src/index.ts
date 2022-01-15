import * as functions from "firebase-functions";
import * as express from "express";
import * as admin from "firebase-admin";

admin.initializeApp();

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
	const snapshot = admin.firestore().collection("test").get();
	const data: any[] = [];

	(await snapshot).forEach( doc => {
		data.push({
			"id": doc.id,
			"data": doc.data()
		});
	});

	res.status(200).json(data);
});

app.post("/", async (req, res) => {
	const data = req.body;
	await admin.firestore().collection("test").add(data);
	res.send("Added data").status(201);
});

export const api = functions.https.onRequest(app);
