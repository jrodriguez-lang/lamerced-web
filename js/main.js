(function(){
  var NUM="50241147508";
  var p=location.pathname.replace(/\/+$/,"").split("/").filter(Boolean);
  var PAGE=p.length?(p[0]==="blog"?"blog-"+(p[1]||"index"):p[p.length-1].replace(/\.html$/,"")):"home";
  var q=new URLSearchParams(location.search), src="web";
  if(q.get("gclid"))src="ads";
  else if(/(meta|facebook|instagram|tiktok|fb|ig)/i.test(q.get("utm_source")||""))src="meta";
  else if(q.get("utm_source"))src=q.get("utm_source").toLowerCase();
  var ref=" (ref: "+src+"-"+PAGE+")";
  document.querySelectorAll("[data-wa]").forEach(function(a){
    var msg=(a.getAttribute("data-msg")||"Hola, vengo del sitio web de La Merced.")+ref;
    a.setAttribute("href","https://wa.me/"+NUM+"?text="+encodeURIComponent(msg));
  });
  var b=document.querySelector(".burger"), n=document.querySelector("nav.main");
  if(b)b.addEventListener("click",function(){var open=n.style.display==="flex";n.style.display=open?"none":"flex";n.style.flexDirection="column";n.style.position="absolute";n.style.top="64px";n.style.right="26px";n.style.background="#fff";n.style.padding="16px 22px";n.style.borderRadius="16px";n.style.boxShadow="0 12px 30px rgba(0,0,0,.12)";n.style.gap="14px";});
})();
