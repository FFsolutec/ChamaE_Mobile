// src/data/servicos.js

export const servicosDisponiveis = [
  {
    id: 1,
    titulo: "Instalação de Tomadas",
    descricao:
      "Preciso instalar 5 tomadas 220v em diferentes cômodos da casa. O material já foi comprado.",
    categoria: "Elétrica",
    urgencia: "Normal",
    status: "Em Aberto",
    localizacao: "São Paulo, SP",
    criadoEm: "10/05/2025",
    prazo: "15/05/2025",
    cliente: {
      nome: "Mariana Costa",
    },
    imagens: [
      "https://picsum.photos/seed/1/700/400",
      "https://picsum.photos/seed/2/700/400",
      "https://picsum.photos/seed/3/700/400",
    ],
  },
  {
    id: 2,
    titulo: "Troca de encanamento do prédio",
    descricao:
      "Vazamento identificado na coluna principal do prédio. Necessário avaliação e troca urgente do cano de PVC.",
    categoria: "Hidráulica",
    urgencia: "Urgente",
    status: "Em Aberto",
    localizacao: "Rio de Janeiro, RJ",
    criadoEm: "11/05/2025",
    prazo: "13/05/2025",
    cliente: {
      nome: "Condomínio Central",
    },
    imagens: [
      "https://images.pexels.com/photos/3849561/pexels-photo-3849561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: 3,
    titulo: "Manutenção na rede elétrica da casa",
    descricao:
      "Disjuntor principal está desarmando com frequência. Suspeita de sobrecarga ou curto-circuito.",
    categoria: "Elétrica",
    urgencia: "Alta",
    status: "Em Aberto",
    localizacao: "Belo Horizonte, MG",
    criadoEm: "12/05/2025",
    prazo: "20/05/2025",
    cliente: {
      nome: "Carlos Andrade",
    },
    imagens: [],
  },
  {
    id: 4,
    titulo: "Instalação de chuveiro novo",
    descricao:
      "Comprei um chuveiro novo e preciso que seja instalado no lugar do antigo. Fiação já está no local.",
    categoria: "Elétrica",
    urgencia: "Normal",
    status: "Em Aberto",
    localizacao: "São Paulo, SP",
    criadoEm: "12/05/2025",
    prazo: "18/05/2025",
    cliente: {
      nome: "Fernanda Lima",
    },
    imagens: [],
  },
];
