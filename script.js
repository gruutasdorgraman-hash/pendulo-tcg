let donoManaInfinitaAtiva = false; // Controle da mana infinita
// ================= SISTEMA DE SALVAMENTO E PERFIL =================
let nomeJogador = "Aventureiro";
let ouro = 50;
let pontosAventura = 0;
let nivelManaMax = 3;

let colecaoJogador = { 1: 3, 2: 2, 4: 2 };
let deckAtivo = [1, 1, 2, 4];

let modoArenaAtivo = false;
let ondaArena = 1;

function salvarProgresso() {
  localStorage.setItem('pendulo_nome', nomeJogador);
  localStorage.setItem('pendulo_ouro', ouro);
  localStorage.setItem('pendulo_pontos', pontosAventura);
  localStorage.setItem('pendulo_mana', nivelManaMax);
  localStorage.setItem('pendulo_colecao', JSON.stringify(colecaoJogador));
  localStorage.setItem('pendulo_deck', JSON.stringify(deckAtivo));
}

function carregarProgresso() {
  const nomeSalvo = localStorage.getItem('pendulo_nome');
  const ouroSalvo = localStorage.getItem('pendulo_ouro');
  const pontosSalvos = localStorage.getItem('pendulo_pontos');
  const manaSalva = localStorage.getItem('pendulo_mana');
  const colecaoSalva = localStorage.getItem('pendulo_colecao');
  const deckSalvo = localStorage.getItem('pendulo_deck');

  if (nomeSalvo !== null) nomeJogador = nomeSalvo;
  if (ouroSalvo !== null) ouro = parseInt(ouroSalvo);
  if (pontosSalvos !== null) pontosAventura = parseInt(pontosSalvos);
  if (manaSalva !== null) nivelManaMax = parseInt(manaSalva);
  if (colecaoSalva !== null) colecaoJogador = JSON.parse(colecaoSalva);
  if (deckSalvo !== null) deckAtivo = JSON.parse(deckSalvo);

  const displayNome = document.getElementById('nome-jogador-display');
  if (displayNome) {
    displayNome.textContent = nomeJogador;
  }
}

function mudarNome() {
  let novoNome = prompt("Digite o seu nome de Mestre do Pêndulo:", nomeJogador);
  if (novoNome && novoNome.trim() !== "") {
    nomeJogador = novoNome.trim();
    document.getElementById('nome-jogador-display').textContent = nomeJogador;
    salvarProgresso();
    alert(`Nome alterado com sucesso para: ${nomeJogador}!`);
  }
}

carregarProgresso();

