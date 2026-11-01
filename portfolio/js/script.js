(function(){
  document.body.classList.remove('no-js');
  var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  /* Révélation au défilement */
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.1});
  $$('.reveal').forEach(function(el){io.observe(el);});
  /* Lien actif */
  var links=$$('#snav a, #tnav a');
  var so=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+x.target.id);});}});},{rootMargin:'-40% 0px -55% 0px'});
  ['accueil','apropos','services','projets','competences','parcours','contact'].forEach(function(id){var s=document.getElementById(id);if(s)so.observe(s);});
  /* Fenêtre de détail d'un projet */
  var md=$('#md'),mi=$('#mi'),mc=$('#mc'),mt=$('#mt'),mx=$('#mx'),last=null;
  function show(img){mi.src=img.src;mi.alt=img.alt;mc.textContent=img.alt;$$('button',mt).forEach(function(b){b.classList.toggle('on',b.dataset.src===img.src);});}
  function openCard(c){
    last=c;var imgs=$$('.pshot img',c);mt.innerHTML='';
    imgs.forEach(function(im){var b=document.createElement('button');b.type='button';b.dataset.src=im.src;b.setAttribute('aria-label','Voir : '+im.alt);var t=document.createElement('img');t.src=im.src;t.alt='';b.appendChild(t);b.addEventListener('click',function(){show(im);});mt.appendChild(b);});
    mx.innerHTML='<span class="eyebrow">'+$('.ptag',c).textContent+'</span><h2>'+$('h3',c).textContent+'</h2>'+$('.pmore',c).innerHTML;
    show(imgs[0]);md.hidden=false;document.body.style.overflow='hidden';$('.mx',md).focus();
  }
  function closeM(){md.hidden=true;document.body.style.overflow='';if(last)last.focus();}
  $$('.pcard').forEach(function(c){c.addEventListener('click',function(e){if(!e.target.closest('a'))openCard(c);});c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openCard(c);}});});
  md.addEventListener('click',function(e){if(e.target===md||e.target.classList.contains('mx'))closeM();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!md.hidden)closeM();});
  window.addEventListener('scroll',function(){if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-6){links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#contact');});}},{passive:true});
  /* Collez ici votre clé Web3Forms (voir LISEZMOI.md) pour recevoir les messages directement dans votre boîte e-mail. */
  var WEB3FORMS_KEY='';
  /* Formulaire */
  $('#cf').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target;
    var body=f.msg.value+'\n\n'+f.nom.value+' ('+f.email.value+')';
    if(WEB3FORMS_KEY){
      var bx=document.getElementById('cfmsg');bx.textContent='Envoi en cours…';
      fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({access_key:WEB3FORMS_KEY,subject:'Contact via le portfolio : '+f.nom.value,name:f.nom.value,email:f.email.value,message:f.msg.value})})
        .then(function(r){return r.json();})
        .then(function(d){if(d&&d.success){bx.textContent='Merci ! Votre message a bien été envoyé.';f.reset();}else{showFallback();}})
        .catch(function(){showFallback();});
      return;
    }
    showFallback();
    function showFallback(){
    var u='mailto:hnolalaina@gmail.com?subject='+encodeURIComponent('Contact via le portfolio : '+f.nom.value)+'&body='+encodeURIComponent(body);
    
    var g='https://mail.google.com/mail/?view=cm&fs=1&to=hnolalaina@gmail.com&su='+encodeURIComponent('Contact via le portfolio : '+f.nom.value)+'&body='+encodeURIComponent(body);
    var box=document.getElementById('cfmsg');
    box.innerHTML='<p style="margin:0 0 10px;color:var(--ink);font-size:14px">Votre message est prêt. Choisissez comment l’envoyer :</p><div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn grad" target="_blank" rel="noopener" href="'+g.replace(/&/g,'&amp;')+'">Ouvrir Gmail</a><a class="btn" href="'+u.replace(/&/g,'&amp;')+'">Application e-mail</a><button class="btn" type="button" id="cpy">Copier le message</button></div><p id="cpyok" style="margin:10px 0 0">Adresse : hnolalaina@gmail.com</p>';
    document.getElementById('cpy').addEventListener('click',function(){
      var nl=String.fromCharCode(10),t='À : hnolalaina@gmail.com'+nl+'Objet : Contact via le portfolio'+nl+nl+body;
      var d=document.createElement('textarea');d.value=t;d.style.position='fixed';d.style.opacity='0';document.body.appendChild(d);d.select();
      var ok=false;try{ok=document.execCommand('copy');}catch(err){}d.remove();
      document.getElementById('cpyok').textContent=ok?'Message copié. Collez-le dans un e-mail à hnolalaina@gmail.com.':'Copie impossible : écrivez directement à hnolalaina@gmail.com.';
    });
    }
  });
})();
