// Dados demonstrativos do guia; confirme orientações específicas com o município.
const materiais = [
  {nome:'Papel e papelão',emoji:'📦',tipo:'reciclavel',descricao:'Caixas, jornais e folhas limpas.',orientacao:'Mantenha seco, dobre caixas e encaminhe à coleta seletiva. Papel engordurado geralmente não é reciclável.'},
  {nome:'Plástico',emoji:'🧴',tipo:'reciclavel',descricao:'Garrafas, frascos e embalagens.',orientacao:'Esvazie as embalagens e retire excesso de resíduos. Consulte a coleta local para tipos aceitos.'},
  {nome:'Vidro',emoji:'🍾',tipo:'reciclavel',descricao:'Potes e garrafas de vidro.',orientacao:'Separe dos demais materiais. Embale cacos de modo seguro e identifique-os para evitar acidentes.'},
  {nome:'Metal',emoji:'🥫',tipo:'reciclavel',descricao:'Latas e embalagens metálicas.',orientacao:'Esvazie e encaminhe à coleta seletiva. Tenha cuidado com bordas cortantes.'},
  {nome:'Pilhas e baterias',emoji:'🔋',tipo:'especial',descricao:'Pilhas comuns e baterias portáteis.',orientacao:'Não descarte no lixo comum. Procure pontos de recebimento em lojas ou sistemas de logística reversa.'},
  {nome:'Eletrônicos',emoji:'💻',tipo:'especial',descricao:'Celulares, cabos e pequenos aparelhos.',orientacao:'Procure pontos de coleta de eletroeletrônicos. Apague dados pessoais antes de entregar dispositivos.'},
  {nome:'Óleo de cozinha',emoji:'🫙',tipo:'especial',descricao:'Óleo usado no preparo de alimentos.',orientacao:'Espere esfriar, coloque em recipiente fechado e leve a um ponto de coleta de óleo. Nunca despeje na pia.'},
  {nome:'Medicamentos vencidos',emoji:'💊',tipo:'especial',descricao:'Remédios fora do prazo ou sem uso.',orientacao:'Leve a pontos de recebimento em farmácias participantes. Não descarte no vaso sanitário ou pia.'},
  {nome:'Restos de alimentos',emoji:'🍌',tipo:'organico',descricao:'Cascas, frutas e vegetais.',orientacao:'Quando apropriado, encaminhe para compostagem doméstica ou comunitária. Consulte as regras do serviço local.'}
];
const cards = document.querySelector('#cards');
const busca = document.querySelector('#busca');
const filtros = [...document.querySelectorAll('.filtro')];
let filtroAtual = 'todos';
const nomesTipos = {reciclavel:'Reciclável',especial:'Descarte especial',organico:'Orgânico'};
function mostrarMateriais(){
  const termo = busca.value.trim().toLocaleLowerCase('pt-BR');
  const lista = materiais.filter(m => (filtroAtual === 'todos' || m.tipo === filtroAtual) && `${m.nome} ${m.descricao}`.toLocaleLowerCase('pt-BR').includes(termo));
  cards.replaceChildren();
  lista.forEach(m => {
    const artigo = document.createElement('article'); artigo.className='card';
    const emoji=document.createElement('div');emoji.className='emoji';emoji.textContent=m.emoji;
    const titulo=document.createElement('h3');titulo.textContent=m.nome;
    const tipo=document.createElement('span');tipo.className='tipo';tipo.textContent=nomesTipos[m.tipo];
    const descricao=document.createElement('p');descricao.textContent=m.descricao;
    const orientacao=document.createElement('p');orientacao.className='orientacao';orientacao.textContent=m.orientacao;
    artigo.append(emoji,titulo,tipo,descricao,orientacao);cards.append(artigo);
  });
  document.querySelector('#sem-resultados').hidden = lista.length !== 0;
}
filtros.forEach(botao=>botao.addEventListener('click',()=>{
  filtroAtual=botao.dataset.filter;
  filtros.forEach(b=>{b.classList.toggle('ativo',b===botao);b.setAttribute('aria-pressed',String(b===botao));});
  mostrarMateriais();
}));
busca.addEventListener('input',mostrarMateriais);
mostrarMateriais();

const perguntas=[
  {texto:'Onde devem ser descartadas pilhas usadas?',opcoes:['No lixo comum','Em pontos de coleta específicos','No vaso sanitário'],certa:1,explicacao:'Pilhas exigem descarte especial e podem ser recebidas por sistemas de logística reversa.'},
  {texto:'O que fazer com óleo de cozinha usado?',opcoes:['Despejar na pia','Misturar ao lixo reciclável','Guardar em recipiente fechado e levar à coleta'],certa:2,explicacao:'O óleo usado deve ser encaminhado a um ponto de coleta apropriado.'},
  {texto:'Qual item pode ir para a reciclagem quando aceito pela coleta local?',opcoes:['Caixa de papelão limpa','Medicamento vencido','Pilha danificada'],certa:0,explicacao:'Papelão limpo e seco costuma ser aceito na coleta seletiva.'},
  {texto:'Antes de descartar um celular antigo, é importante:',opcoes:['Jogar no lixo comum','Apagar dados pessoais e procurar coleta eletrônica','Quebrar a tela'],certa:1,explicacao:'O descarte correto de eletrônicos também envolve proteção dos dados pessoais.'},
  {texto:'Cascas de frutas e vegetais podem, em condições adequadas, ser destinadas à:',opcoes:['Compostagem','Coleta de pilhas','Coleta de vidro'],certa:0,explicacao:'A compostagem transforma resíduos orgânicos adequados em composto.'}
];
let atual=0,pontos=0,respondida=false;
const pergunta=document.querySelector('#pergunta'),opcoes=document.querySelector('#opcoes'),feedback=document.querySelector('#feedback'),proxima=document.querySelector('#proxima'),reiniciar=document.querySelector('#reiniciar');
function renderQuiz(){
  respondida=false;feedback.textContent='';proxima.hidden=true;reiniciar.hidden=true;opcoes.replaceChildren();
  document.querySelector('#progresso').textContent=`Pergunta ${atual+1} de ${perguntas.length}`;
  document.querySelector('#placar').textContent=`${pontos} acerto(s)`;
  document.querySelector('#barra-progresso').style.width=`${(atual+1)/perguntas.length*100}%`;
  const p=perguntas[atual];pergunta.textContent=p.texto;
  p.opcoes.forEach((texto,i)=>{const b=document.createElement('button');b.className='opcao';b.textContent=texto;b.addEventListener('click',()=>responder(i));opcoes.append(b);});
}
function responder(indice){
  if(respondida)return;respondida=true;const p=perguntas[atual];if(indice===p.certa)pontos++;
  [...opcoes.children].forEach((b,i)=>{b.disabled=true;if(i===p.certa)b.classList.add('correta');else if(i===indice)b.classList.add('errada');});
  feedback.textContent=`${indice===p.certa?'✅ Correto!':'❌ Não foi dessa vez.'} ${p.explicacao}`;
  document.querySelector('#placar').textContent=`${pontos} acerto(s)`;
  if(atual===perguntas.length-1){pergunta.textContent=`Você concluiu! Resultado: ${pontos} de ${perguntas.length} acertos.`;reiniciar.hidden=false;}else proxima.hidden=false;
}
proxima.addEventListener('click',()=>{atual++;renderQuiz();});
reiniciar.addEventListener('click',()=>{atual=0;pontos=0;renderQuiz();});
renderQuiz();
