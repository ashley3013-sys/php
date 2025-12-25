function sayHi() {
  fetch("hello.php");
    .then(r => r.text());
    .then(text => {
      document.getElementById("result").innerText = text;
    });
}
