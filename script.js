// ================= CATÁLOGO PRINCIPAL (50 CARTAS) =================
const catalogoCartas = [
  { id: 1, nome: "Aprendiz de Fogo", tipo: "Fogo", raridade: "Comum", custo: 1, valor: 5, desc: "Causa 5 de dano direto." },
  { id: 2, nome: "Chama Rápida", tipo: "Fogo", raridade: "Comum", custo: 1, valor: 4, desc: "Ataque veloz de chamas." },
  { id: 3, nome: "Brasa Ancestral", tipo: "Fogo", raridade: "Rara", custo: 2, valor: 10, desc: "Fogo antigo que consome." },
  { id: 4, nome: "Labareda Cego", tipo: "Fogo", raridade: "Comum", custo: 2, valor: 6, desc: "Cega o oponente com fumaça." },
  { id: 5, nome: "Fogo Fátuo", tipo: "Fogo", raridade: "Comum", custo: 1, valor: 5, desc: "Luzes dançantes que queimam." },
  { id: 6, nome: "Magma Fluido", tipo: "Fogo", raridade: "Rara", custo: 3, valor: 15, desc: "Derrete as defesas inimigas." },
  { id: 7, nome: "Explosão Térmica", tipo: "Fogo", raridade: "Épica", custo: 4, valor: 25, desc: "Dano devastador em área." },
  { id: 8, nome: "Meteorito Caído", tipo: "Fogo", raridade: "Lendária", custo: 5, valor: 40, desc: "Poder cósmico em chamas." },
  { id: 9, nome: "Cinzas do Fênix", tipo: "Fogo", raridade: "Épica", custo: 3, valor: 20, desc: "Renascimento ardente." },
  { id: 10, nome: "Erupção Súbita", tipo: "Fogo", raridade: "Rara", custo: 3, valor: 12, desc: "Magma vindo do subsolo." },

  { id: 11, nome: "Sombra Noturna", tipo: "Sombra", raridade: "Comum", custo: 1, valor: 5, desc: "Golpe invisível nas trevas." },
  { id: 12, nome: "Olhar Sombrio", tipo: "Sombra", raridade: "Comum", custo: 1, valor: 4, desc: "Desorienta o alvo." },
  { id: 13, nome: "Lâmina Oculta", tipo: "Sombra", raridade: "Rara", custo: 2, valor: 10, desc: "Ataque rápido pelas costas." },
  { id: 14, nome: "Névoa do Abismo", tipo: "Sombra", raridade: "Comum", custo: 2, valor: 6, desc: "Cobre o campo em escuridão." },
  { id: 15, nome: "Espírito Penumbroso", tipo: "Sombra", raridade: "Comum", custo: 1, valor: 5, desc: "Aparição das profundezas." },
  { id: 16, nome: "Dreno Vital", tipo: "Sombra", raridade: "Rara", custo: 3, valor: 15, desc: "Rouba energia do oponente." },
  { id: 17, nome: "Eclipse Total", tipo: "Sombra", raridade: "Épica", custo: 4, valor: 25, desc: "A escuridão consome tudo." },
  { id: 18, nome: "Senhor da Noite", tipo: "Sombra", raridade: "Lendária", custo: 5, valor: 40, desc: "O soberano das trevas." },
  { id: 19, nome: "Vulto Fantasmagórico", tipo: "Sombra", raridade: "Épica", custo: 3, valor: 20, desc: "Inatingível por um instante." },
  { id: 20, nome: "Corrente Abissal", tipo: "Sombra", raridade: "Rara", custo: 3, valor: 12, desc: "Arrasta o inimigo ao vazio." },

  { id: 21, nome: "Faisca Arcana", tipo: "Arcano", raridade: "Comum", custo: 1, valor: 5, desc: "Energia pura condensada." },
  { id: 22, nome: "Runas Menores", tipo: "Arcano", raridade: "Comum", custo: 1, valor: 4, desc: "Símbolos de poder antigo." },
  { id: 23, nome: "Orbe Místico", tipo: "Arcano", raridade: "Rara", custo: 2, valor: 10, desc: "Focaliza mana pura." },
  { id: 24, nome: "Escudo Etéreo", tipo: "Arcano", raridade: "Comum", custo: 2, valor: 6, desc: "Barreira de pura energia." },
  { id: 25, nome: "Reflexo Prismático", tipo: "Arcano", raridade: "Comum", custo: 1, valor: 5, desc: "Desvia ataques mágicos." },
  { id: 26, nome: "Canalizador Astral", tipo: "Arcano", raridade: "Rara", custo: 3, valor: 15, desc: "Amplifica os feitiços." },
  { id: 27, nome: "Tempestade de Mana", tipo: "Arcano", raridade: "Épica", custo: 4, valor: 25, desc: "Sobrecarga mágica total." },
  { id: 28, nome: "Arquimago Supremo", tipo: "Arcano", raridade: "Lendária", custo: 5, valor: 40, desc: "Mestre de todas as artes." },
  { id: 29, nome: "Portal Dimensional", tipo: "Arcano", raridade: "Épica", custo: 3, valor: 20, desc: "Dobra o espaço ao redor." },
  { id: 30, nome: "Cristal de Ressonância", tipo: "Arcano", raridade: "Rara", custo: 3, valor: 12, desc: "Ecoa energia mágica." },

  { id: 31, nome: "Brisa Cortante", tipo: "Vento", raridade: "Comum", custo: 1, valor: 5, desc: "Rajada rápida de vento." },
  { id: 32, nome: "Passo Leve", tipo: "Vento", raridade: "Comum", custo: 1, valor: 4, desc: "Agilidade impressionante." },
  { id: 33, nome: "Vendaval Uivante", tipo: "Vento", raridade: "Rara", custo: 2, valor: 10, desc: "Ventos que desequilibram." },
  { id: 34, nome: "Ciclone Menor", tipo: "Vento", raridade: "Comum", custo: 2, valor: 6, desc: "Pequeno redemoinho." },
  { id: 35, nome: "Pluma Ancestral", tipo: "Vento", raridade: "Comum", custo: 1, valor: 5, desc: "Leve como o ar." },
  { id: 36, nome: "Tornado Feroz", tipo: "Vento", raridade: "Rara", custo: 3, valor: 15, desc: "Destrói formações inimigas." },
  { id: 37, nome: "Fúria dos Céus", tipo: "Vento", raridade: "Épica", custo: 4, valor: 25, desc: "Tempestade de ventos cortantes." },
  { id: 38, nome: "Senhor dos Ventos", tipo: "Vento", raridade: "Lendária", custo: 5, valor: 40, desc: "Governa as correntes aéreas." },
  { id: 39, nome: "Asa de Tempestade", tipo: "Vento", raridade: "Épica", custo: 3, valor: 20, desc: "Voo supersônico." },
  { id: 40, nome: "Eco Sonoro", tipo: "Vento", raridade: "Rara", custo: 3, valor: 12, desc: "Ondas de choque aéticas." },

  { id: 41, nome: "Seixo Rústico", tipo: "Terra", raridade: "Comum", custo: 1, valor: 5, desc: "Pedra firme e resistente." },
  { id: 42, nome: "Raiz Emaranhada", tipo: "Terra", raridade: "Comum", custo: 1, valor: 4, desc: "Prende os pés do alvo." },
  { id: 43, nome: "Muro de Pedra", tipo: "Terra", raridade: "Rara", custo: 2, valor: 10, desc: "Defesa sólida de rocha." },
  { id: 44, nome: "Espinho Terrestre", tipo: "Terra", raridade: "Comum", custo: 2, valor: 6, desc: "Estacas brotam do chão." },
  { id: 45, nome: "Essência Vegetal", tipo: "Terra", raridade: "Comum", custo: 1, valor: 5, desc: "Cura ferimentos leves." },
  { id: 46, nome: "Terremoto", tipo: "Terra", raridade: "Rara", custo: 3, valor: 15, desc: "Faz o solo tremer." },
  { id: 47, nome: "Titã Rochoso", tipo: "Terra", raridade: "Épica", custo: 4, valor: 25, desc: "Golpe com peso de montanha." },
  { id: 48, nome: "Avatar da Gaia", tipo: "Terra", raridade: "Lendária", custo: 5, valor: 40, desc: "A força primordial do planeta." },
  { id: 49, nome: "Bosque Sagrado", tipo: "Terra", raridade: "Épica", custo: 3, valor: 20, desc: "Santuário de proteção pura." },
  { id: 50, nome: "Minério de Ferro", tipo: "Terra", raridade: "Rara", custo: 3, valor: 12, desc: "Metal bruto e impenetrável." }
];

