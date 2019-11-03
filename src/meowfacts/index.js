const fullList = [
    'Todos os anos, cerca de quatro milhões de gatos são comidos na Ásia.',
    'Em média, os gatos passam 2/3 do seu dia dormindo. Isto significa que um gato com nove anos esteve acordado apenas três anos da sua vida.',
    'Diferente dos cães, gatos não gostam de doces. Cientistas acreditam que isso se deve a uma mutação em algum receptor-chave do paladar.',
    'Quando o gato caça a sua presa, ele mantém sua cabeça nivelada. Cães e humanos levantam e baixam a cabeça.',
    'As gatas tendem a ser destras enquanto os gatos são, mais frequentemente, canhotos. É interessante, pois enquanto 90% dos humano são destros, os restantes 10% dos canhotos tambem tendem a ser do gênero masculino.',
    'Um gato não pode descer de uma árvore de cabeça pra baixo porque todas as suas garras são de "mão única", ou seja,  foram feitas para ele se firmar nas superfícies para subir, mas não para descer. Os gatos só conseguem descer de árvores ficando de frente para elas',
    'Gatos produzem cerca de 100 sons diferentes. Cães fazem apenas 10.',
    'O cérebro de um gato é biologicamente mais semelhante ao cérebro humano do que o do cão. Ambos possuem idênticas regiões no cérebro responsáveis pelas emoções.',
    'Existem mais de 500 milhões de gatos domésticos no mundo, com aproximadamente 40 raças reconhecidas.',
    'Durante a época da Inquisição Espanhola, o papa Inocêncio VIII condenou os gatos como sendo seres malignos e milhares deles foram queimados. Infelizmente, a matança generalizada de gatos levou a uma explosão da população de ratos, que agravou os efeitos da Peste Negra.',
    'Durante a Idade Média, os gatos eram associados à pratica de feitiçaria, e, na noite de São João, em toda a Europa, muita gente enfiava uma porção de gatos em sacos e os atiravam às fogueiras. Em dias santos, as pessoas celebravam jogando gatos do alto das torres das igrejas.',
    'Os gatos são os animais de estimação mais populares na América do Norte: existem 73 milhões de gatos e 63 milhões de cachorros. Por volta de 30% dos lares norte-americanos têm um gato',
    'De acordo com uma lenda judaica, Noé rezou a Deus, pedindo proteção para que os alimentos que ele tinha armazenado na arca não fossem comidos pelos ratos. Como resposta, Deus fez o leão espirrar, e daí, surgiu o gato.',
    'A audição do gato é melhor do que a do cão. E o gato pode ouvir sons de alta frequência até duas oitavas mais altas do que o ouvido humano.',
    'Um gato pode andar à velocidade máxima de 49km/hora em uma distância curta.',
    'Um gato pode pular até cinco vezes a sua própria altura em um salto só.',
    'Alguns gatos sobrevivem a quedas de alturas de até 20 metros devido, principalmente, ao seu "reflexo corretivo". Os olhos e os órgãos do equilíbrio no ouvido interno informam quando o gato está no ar, de forma que ele possa cair sobre suas patas. Mesmo gatos sem cauda possuem esta habilidade.',
    'O gato se esfrega nas pessoas não apenas para demonstrar afeição, mas também para demarcar seu território com as glândulas de feromônios que ele possui  em volta de sua cara, cauda e patas. Assim, ele sabe que você é "propriedade dele".',
    'Os pesquisadores não têm certeza de como os gatos ronronam. A maioria dos veterinários acredita que os gatos ronronam fazendo suas pregas vocais vibrarem na garganta. Para tanto, um músculo na laringe abre e fecha a passagem de ar cerca de 25 vezes por segundo.',
    'No Antigo Egito, quando morria um gato de estimação, os membros da família demonstravam seu luto raspando as sobrancelhas. Eles também realizavam elaborados funerais durante os quais bebiam vinho e batiam no peito. O gato era embalsamado e recebia uma máscara mortuária esculpida em madeira. A pequena múmia era colocada no mausoléu da família ou em um cemitério de animais, junto com pequenas múmias de camundongos.',
    'A maioria das gatas dá à luz uma ninhada entre um e nove gatos. A maior ninhada já registrada foi de 19 gatinhos, dos quais 15 sobreviveram.',
    'O maior gato selvagem da atualidade é o Tigre Siberiano. Ele pode medir mais de 3.6m de comprimento (o tamanho de um carro pequeno) e pesar até 317kg.',
    'O menor dos gatos selvagens é o Gato de Pés Pretos, originário da África. As fêmeas têm menos de 50cm de comprimento e podem pesar apenas 1.2kg.',
    'Muitos egípcios veneravam a deusa Bastet, que possuía corpo de mulher e cabeça de gato.',
    'O Profeta Maomé amava gatos e, dizem, seu gato favorito, Muezza, era um de pelo brasino. Reza a lenda que os gatos brasinos têm um "M" de Mohamed nas suas cabeças por ser ali que o Profeta, muitas vezes, descansava a sua mão.',
    'Enquanto em muitas regiões da Europa e América do Norte gatos pretos são considerados sinal de azar, na Grã-Bretanha e Austrália, eles são considerados talismãs de boa sorte.',
    'Alguns gatos siameses parecem estrábicos porque os nervos do lado esquerdo do cérebro vão, em sua maioria, para o olho direito, e os nervos do lado direito do cérebro vão mais para o lado esquerdo. Isso provoca visão dupla, que o gato corrige "cruzando" os olhos.',
    'Gatos detestam água porque seu pelo não isola bem quando está molhado. O gato Van da Turquia, entretanto, é uma espécie que gosta de nadar. Originário da Ásia central, sua pelagem possui uma textura especial que a torna resistente à água.',
    'O gato Mau do Egito é, provavelmente, a raça mais antiga de gatos. Na verdade, é tão antiga, que o nome da raça é a palavra egipcia para "gato".',
    'O gato mais caro do mundo chama-se Little Nicky, que custou 50 mil Dólares ao seu dono. Ele é um clone de um outro gato.',
    'Um gato possui cerca de 12 fios de bigode de cada lado da cara.',
    'A visão dos gatos é melhor e pior do que a dos humanos. É melhor porque eles podem ver com pouquíssima luz e têm visão periférica maior. É pior porque eles não veem cores tão bem como os humanos. Cientitas acreditam que a grama tem a cor vermelha para os gatos',
    'Na versão original italiana de Cinderela, a fada-madrinha tinha a forma de uma gata.',
    'Os pequenos tufos de pelo nas orelhas dos gatos ajudam a protegê-las das sujeiras e de sons diretos, isolando-as.',
    'A habilidade dos gatos para encontrarem seu caminho para casa é chamada de "viagem-psi". Especialistas acreditam que os gatos os gatos utilizam os ângulos da luz solar para encontrar seu caminho ou que eles possuem células magnetizadas no seu cérebro, que agem como bússolas.',
    'Isaac Newton inventou a porta para gatos. O cientista estava fazendo experiências em um quarto escuro. Spithead, um dos seus gatos, ficava abrindo a porta e perturbando o procedimento. A porta para gatos deixou Newton e Spithead satisfeitos.',
    'O café mais raro e caro do mundo é o Kopi Luwak, que vem da Indonésia, onde gatos selvagens chamados "luwak" vivem. O gatos  comem os frutos do café e os grãos da planta passam pelo seu sistema digestivo. Os grãos são retirados das fezes dos gatos, limpos e torrados. Um saco de 450g de Kopi Luwak é vendido a 500 Dólares.',
    'A mandíbula dos gatos não se move para os lados. Portanto, eles não podem mastigar grandes porções de comida.',
    'Um gato quase nunca mia para outro gato, e sim, para humanos. O comportamento dos gatos, entre eles, é de cuspir, ronronar e de fazer "pfffffff..." um para o outro.',
    'As costas dos gatos são extremamente flexíveis porque possuem 53 vértebras que se encaixam. Humanos têm apenas 34.',
    'Aproximadamente 1/3 dos donos de gatos pensam que os felinos podem ler seus pensamentos.',
    'Dois membros da família dos gatos são bem distintos dos outros: o leopardo nublado e o guepardo. O leopardo nublado não urra como os outros grandes gatos, nem se lava ou repousa como os gatos menores. O guepardo é único porque é um gato corredor, enquanto os outros são gatos que pulam sobre suas presas.',
    'No Japão, acredita-se que os gatos têm o poder de tornar-se espíritos superiores quando morrem. Talvez seja assim porque, conforme o Budismo, o corpo do gato é o lugar de repouso temporário de pessoas muito espiritualizadas.',
    'A maioria dos gatos tinha pelagem curta até cerca de 100 anos atrás, quando ter gatos tornou-se "tendência", bem como as experiências com cruzamentos de raças.',
    'Gatos possuem 32 músculos que controlam o ouvido externo (humanos têm apenas 6). Um gato pode girar suas orelhas, de forma independente, num angulo de 180 graus.',
    'Uma das razões por que gatinhos dormem tanto é porque o hormônio de crescimento é liberado apenas durante o sono.',
    'O gato mais velho já registrado chama-se Crème Puff, de Austin, texas, EUA, que viveu de 1967 a 06 de Agosto de 2005, três dias depois do seu 38o. aniversário. Um gato normalmente vive até 20 anos, que são equivalentes a 96 anos dos humanos.',
    'Os  gatos têm 230 ossos no seu corpo. Os humanos têm 206. Os gatos não têm clavícula, portanto, eles entram em qualquer lugar por onde passe sua cabeça',
    'O focinho de um gato possui um padrão único, assim como a impressão digital de um humano.',
    'Se tiverem bastante água disponível, gatos podem suportar temperaturas até 56 graus centígrados;',
    'Entre os alimentos que não devem ser dados aos gatos estão: cebola, alho, tomate, batata crua, chocolate, uvas e passas de uva. Embora leite não seja  tóxico, pode causar problemas digestivos e gases. Tylenol e aspirina são extremamente tóxicos para gatos, bem como muitas plantas decorativas. Alimentar gatos com comida para cães ou atum enlatado para consumo humano pode causar desnutrição.',
    'Uma pesquisa de 2007 feita pelo Instituto Gallup indicou que tanto homens quanto mulheres gostam de gatos.',
    'As batidas do coração de um gato são quase duas vezes mais rápidas do que as do coração humano, entre 110 e 140 batidas por minuto.',
    'Gatos não possuem glândulas sudoríparas em seu corpo. Eles transpiram somente através de suas patas.',
    'Os gatos passam quase 1/3 dos momentos em que estão acordados se limpando e se arrumando.',
    'Gatos são extremamente sensíveis a vibrações. Há registros de gatos que detectaram tremores de terra 10 ou 15 minutos antes dos humanos.',
    'Ao contrário dos cães, gatos não sofreram grandes modificações durante seu processo de domesticação.',
    'Em inglês, os nomes "Queen" ou "Molly" são os mais comuns para gatas.',
    'Existem cerca de 60 milhões de gatos selvagens apenas nos Estados Unidos.',
    'As garras das patas traseiras dos gatos não são afiadas como as dianteiras porque elas não se retraem e, consequentemente, sofrem desgaste.',
];

function getFullList() {
    return fullList;
}

function getSingle(index) {
    return fullList[index];
}

function getRandom() {
    return fullList[Math.floor(Math.random() * fullList.length)];
}

module.exports = { getFullList, getSingle, getRandom };
