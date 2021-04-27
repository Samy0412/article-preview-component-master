const show = () => {
  const share = document.getElementById("share");
  const icon = document.getElementById("icon");
  const arrow = document.getElementById("arrow");

  if (share.style.opacity == 0) {
    share.style.opacity = "1";
    icon.style.backgroundColor = "hsl(214, 17%, 51%)";
    arrow.style.fill = "hsl(210, 46%, 95%)";
  } else {
    share.style.opacity = "0";
    icon.style.backgroundColor = "hsl(210, 46%, 95%)";
    arrow.style.fill = "hsl(214, 17%, 51%)";
  }
};