// ================= CATÁLOGO DE CARTAS SECRETAS DOS CHEFES =================
const catalogoCartasSecretas = [
  { id: 101, nome: "Sopro Atômico do Godzilla", tipo: "Fogo", raridade: "Secreta", custo: 5, valor: 35, desc: "Poder supremo do Titã. Expira em 5 dias." },
  { id: 102, nome: "Núcleo de Titânio Hi-Tech", tipo: "Arcano", raridade: "Secreta", custo: 4, valor: 30, desc: "Escudo cibernético intransponível. Expira em 5 dias." },
  { id: 103, nome: "Olhar Entorpecente do Basilisco", tipo: "Sombra", raridade: "Secreta", custo: 4, valor: 28, desc: "Paralisa e drena o oponente. Expira em 5 dias." },
  { id: 104, nome: "Fenda Quântica Instável", tipo: "Arcano", raridade: "Secreta", custo: 3, valor: 25, desc: "Manipula o espaço-tempo. Expira em 5 dias." },
  { id: 105, nome: "Coração de Magma Ancestral", tipo: "Fogo", raridade: "Secreta", custo: 5, valor: 32, desc: "Força bruta da montanha viva. Expira em 5 dias." },
  { id: 106, nome: "Rugido do Abismo Sombrio", tipo: "Sombra", raridade: "Secreta", custo: 6, valor: 40, desc: "Destruição abissal pura. Expira em 5 dias." }
];

