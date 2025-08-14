module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // тут должна быть логика сохранения в БД
    // например: await prisma.user.create({ data: { email, password } });

    return res.status(200).json({ message: "Регистрация успешна" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
};