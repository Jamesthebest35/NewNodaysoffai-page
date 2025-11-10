import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";

admin.initializeApp();
const db = admin.firestore();
const corsHandler = cors({origin: true});

export const contact = functions.https.onRequest((request, response) => {
  corsHandler(request, response, async () => {
    if (request.method !== "POST") {
      response.status(405).send("Method Not Allowed");
      return;
    }

    const {fullName, email, message, phone} = request.body;

    if (!fullName || !email || !message) {
      response.status(400).json({
        message: "Missing required fields: fullName, email, and message.",
      });
      return;
    }

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      response.status(400).json({message: "Invalid email format."});
      return;
    }

    try {
      await db.collection("messages").add({
        fullName,
        email,
        message,
        phone: phone || null,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      response.status(200).json({message: "Message received successfully."});
    } catch (error) {
      functions.logger.error("Error writing to Firestore", error);
      response.status(500).json({message: "Internal Server Error."});
    }
  });
});
