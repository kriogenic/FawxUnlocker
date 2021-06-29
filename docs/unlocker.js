

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
  
  console.log(crc32('DEE5021500010110EF4D8DAB9BEC4D57AD757102BDABD385915A8A363BBC427EAE004954208053B9E50B3CEBAA464F3E8343F28B6CBE34D030FD5D3344F246C39CBDB7D86C3FF198DDAC9CBF422C452397DD3503D54D46283351AEC356644C68B94E8990F9D676853AD8FB46CD264770B928790060B219D87D7B8545C7654B658770714D1F19551F32AFD4E5FE9A4B4383AC610647A90013E9F59AB5D89F4A5B91538A21F244F362CE970A0E4E3C447397175E501B4AED768DE62BD5C7B34B2C8D30F986DFF5EF708FA65B257AC94BB7B9F96E2B7D43F916AA940318CCFF4B77916E4D9C8EB330CCE60F8E5A5661412DB61305AB1163B7E2B8220512EA4243C487A465BCE36DB395E5BA292B1772463F8010B97C48BC9298F17D12A7071B4FC1B16DF4BBFEAC8AE8ED4DEFAFA4D040E0AD2B915D67B0224BF9571933D1164974A870DE174C8A9138E35728452E0B40ECA2C13F69AADB99AC8F0A036CCDA54B3BACEB0B4365BA60C99B3DA27A9C6045779878EB2B5FB8EAF92DC14C75C35940E6B11F93CDC36C611A5B5DBB48D6DC4866BBB95771984BEDD8F01E782B16194B28AD940940DFCC9B1EF18FB8F957AA488FA4B94472977ED0055537AA7671184A1980FA67AE4AD0A30E6ED381C7DF1644078FEC056B5534757FBEBA71322317496AB79497790DFCB303F18FB8F957AA488FA4B94472977ED689252A3DEA27ED41E4A198478F744B5F3ABEBA71322317496AB79497790DFCB30187F5CCF108134A5293EFD6FD37CB2DEC7A8B2E22D7BC4EA6B1C0755DE810DCE366DAC4FDE8C1460A96E19EBC637DD1E3F18FB8F957AA488FA4B94472977ED690D3E192D8EB73417CBAEA87D0F363DCB5F18FB8F957AA488FA4B94472977E1002A0BF01094A354C34A0E2F924F5FCE198BEBA71322317496AB79497790DFCB30519CAA4D1AF2E4597995FF9504F2DD04BBEBA71322317496AB79497790DFCB302803B41C1A6F9475C953DDD78C5AE99C4F18FB8F957AA488FA4B94472977ED693B1E6C5CE3882424283AD6F5AF940D9F1F18FB8F957AA488FA4B94472977ED695BBD7F35A6AD04DDC8C80C4C0D3636C55F18FB8F957AA488FA4B94472977ED69122EE624BF35A4DB5953254FEE3A7B7954AA28989DF88462ABEAD1F7D976A1028BF696CD6E387493196E50E82AFB1496518FDFB7C42AE463C8EE5D2CE271C3EC8F18FB8F957AA488FA4B94472977ED688334E2CE1D92D4E40B2A57AF57691D6EEA4FF886CBFFF4B80A91670F5909AFE02BEBA71322317496AB79497790DFCB308D411A346C766473D9C9534A2D281C209BEBA71322317496AB79497790DFCB30454635C31EDBB42BAAE2D0221373C4B9A109C0762447048E4B267104A9D92C0B5F18FB8F957AA488FA4B94472977ED35846861BEB3ADB4DDB92F70EF24716CAA08FD35B59B4D54378ADF744F02D9ABD33BEBA71322317496AB79497790DFCB3069AA19C06465248FB993C78670601FF9AF18FB8F957AA488FA4B94472977ED385F18FB8F957AA488FA4B94472977ED6924A0CA19D50D5416B81370E827864354FF18FB8F957AA488FA4B94472977ED694280490C229B448CB8C7356C86703004BF18FB8F957AA488FA4B94472977ED6870DE3A02C8AAA4FB18FF6A7519CC9C839BEBA71322317496AB79497790DFCB3073534077BAB28446BB87563AF2819E4CF8AC0F0CE862743CDA25FA44FD9CBE498325AB02AF316410F8E80CEEC4D3B987ACE977A4D2CD34A0F93AC27ADD815633491136FA2048448CE9109D5680B13839339325DF6FCB842B39DD994BE00A537488ADE4F22452443998AB27E6D3A1A7FBDD94F4713DC5141719E526B2A7DE911C3D5A20CBC7DD8447D93214262C1133AAAB970DC1E64EB4444B438BB05BF213F7A32AE4DA2B41C4D7A9A46151FA8FDAEF5DE94B7CD307041C0BB03D99DE71D38ACD657090030D74B1FAF27D57375AB07AAD5CDC0D030FF49D4ADACE0342CAF75BE6BF46D8FA8E94FB981D1EA067318894A882D65F2B9B14805AE1C9CD7D20E38ECCC0EC2C369744EB08FA7D59B74756E118151E8A4BF6A4A88AE2CB2F986CE7F90F18FB8F957AA488FA4B94472977ED70377E9BB3BE99E4C0286FED92D0550029EF18FB8F957AA488FA4B94472977E1003DE3ABC1331EA42BC93CC3E2A24F306CD8B4E297802E84CD1AB96A9B151897E9D4B3AF4CE44B14E9DB1C6715423137002D63DBFEF0B6C44E49AC832788B8467A7E192F13521A2427797AE66693988797E73FBBD12FBCA4DA592A4802624002054BC253F7EBD454DDEB66330D9353CFA7301B0634C42944AA6ADF54E653AD6A782A03DB2779C104F75A5EAF2F9B24DDE9E6C65F00B4663444A8F5612A6FDFEF3505A05CCB7DD1C49C5949C45F63882FBB6454A36E7FAA24177AE88CEB2E110F2016C31A4BA55714258A4C281C243F9BBD5F18FB8F957AA488FA4B94472977ED701F5896DDEB3C94699BF70C9DFBDED8C326F8641313D63459AA4524033257400F0BCE9F168E9724364B3C622F014B3CC1AF18FB8F957AA488FA4B94472977ED702173BC4FD405A4D558158B0768DE0CED3343FC65147534B64A66C627F6478F2A79BAEBEB495DC4EE6A1FDC44CC67CED044B3AF4CE44B14E9DB1C67154231379A05A4BAFB366CE45A3A00FC4197C4FC396280490C229B448CB8C7356C8670300019778B06326FF456F820B2A47E85E5A68F18FB8F957AA488FA4B94472977ED0105068272AD7E54B51BBA23095931B03154B3AF4CE44B14E9DB1C671542313700196BA5C9D02334C27BA6373533B1D127DBE0E65E5A2E641EF94D3F8D4AC2F304E7B0295DF71784CCBA44DF34D6B792C57F18FB8F957AA488FA4B94472977ED696AA987D1092D749AEB09DF6853E31D1DAF18FB8F957AA488FA4B94472977ED003F18FB8F957AA488FA4B94472977ED0019F3999E3985D46E4B851675B9B919A6E9293D50D4A604E5D971233D04A5FBEA24F32501295A24181B5A484B7992BF7014B3AF4CE44B14E9DB1C6715423137003CF9470AE5FED442F9DA2573F1358C73C03EFC1C8FA6549D0A9A365195418C560B01AD3F1EFFC4E8480D19CB59060BFD0D53F8A9ED1E440E9BA444F3C7ECBF66AF2C0C91F4547416EB037F56A8F04368CF18FB8F957AA488FA4B94472977ED00678062D2A1600414480B6435560CC0DF6397B1280672D48D0831DFFE2AC5C3A58280490C229B448CB8C7356C86703004CBEBA71322317496AB79497790DFCB3C9C504435227A64BDCA17437018BAA2332C4409A022A78472EBF3C17F8E8E0445BECDF26593A13429698D92BD469DAEA8E583BA7E5EDBE48E29AE5FA939E7D1769B0BE177358344A848F120B2F4B2A0524BF696CD6E387493196E50E82AFB149644F32501295A24181B5A484B7992BF7AB05553C50BB4A42BFAE5EEBD1B2412656F18FB8F957AA488FA4B94472977ED008F18FB8F957AA488FA4B94472977E10014ED054A2E3544624ACD6686B33D414A7F674BDFE5FA04E149412D89BC6CC024A55CA46C0F45D4210BC746352FEE12633280490C229B448CB8C7356C86703004A69612D3C1C624C68B8A34010B7C83926F18FB8F957AA488FA4B94472977ED009F18FB8F957AA488FA4B94472977ED007280490C229B448CB8C7356C86703000208D96490E8464C08AA39AA3E433D050FF18FB8F957AA488FA4B94472977ED002F18FB8F957AA488FA4B94472977ED004C19E0596BE0246AE996C2223379792BA'));

