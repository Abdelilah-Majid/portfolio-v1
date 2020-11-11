var my_face = $(".my-face"); //.style.height;
var img_shader = $(".scale"); //.style.width;
// console.log(my_face_h.height(), my_face_w, img_shader_h, img_shader_w);
if (my_face.height() !== img_shader.height() || my_face.width() !== img_shader.width()) {
  img_shader.height(my_face.height());
  img_shader.width(my_face.width());
}
function scale() {
  var my_face = $(".my-face"); //.style.height;
  var img_shader = $(".scale"); //.style.width;
  // console.log(my_face_h.height(), my_face_w, img_shader_h, img_shader_w);
  if (my_face.height() !== img_shader.height() || my_face.width() !== img_shader.width()) {
    img_shader.height(my_face.height());
    img_shader.width(my_face.width());
  }
}
window.addEventListener("resize", scale);
