
  <style>
form * {
  display: block;
  margin: 10px;
}
</style>
<form onsubmit="download(this['name'].value, this['text'].value)">
  <input type="text" name="name" value="test.txt">
  <textarea name="text"></textarea>
  <input type="submit" value="Download">
</form>
