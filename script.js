document.addEventListener('DOMContentLoaded', function() {
  let string = "";
  let buttons = document.querySelectorAll('.button');

  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.textContent === '=') {
        string = eval(string);
        document.querySelector('input').value = string;
      } else if (e.target.textContent === 'C') {
        string = "";
        document.querySelector('input').value = string;
      } else if (e.target.textContent === 'del') {
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
      } else {
        string = string + e.target.textContent;
        document.querySelector('input').value = string;
      }
    });
  });
});