console.log(crc32('DEE5021500010110EF4D8DAB9BEC4D57AD757102BDABD385915A8A363BBC427EAE004954208053B9E50B3CEBAA464F3E8343F28B6CBE34D030FD5D3344F246C39CBDB7D86C3FF198DDAC9CBF422C452397DD3503D54D46283351AEC356644C68B94E8990F9D676853AD8FB46CD264770B928790060B219D87D7B8545C7654B658770714D1F19551F32AFD4E5FE9A4B4383AC610647A90013E9F59AB5D89F4A5B91538A21F244F362CE970A0E4E3C447397175E501B4AED768DE62BD5C7B34B2C8D30F986DFF5EF708FA65B257AC94BB7B9F96E2B7D43F916AA940318CCFF4B77916E4D9C8EB330CCE60F8E5A5661412DB61305AB1163B7E2B8220512EA4243C487A465BCE36DB395E5BA292B1772463F8010B97C48BC9298F17D12A7071B4FC1B16DF4BBFEAC8AE8ED4DEFAFA4D040E0AD2B915D67B0224BF9571933D1164974A870DE174C8A9138E35728452E0B40ECA2C13F69AADB99AC8F0A036CCDA54B3BACEB0B4365BA60C99B3DA27A9C6045779878EB2B5FB8EAF92DC14C75C35940E6B11F93CDC36C611A5B5DBB48D6DC4866BBB95771984BEDD8F01E782B16194B28AD940940DFCC9B1EF18FB8F957AA488FA4B94472977ED0055537AA7671184A1980FA67AE4AD0A30E6ED381C7DF1644078FEC056B5534757FBEBA71322317496AB79497790DFCB303F18FB8F957AA488FA4B94472977ED689252A3DEA27ED41E4A198478F744B5F3ABEBA71322317496AB79497790DFCB30187F5CCF108134A5293EFD6FD37CB2DEC7A8B2E22D7BC4EA6B1C0755DE810DCE366DAC4FDE8C1460A96E19EBC637DD1E3F18FB8F957AA488FA4B94472977ED690D3E192D8EB73417CBAEA87D0F363DCB5F18FB8F957AA488FA4B94472977E1002A0BF01094A354C34A0E2F924F5FCE198BEBA71322317496AB79497790DFCB30519CAA4D1AF2E4597995FF9504F2DD04BBEBA71322317496AB79497790DFCB302803B41C1A6F9475C953DDD78C5AE99C4F18FB8F957AA488FA4B94472977ED693B1E6C5CE3882424283AD6F5AF940D9F1F18FB8F957AA488FA4B94472977ED695BBD7F35A6AD04DDC8C80C4C0D3636C55F18FB8F957AA488FA4B94472977ED69122EE624BF35A4DB5953254FEE3A7B7954AA28989DF88462ABEAD1F7D976A1028BF696CD6E387493196E50E82AFB1496518FDFB7C42AE463C8EE5D2CE271C3EC8F18FB8F957AA488FA4B94472977ED688334E2CE1D92D4E40B2A57AF57691D6EEA4FF886CBFFF4B80A91670F5909AFE02BEBA71322317496AB79497790DFCB308D411A346C766473D9C9534A2D281C209BEBA71322317496AB79497790DFCB30454635C31EDBB42BAAE2D0221373C4B9A109C0762447048E4B267104A9D92C0B5F18FB8F957AA488FA4B94472977ED35846861BEB3ADB4DDB92F70EF24716CAA08FD35B59B4D54378ADF744F02D9ABD33BEBA71322317496AB79497790DFCB3069AA19C06465248FB993C78670601FF9AF18FB8F957AA488FA4B94472977ED385F18FB8F957AA488FA4B94472977ED6924A0CA19D50D5416B81370E827864354FF18FB8F957AA488FA4B94472977ED694280490C229B448CB8C7356C86703004BF18FB8F957AA488FA4B94472977ED6870DE3A02C8AAA4FB18FF6A7519CC9C839BEBA71322317496AB79497790DFCB3073534077BAB28446BB87563AF2819E4CF8AC0F0CE862743CDA25FA44FD9CBE498325AB02AF316410F8E80CEEC4D3B987ACE977A4D2CD34A0F93AC27ADD815633491136FA2048448CE9109D5680B13839339325DF6FCB842B39DD994BE00A537488ADE4F22452443998AB27E6D3A1A7FBDD94F4713DC5141719E526B2A7DE911C3D5A20CBC7DD8447D93214262C1133AAAB970DC1E64EB4444B438BB05BF213F7A32AE4DA2B41C4D7A9A46151FA8FDAEF5DE94B7CD307041C0BB03D99DE71D38ACD657090030D74B1FAF27D57375AB07AAD5CDC0D030FF49D4ADACE0342CAF75BE6BF46D8FA8E94FB981D1EA067318894A882D65F2B9B14805AE1C9CD7D20E38ECCC0EC2C369744EB08FA7D59B74756E118151E8A4BF6A4A88AE2CB2F986CE7F90F18FB8F957AA488FA4B94472977ED70377E9BB3BE99E4C0286FED92D0550029EF18FB8F957AA488FA4B94472977E1003DE3ABC1331EA42BC93CC3E2A24F306CD8B4E297802E84CD1AB96A9B151897E9D4B3AF4CE44B14E9DB1C6715423137002D63DBFEF0B6C44E49AC832788B8467A7E192F13521A2427797AE66693988797E73FBBD12FBCA4DA592A4802624002054BC253F7EBD454DDEB66330D9353CFA7301B0634C42944AA6ADF54E653AD6A782A03DB2779C104F75A5EAF2F9B24DDE9E6C65F00B4663444A8F5612A6FDFEF3505A05CCB7DD1C49C5949C45F63882FBB6454A36E7FAA24177AE88CEB2E110F2016C31A4BA55714258A4C281C243F9BBD5F18FB8F957AA488FA4B94472977ED701F5896DDEB3C94699BF70C9DFBDED8C326F8641313D63459AA4524033257400F0BCE9F168E9724364B3C622F014B3CC1AF18FB8F957AA488FA4B94472977ED702173BC4FD405A4D558158B0768DE0CED3343FC65147534B64A66C627F6478F2A79BAEBEB495DC4EE6A1FDC44CC67CED044B3AF4CE44B14E9DB1C67154231379A05A4BAFB366CE45A3A00FC4197C4FC396280490C229B448CB8C7356C8670300019778B06326FF456F820B2A47E85E5A68F18FB8F957AA488FA4B94472977ED0105068272AD7E54B51BBA23095931B03154B3AF4CE44B14E9DB1C671542313700196BA5C9D02334C27BA6373533B1D127DBE0E65E5A2E641EF94D3F8D4AC2F304E7B0295DF71784CCBA44DF34D6B792C57F18FB8F957AA488FA4B94472977ED696AA987D1092D749AEB09DF6853E31D1DAF18FB8F957AA488FA4B94472977ED003F18FB8F957AA488FA4B94472977ED0019F3999E3985D46E4B851675B9B919A6E9293D50D4A604E5D971233D04A5FBEA24F32501295A24181B5A484B7992BF7014B3AF4CE44B14E9DB1C6715423137003CF9470AE5FED442F9DA2573F1358C73C03EFC1C8FA6549D0A9A365195418C560B01AD3F1EFFC4E8480D19CB59060BFD0D53F8A9ED1E440E9BA444F3C7ECBF66AF2C0C91F4547416EB037F56A8F04368CF18FB8F957AA488FA4B94472977ED00678062D2A1600414480B6435560CC0DF6397B1280672D48D0831DFFE2AC5C3A58280490C229B448CB8C7356C86703004CBEBA71322317496AB79497790DFCB3C9C504435227A64BDCA17437018BAA2332C4409A022A78472EBF3C17F8E8E0445BECDF26593A13429698D92BD469DAEA8E583BA7E5EDBE48E29AE5FA939E7D1769B0BE177358344A848F120B2F4B2A0524BF696CD6E387493196E50E82AFB149644F32501295A24181B5A484B7992BF7AB05553C50BB4A42BFAE5EEBD1B2412656F18FB8F957AA488FA4B94472977ED008F18FB8F957AA488FA4B94472977E10014ED054A2E3544624ACD6686B33D414A7F674BDFE5FA04E149412D89BC6CC024A55CA46C0F45D4210BC746352FEE12633280490C229B448CB8C7356C86703004A69612D3C1C624C68B8A34010B7C83926F18FB8F957AA488FA4B94472977ED009F18FB8F957AA488FA4B94472977ED007280490C229B448CB8C7356C86703000208D96490E8464C08AA39AA3E433D050FF18FB8F957AA488FA4B94472977ED002F18FB8F957AA488FA4B94472977ED004C19E0596BE0246AE996C2223379792BA').toString(16).toUpperCase()); // hex
}

var crc32=function(r){for(var a,o=[],c=0;c<256;c++){a=c;for(var f=0;f<8;f++)a=1&a?3988292384^a>>>1:a>>>1;o[c]=a}for(var n=-1,t=0;t<r.length;t++)n=n>>>8^o[255&(n^r.charCodeAt(t))];return(-1^n)>>>0};