// ================= CATÁLOGO MESTRE DE 50 CARTAS (PÊNDULO) =================
const catalogoCartas = [
  // --- FOGO (Monstros e Ataques) ---
  { id: 1, nome: "Dracão das Brasa", tipo: "Fogo", raridade: "Comum", custo: 1, valor: 4, desc: "Causa 4 de dano de fogo." },
  { id: 2, nome: "Salamandra de Magma", tipo: "Fogo", raridade: "Comum", custo: 2, valor: 6, desc: "Causa 6 de dano de fogo." },
  { id: 3, nome: "Labareda Selvagem", tipo: "Fogo", raridade: "Rara", custo: 2, valor: 9, desc: "Causa 9 de dano intenso." },
  { id: 4, nome: "Cão do Inferno", tipo: "Fogo", raridade: "Comum", custo: 1, valor: 5, desc: "Investida rápida de calor." },
  { id: 5, nome: "Fênix Cinzenta", tipo: "Fogo", raridade: "Épica", custo: 3, valor: 14, desc: "Chamas sagradas de reerguimento." },
  { id: 6, nome: "Golem Vulcânico", tipo: "Fogo", raridade: "Rara", custo: 3, valor: 12, desc: "Impacto de rocha derretida." },
  { id: 7, nome: "Chama Fátua", tipo: "Fogo", raridade: "Comum", custo: 1, valor: 3, desc: "Queimadura leve no oponente." },
  { id: 8, nome: "Espada Incandescente", tipo: "Fogo", raridade: "Rara", custo: 2, valor: 10, desc: "Lâmina forjada no núcleo." },
  { id: 9, nome: "Chuva de meteoros", tipo: "Fogo", raridade: "Épica", custo: 4, valor: 17, desc: "Destruição em grande escala." },
  { id: 10, nome: "Titã das Cinzas", tipo: "Fogo", raridade: "Lendária", custo: 5, valor: 22, desc: "Poder absoluto das cinzas." }, // LENDÁRIA 1

  // --- SOMBRA (Monstros e Feitiços Sombrios) ---
  { id: 11, nome: "Raposa Lunar", tipo: "Sombra", raridade: "Rara", custo: 2, valor: 7, desc: "Causa 7 de dano místico." },
  { id: 12, nome: "Morcego das Trevas", tipo: "Sombra", raridade: "Comum", custo: 1, valor: 3, desc: "Ataque rápido nas sombras." },
  { id: 13, nome: "Espectro Errante", tipo: "Sombra", raridade: "Comum", custo: 2, valor: 6, desc: "Grita lamentos gélidos." },
  { id: 14, nome: "Assassino Sombrio", tipo: "Sombra", raridade: "Rara", custo: 3, valor: 11, desc: "Golpe fatal nas costas." },
  { id: 15, nome: "Gato do Abismo", tipo: "Sombra", raridade: "Comum", custo: 1, valor: 4, desc: "Arranhão veloz e escuro." },
  { id: 16, nome: "Eclipse Total", tipo: "Sombra", raridade: "Épica", custo: 3, valor: 13, desc: "Oculta a luz do oponente." },
  { id: 17, nome: "Arauto da Noite", tipo: "Sombra", raridade: "Rara", custo: 2, valor: 8, desc: "Traz o breu para o campo." },
  { id: 18, nome: "Foice Espectral", tipo: "Sombra", raridade: "Épica", custo: 4, valor: 16, desc: "Corta a alma do rival." },
  { id: 19, nome: "Pesadelo Encarnado", tipo: "Sombra", raridade: "Rara", custo: 3, valor: 12, desc: "Terror psicológico puro." },
  { id: 20, nome: "Senhor das Trevas Nyx", tipo: "Sombra", raridade: "Lendária", custo: 5, valor: 21, desc: "O soberano do submundo." }, // LENDÁRIA 2

  // --- LUZ (Criaturas Celestiais e Bênçãos) ---
  { id: 21, nome: "Draconete Cronal", tipo: "Luz", raridade: "Comum", custo: 3, valor: 12, desc: "Ataque temporal poderoso." },
  { id: 22, nome: "Anjo Guardião", tipo: "Luz", raridade: "Rara", custo: 2, valor: 9, desc: "Proteção e luz radiante." },
  { id: 23, nome: "Leão Dourado", tipo: "Luz", raridade: "Comum", custo: 2, valor: 7, desc: "Rugido de pura bravura." },
  { id: 24, nome: "Grifo Celestial", tipo: "Luz", raridade: "Rara", custo: 3, valor: 11, desc: "Voo rápido pelos céus." },
  { id: 25, nome: "Unicórnio Prateado", tipo: "Luz", raridade: "Comum", custo: 1, valor: 4, desc: "Pureza em forma de ataque." },
  { id: 26, nome: "Raio Solar", tipo: "Luz", raridade: "Comum", custo: 1, valor: 5, desc: "Feixe concentrado de sol." },
  { id: 27, nome: "Santuário Sagrado", tipo: "Luz", raridade: "Épica", custo: 3, valor: 14, desc: "Bênção protetora imensa." },
  { id: 28, nome: "Valquíria Alada", tipo: "Luz", raridade: "Rara", custo: 3, valor: 12, desc: "Lança celestial certeira." },
  { id: 29, nome: "Arcanjo da Ordem", tipo: "Luz", raridade: "Épica", custo: 4, valor: 18, desc: "Julgamento divino implacável." },
  { id: 30, nome: "Dracão Celestial de Vértigo", tipo: "Luz", raridade: "Lendária", custo: 5, valor: 25, desc: "Poder supremo do Pêndulo." }, // LENDÁRIA 3

  // --- ARCANO (Magias, Feitiços e Mistérios) ---
  { id: 31, nome: "Essência de Pêndulo", tipo: "Arcano", raridade: "Comum", custo: 1, valor: 5, desc: "Restaura 5 de Vida." },
  { id: 32, nome: "Grande Cura Pura", tipo: "Arcano", raridade: "Rara", custo: 2, valor: 11, desc: "Restaura 11 de Vida." },
  { id: 33, nome: "Barreira Dimensional", tipo: "Arcano", raridade: "Épica", custo: 1, valor: 6, desc: "Causa 3 de dano e cura 3." },
  { id: 34, nome: "Orbe Místico", tipo: "Arcano", raridade: "Comum", custo: 1, valor: 4, desc: "Feitiço arcano rápido." },
  { id: 35, nome: "Runas Ancestrais", tipo: "Arcano", raridade: "Rara", custo: 2, valor: 8, desc: "Decifra códigos ocultos." },
  { id: 36, nome: "Teleporte Temporal", tipo: "Arcano", raridade: "Comum", custo: 2, valor: 7, desc: "Manipula o espaço-tempo." },
  { id: 37, nome: "Poção de Sabedoria", tipo: "Arcano", raridade: "Comum", custo: 1, valor: 5, desc: "Revitaliza o conjurador." },
  { id: 38, nome: "Explosão de Mana", tipo: "Arcano", raridade: "Rara", custo: 3, valor: 13, desc: "Liberação de energia bruta." },
  { id: 39, nome: "Ressurreição Arcaica", tipo: "Arcano", raridade: "Épica", custo: 4, valor: 16, desc: "Magia proibida de cura." },
  { id: 40, nome: "Mago Supremo Aethel", tipo: "Arcano", raridade: "Lendária", custo: 5, valor: 20, desc: "Senhor de todas as magias." }, // LENDÁRIA 4

  // --- ITENS E EQUIPAMENTOS ---
  { id: 41, nome: "Adaga de Ferro", tipo: "Fogo", raridade: "Comum", custo: 1, valor: 3, desc: "Item de combate curto." },
  { id: 42, nome: "Escudo de Carvalho", tipo: "Arcano", raridade: "Comum", custo: 1, valor: 4, desc: "Proteção básica de madeira." },
  { id: 43, nome: "Anel de Rubi", tipo: "Fogo", raridade: "Rara", custo: 2, valor: 8, desc: "Acessório infundido em calor." },
  { id: 44, nome: "Cajado de Cristal", tipo: "Arcano", raridade: "Rara", custo: 2, valor: 9, desc: "Focalizador de feitiços." },
  { id: 45, nome: "Armadura de Mithril", tipo: "Luz", raridade: "Épica", custo: 3, valor: 12, desc: "Metal lendário e resistente." },
  { id: 46, nome: "Poção Suprema de Vida", tipo: "Arcano", raridade: "Rara", custo: 2, valor: 12, desc: "Cura profunda instantânea." },
  { id: 47, nome: "Amuleto do Tempo", tipo: "Arcano", raridade: "Épica", custo: 3, valor: 15, desc: "Bússola das dimensões." },
  { id: 48, nome: "Coroa do Equilíbrio", tipo: "Luz", raridade: "Lendária", custo: 4, valor: 18, desc: "Soberania absoluta do Pêndulo." }, // LENDÁRIA 5
  { id: 49, nome: "Espada do Destino", tipo: "Fogo", raridade: "Épica", custo: 4, valor: 17, desc: "Corta o tecido do universo." },
  { id: 50, nome: "Avatar do Caos Eterno", tipo: "Sombra", raridade: "Lendária", custo: 6, valor: 30, desc: "A entidade final do jogo." } // LENDÁRIA 6
];

