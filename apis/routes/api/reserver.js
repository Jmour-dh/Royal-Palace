const pool = require("../../database/queries");
const router = require("express").Router();
const cookieParser = require("cookie-parser"); // Importez le module cookie-parser
const jsonwebtoken = require("jsonwebtoken");
const { keyPub } = require("../../keys");

// Utilisez cookieParser dans votre middleware Express
router.use(cookieParser());

// router.post("/", async (req, res) => {
//   const { dateIn, dateOut, adulte, enfant, chambre } = req.body;

//   pool.query(
//     "INSERT INTO reserver (dateIn, dateOut, adulte, enfant, chambre, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
//     [dateIn, dateOut, adulte, enfant, chambre, user_id],
//     (err, results) => {
//       if (err) {
//         console.error(err);
//         res
//           .status(500)
//           .json({ error: "Erreur lors de la création de la réservation" });
//         return;
//       }

//       res.json(results.rows[0]);
//     }
//   );
// });

router.post("/", async (req, res) => {
  const { dateIn, dateOut, adulte, enfant, chambre } = req.body;
  const { token } = req.cookies; // Récupérez le token des cookies

  if (!token) {
    return res
      .status(401)
      .json({ error: "Non autorisé. Connectez-vous d'abord." });
  }

  try {
    // Vérifiez le token pour obtenir l'ID de l'utilisateur
    const decodedToken = jsonwebtoken.verify(token, keyPub);
    const user_id = decodedToken.sub; // Récupérez l'ID de l'utilisateur depuis le token

    pool.query(
      "INSERT INTO reserver (dateIn, dateOut, adulte, enfant, chambre, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [dateIn, dateOut, adulte, enfant, chambre, user_id],
      (err, results) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: "Erreur lors de la création de la réservation" });
        }

        res.json(results.rows[0]);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Token invalide. Connectez-vous d'abord." });
  }
});

router.get("/", async (req, res) => {
  try {
    // Requête SQL pour récupérer toutes les réservations avec les détails de l'utilisateur
    const query = `
    SELECT reserver.*, users.name AS user_name, users.lname AS user_lname, users.email AS user_email
    FROM reserver
    INNER JOIN users ON reserver.user_id = users.id
  `;
  

    const { rows } = await pool.query(query);

    // Envoyez les données récupérées en réponse
    res.json(rows);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des données" });
  }
});

module.exports = router;
