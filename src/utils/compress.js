import Jimp from "jimp";

export async function compress(file) {
  var image = await Jimp.read(URL.createObjectURL(file));
  var [w, h] = [image.bitmap.width, image.bitmap.height];
  const coef = 130;
  await image.resize((w * coef) / h, coef);
  var buf = await image.getBufferAsync(Jimp.MIME_PNG);
  return new File([buf], file.name, { type: Jimp.MIME_PNG });
}
