export function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {})
    .catch((err) => {
      console.error("Falha ao copiar: ", err);
    });
}
