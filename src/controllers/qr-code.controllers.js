import qrcode from "qrcode";
import validUrl from "valid-url";

const createQrCode = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).send("URL is required");
    }
    if (!validUrl.isUri(url)) {
      return res.status(400).send("Invalid URL, example: https://example.com");
    }

    const qrcodeData = await qrcode.toDataURL(url);
    res.render("code", { qrcodeData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const getHome = async (req, res) => {
  res.render("index");
};

export { createQrCode, getHome };