// ================= LISTA DE 30 MISSÕES DIÁRIAS =================
const listaBaseMissoes = [
  { id: 1, titulo: "Extermínio na Brasa", desc: "Vença 3 batalhas no Modo Arena.", tipo: "arena_vitorias", meta: 3, recompensa: 30 },
  { id: 2, titulo: "Desafio do Vértigo", desc: "Chegue até a Onda 5 na Arena.", tipo: "arena_onda", meta: 5, recompensa: 50 },
  { id: 3, titulo: "Mestre dos Conjuradores", desc: "Abra 2 Pacotes na Loja.", tipo: "abrir_pacotes", meta: 2, recompensa: 25 },
  { id: 4, titulo: "Caminho das Sombras", desc: "Vença 5 Duelos de Teste.", tipo: "duelos_vitorias", meta: 5, recompensa: 40 },
  { id: 5, titulo: "Titã Indestrutível", desc: "Vença 2 partidas na Arena.", tipo: "arena_vitorias", meta: 2, recompensa: 35 },
  { id: 6, titulo: "Acumulador de Ouro", desc: "Vença 4 partidas em qualquer modo.", tipo: "vitorias_geral", meta: 4, recompensa: 30 },
  { id: 7, titulo: "Banhado em Luz", desc: "Vença 3 Duelos de Teste.", tipo: "duelos_vitorias", meta: 3, recompensa: 25 },
  { id: 8, titulo: "Sobrevivente do Pêndulo", desc: "Alcance a Onda 3 na Arena.", tipo: "arena_onda", meta: 3, recompensa: 30 },
  { id: 9, titulo: "Investidor Arcano", desc: "Abra 3 Pacotes de Cartas.", tipo: "abrir_pacotes", meta: 3, recompensa: 45 },
  { id: 10, titulo: "Guerreiro Constante", desc: "Vença 6 partidas no total.", tipo: "vitorias_geral", meta: 6, recompensa: 50 },
  { id: 11, titulo: "Ascensão ao Trono", desc: "Alcance a Onda 7 na Arena.", tipo: "arena_onda", meta: 7, recompensa: 80 },
  { id: 12, titulo: "Fúria Elementar", desc: "Vença 4 duelos na Arena.", tipo: "arena_vitorias", meta: 4, recompensa: 40 },
  { id: 13, titulo: "Caçador de Relíquias", desc: "Abra 1 Pacote na Loja.", tipo: "abrir_pacotes", meta: 1, recompensa: 15 },
  { id: 14, titulo: "Desafio Noturno", desc: "Vença 5 partidas na Arena.", tipo: "arena_vitorias", meta: 5, recompensa: 55 },
  { id: 15, titulo: "Guardião do Templo", desc: "Vença 7 Duelos de Teste.", tipo: "duelos_vitorias", meta: 7, recompensa: 60 },
  { id: 16, titulo: "Bravura Extrema", desc: "Alcance a Onda 4 na Arena.", tipo: "arena_onda", meta: 4, recompensa: 40 },
  { id: 17, titulo: "Colecionador Ávido", desc: "Abra 4 Pacotes de Cartas.", tipo: "abrir_pacotes", meta: 4, recompensa: 60 },
  { id: 18, titulo: "Mestre das Cartas", desc: "Vença 8 duelos no total.", tipo: "vitorias_geral", meta: 8, recompensa: 70 },
  { id: 19, titulo: "Conquista do Abismo", desc: "Alcance a Onda 6 na Arena.", tipo: "arena_onda", meta: 6, recompensa: 70 },
  { id: 20, titulo: "Glória Eterna", desc: "Vença 6 batalhas na Arena.", tipo: "arena_vitorias", meta: 6, recompensa: 65 },
  { id: 21, titulo: "Teste de Fogo", desc: "Vença 4 Duelos de Teste.", tipo: "duelos_vitorias", meta: 4, recompensa: 35 },
  { id: 22, titulo: "Resiliência Pura", desc: "Alcance a Onda 8 na Arena.", tipo: "arena_onda", meta: 8, recompensa: 90 },
  { id: 23, titulo: "Sorte dos Mundos", desc: "Abra 5 Pacotes de Cartas.", tipo: "abrir_pacotes", meta: 5, recompensa: 75 },
  { id: 24, titulo: "Poder Ancestral", desc: "Vença 10 partidas no total.", tipo: "vitorias_geral", meta: 10, recompensa: 90 },
  { id: 25, titulo: "Desafio Supremo", desc: "Alcance a Onda 10 na Arena.", tipo: "arena_onda", meta: 10, recompensa: 120 },
  { id: 26, titulo: "Batalha Contínua", desc: "Vença 7 batalhas na Arena.", tipo: "arena_vitorias", meta: 7, recompensa: 75 },
  { id: 27, titulo: "Sábio do Pêndulo", desc: "Vença 6 Duelos de Teste.", tipo: "duelos_vitorias", meta: 6, recompensa: 50 },
  { id: 28, titulo: "Aura Divina", desc: "Alcance a Onda 9 na Arena.", tipo: "arena_onda", meta: 9, recompensa: 100 },
  { id: 29, titulo: "Mercador Arcano", desc: "Abra 6 Pacotes de Cartas.", tipo: "abrir_pacotes", meta: 6, recompensa: 90 },
  { id: 30, titulo: "Lenda do Pêndulo", desc: "Vença 15 partidas no total.", tipo: "vitorias_geral", meta: 15, recompensa: 150 }
];

// ================= LISTA DOS 6 CHEFES DE EVENTO =================
const listaChefesEvento = [
  { idChefe: 1, nome: "Godzilla (Titã Atômico)", cartaId: 101, diaInicio: 1, diaFim: 5, vida: 80 },
  { idChefe: 2, nome: "Mega Robot (Máquina de Guerra)", cartaId: 102, diaInicio: 6, diaFim: 10, vida: 85 },
  { idChefe: 3, nome: "Basilisco (Serpente Petrificante)", cartaId: 103, diaInicio: 11, diaFim: 15, vida: 90 },
  { idChefe: 4, nome: "Dragão Quântico (Aberração)", cartaId: 104, diaInicio: 16, diaFim: 20, vida: 95 },
  { idChefe: 5, nome: "Golem Colossal (Montanha Viva)", cartaId: 105, diaInicio: 21, diaFim: 25, vida: 100 },
  { idChefe: 6, nome: "Leviatã (Terror Abissal)", cartaId: 106, diaInicio: 26, diaFim: 31, vida: 110 }
];

// ================= ESTADO DO JOGADOR & VARIÁVEIS GLOBAIS =================
let ouro = 100;
let pontosAventura = 0;
let nivelManaMax = 3;
let manaAtual = 3;
let manaMaxima = 3;

let vidaJogador = 30;
let vidaInimigo = 30;
let escudoInimigo = 0;

