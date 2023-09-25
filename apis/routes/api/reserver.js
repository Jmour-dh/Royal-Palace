const pool = require("../../database/queries");
const router = require("express").Router();

// Middleware d'authentification (ex. : Passport.js)
router.use((req, res, next) => {
  // Vérifiez si l'utilisateur est connecté et stockez son ID dans req.user
  if (req.user) {
    req.userId = req.user.id; // Supposons que l'ID de l'utilisateur est stocké dans req.user.id
  } else {
    return res.status(401).json({ error: "Utilisateur non authentifié" });
  }
  next();
});

router.post("/", async (req, res) => {
  const { dateIn, dateOut, adulte, enfant, chambre } = req.body;
  const userId = req.userId; // Utilisez l'ID de l'utilisateur connecté

  pool.query(
    "INSERT INTO reserver (dateIn, dateOut, adulte, enfant, chambre, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [dateIn, dateOut, adulte, enfant, chambre, userId],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur lors de la création de la réservation" });
        return;
      }

      res.json(results.rows[0]);
    }
  );
});

module.exports = router;
