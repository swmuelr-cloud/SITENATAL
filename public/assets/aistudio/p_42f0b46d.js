(function(){
  var W="387412b2-83dc-4c99-9e74-1fd7b5acdca7",P="3710438329109009",IC=true,BTXT="https://ggcheckout.app/checkout/v2/QJFGnN3gBV3yBbE1snmBLp|https://ggcheckout.app/checkout/v2/qSGMYF960VV8TwNPO5qOwC|https://ggcheckout.app/checkout/v2/jlwLasRAEaTzI1gGxaPz7t";

  // De onde este arquivo veio é para onde a visita é registrada. Só cai na
  // reserva se o navegador não expuser o script atual — o que não acontece
  // em nenhum navegador com suporte a Promise, exigido logo abaixo.
  var TAG=document.currentScript;
  var E=(function(){
    // sem expressão regular de propósito: escape dentro de template literal
    // é fácil de errar, e o erro só aparece no navegador do visitante
    if(TAG&&TAG.src){var b=TAG.src.split('?')[0];return b.slice(0,b.lastIndexOf('/'))+'/t'}
    return "https://cashflow.mentoriaprocesso.com/t";
  })();

  // Qual oferta esta página vende. Sem isso a visita existe mas não se liga a
  // nada — e é justamente a ligação que permite dizer de qual anúncio veio a
  // venda daquela oferta.
  var OFFER=(TAG&&TAG.getAttribute('data-offer'))||null;
  var COOKIE='_cfs',DAYS=90;

  function get(n){var m=document.cookie.match('(^|;)\\s*'+n+'\\s*=\\s*([^;]+)');return m?m.pop():null}
  function set(n,v){
    var d=new Date();d.setTime(d.getTime()+DAYS*864e5);
    document.cookie=n+'='+v+';expires='+d.toUTCString()+';path=/;SameSite=Lax';
  }
  function param(n){return new URLSearchParams(location.search).get(n)}

  // O Worker do Cloudflare, quando existe, já definiu o identificador no
  // cookie e o expôs aqui — respeitá-lo evita duas identidades para a mesma
  // visita, uma vinda do servidor e outra gerada no navegador.
  var sid=window.__cfs||get(COOKIE);
  var fbclid=param('fbclid');

  /*
    O fbclid persistido, para o retorno sem ele na URL.

    Na visita que origina a venda — boleto pago dias depois, retargeting, uma
    aba reaberta — o fbclid não está mais em location.search, e o link do
    checkout saía sem ele: a Hotmart não montava o _fbc e a Meta não atribuía.
    Guardamos assim que chega. O _fbc do Pixel também o carrega no último
    trecho (fb.1.<ts>.<fbclid>) e serve de reserva quando o cookie próprio
    falta. O do servidor (_cffbc) dura noventa dias e vence o corte do Safari.
  */
  function fbclidDoFbc(v){if(!v)return null;var p=(''+v).split('.');return p.length>3?p.slice(3).join('.'):null}
  if(fbclid)set('_cffbc',fbclid);

  /*
    O _fbp é criado pelo script do Facebook, e ele é bloqueado na maioria das
    visitas — medido nesta operação: existe em uma a cada quatro. Sem ele, a
    Meta recebe os eventos daquele navegador sem nada que os ligue entre si.

    Quando falta, geramos um no formato que ela espera e guardamos num cookie
    do próprio domínio da página, que não sofre o mesmo bloqueio. O do Facebook
    sempre tem precedência: se ele existir depois, é o dele que vale, senão
    passariam a existir duas identidades para o mesmo navegador.
  */
  var NOSSO_FBP='_cfbp';
  var fbp=get('_fbp');
  if(!fbp){
    fbp=get(NOSSO_FBP);
    if(!fbp){
      var n=crypto.getRandomValues(new Uint32Array(2));
      fbp='fb.1.'+Date.now()+'.'+(n[0]%1e10);
    }
    set(NOSSO_FBP,fbp);
  }

  // id gerado no cliente só na primeira visita; o servidor confirma ou troca
  var sidJaExistia=!!sid;
  if(!sid){
    var a='abcdefghjkmnpqrstuvwxyz23456789',s='';
    var r=crypto.getRandomValues(new Uint8Array(12));
    for(var i=0;i<12;i++)s+=a[r[i]%a.length];
    sid=s;
  }
  /*
    Quem é dono do cookie depende de onde a visita é registrada.

    Modo relativo (E na mesma origem da página): o SERVIDOR grava o _cfs em
    toda resposta — 90 dias, que o Safari não corta. Regravar por JavaScript o
    substituiria por um cookie de script, que o Safari corta para 7 dias. Se o
    id já existia, deixa como está; só grava quando ele nasceu aqui.

    Modo absoluto (E em cashflow.mentoriaprocesso.com): a resposta é de outra
    origem e o navegador não guarda o cookie dela — o cookie da página é só
    este, de JavaScript. Aí grava sempre, como sempre foi: cada visita renova a
    validade. Nada muda para quem usa o endereço completo.
  */
  var servidorGravaOCookie=(E.indexOf(location.origin+'/')===0);
  if(!sidJaExistia||!servidorGravaOCookie)set(COOKIE,sid);

  function eid(name){return name+'.'+sid+'.'+Date.now()}

  var pageEvent=eid('PageView'),viewEvent=eid('ViewContent');
  var payload={
    w:W,sid:sid,offer:OFFER,fbclid:fbclid,fbp:fbp,fbc:get('_fbc'),
    utm_source:param('utm_source'),utm_medium:param('utm_medium'),
    utm_campaign:param('utm_campaign'),utm_content:param('utm_content'),
    utm_term:param('utm_term'),
    ref:document.referrer||null,url:location.href,
    /*
      PageView e ViewContent no mesmo envio. Separá-los custaria duas
      requisições por visita para dizer a mesma coisa duas vezes.
    */
    ev:[{n:'PageView',id:pageEvent,u:location.href},
        {n:'ViewContent',id:viewEvent,u:location.href}]
  };

  // keepalive para o evento não se perder se a página navegar em seguida
  function enviar(evs,extra){
    var b={w:W,sid:sid,offer:OFFER};
    if(evs)b.ev=evs;
    for(var k in extra)b[k]=extra[k];
    try{
      fetch(E,{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify(b),keepalive:true});
    }catch(e){}
  }

  try{
    fetch(E,{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload),keepalive:true});
  }catch(e){}

  /*
    O código base do Pixel, quando a página não tem nenhum.

    Exigir que o cliente instale o Pixel à parte transformaria uma linha em
    duas, e a segunda é justamente a que costuma faltar. Se a página já tem
    (window.fbq existe), respeitamos o que está lá: instalar de novo criaria
    dois disparos do mesmo evento.
  */
  if(P&&!window.fbq){
    (function(f,b,e,v,n,t,s){
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
      t=b.createElement(e);t.async=!0;t.src=v;
      s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
    })(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /*
      Advanced Matching no código base.

      O init ia sem parâmetro nenhum, e é ali — não por evento — que a Meta lê
      os dados de correspondência. O identificador da visita é o que sempre
      temos: ele vai cru, a Meta o hasheia, e o resultado é o mesmo SHA-256 que
      o CAPI manda como external_id. O alfabeto do id é minúsculo e sem
      símbolos justamente para que a normalização dela não altere o valor.
    */
    window.fbq('init',P,{external_id:sid});
  }

  // O Pixel usa o mesmo event_id do servidor: é o que permite deduplicar.
  if(P&&window.fbq){window.fbq('track','PageView',{},{eventID:pageEvent});}

  /*
    ViewContent junto do PageView.

    Entre a visita e a compra não chegava sinal nenhum, e a Meta otimizava com
    um funil de dois degraus muito distantes — o algoritmo aprende devagar
    porque a conversão é rara. Ver a página do produto é o primeiro degrau, e a
    página de vendas é justamente onde este script vive.
  */
  if(P&&window.fbq)window.fbq('track','ViewContent',{},{eventID:viewEvent});

  /**
   * Repassa o identificador para o checkout.
   *
   * É por aqui que a atribuição sobrevive ao que costuma quebrá-la: o valor
   * viaja como parâmetro do link, não como cookie, então nem o Safari apagando
   * o cookie em 24 horas nem um encurtador no meio do caminho o derrubam.
   */
  // A trilha do anúncio, quando o template a manda pela URL da página.
  var trilha=param('xcod');

  /*
    keepalive no envio garante que o registro sobrevive à navegação: o
    navegador conclui a requisição mesmo com a página já indo embora.
  */
  function aoIrAoCheckout(ev){
    try{
      var alvo=ev.currentTarget;
      completarNoClique(alvo);
      enviar([{n:'CheckoutClick',id:eid('CheckoutClick'),
        u:location.href,d:alvo&&alvo.href}]);
    }catch(e){}
  }

  /*
    O link decorado DE NOVO na hora do clique, pela mesma regra da carga.

    A varredura decora cada link uma vez (marca data-cfs). Medido em produção
    em 15/09/2026, depois do PR #224: nos CheckoutClick de pay.hotmart.com o
    destino gravado NA HORA DO CLIQUE trazia 16 vezes o sck e o xcod da UTMify
    sem src, e 2 vezes sck= e xcod= vazios; nenhum com o src nosso. A UTMify
    reescreve o href DEPOIS da varredura: quando olhamos, o sck estava vazio,
    pusemos o nosso e nenhum src; depois ela trocou sck e xcod.

    Aqui, antes de o navegador seguir o link, decorarUrl completa o que estiver
    vazio e não sobrescreve valor de outra ferramenta nem do dono: com o sck de
    outra ferramenta, o src ganha o nosso id; com sck= vazio, o sck volta a ser
    o nosso; e o sck/xcod com o NOSSO id de outra visita (colado no botão) vira
    o desta — inclusive aqui, no clique. O href só é regravado
    se algo mudou, então cliques repetidos não mexem mais nada. Trocar o href
    dentro do ouvinte vale para a navegação: provado no Chrome em mesma aba,
    target=_blank, botão do meio e Cmd+clique.

    Sem MutationObserver no href, de propósito: com a ferramenta terceira
    também observando e reescrevendo, os dois trocariam o link sem parar.
  */
  function completarNoClique(alvo){
    try{
      if(!alvo||!alvo.href)return;
      var u=new URL(alvo.href,location.href);
      /*
        No clique, só link com cara de checkout (ou marcado com data-cashflow).
        Sem a exceção de mesmo host que a varredura tem: um link decorado que o
        framework da página troca para rota interna (/obrigado) não pode ganhar
        sck, xcod e utm no clique.
      */
      if(!alvo.hasAttribute('data-cashflow')&&!caraDeCheckout(u))return;
      var antes=u.toString();
      decorarUrl(u,param('fbclid')||get('_cffbc')||fbclidDoFbc(get('_fbc')));
      var depois=u.toString();
      if(depois!==antes)alvo.href=depois;
    }catch(e){}
  }
  function aoAbrirOMenu(ev){ completarNoClique(ev.currentTarget); }

  /*
    O que tem cara de checkout, e o que a decoração acrescenta — escritos uma
    vez, porque servem a dois caminhos: o link (<a href>) e a navegação feita
    por JavaScript (window.location.href / window.open), logo abaixo.

    A lista tinha só Hotmart, Kiwify e Doppus. Os dez checkouts que entraram
    depois (Wiapy, Kirvano, Cakto, GGCheckout, Kavoo, Lastlink, Payt, Ticto,
    Hubla, Vega) não eram reconhecidos, e o link deles saía da página SEM sck e
    SEM as UTMs. Medido num cliente em 05/09/2026: 124 visitas registradas em 7
    dias, 103 delas com UTM — e ZERO vendas ligadas à sessão.

    Além dos domínios conhecidos, entra uma regra por FORMA: host com cara de
    checkout (pay., checkout., compra., carrinho.) é decorado mesmo que a
    plataforma não esteja na lista — cobre quem usa domínio próprio.

    E aconteceu DE NOVO em 08/09/2026, com as cinco plataformas integradas
    entre 05 e 08/09 (Greenn, Zouti, Yampi, CartPanda, Wiven): adaptador
    escrito, webhook recebendo, e o link saindo da página SEM o identificador
    de sessão. Medido num cliente da CartPanda: 62 anúncios ativos, 47
    campanhas, ZERO visitas ligadas a venda.

    O padrão do erro é sempre o mesmo — integrar o checkout e esquecer o pixel,
    que mora do outro lado do produto. Por isso o teste desta lista deixou de
    conferir nomes escritos à mão e passou a LER O REGISTRO de adaptadores: a
    próxima plataforma que entrar sem pista aqui reprova sozinha.

    ATENÇÃO ao editar este comentário: ele vive DENTRO da template string que
    monta o script. Uma crase aqui FECHA a string e quebra o arquivo inteiro.
    Aconteceu duas vezes seguidas em 08/09/2026 — inclusive neste parágrafo,
    que na primeira versão avisava do perigo usando o próprio caractere que
    causa o problema. Quem pegou foi o deno check. Nada de crase aqui dentro.

    oncartx entra ao lado de cartpanda porque a plataforma serve os dois
    domínios: <loja>.mycartpanda.com e <loja>.oncartx.io. zuptos entra pelo
    nome puro: o host da página de pagamento dela ainda não foi visto.
  */
  /*
    Endereço BASE dos dois lados (Lucas, 18/09/2026). Sem protocolo, sem
    ?query, sem #hash e sem a barra final — só host e caminho.

    Caso ldrbno@gmail.com: o valor gravado tinha o sck/xcod/bid de UMA visita
    (o script do checkout reescreve o link com o identificador de cada
    visitante), então comparar o href inteiro contra ele não casava para
    ninguém. Cortar dos DOIS lados é o que faz os pixels que já têm esse lixo
    gravado voltarem a casar sem ninguém reeditar nada.
  */
  var _base=function(v){return (''+v).toLowerCase().replace(/^https?:\/\//,'').replace(/[?#][\s\S]*$/,'').replace(/\/+$/,'');};
  var _textos=[],_urls=[];
  (''+(BTXT||'')).split('|').forEach(function(bruto){
    var g=bruto.trim(); if(!g)return;
    if(/\//.test(g)||/^[\w.-]+\.[a-z]{2,}$/i.test(g)){
      _urls.push(_base(g).replace(/\s+/g,''));
    }else{
      _textos.push(g.toLowerCase().replace(/\s+/g,' '));
    }
  });
  function _casaUrlGatilho(h){
    if(!_urls.length||!h)return false;
    for(var i=0;i<_urls.length;i++){ if(_urls[i]&&h.indexOf(_urls[i])>=0)return true; }
    return false;
  }
  var PISTAS=['pay.','checkout.','compra.','carrinho.','seguro.','hotmart.com','kiwify','doppus','wiapy','kirvano','cakto','ggcheckout','kavoo','lastlink','payt.com','ticto','hub.la','vegacheckout','greenn','zouti','yampi','cartpanda','oncartx','wiven','frendz','eduzz','zuptos'];
  /*
    E o endereço que o dono CADASTROU na etapa 1.3 (os gatilhos de URL acima)
    também é checkout, mesmo em domínio próprio fora das PISTAS. Ticket #718
    (09/10/2026): GGCheckout em comprar.lourx.com.br saía sem sck, sem UTM e
    sem CheckoutClick, e só o IC casava. Só o cadastrado: o p.js não decora
    link externo qualquer. O próprio host fica de fora, como no clique.
  */
  function caraDeCheckout(u){
    var h=u.host.toLowerCase();
    for(var j=0;j<PISTAS.length;j++){ if(h.indexOf(PISTAS[j])>=0)return true; }
    return u.host!==location.host&&_casaUrlGatilho(_base(u.toString()));
  }
  /*
    Os checkouts que DESCARTAM o sck, e por isso precisam do token na utm.

    A Wiapy ecoa no webhook só tracking {fbc, fbp, utm_*}: sck, xcod e fbclid
    somem. Sobra o fbc, que é o cookie do domínio do checkout, escrito pelo
    pixel da Meta DELE — sem esse pixel ele volta de semanas atrás, ou vazio, e
    a venda não acha a visita (24/09/2026, 45 workspaces: fbc fresco casa muito,
    fbc de semanas casa 10% ou menos; um caso caiu para 6 de 52 no dia em que o
    dono tirou o pixel do checkout). E o dono da Wiapy não vai ligar pixel lá:
    a saída tem de ser nossa.

    Só entra quem foi VISTO em payload real ecoando o utm_content e descartando
    o sck: a Wiapy (24/09/2026) e a GGCheckout (28/09/2026, ticket #303 — o
    webhook de compra devolve tracking{utm_*} inteiro, inclusive utm_content,
    e nenhum sck/xcod; o link tinha saído decorado: 41 vendas em 7 dias, zero
    casadas). O checkout hospedado da GGCheckout mora em ckcheckout.com.br —
    daí as duas pistas. E em domínio próprio (ticket #718) a GG se reconhece
    pelo caminho /checkout/v5/: em 09/10/2026, 26 ofertas com esse caminho
    cadastrado, as 26 vendendo pela GG. Só chega aqui o link que já é checkout.
  */
  var SEM_SCK=['wiapy','ggcheckout','ckcheckout'];
  function descartaOSck(u){
    var h=u.host.toLowerCase();
    for(var j=0;j<SEM_SCK.length;j++){ if(h.indexOf(SEM_SCK[j])>=0)return true; }
    return u.pathname.toLowerCase().indexOf('/checkout/v5/')>=0;
  }
  function decorarUrl(u,fbclidPersistido){
    var sckDoLink=u.searchParams.get('sck');
    /*
      O sck vazio recebe o id desta visita — e também o sck que tem o NOSSO
      formato mas é de OUTRA visita. Esse id só existe porque nós o geramos:
      é o de um link já decorado que o dono copiou do navegador e colou no
      botão da página. Toda venda pela página casava então com a visita do
      dono (otshenriq, 22/09/2026: 7 de 11 vendas numa visita de 17/09, sem
      anúncio; em 30 dias, 107 vendas de 17 operações com o mesmo id em três
      ou mais compradores, 104 casadas na sessão errada). Não é parâmetro de
      outra ferramenta (a UTMify escreve outro formato) nem do dono — a regra
      de nunca sobrescrever sck, xcod, src e utm continua para eles.
    */
    if(!sckDoLink||idNossoDeOutraVisita(sckDoLink))u.searchParams.set('sck',sid);

    /*
      O id da visita vai no src SÓ quando o sck já está ocupado por outra
      ferramenta (valor que não tem o formato do nosso id) e o src está vazio.

      Quem usa a UTMify junto tem o sck (e o xcod) ocupados por ela, e a linha
      acima não põe nada: o nosso id não chegava ao checkout. Medido em
      15/09/2026, 7 dias: 15.616 vendas da Hotmart com sck de outra ferramenta
      e ZERO ligadas à visita, em 71 operações. O src estava livre em ~98,7%
      delas e volta no webhook, onde idDaVisita escolhe pelo formato.

      Só nesse caso, e não sempre que vazio (decisão da revisão do PR #224,
      mínima interferência): com o sck nosso, o src não acrescenta nada e só
      poria um valor aleatório no relatório de origem do dono (~20 mil vendas
      por semana); e há ferramentas que escrevem no src (147 vendas Hotmart de
      4 operações). A ferramenta que reescreve o sck DEPOIS da varredura (a
      UTMify faz isso, PR #228) é coberta por completarNoClique, que reaplica
      esta mesma regra no clique, no botão do meio e no menu, e de novo no
      window. Fica sem cobertura o terceiro que reescreve em bolha no próprio
      window, registrado depois deste script.
    */
    else if(!temFormatoDoId(sckDoLink)&&!u.searchParams.get('src'))u.searchParams.set('src',sid);

    /*
      O xcod carrega a trilha do anúncio (campanha, conjunto, criativo e
      posicionamento) quando o template a coloca ali. Antes escrevíamos o
      identificador da visita por cima dele — apagando, no último passo
      antes do checkout, exatamente o dado que a marcação existia para
      entregar. Só usamos o identificador quando não há trilha nenhuma.
      O xcod com o nosso id de OUTRA visita (colado junto com o sck) não é
      trilha de ninguém: recebe a trilha desta página, ou o id desta visita.
    */
    var xcodDoLink=u.searchParams.get('xcod');
    if(!xcodDoLink||idNossoDeOutraVisita(xcodDoLink))u.searchParams.set('xcod',trilha||sid);

    /*
      As marcações do anúncio seguem para o checkout junto com o
      identificador da visita. O sck sozinho já amarra a venda, mas ele
      depende de a visita ter sido registrada; a marcação viaja na própria
      URL e sobrevive a bloqueador, aba nova e link repassado no WhatsApp.

      O fbclid vai junto, e é ele que conserta o InitiateCheckout: o pixel do
      checkout dispara em outro domínio, onde o cookie _fbp desta página não é
      legível, e sem fbclid na URL não há como montar o _fbc. Medido nesta
      base: 94,6% das visitas chegam com fbclid na URL.
    */
    /*
      O utm_content que é só o NOSSO token de outra visita (::<id>::) veio
      copiado com o link, como o sck acima (ticket #744, 14/10/2026: 7 vendas
      Wiapy casadas na visita do dono, sem anúncio). Sai, e o link segue como
      limpo: entra o do anúncio e, em SEM_SCK, o token desta visita. O da UTMify
      (outro formato) e o valor com algo antes do separador ficam.
    */
    if(tokenNossoDeOutraVisita(u.searchParams.get('utm_content')))u.searchParams.delete('utm_content');
    ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(function(k){
      var v=param(k);
      if(v&&!u.searchParams.get(k))u.searchParams.set(k,v);
    });
    // o fbclid tratado à parte: no retorno vem do cookie, não da URL
    if(fbclidPersistido&&!u.searchParams.get('fbclid'))u.searchParams.set('fbclid',fbclidPersistido);

    /*
      O token da visita pendurado no fim do utm_content, nos checkouts de
      SEM_SCK — depois da decoração acima, para pegar a utm copiada da página.

      A convenção é da UTMify, que resolve o mesmo problema assim, e a Wiapy
      ecoa o valor inteiro; o id_da_utm do servidor já tolera o sufixo para ler
      o id do anúncio (migração 20261219260000). Por isso o que vem ANTES do
      separador fica intacto — a regra 3 do CORE continua de pé: nada de sck,
      xcod, src ou utm do dono é sobrescrito, o valor só ganha o fim. Com o
      separador JÁ presente, é da UTMify e não se toca (o servidor lê o token
      dela; o nosso de outra visita já saiu acima), e é isso que torna esta
      decoração idempotente quando o clique e a navegação passam de novo por
      aqui.

      Token: o fbclid DESTA visita (94,6% chegam com um) e, na falta dele, o id
      da visita — o servidor distingue os dois pelo formato (12 caracteres do
      alfabeto do sorteio é id de visita, e vira sck; o resto é fbclid). Nunca o
      fbclid do link: colado no botão da página, é de outra visita, o mesmo erro
      que o sck copiado causava.
    */
    if(descartaOSck(u)){
      var conteudo=u.searchParams.get('utm_content');
      if(conteudo===null||conteudo.indexOf('::')<0)
        u.searchParams.set('utm_content',(conteudo||'')+'::'+(fbclidPersistido||sid)+'::');
    }
  }

  var SELETOR=(
      'a[href*="pay.hotmart.com"],a[href*="hotmart.com/product"],'+
      'a[href*="pay.kiwify.com"],a[href*="kiwify.com.br/"],'+
      'a[href*="pay.doppus.com"],a[href*="doppus.app"],'+
      'a[href*="wiapy.com"],a[href*="kirvano.com"],a[href*="cakto.com"],'+
      'a[href*="ggcheckout.com"],a[href*="kavoo.com"],a[href*="lastlink.com"],'+
      'a[href*="payt.com.br"],a[href*="ticto.com"],a[href*="ticto.app"],'+
      'a[href*="hub.la"],a[href*="vegacheckout.com"],'+
      'a[href^="http"],'+
      'a[data-cashflow]'
  );
  function decorate(){
    // da URL quando o clique chega do anúncio; do cookie no retorno sem ele
    var fbclidPersistido=param('fbclid')||get('_cffbc')||fbclidDoFbc(get('_fbc'));
    // o document e cada shadow root conhecida (ver O SHADOW DOM, abaixo)
    var vivas=raizesVivas();
    var raizes=[document];
    for(var v=0;v<vivas.length;v++)raizes.push(vivas[v].raiz);
    for(var r=0;r<raizes.length;r++){
    var links=raizes[r].querySelectorAll(SELETOR);
    for(var i=0;i<links.length;i++){
      var a=links[i];
      if(a.getAttribute('data-cfs'))continue;
      try{
        var u=new URL(a.href,location.href);
        /*
          O seletor acima pega todo link externo para alcançar o checkout em
          domínio próprio; aqui os que não têm cara de checkout são devolvidos.
          Quem foi marcado à mão com data-cashflow passa sempre. Link interno
          (u.host===location.host) segue como sempre seguiu.
        */
        if(!a.hasAttribute('data-cashflow')&&u.host!==location.host&&!caraDeCheckout(u))continue;
        decorarUrl(u,fbclidPersistido);
        a.href=u.toString();
        a.setAttribute('data-cfs','1');

        /*
          O clique no botão do checkout vira evento.

          É a etapa que faltava no funil. O InitiateCheckout do checkout chega
          pela metade — ele dispara em outro domínio, onde o cookie desta
          página não é legível, e a Meta acaba sem saber de qual anúncio veio.
          Aqui o clique acontece ONDE a visita é conhecida, então a atribuição
          sai exata, igual à da venda.

          O nome é nosso e está fora da lista que o servidor envia à Meta. Isso
          é deliberado: foi um evento nosso somando com o do checkout que
          inflou a contagem em julho.

          auxclick junto com click: o botão do meio abre em nova aba e não
          dispara click. Sem ele, quem compara preços em abas paralelas — que é
          metade de quem compra — não seria contado.
        */
        a.addEventListener('click',aoIrAoCheckout);
        a.addEventListener('auxclick',aoIrAoCheckout);
        /* copiar link, abrir em nova aba pelo menu, toque longo: completa o link sem contar clique */
        a.addEventListener('contextmenu',aoAbrirOMenu);

        /*
          O InitiateCheckout NÃO sai daqui.

          O pixel instalado dentro do checkout — Hotmart, Kiwify — já dispara o
          evento quando a página de pagamento abre. Disparando também no clique
          do botão, a mesma intenção era contada duas vezes: medido, a Meta
          reportava 433 onde registramos 228.

          Entre os dois, ficou o do checkout: ele marca o momento em que a página
          de pagamento de fato abriu, e não a intenção de ir até ela.

          A decoração do link acima continua, e é o que importa aqui: é ela que
          leva as UTMs e o sck até o checkout, e é disso que a atribuição da venda
          depende mais tarde. Quem quiser o evento de volta tem
          window.cashflow.track('InitiateCheckout') à disposição.
        */
      }catch(e){}
    }
    }
  }

  /*
    ── O SHADOW DOM ──────────────────────────────────────────────────────────
    A página de vendas mais visitada da base (21/09/2026: 10 mil sessões em 7
    dias) monta o conteúdo INTEIRO dentro de um attachShadow. Tudo o que este
    script fazia — procurar os links no document, observar o document, escutar
    o clique no document e no window — é cego para o que está dentro de uma
    shadow root, e o clique que sai de lá chega ao document apontando para o
    hospedeiro, não para o link. No Android o Chrome ainda salvava pela API de
    navegação, mais abaixo (1.726 cliques registrados em 7 dias); no iPhone,
    que não a tem, 7 cliques em 1.777 sessões e 30% das vendas chegando ao
    checkout com a origem vazia — sem sck, sem xcod, sem UTM.

    Três coisas fecham isso:
      1. as raízes que JÁ EXISTEM quando o script roda são achadas pela
         propriedade shadowRoot (só as abertas, e só as que estão no
         documento: a fechada criada antes de nós não é alcançável de fora, e
         a aberta criada antes de nós num hospedeiro solto e montada depois
         não está lá na busca e não passa pelo envelope — dois limites
         conhecidos);
      2. as raízes que NASCEREM depois passam pelo envelope de attachShadow, que
         entrega a raiz — aberta OU fechada — antes de devolvê-la à página. O
         envelope é transparente: mesma raiz, mesmo modo, mesmos argumentos;
      3. cada raiz conhecida é varrida, observada e escutada como o document —
         os mesmos ouvintes, na captura e no fim do caminho, para click,
         auxclick e contextmenu.
    Custo: uma busca por '*' na carga (medido pelo @qa numa página de 12 mil
    elementos: 5 ms → 23 ms de carga) e uma por raiz nova, dentro dela.
    E o link clicado dentro de uma raiz é anotado no evento pelo ouvinte de
    captura da própria raiz, para o fim do caminho (no window) ainda o achar.
  */
  var raizesDeSombra=[];
  function acharRaizesAbertas(no){
    var todos=no.querySelectorAll('*');
    for(var i=0;i<todos.length;i++){ if(todos[i].shadowRoot)registrarRaiz(todos[i].shadowRoot); }
  }
  /*
    Registrar NÃO varre: a raiz que nasce pelo envelope nasce vazia, e quem
    pega o conteúdo que a página põe nela é o observador dela; a raiz que já
    existia entra pela busca da carga, e a varredura da carga vem logo depois.
    Varrer aqui era quadrático — medido pelo @qa: 200 componentes com shadow
    root custavam 1,5 s de attachShadow, contra 5 ms sem a varredura.
  */
  function registrarRaiz(raiz){
    if(!raiz)return;
    for(var j=0;j<raizesDeSombra.length;j++){ if(raizesDeSombra[j].raiz===raiz)return; }
    var vigia=null;
    try{vigia=new MutationObserver(decorate);vigia.observe(raiz,{childList:true,subtree:true});}catch(e){}
    raizesDeSombra.push({raiz:raiz,vigia:vigia,dorme:false});
    try{escutarCliques(raiz);}catch(e){}
    try{acharRaizesAbertas(raiz);}catch(e){}
  }
  /*
    A raiz cujo hospedeiro está fora do documento DORME: sai da varredura e
    para de ser observada, mas fica na lista. Sem isto a lista só crescia —
    medido pelo @qa: uma mutação qualquer no DOM passava de 3 ms para 12 ms
    depois de 300 componentes criados e removidos, sem teto.

    Dorme, não morre: aba, modal, carrossel e lista virtualizada tiram o
    componente do documento e o põem de volta, e há quem crie o hospedeiro
    solto, chame attachShadow e só monte um tique depois. Descartar a raiz na
    primeira vez que o hospedeiro é visto fora deixava o link que nascesse lá
    dentro depois sem sck e sem src — e a raiz FECHADA não tem caminho de
    reencontro: attachShadow não dispara de novo para o mesmo hospedeiro e
    host.shadowRoot é null de fora. O que se paga é memória (a entrada guarda a
    raiz do componente que não voltar), não CPU: medido pelo @qa, 0,17 ms por
    mutação com 300 criados e removidos, contra 0,11 ms descartando.
  */
  function raizesVivas(){
    var vivas=[];
    for(var i=0;i<raizesDeSombra.length;i++){
      var r=raizesDeSombra[i];
      if(!r.raiz.host.isConnected){
        if(!r.dorme){ r.dorme=true; try{if(r.vigia)r.vigia.disconnect();}catch(e){} }
        continue;
      }
      if(r.dorme){ r.dorme=false; try{if(r.vigia)r.vigia.observe(r.raiz,{childList:true,subtree:true});}catch(e){} }
      vivas.push(r);
    }
    return vivas;
  }
  var attachOriginal=window.Element&&window.Element.prototype.attachShadow;
  if(typeof attachOriginal==='function'){
    window.Element.prototype.attachShadow=function(){
      var raiz=attachOriginal.apply(this,arguments);
      try{registrarRaiz(raiz);}catch(e){}
      return raiz;
    };
  }

  /*
    O link no caminho do evento. Dentro de uma shadow root, ev.target chega ao
    document e ao window já trocado pelo hospedeiro, e o closest não acha o
    link. Quem o vê é o ouvinte de captura preso na própria raiz: ele anota o
    link no evento (a propriedade tem prefixo para não colidir com a de um
    terceiro; é legível por qualquer ouvinte e aponta para o link, nada mais),
    e o fim do caminho, no window, lê a anotação. Vale para a raiz aberta e
    para a fechada — o evento composed atravessa as duas até o window; é por
    isso que não há composedPath aqui: ele não atravessa a fechada, e a
    anotação cobre as duas. Com âncora dentro de âncora entre raízes, fica a
    externa (limite, sem perda: as duas levam ao mesmo lugar).
  */
  function linkNoCaminho(ev,soDecorado){
    var lembrado=ev.__cfLink;
    if(lembrado&&(!soDecorado||lembrado.getAttribute('data-cfs')))return lembrado;
    var t=ev.target&&ev.target.closest?ev.target:null;
    return t?t.closest(soDecorado?'a[data-cfs]':'a[href]'):null;
  }

  try{acharRaizesAbertas(document);}catch(e){}
  decorate();
  // páginas de venda montam botão por JS o tempo todo
  new MutationObserver(decorate).observe(document.documentElement,{childList:true,subtree:true});

  /*
    A última chance: decorar no PRÓPRIO clique.

    Otimizadores de WordPress (WP Rocket e parecidos) atrasam a execução de
    scripts até a primeira interação — e alguns copiam o arquivo para o cache
    deles, servindo uma versão velha por semanas. Encontrado em 05/09/2026 num
    cliente da Kirvano: 14 de 34 vendas sem UTM, com o script congelado em
    /wp-content/cache/min/1/t/p.js de 00:12 e marcado como
    rocketlazyloadscript.

    Nesses casos a decoração roda tarde demais ou não roda, e a pessoa clica
    num link ainda limpo. Este ouvinte é em CAPTURA, no document: ele pega o
    clique antes de o navegador seguir o link e decora ali mesmo. É o mesmo
    trabalho, no último instante em que ele ainda serve para alguma coisa.

    Não substitui a decoração de antes: link decorado cedo sobrevive a
    "abrir em nova aba", a copiar o endereço e ao clique do meio. Este é a rede
    embaixo.
  */
  function decorarNoClique(ev){
    try{
      var alvo=linkNoCaminho(ev,false);
      if(!alvo)return;
      try{ev.__cfLink=alvo;}catch(e){}
      if(!alvo.getAttribute('data-cfs'))decorate();
    }catch(e){}
  }

  /*
    A mesma complementação no FIM do caminho do evento, no window em bolha.

    O ouvinte do link roda antes dos ouvintes em bolha do document e do body.
    Uma ferramenta que reescreve o href NO PRÓPRIO clique, ali, apagaria o src
    depois de nós. Medido no Chrome em 15/09/2026, com o p.js real e um
    terceiro reescrevendo em bolha no document: sem a API de navegação
    (Firefox, Safari antes do 26) e com target=_blank, o checkout recebia o
    sck da UTMify SEM src. O window é o último nó do caminho: aqui só se
    completa o link (nada de evento), e a navegação padrão ainda não começou.
  */
  function completarNoFimDoClique(ev){
    try{
      var a=linkNoCaminho(ev,true);
      if(a)completarNoClique(a);
    }catch(e){}
  }
  /* o botão do meio e o menu de contexto só anotam o link: quem os completa é o fim do caminho */
  function anotarLink(ev){
    try{var alvo=linkNoCaminho(ev,false);if(alvo)ev.__cfLink=alvo;}catch(e){}
  }
  /*
    Os mesmos ouvintes no document/window e em cada shadow root: a captura
    decora o link limpo (e anota o link, também no botão do meio e no menu —
    sem isso a rede do fim do caminho não alcançava a raiz), e o fim do
    caminho completa o decorado. Na raiz, a bolha da própria raiz é a rede para
    o evento que não sai dela (composed:false); o composed sobe até o window.
  */
  function escutarCliques(onde,fim){
    onde.addEventListener('click',decorarNoClique,true);
    onde.addEventListener('auxclick',anotarLink,true);
    onde.addEventListener('contextmenu',anotarLink,true);
    (fim||onde).addEventListener('click',completarNoFimDoClique);
    (fim||onde).addEventListener('auxclick',completarNoFimDoClique);
    /* o mesmo para o menu de contexto: um terceiro que reescreve ali, em bolha no document, apagaria o src do link copiado */
    (fim||onde).addEventListener('contextmenu',completarNoFimDoClique);
  }
  escutarCliques(document,window);

  /*
    O botão que não é link.

    Páginas geradas (Google AI Studio, Lovable, construtores React) cada vez
    mais mandam a pessoa ao checkout assim:

        onClick: () => { window.location.href = "https://pay.wiapy.com/x_xN..." }

    Não há <a href> em lugar nenhum: nada para decorar na carga, na mutação
    ou no clique. Encontrado em 05/09/2026 numa página republicada de manhã —
    as vendas de antes marcavam, as de depois chegavam ao checkout sem UTM,
    sem sck e sem fbclid, com a visita gravada normalmente.

    A saída é a API de navegação do navegador: o evento 'navigate' dispara
    antes de QUALQUER navegação iniciada pela página, inclusive a atribuição
    a location.href, e pode ser cancelado. Cancelamos a ida ao checkout limpo
    e refazemos com a URL decorada — a mesma decoração do link. Provado no
    Chrome na própria página: o clique chegou em pay.wiapy.com/...?sck=&utm_...

    Só se aplica onde a API existe (Chromium desde 2022, incluindo o navegador
    interno do Instagram/Facebook no Android; WebKit/Safari a partir do 26).
    Onde não existe, nada muda em relação a antes. A guarda de decorarDestino
    evita o laço: a URL que já saiu decorada tem o sck DESTA visita, ou o sck de
    outra ferramenta com o src ocupado — e passa direto. Só pelo 'sck' não
    bastava: o destino com o sck da UTMify passava direto também, e o nosso id
    não ia nem no src (15/09/2026).

    window.open recebe o mesmo tratamento, pelo caminho simples: embrulhar.
  */
  /*
    O valor tem a forma de um id gerado aqui: 12 caracteres do alfabeto do
    sorteio. Sem expressão regular de propósito (escape em template literal).
    Espelha temFormatoDeIdDaVisita, em _shared/id-da-visita.ts.
  */
  function temFormatoDoId(v){
    if(!v||v.length!==12)return false;
    for(var k=0;k<12;k++){ if('abcdefghjkmnpqrstuvwxyz23456789'.indexOf(v.charAt(k))<0)return false; }
    return true;
  }
  // um id gerado por nós que não é o desta visita: sobrou de um link copiado
  function idNossoDeOutraVisita(v){ return temFormatoDoId(v)&&v!==sid; }
  // o utm_content inteiro é ::<id>:: e o id é de outra visita
  function tokenNossoDeOutraVisita(v){ return !!v&&v.slice(0,2)==='::'&&v.slice(14)==='::'&&idNossoDeOutraVisita(v.slice(2,14)); }

  /*
    ── A INTENÇÃO DE CHECKOUT (InitiateCheckout) ─────────────────────────────
    A trava vive AQUI, e os gatilhos junto das PISTAS (a varredura da carga já
    os lê), fora do ouvinte de clique, porque servem a dois caminhos: o clique (no fim do arquivo) e a navegação por JavaScript
    (decorarDestino, logo abaixo). Enquanto estavam dentro do ouvinte, a
    navegação não tinha como contar intenção nenhuma.

    A trava é UMA para os dois. Duas travas separadas contariam duas intenções
    no mesmo clique num link de checkout: uma no clique, outra na navegação que
    esse clique provoca.

    O texto do botão (BTXT) é OPCIONAL: pode estar vazio com o IC ligado, que é
    o padrão da coluna desde 17/09/2026. Por isso nada aqui depende de ele
    existir — quem manda é a opção IC da oferta.
  */
  var _ultimoIC=0;
  function contarIntencao(){
    if(!IC)return;
    var agora=Date.now();
    if(agora-_ultimoIC<=1500)return;
    _ultimoIC=agora;
    if(window.cashflow&&window.cashflow.track)window.cashflow.track('InitiateCheckout');
  }

  function decorarDestino(destino){
    try{
      var u=new URL(destino,location.href);
      // rota do próprio site (troca de tela da SPA) nunca é intenção nem checkout
      if(u.host===location.host)return null;
      /*
        Já decorada, nada a acrescentar: o sck é o id DESTA visita, ou o sck é
        de outra ferramenta e o src já está ocupado. É o que impede o laço — a
        URL que sai de decorarUrl sempre cai num dos dois casos. O id nosso de
        outra visita não conta como decorada: passa por decorarUrl e ganha o
        desta. E é o que impede a SEGUNDA contagem da intenção: a navegação
        que nós mesmos refazemos volta por aqui já decorada e sai antes de
        contar — a trava de 1,5 s não bastaria numa aba oculta, onde o
        setTimeout(0) chega segundos depois (revisão do PR #376).
      */
      var sckDoDestino=u.searchParams.get('sck');
      if(sckDoDestino===sid||(sckDoDestino&&!temFormatoDoId(sckDoDestino)&&u.searchParams.get('src')))return null;
      /*
        A intenção conta pela mesma régua que gera o CheckoutClick — mais o
        gatilho por URL, que alcança o checkout em domínio próprio que o
        caraDeCheckout não reconhece (por isso conta antes da guarda de
        checkout logo abaixo).

        Caso ricos8294 (23/09/2026): a página React manda ao checkout com
        window.location.assign dentro do onClick, sem <a> nenhum. O
        CheckoutClick saía (30 em 7 dias) e o InitiateCheckout não saía nunca —
        o IC só contava pelo TEXTO do botão ou pelo <a> mais próximo.
      */
      var ehCheckout=caraDeCheckout(u);
      if(ehCheckout||_casaUrlGatilho(_base(u.toString())))contarIntencao();
      if(!ehCheckout)return null;
      decorarUrl(u,param('fbclid')||get('_cffbc')||fbclidDoFbc(get('_fbc')));
      enviar([{n:'CheckoutClick',id:eid('CheckoutClick'),u:location.href,d:u.toString()}]);
      return u.toString();
    }catch(e){return null}
  }
  if(window.navigation&&typeof window.navigation.addEventListener==='function'){
    window.navigation.addEventListener('navigate',function(ev){
      try{
        if(!ev.cancelable||ev.hashChange||ev.downloadRequest||ev.navigationType==='traverse')return;
        /*
          Envio de formulário passa direto: cancelar e refazer por location.href
          transforma um POST em GET, e o corpo do formulário se perde.
        */
        if(ev.formData)return;
        var novo=decorarDestino(ev.destination.url);
        if(!novo)return;
        ev.preventDefault();
        setTimeout(function(){location.href=novo;},0);
      }catch(e){}
    });
  }
  var abrirOriginal=window.open;
  if(typeof abrirOriginal==='function'){
    window.open=function(){
      var args=Array.prototype.slice.call(arguments);
      try{var novo=decorarDestino(args[0]);if(novo)args[0]=novo;}catch(e){}
      return abrirOriginal.apply(window,args);
    };
  }

  /* registra no nosso servidor e devolve o event_id; quem fala com a Meta e o track */
  function registrar(name,params){
    var id=eid(name);
    enviar([{n:name,id:id,u:location.href,
      v:params&&params.value,c:params&&params.currency}]);
    return id;
  }
  window.cashflow={
    sid:sid,
    sessao:function(){return sid},
    /* so o nosso funil: NAO dispara o pixel da Meta */
    marcar:registrar,
    track:function(name,params){
      var id=registrar(name,params);
      if(P&&window.fbq)window.fbq('track',name,params||{},{eventID:id});
      return id;
    },
    identify:function(email,phone){
      enviar(null,{em:email,ph:phone});
      /*
        Reinicializar com os dados novos é como a Meta manda atualizar a
        correspondência: por evento ela não os lê. Vão crus — ela normaliza e
        hasheia no navegador, e o valor em claro não sai da página.
      */
      if(P&&window.fbq){
        var am={external_id:sid};
        if(email)am.em=String(email).trim().toLowerCase();
        if(phone)am.ph=String(phone).replace(/\D/g,'');
        window.fbq('init',P,am);
      }
    }
  };

  /*
    Initiate Checkout pela CashFlow (opção por oferta).

    Quando o dono escolhe enviar o IC pela CashFlow (e não pelo checkout dele),
    ele informa o TEXTO do botão de checkout. Aqui o clique no elemento cujo
    texto casa vira InitiateCheckout — que window.cashflow.track já manda pro
    Meta (CAPI) e dispara no pixel do navegador, com o MESMO event_id para a
    Meta deduplicar. É UM caminho OU o outro: por isso não dobra a contagem.

    Comparação tolerante: o texto do elemento clicável (aparado, sem caso, espaços
    colapsados) CONTÉM o texto informado — casa botão com ícone/label aninhado
    ("🛒 Comprar agora") e sobra de espaço. Um trava de
    1,5s evita que um clique-duplo conte duas intenções.

    Dupla oferta (Lucas, 08/09/2026): a mesma página tem dois botões — "QUERO O
    PLANO BÁSICO" e "QUERO O PLANO COMPLETO" —, cada um para o seu checkout, e a
    intenção tem que contar em QUALQUER um deles.

    Gatilhos (Lucas, 10/09/2026): o dono informa TEXTO do botão E/OU a URL de
    compra (uma ou várias), separados por "|". Cada gatilho é classificado:
      - tem barra ou é um host (pay.wiapy.com, .../checkout): casa contra o
        ENDEREÇO do link clicado (substring, sem protocolo) — resolve o checkout
        em domínio próprio que o caraDeCheckout não reconhece;
      - senão: casa contra o TEXTO do elemento clicável, como antes.
    Além dos gatilhos, o clique num LINK DE CHECKOUT genérico (caraDeCheckout)
    conta sempre — quem vai ao pay.hotmart.com declarou a intenção. Um trava de
    1,5s evita que um clique-duplo conte duas intenções.

    Este é o caminho do CLIQUE, e vale com o gatilho VAZIO: o link de checkout
    conta sozinho (ticket #341, 14/10/2026: com o ouvinte preso ao gatilho,
    oferta nova com <a> nascia sem IC). O outro caminho é a NAVEGAÇÃO POR
    JAVASCRIPT, em decorarDestino, com a MESMA trava — e o href que nós
    decoramos sai de lá antes de contar, então o clique conta uma vez só.
  */
  if(IC){
    function _hrefDe(el){
      try{var a=el.closest?el.closest('a[href]'):null; if(!a)return '';
        return _base(a.href||a.getAttribute('href')||'');}catch(e){return '';}
    }
    function _casaUrl(el){
      return _casaUrlGatilho(_hrefDe(el));
    }
    function _linkDeCheckout(el){
      try{
        var a=el.closest?el.closest('a[href]'):null;
        if(!a)return false;
        var u=new URL(a.getAttribute('href'),location.href);
        if(u.origin===location.origin)return false;
        return caraDeCheckout(u);
      }catch(e){return false;}
    }
    document.addEventListener('click',function(ev){
      try{
        var el=ev.target&&ev.target.closest
          ? ev.target.closest('a,button,[role="button"],input[type="submit"],input[type="button"]')
          : ev.target;
        if(!el)return;
        var t=(el.innerText||el.textContent||el.value||'').trim().toLowerCase().replace(/\s+/g,' ');
        var casouTexto=false;
        for(var i=0;i<_textos.length;i++){ if(t&&(t===_textos[i]||t.indexOf(_textos[i])>=0)){casouTexto=true;break;} }
        if(casouTexto||_casaUrl(el)||_linkDeCheckout(el))contarIntencao();
      }catch(e){}
    },true);
  }
})();