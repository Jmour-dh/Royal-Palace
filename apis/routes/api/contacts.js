const pool = require("../../database/queries");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const { name, lname, email, phone, msg } = req.body;

  pool.query(
    "INSERT INTO contacts (name, lname, email, phone, msg) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, lname, email, phone, msg],
    (err, results) => {
      if (err) {
        console.log(err);
       }

      res.json(results);
    }
  );
});

router.get('/', async (req, res) => {

  try {
    // Exécutez une requête SQL pour sélectionner tous les contacts dans la table "contacts"
    const result = await pool.query('SELECT * FROM contacts');
    console.log(result);
    const contacts = result.rows;

    // Répondez avec les contacts au format JSON
    res.json(contacts);
  } catch (err) {
    console.error('Erreur lors de la récupération des contacts :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;

