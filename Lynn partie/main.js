/*document.onmousemove = function(e) {
    document.getElementById("moving_img").style.transform = "rotateY("+ e.clientX/70 +"deg)";
}*/

const options = {
  bottom: '32px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#CFC7B1',  // default: '#fff'
  buttonColorDark: '#353535',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
console.log(darkmode.isActivated()) // will return true