let vidaJogador = 30;
let vidaInimigo = 30;
let escudoInimigo = 0;
let manaAtual = 3;
let manaMaxima = 3;
let maoAtual = [];
let meuTurno = true;
let filtroAtual = 'Todos';

function mudarTela(idTela) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  document.getElementById(idTela).classList.add('ativa');

  if (idTela === 'tela-colecao') {
    atualizarTelaColecao();
  } else if (idTela === 'tela-loja') {
    document.getElementById('qtd-ouro').textContent = ouro;
    document.getElementById('resultado-pacote').innerHTML = '';
  }
}

// ================= SISTEMA DE COLEÇÃO E DECK =================
function atualizarTelaColecao() {
  const containerColecao = document.getElementById('lista-colecao');
  const containerDeck = document.getElementById('lista-deck');
  containerColecao.innerHTML = '';
  containerDeck.innerHTML = '';

  document.getElementById('contador-deck').textContent = deckAtivo.length;

  catalogoCartas.forEach(cartaBase => {
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
          alert("Seu baralho Pêndulo já atingiu o limite de 10 cartas!");
        }
      });
      containerColecao.appendChild(el);
    }
  });

  deckAtivo.forEach((idCarta, indexDeck) => {
    const cartaBase = catalogoCartas.find(c => c.id === idCarta);
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
  document.querySelectorAll('.filtros button').forEach(b => b.classList.remove('ativo'));
  event.target.classList.add('ativo');
  atualizarTelaColecao();
}

function criarElementoVisualCarta(carta, badgeQtd, callbackClique) {
  const el = document.createElement('div');
  const classeRaridade = `carta-${carta.raridade.toLowerCase()}`;
  el.className = `carta ${classeRaridade}`;
  
  let badgeHTML = badgeQtd !== null ? `<div class="badge-qtd">${badgeQtd}</div>` : '';
  
  el.innerHTML = `
    ${badgeHTML}
    <div class="custo-mana">🧪 ${carta.custo}</div>
    <div class="nome-carta">${carta.nome}</div>
    <div style="font-size: 0.65rem; color: #a5b4fc;">[${carta.tipo}] ${carta.raridade}</div>
    <div class="detalhes-carta">${carta.desc}</div>
  `;

  if (callbackClique) {
    el.addEventListener('click', callbackClique);
  }
  return el;
}

// ================= LOJA DE PACOTES =================
const CHANCES_RARIDADE = { Comum: 60, Rara: 25, Épica: 11, Lendária: 4 };

function sortearRaridade() {
  const rand = Math.random() * 100;
  let acumulador = 0;
  for (const [raridade, chance] of Object.entries(CHANCES_RARIDADE)) {
    acumulador += chance;
    if (rand <= acumulador) return raridade;
  }
  return "Comum";
}

function abrirPacote() {
    progredirMissao('abrir_pacotes', 1);
  if (ouro < 20) {
    alert("Ouro insuficiente! Vença duelos ou a Arena para ganhar mais.");
    return;
  }

  ouro -= 20;
  document.getElementById('qtd-ouro').textContent = ouro;

  const containerResult = document.getElementById('resultado-pacote');
  containerResult.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    const raridadeSorteada = sortearRaridade();
    const cartasDisponiveis = catalogoCartas.filter(c => c.raridade === raridadeSorteada);
    const cartaSorteada = cartasDisponiveis[Math.floor(Math.random() * cartasDisponiveis.length)] || catalogoCartas[0];
    
    colecaoJogador[cartaSorteada.id] = (colecaoJogador[cartaSorteada.id] || 0) + 1;

    const el = criarElementoVisualCarta(cartaSorteada, null, null);
    containerResult.appendChild(el);
  }

  salvarProgresso();
}