let colecaoJogador = { 1: 2, 2: 2, 11: 2, 21: 2, 31: 2, 41: 2 }; // Deck inicial básico
let deckAtivo = [1, 2, 11, 21, 31, 41];
let maoAtual = [];
let meuTurno = true;
let filtroAtual = 'Todos';

let modoArenaAtivo = false;
let ondaArena = 1;
let manaInfinitaAtiva = false;

// Controle de validade das cartas secretas e missões
let validadeCartasSecretas = {};
let missaoAtualId = null;
let missaoProgresso = 0;
let missaoConcluida = false;
let chefeAtualBatalha = null;

// ================= FUNÇÕES DE SALVAMENTO & CARREGAMENTO =================
function carregarProgresso() {
  const salvoOuro = localStorage.getItem('pendulo_ouro');
  const salvoPontos = localStorage.getItem('pendulo_pontos');
  const salvoMana = localStorage.getItem('pendulo_mana_max');
  const salvoColecao = localStorage.getItem('pendulo_colecao');
  const salvoDeck = localStorage.getItem('pendulo_deck');
  const salvoSecretas = localStorage.getItem('pendulo_validade_secretas');

  if (salvoOuro !== null) ouro = parseInt(salvoOuro);
  if (salvoPontos !== null) pontosAventura = parseInt(salvoPontos);
  if (salvoMana !== null) nivelManaMax = parseInt(salvoMana);
  if (salvoColecao) colecaoJogador = JSON.parse(salvoColecao);
  if (salvoDeck) deckAtivo = JSON.parse(salvoDeck);
  if (salvoSecretas) validadeCartasSecretas = JSON.parse(salvoSecretas);
}
// No seu carregamento ou na função de reset/novo jogador:
if (!localStorage.getItem('pendulo_beta_iniciado')) {
  ouro = 500;             // Ouro suficiente para abrir vários pacotes
  pontosAventura = 50;    // Pontos para testar a Loja do Além na hora
  nivelManaMax = 5;       // Mana alta para testar cartas poderosas logo de cara
  
  // Dá todas as 50 cartas para eles testarem montar qualquer deck livremente
  catalogoCartas.forEach(carta => {
    colecaoJogador[carta.id] = 3; 
  });

  localStorage.setItem('pendulo_beta_iniciado', 'true');
  salvarProgresso();
}

function salvarProgresso() {
  localStorage.setItem('pendulo_ouro', ouro);
  localStorage.setItem('pendulo_pontos', pontosAventura);
  localStorage.setItem('pendulo_mana_max', nivelManaMax);
  localStorage.setItem('pendulo_colecao', JSON.stringify(colecaoJogador));
  localStorage.setItem('pendulo_deck', JSON.stringify(deckAtivo));
  localStorage.setItem('pendulo_validade_secretas', JSON.stringify(validadeCartasSecretas));
  atualizarCabecalhoGeral();
}

function atualizarCabecalhoGeral() {
  const elOuro = document.getElementById('ouro-jogador');
  const elPontos = document.getElementById('qtd-pontos-alem');
  if (elOuro) elOuro.textContent = ouro;
  if (elPontos) elPontos.textContent = pontosAventura;
}

// Limpeza automática de cartas secretas expiradas (após 5 dias)
function limparCartasSecretasExpiradas() {
  const agora = Date.now();
  let houveExpiracao = false;

  for (const [idCartaStr, tempoExpiracao] of Object.entries(validadeCartasSecretas)) {
    const idCarta = parseInt(idCartaStr);
    if (agora > tempoExpiracao) {
      if (colecaoJogador[idCarta]) delete colecaoJogador[idCarta];
      deckAtivo = deckAtivo.filter(id => id !== idCarta);
      delete validadeCartasSecretas[idCartaStr];
      houveExpiracao = true;
    }
  }

  if (houveExpiracao) {
    salvarProgresso();
    console.warn("Uma ou mais cartas secretas expiraram e foram removidas.");
  }
}
limparCartasSecretasExpiradas();

// ================= NAVEGAÇÃO ENTRE TELAS =================
function mudarTela(idTela) {
  const telas = document.querySelectorAll('.tela');
  telas.forEach(t => t.style.display = 'none');

  const alvo = document.getElementById(idTela);
  if (alvo) {
    alvo.style.display = 'block';
  }

  // Atualizações dinâmicas ao abrir abas específicas
  if (idTela === 'tela-colecao') {
    atualizarTelaColecao();
  } else if (idTela === 'tela-loja-alem') {
    atualizarTelaLojaAlem();
  } else if (idTela === 'tela-missoes') {
    atualizarTelaMissoes();
  } else if (idTela === 'tela-chefes') {
    atualizarTelaChefes();
  } else if (idTela === 'tela-catalogo-dono') {
    renderizarCatalogoDono();
  }
  atualizarCabecalhoGeral();
}

// ================= SISTEMA DE DUELO & COMBATE =================
function comprarMaoInicialSegura() {
  maoAtual = [];
  const catalogoGeralUnificado = [...catalogoCartas, ...catalogoCartasSecretas];

  for (let i = 0; i < 4; i++) {
    if (deckAtivo.length === 0) break;
    const indiceAleatorio = Math.floor(Math.random() * deckAtivo.length);
    const idCarta = deckAtivo[indiceAleatorio];
    const cartaEncontrada = catalogoGeralUnificado.find(c => c.id === idCarta);
    if (cartaEncontrada) {
      maoAtual.push({ ...cartaEncontrada, instanciaId: Math.random() });
    }
  }
}

