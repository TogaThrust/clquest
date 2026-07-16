#!/usr/bin/env node
/**
 * Regénère les PNG QR pour chaque ville (assets/qr-<slug>.png).
 * Usage: node scripts/generate-qrs.js
 */
const QRCode = require("qrcode");
const path = require("path");

const urls = {
  bruxelles: "https://clq-bruxelles.netlify.app",
  liege: "https://clq-liege.netlify.app",
  mons: "https://clq-mons.netlify.app",
  alicante: "https://clq-alicante.netlify.app",
  aguilas: "https://clq-aguilas.netlify.app",
  caravaca: "https://clq-caravaca.netlify.app",
  carthagene: "https://clq-carthagene.netlify.app",
  cehegin: "https://clq-cehegin.netlify.app",
  cieza: "https://clq-cieza.netlify.app",
  lorca: "https://clq-lorca.netlify.app",
  mazarron: "https://clq-mazarron.netlify.app",
  murcia: "https://clq-murcia.netlify.app",
  lille: "https://clq-lille.netlify.app",
};

(async () => {
  const assetsDir = path.join(__dirname, "..", "assets");
  for (const [name, url] of Object.entries(urls)) {
    const out = path.join(assetsDir, `qr-${name}.png`);
    await QRCode.toFile(out, url, {
      width: 400,
      margin: 2,
      errorCorrectionLevel: "M",
      color: { dark: "#000000", light: "#FFFFFF" },
    });
    console.log("OK", out);
  }
})();