// ================= SISTEMA DE DUELO E MODO ARENA =================
function iniciarArena() {
  if (deckAtivo.length < 5) {
    alert("Seu baralho precisa de pelo menos 5 cartas para entrar na Arena!");
    mudarTela('tela-colecao');
    return;
  }

  modoArenaAtivo = true;
  ondaArena = 1;
  iniciarBatalhaAtual();
}

function iniciarBatalhaAtual() {
  vidaJogador = 30;
  vidaInimigo = 25 + (ondaArena * 5);
  escudoInimigo = 0;
  manaMaxima = nivelManaMax;
  manaAtual = manaMaxima;
  meuTurno = true;
  
  document.getElementById('btn-passar-turno').disabled = false;
  document.querySelector('.menu-superior h2').textContent = `Modo Arena - Onda ${ondaArena}`;
  
  comprarMaoInicial();
  mudarTela('tela-duelo');
  atualizarInterfaceDuelo();
}

function iniciarDuelo() {
  modoArenaAtivo = false;
  document.querySelector('.menu-superior h2').textContent = "Duelo de Teste";
  
  if (deckAtivo.length < 5) {
    alert("Seu baralho precisa de pelo menos 5 cartas para duelar!");
    mudarTela('tela-colecao');
    return;
  }

  vidaJogador = 30;
  vidaInimigo = 30;
  escudoInimigo = 0;
  manaMaxima = nivelManaMax;
  manaAtual = manaMaxima;
  meuTurno = true;
  document.getElementById('btn-passar-turno').disabled = false;

  comprarMaoInicial();
  mudarTela('tela-duelo');
  atualizarInterfaceDuelo();
}