function iniciarDueloTeste() {
  if (deckAtivo.length < 5) {
    alert("Seu baralho precisa de pelo menos 5 cartas para iniciar um duelo!");
    mudarTela('tela-colecao');
    return;
  }

  modoArenaAtivo = false;
  chefeAtualBatalha = null;
  vidaJogador = 30;
  vidaInimigo = 30;
  escudoInimigo = 0;
  manaMaxima = nivelManaMax;
  manaAtual = manaMaxima;
  meuTurno = true;

  document.getElementById('btn-passar-turno').disabled = false;
  document.querySelector('.menu-superior h2').textContent = "⚔️ Duelo de Teste";

  comprarMaoInicialSegura();
  mudarTela('tela-duelo');
  atualizarInterfaceDuelo();
}

function iniciarArena() {
  if (deckAtivo.length < 5) {
    alert("Seu baralho precisa de pelo menos 5 cartas para entrar na Arena!");
    mudarTela('tela-colecao');
    return;
  }

  modoArenaAtivo = true;
  ondaArena = 1;
  chefeAtualBatalha = null;
  iniciarBatalhaAtual();
}

function iniciarBatalhaAtual() {
  vidaJogador = 30;
  vidaInimigo = 20 + (ondaArena * 5);
  escudoInimigo = ondaArena > 3 ? 10 : 0;
  manaMaxima = Math.min(nivelManaMax + Math.floor(ondaArena / 3), 6);
  manaAtual = manaMaxima;
  meuTurno = true;

  document.getElementById('btn-passar-turno').disabled = false;
  document.querySelector('.menu-superior h2').textContent = `🔥 Modo Arena - Onda ${ondaArena}`;

  comprarMaoInicialSegura();
  mudarTela('tela-duelo');
  atualizarInterfaceDuelo();
}

function atualizarInterfaceDuelo() {
  document.getElementById('vida-jogador').textContent = vidaJogador;
  document.getElementById('mana-jogador').textContent = manaAtual;
  document.getElementById('vida-inimigo').textContent = vidaInimigo;
  document.getElementById('escudo-inimigo').textContent = escudoInimigo;

  const containerMao = document.getElementById('mao-cartas');
  if (!containerMao) return;
  containerMao.innerHTML = '';

  maoAtual.forEach((carta, index) => {
    const div = document.createElement('div');
    div.className = `carta rarity-${carta.raridade.toLowerCase()}`;
    div.style.cssText = "background: #22223b; border: 1px solid #4361ee; padding: 10px; border-radius: 6px; width: 130px; text-align: center; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between;";
    div.innerHTML = `
      <div>
        <span style="font-size: 0.7rem; color: #ffd166;">[${carta.tipo}]</span>
        <h4 style="margin: 5px 0; font-size: 0.9rem; color: #fff;">${carta.nome}</h4>
        <p style="font-size: 0.7rem; color: #aaa; margin: 0;">${carta.desc}</p>
      </div>
      <div style="margin-top: 8px; font-size: 0.8rem; color: #48bfe3; font-weight: bold;">⚡ Custo: ${carta.custo}</div>
    `;
    div.onclick = () => jogarCartaDuelo(index);
    containerMao.appendChild(div);
  });
}

function jogarCartaDuelo(indexMao) {
  if (!meuTurno) return;

  const carta = maoAtual[indexMao];
  if (!manaInfinitaAtiva && manaAtual < carta.custo) {
    alert("Mana insuficiente para jogar esta carta!");
    return;
  }

  if (!manaInfinitaAtiva) manaAtual -= carta.custo;
  maoAtual.splice(indexMao, 1);

  // Aplica o dano no inimigo
  let danoReal = carta.valor;
  if (escudoInimigo > 0) {
    if (escudoInimigo >= danoReal) {
      escudoInimigo -= danoReal;
      danoReal = 0;
    } else {
      danoReal -= escudoInimigo;
      escudoInimigo = 0;
    }
  }
  vidaInimigo -= danoReal;

  if (vidaInimigo <= 0) {
    setTimeout(() => {
      // Vitória contra Chefe de Evento
      if (chefeAtualBatalha) {
        const idSecreta = chefeAtualBatalha.cartaId;
        colecaoJogador[idSecreta] = (colecaoJogador[idSecreta] || 0) + 1;
        validadeCartasSecretas[idSecreta] = Date.now() + (5 * 24 * 60 * 60 * 1000);
        salvarProgresso();

        alert(`🏆 VITÓRIA ÉPICA CONTRA O CHEFE!\nVocê conquistou a carta secreta:\n✨ [Secreta] ${catalogoCartasSecretas.find(c => c.id === idSecreta).nome}!\n\n⚠️ Expira em seu inventário em 5 dias!`);
        chefeAtualBatalha = null;
        mudarTela('tela-menu');
        return;
      }

      // Vitória na Arena
      if (modoArenaAtivo) {
        let ouroGanho = 20 + (ondaArena * 10);
        let pontosGanho = 5 * ondaArena;
        ouro += ouroGanho;
        pontosAventura += pontosGanho;

        progredirMissao('arena_vitorias', 1);
        progredirMissao('arena_onda', ondaArena);
        progredirMissao('vitorias_geral', 1);

        alert(`🎉 Vitória na Onda ${ondaArena}!\n🪙 +${ouroGanho} Ouro\n⭐ +${pontosGanho} Pontos de Aventura`);
        salvarProgresso();

        ondaArena++;
        iniciarBatalhaAtual();
      } else {
        // Vitória no Duelo de Teste
        alert("✨ Vitória no Duelo de Teste! Você ganhou 30 de Ouro.");
        ouro += 30;
        progredirMissao('duelos_vitorias', 1);
        progredirMissao('vitorias_geral', 1);
        salvarProgresso();
        mudarTela('tela-menu');
      }
    }, 100);
    return;
  }

  atualizarInterfaceDuelo();
}

