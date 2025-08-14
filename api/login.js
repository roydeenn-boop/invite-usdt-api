module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // тут логика проверки в БД
    // if (ok) return res.json({ token: "jwt" });

    return res.json({ message: "Логин успешен" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
};