function comprarMaoInicial() {
  maoAtual = [];
  for (let i = 0; i < 4; i++) {
    let idAleatorio = deckAtivo[Math.floor(Math.random() * deckAtivo.length)];
    let cartaBase = catalogoCartas.find(c => c.id === idAleatorio);
    maoAtual.push({ ...cartaBase, chaveUnica: Math.random() });
  }
}

function atualizarInterfaceDuelo() {
  document.getElementById('sua-vida').textContent = vidaJogador;
  document.getElementById('vida-inimigo').textContent = vidaInimigo;
  document.getElementById('escudo-inimigo').textContent = escudoInimigo;
  document.getElementById('mana-jogador').textContent = manaAtual;
  document.getElementById('mana-maxima').textContent = manaMaxima;

  const containerMao = document.getElementById('mao-duelo');
  containerMao.innerHTML = '';

  maoAtual.forEach((carta, index) => {
    const el = criarElementoVisualCarta(carta, null, () => jogarCartaDuelo(index));
    containerMao.appendChild(el);
  });
}

function jogarCartaDuelo(index) {
  if (!meuTurno) return;

  const carta = maoAtual[index];
  
  // Se a mana infinita do dono NÃO estiver ativa, verifica a mana normalmente
  if (!donoManaInfinitaAtiva) {
    if (manaAtual < carta.custo) {
      alert("Mana insuficiente!");
      return;
    }
    manaAtual -= carta.custo; // Só desconta se o cheat estiver desligado
  } else {
    // Se estiver ativa, dá um feedback visual sutil ou apenas ignora o custo
    console.log("Mana infinita usada para jogar: " + carta.nome);
  }

  // O restante da lógica da carta continua igual...
  if (carta.tipo === 'Fogo' || carta.tipo === 'Sombra' || carta.tipo === 'Luz') {
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
    vidaInimigo = Math.max(0, vidaInimigo - danoReal);
  } else if (carta.tipo === 'Arcano') {
    if (carta.id === 31 || carta.id === 32 || carta.id === 37 || carta.id === 46) {
      vidaJogador = Math.min(30, vidaJogador + carta.valor);
    } else {
      vidaInimigo = Math.max(0, vidaInimigo - Math.floor(carta.valor / 2));
      vidaJogador = Math.min(30, vidaJogador + Math.floor(carta.valor / 2));
    }
  }

  maoAtual.splice(index, 1);
  atualizarInterfaceDuelo();

 if (vidaInimigo <= 0) {
  setTimeout(() => {
    if (modoArenaAtivo) {
      let ouroGanho = 20 + (ondaArena * 10);
      let pontosGanho = 5 * ondaArena;
      ouro += ouroGanho;
      pontosAventura += pontosGanho;

      // Atualiza a missão diária
      progredirMissao('arena_vitorias', 1);
      progredirMissao('arena_onda', ondaArena);

      alert(`🎉 Vitória na Onda ${ondaArena}!\nRecompensas:\n🪙 +${ouroGanho} Ouro\n⭐ +${pontosGanho} Pontos de Aventura`);
      salvarProgresso();

      ondaArena++;
      iniciarBatalhaAtual();
    } else {
      alert("✨ Vitória no Duelo de Teste! Você ganhou 30 de Ouro.");
      ouro += 30;
      progredirMissao('duelos_vitorias', 1);
      salvarProgresso();
      maoAtual = [];
      meuTurno = true;
      mudarTela('tela-menu');
    }
  }, 100);
}
}