function passarTurnoDuelo() {
  meuTurno = false;
  document.getElementById('btn-passar-turno').disabled = true;

  setTimeout(() => {
    // Turno do Inimigo: Causa dano fixo ou progressivo no jogador
    let danoInimigo = chefeAtualBatalha ? 8 : (modoArenaAtivo ? 4 + ondaArena : 5);
    vidaJogador -= danoInimigo;

    if (vidaJogador <= 0) {
      alert("💀 Você foi derrotado em combate...");
      modoArenaAtivo = false;
      chefeAtualBatalha = null;
      mudarTela('tela-menu');
      return;
    }

    meuTurno = true;
    manaAtual = manaMaxima;
    comprarMaoInicialSegura();
    document.getElementById('btn-passar-turno').disabled = false;
    atualizarInterfaceDuelo();
  }, 1000);
}

// ================= GERENCIAMENTO DE BARALHO & COLEÇÃO =================
function criarElementoVisualCarta(cartaBase, qtdDisponivel, aoClicar) {
  const div = document.createElement('div');
  div.className = `carta rarity-${cartaBase.raridade.toLowerCase()}`;
  div.style.cssText = "background: #181822; border: 1px solid #4361ee; padding: 10px; border-radius: 8px; width: 140px; text-align: center; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between;";
  
  let infoExtra = qtdDisponivel !== null ? `<div style="font-size: 0.75rem; color: #ffd166;">Disponível: ${qtdDisponivel}</div>` : '';
  if (cartaBase.raridade === 'Secreta') {
    div.style.borderColor = '#ff0054';
    infoExtra += `<div style="font-size: 0.65rem; color: #ff758f;">✨ Carta Secreta</div>`;
  }

  div.innerHTML = `
    <div>
      <span style="font-size: 0.7rem; color: #a5b4fc;">[${cartaBase.tipo}] (${cartaBase.raridade})</span>
      <h4 style="margin: 5px 0; font-size: 0.9rem; color: #fff;">${cartaBase.nome}</h4>
      <p style="font-size: 0.7rem; color: #aaa; margin: 0;">${cartaBase.desc}</p>
    </div>
    <div style="margin-top: 8px;">
      <div style="font-size: 0.8rem; color: #48bfe3;">⚡ Custo: ${cartaBase.custo}</div>
      ${infoExtra}
    </div>
  `;
  div.onclick = aoClicar;
  return div;
}

function atualizarTelaColecao() {
  const containerColecao = document.getElementById('lista-colecao');
  const containerDeck = document.getElementById('lista-deck');
  if (!containerColecao || !containerDeck) return;

  containerColecao.innerHTML = '';
  containerDeck.innerHTML = '';
  document.getElementById('contador-deck').textContent = deckAtivo.length;

  const catalogoUnificado = [...catalogoCartas, ...catalogoCartasSecretas];

  catalogoUnificado.forEach(cartaBase => {
    if (filtroAtual !== 'Todos' && cartaBase.tipo !== filtroAtual) return;

    let qtdTotal = colecaoJogador[cartaBase.id] || 0;
    let qtdNoDeck = deckAtivo.filter(id => id === cartaBase.id).length;
    let qtdDisponivel = qtdTotal - qtdNoDeck;

    if (qtdTotal > 0) {
      const el = criarElementoVisualCarta(cartaBase, qtdDisponivel, () => {
        if (qtdDisponivel > 0 && deckAtivo.length < 10) {
          deckAtivo.push(cartaBase.id);
          salvarProgresso();
          atualizarTelaColecao();
        } else if (deckAtivo.length >= 10) {
          alert("Seu baralho já atingiu o limite de 10 cartas!");
        }
      });
      containerColecao.appendChild(el);
    }
  });

  deckAtivo.forEach((idCarta, indexDeck) => {
    const cartaBase = catalogoUnificado.find(c => c.id === idCarta);
    if (!cartaBase) return;

    const el = criarElementoVisualCarta(cartaBase, null, () => {
      deckAtivo.splice(indexDeck, 1);
      salvarProgresso();
      atualizarTelaColecao();
    });
    containerDeck.appendChild(el);
  });
}

function filtrarColecao(tipo) {
  filtroAtual = tipo;
  atualizarTelaColecao();
}

// ================= LOJA & PACOTES =================
function comprarPacoteComum() {
  const custo = 50;
  if (ouro < custo) {
    alert("Ouro insuficiente para comprar um pacote!");
    return;
  }

  ouro -= custo;
  const cartaSorteada = catalogoCartas[Math.floor(Math.random() * catalogoCartas.length)];
  colecaoJogador[cartaSorteada.id] = (colecaoJogador[cartaSorteada.id] || 0) + 1;

  progredirMissao('abrir_pacotes', 1);
  salvarProgresso();
  alert(`📦 Pacote aberto com sucesso!\nVocê recebeu: [${cartaSorteada.raridade}] ${cartaSorteada.nome}!`);
}

// ================= LOJA DO ALÉM =================
function atualizarTelaLojaAlem() {
  const manaAtualSpan = document.getElementById('exibir-mana-atual');
  if (manaAtualSpan) manaAtualSpan.textContent = nivelManaMax;
  atualizarCabecalhoGeral();
}

