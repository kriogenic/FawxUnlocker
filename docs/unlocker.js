

function loadFile(){
  var oReq = new XMLHttpRequest();
  oReq.open("GET", "./files/unlock", true);
  oReq.responseType = "arraybuffer";

  oReq.onload = function (oEvent) {
    var arrayBuffer = oReq.response; // Note: not oReq.responseText
    if (arrayBuffer) {
      var byteArray = new Uint8Array(arrayBuffer);
      for (var i = 0; i < byteArray.byteLength; i++) {
        console.log("Byte at: " + i + " is " + byteArray[i])
        // do something with each byte in the array
      }
    }
  };
  oReq.send(null);
}
