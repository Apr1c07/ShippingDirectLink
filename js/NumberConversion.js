function URLConversion() {
  alert('10')
  if(document.getElementById("inputNumber").value != "")
  {
    var inputNumber = document.getElementById('inputNumber').value;
    var elements = document.getElementsByName('CoName');
    let checkValue = '';
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].checked) {
        checkValue = i;
      }
    }
    alert('i : '+checkValue)
    var Yamato = "https://jizen.kuronekoyamato.co.jp/jizen/servlet/crjz.b.NQ0010?id=";
    var Sagawa = "https://k2k.sagawa-exp.co.jp/p/web/okurijosearch.do?okurijoNo=";
    var Yubin = "https://trackings.post.japanpost.jp/services/srv/search/direct?locale=ja&reqCodeNo1=";
    var a = inputNumber.replace("-", "");
    var b = ""
    alert('checkValue : '+checkValue)
    if (checkValue == 0) {
      alert('in 0 : '+checkValue)
      b = Yamato + a
    } else if (checkValue == 1) {
      alert('in 1 : '+checkValue)
      b = Sagawa + a
    } else if (checkValue == 2) {
      alert('in 2 : '+checkValue)
      b = Yubin + a
    }
    document.getElementById("inputNumber").value = b;
  }
}

function URLCopy() {
  var inputNumber = document.getElementById('inputNumber');
  inputNumber.select();
  document.execCommand("Copy");
}
