import { compress } from "./compress";

export async function getPreviews(receivedFiles) {
  const promises = receivedFiles.map((file) => compress(file));
  var res = await Promise.all(promises);
  var newFiles = res.map((file, i) => {
    return Object.assign(receivedFiles[i], {
      preview: URL.createObjectURL(file),
    });
  });
  return newFiles;
}
