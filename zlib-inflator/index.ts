import {deflate} from 'pako';

document.addEventListener('DOMContentLoaded', () => {
  const inputBox: HTMLTextAreaElement = document.getElementById('input-box')! as HTMLTextAreaElement;
  const outputBox: HTMLElement = document.getElementById('output-box')!;
  const convertBtn: HTMLButtonElement = document.getElementById('convert-btn')! as HTMLButtonElement;
  const formatBtn: HTMLButtonElement = document.getElementById('format-btn')! as HTMLButtonElement;

  convertBtn.addEventListener('click', () => {
    try {
      const base64Value = inputBox.value;
      const binary = atob(base64Value);
      const output = deflate(binary);
      outputBox.innerText = output.toString();
    } catch (err) {
      alert(`Error: ${err}`);
      console.log(err);
    }
    
  });

  formatBtn.addEventListener('click', () => {
    const value = outputBox.innerText;
    try {
      const obj = JSON.parse(value);
      const formatted = JSON.stringify(obj, undefined, 2);
      outputBox.innerText = formatted;
    } catch (err) {
      alert(`Error: ${err}`);
      console.log(err);
    }
  })
});