function comprarItemAlem(tipoItem, custoPontos) {
  if (pontosAventura < custoPontos) {
    alert("Pontos de Aventura insuficientes! Jogue o Modo Arena para conseguir mais.");
    return;
  }

  pontosAventura -= custoPontos;

  if (tipoItem === 'pacote_epico') {
    const cartasEspeciais = catalogoCartas.filter(c => c.raridade === 'Épica' || c.raridade === 'Lendária');
    const cartaSorteada = cartasEspeciais[Math.floor(Math.random() * cartasEspeciais.length)];
    
    colecaoJogador[cartaSorteada.id] = (colecaoJogador[cartaSorteada.id] || 0) + 1;
    alert(`🎉 Compra realizada!\nVocê recebeu: [${cartaSorteada.raridade}] ${cartaSorteada.nome}!`);
  
  } else if (tipoItem === 'aumentar_mana') {
    if (nivelManaMax >= 6) {
      alert("Sua Mana já está no nível máximo permitido (6)!");
      pontosAventura += custoPontos;
      return;
    }
    nivelManaMax++;
    alert(`⚡ Sincronização concluída!\nSua Mana Máxima inicial agora é ${nivelManaMax}!`);

  } else if (tipoItem === 'pocao_ouro') {
    ouro += 100;
    alert(`🪙 Transmutação bem-sucedida!\nVocê recebeu +100 de Ouro.`);
  }

  salvarProgresso();
  atualizarTelaLojaAlem();
}

// ================= MISSÕES DIÁRIAS =================
function verificarGerenciarMissaoDiaria() {
  const hoje = new Date().toDateString();
  const dataSalva = localStorage.getItem('pendulo_missao_data');
  
  if (dataSalva !== hoje) {
    const indiceAleatorio = Math.floor(Math.random() * listaBaseMissoes.length);
    missaoAtualId = listaBaseMissoes[indiceAleatorio].id;
    missaoProgresso = 0;
    missaoConcluida = false;
    
    localStorage.setItem('pendulo_missao_data', hoje);
    localStorage.setItem('pendulo_missao_id', missaoAtualId);
    localStorage.setItem('pendulo_missao_progresso', missaoProgresso);
    localStorage.setItem('pendulo_missao_concluida', missaoConcluida);
  } else {
    missaoAtualId = parseInt(localStorage.getItem('pendulo_missao_id') || "1");
    missaoProgresso = parseInt(localStorage.getItem('pendulo_missao_progresso') || "0");
    missaoConcluida = localStorage.getItem('pendulo_missao_concluida') === 'true';
  }
}

function salvarProgressoMissao() {
  localStorage.setItem('pendulo_missao_progresso', missaoProgresso);
  localStorage.setItem('pendulo_missao_concluida', missaoConcluida);
}

function atualizarTelaMissoes() {
  verificarGerenciarMissaoDiaria();
  const missaoObj = listaBaseMissoes.find(m => m.id === missaoAtualId) || listaBaseMissoes[0];

  document.getElementById('titulo-missao').textContent = missaoObj.titulo;
  document.getElementById('desc-missao').textContent = `${missaoObj.desc} (${missaoProgresso}/${missaoObj.meta})`;
  document.getElementById('recompensa-missao').textContent = missaoObj.recompensa;

  const btnResgatar = document.getElementById('btn-resgatar-missao');
  const statusTempo = document.getElementById('status-tempo-missao');

  if (missaoConcluida) {
    btnResgatar.style.display = 'none';
    statusTempo.textContent = "✅ Missão concluída! Nova missão amanhã.";
  } else if (missaoProgresso >= missaoObj.meta) {
    btnResgatar.style.display = 'block';
    statusTempo.textContent = "✨ Meta alcançada! Resgate sua recompensa.";
  } else {
    btnResgatar.style.display = 'none';
    statusTempo.textContent = "⏳ Missão em andamento. Jogue para progredir!";
  }
}

function resgatarMissaoDiaria() {
  const missaoObj = listaBaseMissoes.find(m => m.id === missaoAtualId);
  if (!missaoObj || missaoConcluida) return;

  missaoConcluida = true;
  pontosAventura += missaoObj.recompensa;
  salvarProgressoMissao();
  salvarProgresso();

  alert(`🎉 Parabéns! Você resgatou +${missaoObj.recompensa} Pontos de Aventura.`);
  atualizarTelaMissoes();
}

function progredirMissao(tipoAcao, quantidade = 1) {
  verificarGerenciarMissaoDiaria();
  if (missaoConcluida) return;

  const missaoObj = listaBaseMissoes.find(m => m.id === missaoAtualId);
  if (!missaoObj) return;

  let atendeuCriterio = false;
  if (missaoObj.tipo === tipoAcao) {
    atendeuCriterio = true;
  } else if (missaoObj.tipo === 'vitorias_geral' && (tipoAcao === 'arena_vitorias' || tipoAcao === 'duelos_vitorias')) {
    atendeuCriterio = true;
  }

  if (atendeuCriterio) {
    missaoProgresso += quantidade;
    if (missaoProgresso > missaoObj.meta) missaoProgresso = missaoObj.meta;
    salvarProgressoMissao();
  }
}

// ================= EVENTO DE CHEFES =================
function obterChefeAtivo() {
  const diaAtual = new Date().getDate();
  return listaChefesEvento.find(c => diaAtual >= c.diaInicio && diaAtual <= c.diaFim) || listaChefesEvento[0];
}

function verificarHorarioChefes() {
  const diaAtual = new Date().getDate();
  const estaNoPeriodo = listaChefesEvento.some(c => diaAtual >= c.diaInicio && diaAtual <= c.diaFim);
  const btnMenuChefes = document.getElementById('btn-chefes-evento');
  if (btnMenuChefes) {
    btnMenuChefes.style.display = estaNoPeriodo ? 'block' : 'none';
  }
}
verificarHorarioChefes();

