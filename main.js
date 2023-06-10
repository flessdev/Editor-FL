const $ = s => document.querySelector(s);
 
 const $editor = $('textarea')
 const $view = $('iframe')

 function update(){
  $view.srcdoc = editor.getValue()
 }


 editor = ace.edit($editor);
 editor.renderer.setPadding(20)
 editor.getSession().on("change", update);
 
editor.on("changeSelection", function(){
  setTimeout(() => editor.centerSelection(), 0)
});
 editor.setOptions({
  showGutter: false,
  //animatedScroll: false,
  scrollPastEnd: 1,
  fontSize: "14px",
  //fontFamily: 'Victor',
  dragEnabled: false, //nosirve
  wrap: true, //imposible redline
  printMargin: false,
  tabSize: 1,
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  mode: "ace/mode/html",
  theme:"ace/theme/monokai"
 })


window.onresize = function(){
  setTimeout(() => editor.centerSelection(), 0)
}
  