function passarTurno() {
  if (!meuTurno) return;
  meuTurno = false;
  document.getElementById('btn-passar-turno').disabled = true;

  setTimeout(() => {
    let acaoInimigo = Math.random();
    if (acaoInimigo < 0.6) {
      let bonusDano = modoArenaAtivo ? Math.floor(ondaArena / 2) : 0;
      let dano = Math.floor(Math.random() * 5) + 4 + bonusDano;
      vidaJogador = Math.max(0, vidaJogador - dano);
      alert(`O oponente atacou e causou ${dano} de dano!`);
    } else {
      escudoInimigo += 5;
      alert(`O oponente ativou uma barreira e ganhou 5 de escudo!`);
    }

    atualizarInterfaceDuelo();

    if (vidaJogador <= 0) {
      setTimeout(() => {
        if (modoArenaAtivo) {
          alert(`💀 Derrota na Onda ${ondaArena}!\nSua runa na Arena chegou ao fim. Tente novamente mais forte!`);
          modoArenaAtivo = false;
        } else {
          alert("💀 Você foi derrotado no Duelo de Teste!");
        }
        mudarTela('tela-menu');
      }, 100);
      return;
    }

    if (manaMaxima < 6) manaMaxima++;
    manaAtual = manaMaxima;

    for (let i = 0; i < 2; i++) {
      let idAleatorio = deckAtivo[Math.floor(Math.random() * deckAtivo.length)];
      let cartaBase = catalogoCartas.find(c => c.id === idAleatorio);
      maoAtual.push({ ...cartaBase, chaveUnica: Math.random() });
    }

    meuTurno = true;
    document.getElementById('btn-passar-turno').disabled = false;
    atualizarInterfaceDuelo();
  }, 1000);
}
// ================= PAINEL DE TESTES / DONO =================
function tentarAbrirPainelDono() {
  let codigoDigitado = prompt("Digite o código de acesso de Dono:");
  
  if (codigoDigitado === null) return; // Se cancelar
  
  // Verifica se o código está correto (maiúsculas/minúsculas exatas)
  if (codigoDigitado.trim() === "VIOLETA") {
    alert("Acesso concedido! Bem-vindo ao painel de testes.");
    mudarTela('tela-dono');
  } else {
    alert("Código incorreto! Acesso negado.");
  }
}

function donoDarOuro() {
  ouro += 1000;
  salvarProgresso();
  alert("sucesso! +1000 de Ouro adicionados.");
}

