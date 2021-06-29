<html lang="en"><head>
 <javascript>
  function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
  </javascript>
  <style>
form * {
  display: block;
  margin: 10px;
}
</style>
  </head>
  <body>
<form onsubmit="download(this['name'].value, this['text'].value)">
  <input type="text" name="name" value="test.txt">
  <textarea name="text"></textarea>
  <input type="submit" value="Download">
</form>
  </body>
  </html>
