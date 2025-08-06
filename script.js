export default function handler(req, res) {
  const SECRET_KEY = "KITSUNE🦊_SECURE_KEY_8437-XZ"; // Sua chave secreta forte

  const authHeader = req.headers["authorization"];
  if (authHeader !== `Bearer ${SECRET_KEY}`) {
    return res.status(401).json({ error: "Acesso não autorizado." });
  }

  const { id } = req.query;

  // Seus scripts protegidos (adicione seus scripts aqui)
  const scripts = {
    "kitsunehub": `
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer
print("🦊 Kitsune Hub carregado para " .. LocalPlayer.Name)
-- Seu script Roblox completo aqui
`
  };

  if (!scripts[id]) {
    return res.status(404).json({ error: "Script não encontrado." });
  }

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(scripts[id]);
}