function donoLiberarTodasCartas() {
  // Percorre do ID 1 até o 50 e garante que o jogador tenha pelo menos 3 cópias de cada
  for (let i = 1; i <= 50; i++) {
    colecaoJogador[i] = 3;
  }
  salvarProgresso();
  alert("sucesso! Todas as 50 cartas foram liberadas na sua coleção com 3 cópias cada.");
}

function donoMaxPontos() {
  pontosAventura += 100;
  salvarProgresso();
  alert("sucesso! +100 Pontos de Aventura adicionados.");
}
function donoAlternarManaInfinita() {
  donoManaInfinitaAtiva = !donoManaInfinitaAtiva;
  const botao = document.getElementById('btn-mana-infinita');
  
  if (donoManaInfinitaAtiva) {
    botao.style.backgroundColor = "#e63946";
    botao.textContent = "⚡ Ativar Mana Infinita (LIGADO)";
    alert("Cheat ativado: Agora sua mana é infinita nos duelos!");
  } else {
    botao.style.backgroundColor = "#f77f00";
    botao.textContent = "⚡ Ativar Mana Infinita (Desligado)";
    alert("Cheat desativado: O consumo de mana voltou ao normal.");
  }
}
// ================= CONTROLE DE HORÁRIO DA LOJA DO ALÉM =================
function verificarHorarioLojaAlem() {
  const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes();
  const tempoAtualEmMinutos = (hora * 60) + minutos;

  // Horários convertidos em minutos do dia:
  // 12:00 até 13:30 (720 min até 810 min)
  // 18:00 até 19:30 (1080 min até 1170 min)
  const manhaAberto = tempoAtualEmMinutos >= 720 && tempoAtualEmMinutos <= 810;
  const noiteAberto = tempoAtualEmMinutos >= 1080 && tempoAtualEmMinutos <= 1170;

  const botaoMenuAlem = document.getElementById('btn-loja-alem');
  if (botaoMenuAlem) {
    if (manhaAberto || noiteAberto) {
      botaoMenuAlem.style.display = 'block'; // Mostra se estiver no horário
    } else {
      botaoMenuAlem.style.display = 'none';  // Some do menu se estiver fechada
    }
  }
}

// Verifica o horário assim que o jogo abre e checa a cada 30 segundos
verificarHorarioLojaAlem();
setInterval(verificarHorarioLojaAlem, 30000);
// ================= LOJA DO ALÉM (TEMPORÁRIA) =================
function atualizarTelaLojaAlem() {
  document.getElementById('qtd-pontos-alem').textContent = pontosAventura;
  document.getElementById('exibir-mana-atual').textContent = nivelManaMax;
}

// Sobrescreve o mudarTela para atualizar os pontos ao abrir a Loja do Além
const mudarTelaAntiga = mudarTela;
window.mudarTela = function(idTela) {
  mudarTelaAntiga(idTela);
  if (idTela === 'tela-loja-alem') {
    atualizarTelaLojaAlem();
  }
};