function atualizarTelaChefes() {
  const chefe = obterChefeAtivo();
  const container = document.getElementById('container-chefe-ativo');
  const cartaRecompensa = catalogoCartasSecretas.find(c => c.id === chefe.cartaId);
  if (!container) return;

  container.innerHTML = `
    <div style="background: #181822; border: 2px solid #ff0054; padding: 20px; border-radius: 10px; width: 380px; text-align: center;">
      <h3 style="color: #ff758f; margin-top: 0;">${chefe.nome}</h3>
      <p style="font-size: 0.9rem; color: #ccc;">Derrote o chefe para obter sua carta secreta exclusiva.</p>
      
      <div style="background: #22223b; padding: 10px; border-radius: 6px; margin: 15px 0; text-align: left;">
        <strong style="color: #ffd166; font-size: 0.85rem;">Recompensa Exclusiva:</strong>
        <div style="font-size: 0.8rem; color: #a5b4fc; margin-top: 4px;">✨ [Secreta] ${cartaRecompensa.nome}</div>
        <div style="font-size: 0.7rem; color: #ff758f; margin-top: 2px;">⚠️ Validade de apenas 5 dias no inventário!</div>
      </div>

      <button onclick="iniciarBatalhaChefe(${chefe.idChefe})" style="background-color: #ff0054; width: 100%; font-size: 1rem; padding: 10px;">⚔️ Desafiar Chefe</button>
    </div>
  `;
}

function iniciarBatalhaChefe(idChefe) {
  chefeAtualBatalha = listaChefesEvento.find(c => c.idChefe === idChefe);
  if (!chefeAtualBatalha) return;

  if (!deckAtivo || deckAtivo.length < 5) {
    alert("Seu baralho precisa de pelo menos 5 cartas para enfrentar um Chefe!");
    mudarTela('tela-colecao');
    return;
  }

  vidaJogador = 30;
  vidaInimigo = chefeAtualBatalha.vida;
  escudoInimigo = 15;
  manaMaxima = Math.max(nivelManaMax, 4);
  manaAtual = manaMaxima;
  meuTurno = true;
  modoArenaAtivo = false;

  const btnPassar = document.getElementById('btn-passar-turno');
  if (btnPassar) btnPassar.disabled = false;
  
  const tituloDuelo = document.querySelector('.menu-superior h2');
  if (tituloDuelo) tituloDuelo.textContent = `Batalha de Chefe: ${chefeAtualBatalha.nome}`;

  comprarMaoInicialSegura();
  mudarTela('tela-duelo');
  atualizarInterfaceDuelo();
}

// ================= PAINEL DE TESTES DO DONO =================
function donoDarOuro() {
  ouro += 1000;
  salvarProgresso();
  alert("💰 +1000 de Ouro adicionados!");
}

function donoMaxPontos() {
  pontosAventura += 100;
  salvarProgresso();
  alert("⭐ +100 Pontos de Aventura adicionados!");
}

function donoLiberarTodasCartas() {
  catalogoCartas.forEach(carta => {
    colecaoJogador[carta.id] = 3; // 3 cópias de cada uma das 50 cartas
  });
  salvarProgresso();
  alert("📦 Todas as 50 cartas foram liberadas (3 cópias cada)!");
}

function donoLiberarTodasSecretas() {
  const cincoDiasEmMs = 5 * 24 * 60 * 60 * 1000;
  catalogoCartasSecretas.forEach(carta => {
    colecaoJogador[carta.id] = (colecaoJogador[carta.id] || 0) + 1;
    validadeCartasSecretas[carta.id] = Date.now() + cincoDiasEmMs;
  });
  salvarValidadeSecretas();
  salvarProgresso();
  alert("✨ Todas as 6 Cartas Secretas foram adicionadas com validade de 5 dias!");
}

function donoAlternarManaInfinita() {
  manaInfinitaAtiva = !manaInfinitaAtiva;
  const btn = document.getElementById('btn-mana-infinita');
  if (btn) {
    btn.textContent = manaInfinitaAtiva ? "⚡ Ativar Mana Infinita (LIGADO)" : "⚡ Ativar Mana Infinita (Desligado)";
    btn.style.backgroundColor = manaInfinitaAtiva ? "#38b000" : "#f77f00";
  }
}

function renderizarCatalogoDono() {
  const container = document.getElementById('lista-catalogo-dono');
  if (!container) return;
  container.innerHTML = '';

  catalogoCartas.forEach(carta => {
    const el = criarElementoVisualCarta(carta, null, () => {
      colecaoJogador[carta.id] = (colecaoJogador[carta.id] || 0) + 1;
      salvarProgresso();
      alert(`+1 cópia de "${carta.nome}" adicionada!`);
    });
    container.appendChild(el);
  });

  catalogoCartasSecretas.forEach(carta => {
    const el = criarElementoVisualCarta(carta, null, () => {
      const cincoDiasEmMs = 5 * 24 * 60 * 60 * 1000;
      colecaoJogador[carta.id] = (colecaoJogador[carta.id] || 0) + 1;
      validadeCartasSecretas[carta.id] = Date.now() + cincoDiasEmMs;
      salvarProgresso();
      alert(`+1 cópia da Carta Secreta "${carta.nome}" adicionada! (Validade: 5 dias)`);
    });
    container.appendChild(el);
  });
}

// Interceptador global do mudarTela para atualizar abas automaticamente
const mudarTelaOriginal = window.mudarTela;
window.mudarTela = function(idTela) {
  if (typeof mudarTelaOriginal === 'function') {
    mudarTelaOriginal(idTela);
  }
  
  if (idTela === 'tela-loja-alem') {
    atualizarTelaLojaAlem();
  } else if (idTela === 'tela-missoes') {
    atualizarTelaMissoes();
  } else if (idTela === 'tela-chefes') {
    atualizarTelaChefes();
  } else if (idTela === 'tela-catalogo-dono') {
    renderizarCatalogoDono();
  }
};

// Inicialização ao carregar a página
carregarProgresso();
atualizarCabecalhoGeral();
