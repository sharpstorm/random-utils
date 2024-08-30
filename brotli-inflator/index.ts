import decompress from 'brotli/decompress';

const textDecoder = new TextDecoder();

document.addEventListener('DOMContentLoaded', () => {
  const inputBox: HTMLTextAreaElement = document.getElementById('input-box')! as HTMLTextAreaElement;
  const outputBox: HTMLElement = document.getElementById('output-box')!;
  const convertBtn: HTMLButtonElement = document.getElementById('convert-btn')! as HTMLButtonElement;

  convertBtn.addEventListener('click', () => {
    try {
      const base64Value = inputBox.value;
      const buffer = Buffer.from(base64Value, 'base64');
      const output = decompress(buffer);
      const text = textDecoder.decode(output);
      outputBox.innerText = text;
    } catch (err) {
      alert(`Error: ${err}`);
      console.log(err);
    }
  });
});