function comprarItemAlem(tipoItem, custoPontos) {
  if (pontosAventura < custoPontos) {
    alert("Pontos de Aventura insuficientes! Jogue o Modo Arena para conseguir mais.");
    return;
  }

  pontosAventura -= custoPontos;

  if (tipoItem === 'pacote_epico') {
    const cartasEspeciais = catalogoCartas.filter(c => c.raridade === 'Épica' || c.raridade === 'Lendária');
    const cartaSorteada = cartasEspeciais[Math.floor(Math.random() * cartasEspeciais.length)];
    
    colecaoJogador[cartaSorteada.id] = (colecaoJogador[cartaSortada.id] || 0) + 1;
    alert(`🎉 Compra realizada com sucesso!\nVocê recebeu a carta: [${cartaSorteada.raridade}] ${cartaSorteada.nome}!`);
  
  } else if (tipoItem === 'aumentar_mana') {
    if (nivelManaMax >= 6) {
      alert("Sua Mana já está no nível máximo permitido (6)!");
      pontosAventura += custoPontos; // Devolve os pontos
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
// ================= SISTEMA DE 30 MISSÕES DIÁRIAS =================
const listaBaseMissoes = [
  { id: 1, titulo: "Extermínio na Brasa", desc: "Vença 3 batalhas no Modo Arena.", tipo: "arena_vitorias", meta: 3, recompensa: 30 },
  { id: 2, titulo: "Desafio do Vértigo", desc: "Chegue até a Onda 5 na Arena.", tipo: "arena_onda", meta: 5, recompensa: 50 },
  { id: 3, titulo: "Mestre dos Conjuradores", desc: "Abra 2 Pacotes na Loja.", tipo: "abrir_pacotes", meta: 2, recompensa: 25 },
  { id: 4, titulo: "Caminho das Sombras", desc: "Vença 5 Duelos de Teste.", tipo: "duelos_vitorias", meta: 5, recompensa: 40 },
  { id: 5, titulo: "Titã Indestrutível", desc: "Vença uma partida na Arena sem perder vida (ou vença 2 ondas seguidas).", tipo: "arena_vitorias", meta: 2, recompensa: 35 },
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
  { id: 30, titulo: "Lenda do Pêndulo", desc: "Vença 15 partidas no total em qualquer modo.", tipo: "vitorias_geral", meta: 15, recompensa: 150 }
];

// Variáveis de progresso da missão diária
let missaoAtualId = null;
let missaoProgresso = 0;
let missaoConcluida = false;
let ultimaDataMissao = "";

// Função para sortear ou carregar a missão do dia baseada na data atual
function verificarGerenciarMissaoDiaria() {
  const hoje = new Date().toDateString(); // Ex: "Thu Nov 05 2026"
  const dataSalva = localStorage.getItem('pendulo_missao_data');
  
  if (dataSalva !== hoje) {
    // Passou 24h ou é o primeiro acesso: Sorteia uma nova missão aleatória das 30!
    const indiceAleatorio = Math.floor(Math.random() * listaBaseMissoes.length);
    missaoAtualId = listaBaseMissoes[indiceAleatorio].id;
    missaoProgresso = 0;
    missaoConcluida = false;
    
    localStorage.setItem('pendulo_missao_data', hoje);
    localStorage.setItem('pendulo_missao_id', missaoAtualId);
    localStorage.setItem('pendulo_missao_progresso', missaoProgresso);
    localStorage.setItem('pendulo_missao_concluida', missaoConcluida);
  } else {
    // Carrega a missão salva do dia atual
    missaoAtualId = parseInt(localStorage.getItem('pendulo_missao_id') || "1");
    missaoProgresso = parseInt(localStorage.getItem('pendulo_missao_progresso') || "0");
    missaoConcluida = localStorage.getItem('pendulo_missao_concluida') === 'true';
  }
}

function salvarProgressoMissao() {
  localStorage.setItem('pendulo_missao_progresso', missaoProgresso);
  localStorage.setItem('pendulo_missao_concluida', missaoConcluida);
}

// Atualiza a interface da tela de missões
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
    statusTempo.textContent = "✅ Missão concluída! Uma nova missão estará disponível amanhã.";
  } else if (missaoProgresso >= missaoObj.meta) {
    btnResgatar.style.display = 'block';
    statusTempo.textContent = "✨ Meta alcançada! Resgate sua recompensa.";
  } else {
    btnResgatar.style.display = 'none';
    statusTempo.textContent = "⏳ Missão em andamento. Jogue para progredir!";
  }
}

// Função chamada quando o jogador resgata a recompensa
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

// Função para registrar o progresso de acordo com a ação do jogador
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

// Sobrescreve o mudarTela para atualizar as missões ao abrir a aba
const mudarTelaComMissoes = window.mudarTela;
window.mudarTela = function(idTela) {
  mudarTelaComMissoes(idTela);
  if (idTela === 'tela-missoes') {
    atualizarTelaMissoes();
  }
};