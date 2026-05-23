const seedData = {
  company: {
    name: "Ateliê LICA Festas",
    tagline: "Festas com afeto, encanto e memória",
    pixName: "Tamara Soares",
    pixBank: "Nubank",
    pixKey: "115.024.494-12",
  },
  serviceFees: {
    delivery: 80,
    assembly: 120,
    returnService: 60,
  },
  paymentMethods: [
    paymentMethod("pix", "PIX", "pix", "Use o Pix Copia e Cola ou escaneie o QR Code para pagar o sinal.", "115.024.494-12", "Tamara Soares", "Parnaiba", "Nubank"),
    paymentMethod("dinheiro", "Dinheiro", "dinheiro", "Pagamento em dinheiro combinado diretamente com o Atelie."),
    paymentMethod("cartao", "Cartao", "cartao", "Configure as orientacoes, link ou condicoes para pagamento no cartao."),
    paymentMethod("transferencia", "Transferencia", "transferencia", "Configure banco, agencia, conta e titular para transferencia."),
  ],
  users: [
    {
      id: "admin",
      role: "admin",
      name: "Admin LICA",
      email: "admin@lica.com",
      login: "admin@lica.com",
      password: "admin123",
      enabled: true,
    },
    {
      id: "cliente-001",
      role: "client",
      name: "Ernands Santos",
      email: "cliente@lica.com",
      login: "cliente@lica.com",
      password: "cliente123",
      enabled: true,
      clientId: "cliente-001",
    },
  ],
  clients: [
    {
      id: "cliente-001",
      name: "Ernands Santos",
      cpf: "123456789",
      whatsapp: "22222",
      phone: "111111",
      whatsapp1: "Não",
      phone2: "22222222",
      whatsapp2: "Não",
      email: "@",
      street: "Rua Parque Terceiro",
      number: "68",
      complement: "Casa",
      neighborhood: "Nova",
      city: "Parna",
      uf: "RN",
      cep: "72870636",
      location: "Locali",
      notes: "",
      login: "cliente@lica.com",
      password: "cliente123",
      address:
        "Rua Parque Terceiro, 68 - Casa - Nova - Parna/RN - CEP: 72870636 | Localização: Locali",
    },
  ],
  inventory: [
    item("ITM-001", "Mesa cavalete 80x60x85", "Móvel", "Branco", 1, "Reservado", 10, 5.75, "Base do kit"),
    item("ITM-002", "Mesa fake boiserie 40x80", "Móvel", "Branco", 1, "Reservado", 20, 5.75),
    item("ITM-003", "Arco de festa romano 60 cm", "Suporte", "Dourado", 1, "Reservado", 30, 5.75),
    item("ITM-004", "Arco de metal 50cm", "Suporte", "Dourado", 3, "Reservado", 40, 5.75),
    item("ITM-005", "Escadinha 3 prateleiras", "Móvel", "Branco", 1, "Disponível", 50, 5.75),
    item("ITM-006", "Inflador de balão automático", "Ferramenta", "-", 1, "Disponível", 60, 5.75),
    item("ITM-007", "Placa de Happy Birthday", "Decoração", "Dourado", 1, "Disponível", 70, 5.75),
    item("ITM-008", "Matinho - Bola de buchinho", "Decoração", "Verde", 2, "Disponível", 80, 5.75),
    item("ITM-009", "Medidor de balão", "Ferramenta", "-", 1, "Disponível", 90, 5.75),
    item("ITM-010", "Flor branca decoração", "Decoração", "Branco", 1, "Disponível", 110, 5.75, "Uso interno"),
    item("ITM-011", "Bandeja branca", "Bandeja", "Branco", 1, "Disponível", 50, 0),
    item("ITM-012", "Bandeja Dourada", "Bandeja", "Dourado", 1, "Disponível", 0, 0),
    item("ITM-013", "Bandeja vermelha", "Bandeja", "Vermelho", 1, "Disponível", 0, 0),
    item("ITM-014", "Mesinha bege", "Bandeja", "Bege", 1, "Disponível", 0, 0),
    item("ITM-015", "Bandeja lilás", "Bandeja", "Lilás", 1, "Disponível", 0, 0),
    item("ITM-016", "Bandeja verde oliva", "Bandeja", "Verde Oliva", 1, "Disponível", 0, 0),
    item("ITM-017", "Bandeja amarelo claro", "Bandeja", "Amarelo Claro", 1, "Disponível", 0, 0),
    item("ITM-018", "Bandeja azul escuro", "Bandeja", "Azul escuro", 1, "Disponível", 0, 0),
    item("ITM-019", "Balões número 9", "Balões", "Variado", 500, "Disponível", 0, 0),
    item("ITM-020", "Spray de balão", "Ferramenta", "-", 2, "Disponível", 0, 0),
    item("ITM-021", "Balão Bubble 5 polegadas", "Balões", "Transparente", 50, "Disponível", 0, 0),
    item("ITM-022", "Balão Bubble 18 polegadas", "Balões", "Transparente", 20, "Disponível", 0, 0),
    item("ITM-023", "Nome Happy Birthday", "Decoração", "Decoração", 1, "Disponível", 0, 0),
    item("ITM-024", "Placa acrílica lisa", "Suporte", "Suporte", 1, "Disponível", 0, 0),
    item("ITM-025", "Balão cromado dourado 5 polegadas", "Balões", "Dourado", 25, "Disponível", 0, 0),
    item("ITM-026", "Balão prata 5 polegadas", "Balões", "Prata", 25, "Disponível", 0, 0),
    item("ITM-027", "Painel de tecido Tema", "Capa sublimada", "Abelha", 1, "Disponível", 0, 0),
    item("ITM-028", "Painel de tecido Tema", "Capa sublimada", "Barbie", 1, "Disponível", 0, 0),
    item("ITM-029", "Painel de tecido Tema", "Capa sublimada", "Anjo da Guarda", 1, "Disponível", 0, 0),
    item("ITM-030", "Painel de tecido Tema", "Capa sublimada", "Princesas", 1, "Disponível", 0, 0),
    item("ITM-031", "Painel de tecido Tema", "Capa sublimada", "Cereja", 1, "Disponível", 0, 0),
    item("ITM-032", "Painel de tecido Tema", "Capa sublimada", "Fazendinha", 1, "Disponível", 0, 0),
    item("ITM-033", "Painel de tecido Tema", "Capa sublimada", "Heróis", 1, "Disponível", 0, 0),
    item("ITM-034", "Painel de tecido Tema", "Capa sublimada", "Magali", 1, "Disponível", 0, 0),
    item("ITM-035", "Painel de tecido Tema", "Capa sublimada", "Homem Aranha", 1, "Disponível", 0, 0),
    item("ITM-036", "Painel de tecido Tema", "Capa sublimada", "Oh Baby", 1, "Disponível", 0, 0),
  ],
  kits: [
    kit("kit-cristal", "Kit Cristal", 100, 40, ["ITM-001", "ITM-002", "ITM-003", "ITM-004"], "Base elegante com mesas brancas e arcos dourados.", ["#d8f1ee", "#d9b461", "#f8fbff"]),
    kit("kit-princesa", "Princesa", 100, 40, ["ITM-001", "ITM-002", "ITM-003", "ITM-004", "ITM-030"], "Tema Princesa com base cristal e painel sublimado.", ["#f8d8e6", "#b83b5e", "#fff7e7"]),
    kit("kit-lica", "Lica", 260, 0, ["ITM-002", "ITM-003", "ITM-006", "ITM-007", "ITM-008", "ITM-036"], "Composição completa com mesa, arco, placa e verde decorativo.", ["#e8f6f3", "#157a6e", "#f7c6d5"]),
    kit("kit-moana", "Moana", 250, 0, ["ITM-009", "ITM-010", "ITM-011"], "Kit compacto com flores, bandeja e apoio de montagem.", ["#d9f0ff", "#2f6f9f", "#f1b966"]),
  ],
  addons: [
    addon("add-escadinha", "Escadinha 3 prateleiras", 50, "Móvel branco para apoio de lembranças e doces.", ["ITM-005"], ["#fff7e7", "#b8872f", "#ffffff"]),
    addon("add-placa", "Placa Happy Birthday", 70, "Placa decorativa dourada para composição do painel.", ["ITM-007"], ["#fff0f4", "#b83b5e", "#f7c6d5"]),
    addon("add-buchinho", "Matinho bola de buchinho", 80, "Verde decorativo para complementar mesas e cantinhos.", ["ITM-008"], ["#e8f6f3", "#157a6e", "#ffffff"]),
    addon("add-bandeja", "Bandeja branca", 50, "Bandeja extra para doces, lembranças ou bolo fake.", ["ITM-011"], ["#f8fbff", "#2f6f9f", "#ffffff"]),
  ],
  themes: [
    theme("tema-princesas", "Princesas", "Painel e paleta delicada para festa infantil com tema princesas.", ["#f8d8e6", "#b83b5e", "#fff7e7"]),
    theme("tema-homem-aranha", "Homem Aranha", "Tema de herói com composição em vermelho, azul e painel sublimado.", ["#d9f0ff", "#2f6f9f", "#f15b5b"]),
    theme("tema-fazendinha", "Fazendinha", "Tema lúdico com cores suaves e elementos de campo.", ["#e8f6f3", "#157a6e", "#fff7e7"]),
    theme("tema-cereja", "Cereja", "Composição charmosa em tons de rosa, vermelho e detalhes delicados.", ["#fff0f4", "#b83b5e", "#ffffff"]),
  ],
  reservations: [
    reservation("RES-001", "cliente-001", "Moana", "2026-05-14", "2026-05-14", "2026-05-14", true, true, "Finalizada", 250, 150, 0, 0, 100, "PIX", 0, ["ITM-009", "ITM-010", "ITM-011"], "Teste0000001"),
    reservation("RES-002", "cliente-001", "Lica", "2026-05-13", "2026-05-13", "2026-05-13", true, true, "Finalizada", 210, 210, 0, 0, 0, "PIX", 0, ["ITM-006", "ITM-007", "ITM-008"], "Localiza"),
    reservation("RES-003", "cliente-001", "Moana", "2026-05-16", "2026-05-16", "2026-05-16", false, false, "Em andamento", 10, 50, 1, 1, 0, "Dinheiro", 0, ["ITM-001"]),
    reservation("RES-004", "cliente-001", "Lica", "2026-05-14", "2026-05-14", "2026-05-14", false, false, "Finalizada", 260, 50, 0, 0, 210, "Cartão", 0, ["ITM-002", "ITM-003", "ITM-006", "ITM-007", "ITM-008", "ITM-036"]),
    reservation("RES-005", "cliente-001", "Princesa", "2026-05-14", "2026-05-14", "2026-05-14", false, false, "Finalizada", 0, 0, 0, 0, 0, "Pendente", 0, ["ITM-021", "ITM-022"]),
    reservation("RES-006", "cliente-001", "Kit Cristal", "2026-05-15", "2026-05-15", "2026-05-16", false, false, "Pré-reserva (Sem sinal)", 160, 0, 90, 0, 70, "Pendente", 0, ["ITM-010", "ITM-011", "ITM-012", "ITM-013"]),
    reservation("RES-007", "cliente-001", "Kit Cristal", "2026-05-15", "2026-05-15", "2026-05-16", false, false, "Pré-reserva (Sem sinal)", 100, 0, 40, 0, 60, "Pendente", 0, ["ITM-001", "ITM-002", "ITM-003", "ITM-004"]),
    reservation("RES-008", "cliente-001", "Kit Cristal", "2026-05-15", "2026-05-15", "2026-05-16", false, false, "Pré-reserva (Sem sinal)", 100, 0, 40, 0, 60, "Pendente", 0, ["ITM-001", "ITM-002", "ITM-003", "ITM-004"]),
    reservation("RES-009", "cliente-001", "Princesa", "2026-05-14", "2026-05-14", "2026-05-15", false, false, "Pré-reserva (Sem sinal)", 100, 0, 40, 0, 60, "PIX", 0, ["ITM-001", "ITM-002", "ITM-003", "ITM-004"]),
  ],
};

const authTokenKey = "atelie-lica-auth-token";
const authStorage = sessionStorage;
const apiBaseUrl = window.ATELIE_LICA_API_BASE_URL || "https://minha-api-backend-fuf9.onrender.com/api";
const apiTimeoutMs = 2500;
const localFallbackEnabled = false;
const app = document.querySelector("#app");

let store = normalizeStore(structuredClone(seedData));
let state = {
  user: null,
  tab: "orcamento",
  adminTab: "dashboard",
  selectedKitId: store.kits[0]?.id,
  selectedThemeId: "",
  selectedAdditions: [],
  selectedReservationId: null,
  clientStep: 1,
  mediaIndex: {},
  itemSearch: "",
  categoryFilter: "Todas",
  modal: null,
  toast: null,
  pendingAction: "",
  formErrors: {},
  authView: "login",
  registrationDraft: defaultRegistrationDraft(),
  signatureDirty: false,
  newQuoteMode: false,
  apiConnected: false,
  authToken: authStorage.getItem(authTokenKey) || "",
  editingPaymentMethodId: "",
  adminQuoteClientId: "",
  adminQuoteSearch: "",
  adminQuoteStarted: false,
  adminQuotePendingOverride: false,
  financeFilters: {
    search: "",
    status: "Todos",
    payment: "Todas",
    pendingOnly: false,
    dateFrom: "",
    dateTo: "",
  },
  draft: defaultDraft(),
};

const clientFieldDefs = [
  { key: "name", label: "Nome", type: "text", required: true },
  { key: "cpf", label: "CPF", type: "text", required: true },
  { key: "whatsapp", label: "WhatsApp", type: "tel" },
  { key: "phone", label: "Telefone 1", type: "tel" },
  { key: "whatsapp1", label: "WhatsApp 1", type: "text" },
  { key: "phone2", label: "Telefone 2", type: "tel" },
  { key: "whatsapp2", label: "WhatsApp 2", type: "text" },
  { key: "email", label: "E-mail", type: "email" },
  { key: "street", label: "Endereço", type: "text" },
  { key: "number", label: "Número", type: "text" },
  { key: "complement", label: "Complemento", type: "text" },
  { key: "neighborhood", label: "Bairro", type: "text" },
  { key: "city", label: "Cidade", type: "text" },
  { key: "uf", label: "UF", type: "text" },
  { key: "cep", label: "CEP", type: "text" },
  { key: "location", label: "Localização", type: "text" },
  { key: "notes", label: "Observação", type: "textarea" },
  { key: "login", label: "Login", type: "text", required: true },
  { key: "password", label: "Senha", type: "password", required: true },
];

const registrationFieldDefs = [
  { key: "name", label: "Nome", type: "text", autocomplete: "name" },
  { key: "cpf", label: "CPF", type: "text", inputmode: "numeric", autocomplete: "off" },
  { key: "phone", label: "Telefone 1", type: "tel", inputmode: "tel", autocomplete: "tel" },
  { key: "whatsapp", label: "WhatsApp 1", type: "tel", inputmode: "tel", autocomplete: "tel" },
  { key: "email", label: "E-mail", type: "email", autocomplete: "email" },
  { key: "street", label: "Endereço", type: "text", autocomplete: "street-address", span: "full-span" },
  { key: "number", label: "Número", type: "text", autocomplete: "address-line2" },
  { key: "complement", label: "Complemento", type: "text", autocomplete: "address-line3" },
  { key: "neighborhood", label: "Bairro", type: "text", autocomplete: "address-level3" },
  { key: "city", label: "Cidade", type: "text", autocomplete: "address-level2" },
  { key: "uf", label: "UF", type: "text", autocomplete: "address-level1", maxlength: 2 },
  { key: "cep", label: "CEP", type: "text", inputmode: "numeric", autocomplete: "postal-code" },
];

const accessRoleLabels = {
  admin: "Admin",
  client: "Cliente",
};

const reservationStatuses = [
  "Aguardando confirmação de sinal",
  "Reserva confirmada",
  "Preparar Kit",
  "Entregue",
  "Devolução",
  "Finalizado",
  "Pagamento pendente",
  "Cancelada",
];

const inventoryFieldDefs = [
  { key: "codigo", label: "Código", type: "text", required: true },
  { key: "name", label: "Item", type: "text", required: true },
  { key: "category", label: "Categoria", type: "text" },
  { key: "theme", label: "Tema/Cor", type: "text" },
  { key: "quantity", label: "Qtd.", type: "number" },
  { key: "status", label: "Status", type: "text" },
  { key: "availableAt", label: "Disponível em", type: "date" },
  { key: "supplier", label: "Fornecedor/Link", type: "text" },
  { key: "rent", label: "Valor Aluguel", type: "number" },
  { key: "purchaseValue", label: "Valor Compra", type: "number" },
  { key: "replacement", label: "Valor Reposição", type: "number" },
  { key: "purchaseDate", label: "Data Compra", type: "date" },
  { key: "rentalCount", label: "Qtd. Aluguéis", type: "number" },
  { key: "revenue", label: "Receita Gerada", type: "number" },
  { key: "notes", label: "Observações", type: "textarea" },
];

const kitAddonFieldDefs = {
  kit: [
    { key: "name", label: "Nome do kit", type: "text", required: true },
    { key: "basePrice", label: "Valor do kit", type: "number", required: true },
    { key: "defaultDiscount", label: "Desconto padrão", type: "number" },
  ],
  addon: [
    { key: "name", label: "Nome do adicional", type: "text", required: true },
    { key: "price", label: "Valor", type: "number", required: true },
  ],
};

function item(codigo, name, category, theme, quantity, status, rent, replacement, notes = "") {
  return {
    codigo,
    name,
    category,
    theme,
    quantity,
    status,
    availableAt: "",
    supplier: "",
    rent,
    purchaseValue: 0,
    replacement,
    purchaseDate: "",
    rentalCount: 0,
    revenue: 0,
    notes,
  };
}

function kit(id, name, basePrice, defaultDiscount, itemCodes, description, colors) {
  return {
    id,
    name,
    basePrice,
    defaultDiscount,
    itemCodes,
    description,
    itemsText: "",
    photos: [],
    enabled: true,
    colors,
  };
}

function addon(id, name, price, description, itemCodes = [], colors = ["#fff0f4", "#b83b5e", "#ffffff"]) {
  return {
    id,
    name,
    price,
    description,
    itemCodes,
    photos: [],
    enabled: true,
    colors,
  };
}

function theme(id, name, description, colors = ["#fff0f4", "#b83b5e", "#ffffff"]) {
  return {
    id,
    name,
    description,
    photos: [],
    enabled: true,
    colors,
  };
}

function paymentMethod(id, name, type, instructions = "", pixKey = "", pixName = "", pixCity = "", bank = "", enabled = true) {
  return {
    id,
    name,
    type,
    instructions,
    pixKey,
    pixName,
    pixCity,
    bank,
    enabled,
  };
}

function reservation(
  id,
  clientId,
  kitName,
  deliveryDate,
  eventDate,
  returnDate,
  delivery,
  assembly,
  status,
  kitValue,
  deposit,
  discount,
  serviceFee,
  total,
  paymentMethod,
  depositGuarantee,
  itemCodes,
  notes = "",
) {
  return {
    id,
    clientId,
    kitName,
    deliveryDate,
    eventDate,
    returnDate,
    delivery,
    assembly,
    status,
    kitValue,
    deposit,
    discount,
    serviceFee,
    total,
    paymentMethod,
    depositGuarantee,
    itemCodes,
    notes,
    createdAt: "2026-05-14",
    contractGeneratedAt: null,
    signature: null,
  };
}

function loadStore() {
  return normalizeStore(structuredClone(seedData));
}

function saveStore() {
  return;
}

function setAuthToken(token) {
  state.authToken = token || "";
  if (state.authToken) authStorage.setItem(authTokenKey, state.authToken);
  else authStorage.removeItem(authTokenKey);
}

function clearAuthToken() {
  state.authToken = "";
  authStorage.removeItem(authTokenKey);
}

async function apiRequest(path, options = {}) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), options.timeoutMs || apiTimeoutMs);
  const authHeaders = state.authToken ? { Authorization: `Bearer ${state.authToken}` } : {};

  try {
    const response = await fetch(`${apiBaseUrl}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...authHeaders,
        ...(options.headers || {}),
      },
      signal: controller.signal,
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      const error = new Error(payload?.error || "Nao foi possivel concluir a requisicao.");
      error.status = response.status;
      error.apiAvailable = true;
      if (response.status === 401 && path !== "/auth/login") clearAuthToken();
      throw error;
    }

    return payload;
  } finally {
    window.clearTimeout(timeout);
  }
}

function applyApiStore(apiStore) {
  store = normalizeStore({
    ...structuredClone(seedData),
    ...apiStore,
  });
  state.apiConnected = true;
}

async function hydrateStoreFromApi() {
  try {
    applyApiStore(await apiRequest("/store"));
    return true;
  } catch {
    state.apiConnected = false;
    return false;
  }
}

async function loginWithApi(role, login, password) {
  try {
    const payload = await apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ role, login, password }),
    });
    return { available: true, payload };
  } catch (error) {
    if (error.apiAvailable || error.status) return { available: true, error };
    return { available: false, error };
  }
}

async function resumeSessionWithApi() {
  if (!state.authToken) return false;

  try {
    const payload = await apiRequest("/auth/session");
    applyApiStore(payload.store);
    completeLogin(normalizeUser(payload.user));
    return true;
  } catch {
    clearAuthToken();
    state.apiConnected = false;
    state.user = null;
    return false;
  }
}

async function createReservationWithApi(client, reservation, addons) {
  try {
    const payload = await apiRequest("/reservations", {
      method: "POST",
      body: JSON.stringify({ client, reservation, addons }),
      timeoutMs: 7000,
    });
    return { available: true, payload };
  } catch (error) {
    if (error.apiAvailable || error.status) return { available: true, error };
    return { available: false, error };
  }
}

async function reservationActionWithApi(id, action, values = {}) {
  try {
    const payload = await apiRequest(`/reservations/${encodeURIComponent(id)}/actions/${action}`, {
      method: "POST",
      body: JSON.stringify(values),
      timeoutMs: 7000,
    });
    return { available: true, payload };
  } catch (error) {
    if (error.apiAvailable || error.status) return { available: true, error };
    return { available: false, error };
  }
}

function ensureLocalFallbackAvailable() {
  if (localFallbackEnabled) return false;
  const error = new Error("API indisponivel em modo producao.");
  error.userMessage = "A API e o banco precisam estar ativos. Em producao, o sistema nao grava dados no navegador.";
  throw error;
}

async function syncReservationActionWithApi(id, action, values = {}) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await reservationActionWithApi(id, action, values);
  if (!apiResult.available) {
    state.apiConnected = false;
    const error = new Error("Nao foi possivel conectar ao banco de dados.");
    error.userMessage = "Nao foi possivel conectar ao banco de dados. Tente novamente com a API ligada.";
    throw error;
  }

  if (!apiResult.payload) {
    const error = new Error(apiResult.error?.message || "Nao foi possivel salvar no banco de dados.");
    error.userMessage = apiResult.error?.message || "Nao foi possivel salvar no banco de dados.";
    throw error;
  }

  if (apiResult.payload.store) applyApiStore(apiResult.payload.store);
  return true;
}

async function syncClientWithApi(client) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore("/clients", {
    method: "POST",
    body: JSON.stringify({ client }),
  });
  return applyApiMutationResult(apiResult);
}

async function createClientRegistrationRequestWithApi(client) {
  const apiResult = await apiMutationWithStore("/client-registration-requests", {
    method: "POST",
    body: JSON.stringify({ client }),
  });

  if (!apiResult.available) {
    state.apiConnected = false;
    const error = new Error("Nao foi possivel conectar ao banco de dados.");
    error.userMessage = "Nao foi possivel conectar ao banco de dados. Tente novamente com a API ligada.";
    throw error;
  }

  if (!apiResult.payload) {
    const error = new Error(apiResult.error?.message || "Nao foi possivel enviar a solicitacao de cadastro.");
    error.userMessage = apiResult.error?.message || "Nao foi possivel enviar a solicitacao de cadastro.";
    throw error;
  }

  return apiResult.payload;
}

async function approveClientRegistrationWithApi(clientId) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore(`/client-registration-requests/${encodeURIComponent(clientId)}/approve`, {
    method: "POST",
    body: JSON.stringify({}),
  });
  return applyApiMutationResult(apiResult);
}

async function denyClientRegistrationWithApi(clientId, reason) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore(`/client-registration-requests/${encodeURIComponent(clientId)}/deny`, {
    method: "POST",
    body: JSON.stringify({ reason }),
  });
  return applyApiMutationResult(apiResult);
}

async function deleteClientWithApi(clientId) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore(`/clients/${encodeURIComponent(clientId)}`, {
    method: "DELETE",
  });
  return applyApiMutationResult(apiResult);
}

async function syncInventoryItemWithApi(originalCode, item) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore("/inventory-items", {
    method: "POST",
    body: JSON.stringify({ originalCode, item }),
  });
  return applyApiMutationResult(apiResult);
}

async function deleteInventoryItemWithApi(code) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore(`/inventory-items/${encodeURIComponent(code)}`, {
    method: "DELETE",
  });
  return applyApiMutationResult(apiResult);
}

async function syncKitAddonWithApi(kind, entry) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const path = kind === "kit" ? "/kits" : "/addons";
  const bodyKey = kind === "kit" ? "kit" : "addon";
  const apiResult = await apiMutationWithStore(path, {
    method: "POST",
    body: JSON.stringify({ [bodyKey]: entry }),
  });
  return applyApiMutationResult(apiResult);
}

async function deleteKitAddonWithApi(kind, id) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const path = kind === "kit" ? `/kits/${encodeURIComponent(id)}` : `/addons/${encodeURIComponent(id)}`;
  const apiResult = await apiMutationWithStore(path, {
    method: "DELETE",
  });
  return applyApiMutationResult(apiResult);
}

async function syncThemeWithApi(theme) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore("/themes", {
    method: "POST",
    body: JSON.stringify({ theme }),
  });
  return applyApiMutationResult(apiResult);
}

async function deleteThemeWithApi(id) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore(`/themes/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
  return applyApiMutationResult(apiResult);
}

async function saveSignatureWithApi(id, signerName, signatureData) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore(`/reservations/${encodeURIComponent(id)}/signature`, {
    method: "POST",
    body: JSON.stringify({ signerName, signatureData }),
  });
  return applyApiMutationResult(apiResult);
}

async function uploadPhysicalContractWithApi(id, file) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore(`/reservations/${encodeURIComponent(id)}/physical-contract`, {
    method: "POST",
    body: JSON.stringify({
      fileName: file.name,
      fileType: file.type,
      fileData: file.data,
    }),
  });
  return applyApiMutationResult(apiResult);
}

async function createReservationPaymentWithApi(id, payment) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore(`/reservations/${encodeURIComponent(id)}/payments`, {
    method: "POST",
    body: JSON.stringify(payment),
  });
  return applyApiMutationResult(apiResult);
}

async function syncServiceFeesWithApi(serviceFees) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore("/settings/service-fees", {
    method: "POST",
    body: JSON.stringify({ serviceFees }),
  });
  return applyApiMutationResult(apiResult);
}

async function syncPaymentMethodWithApi(paymentMethodEntry) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore("/payment-methods", {
    method: "POST",
    body: JSON.stringify({ paymentMethod: paymentMethodEntry }),
  });
  return applyApiMutationResult(apiResult);
}

async function togglePaymentMethodWithApi(id, enabled) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore(`/payment-methods/${encodeURIComponent(id)}/enabled`, {
    method: "POST",
    body: JSON.stringify({ enabled }),
  });
  return applyApiMutationResult(apiResult);
}

async function syncAccessWithApi(user) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore("/users", {
    method: "POST",
    body: JSON.stringify({ user }),
  });
  return applyApiMutationResult(apiResult);
}

async function toggleAccessWithApi(userId, enabled) {
  if (!state.apiConnected) return ensureLocalFallbackAvailable();

  const apiResult = await apiMutationWithStore(`/users/${encodeURIComponent(userId)}/enabled`, {
    method: "POST",
    body: JSON.stringify({ enabled }),
  });
  return applyApiMutationResult(apiResult);
}

async function apiMutationWithStore(path, options) {
  try {
    const payload = await apiRequest(path, {
      ...options,
      timeoutMs: 7000,
    });
    return { available: true, payload };
  } catch (error) {
    if (error.apiAvailable || error.status) return { available: true, error };
    return { available: false, error };
  }
}

function applyApiMutationResult(apiResult) {
  if (!apiResult.available) {
    state.apiConnected = false;
    const error = new Error("Nao foi possivel conectar ao banco de dados.");
    error.userMessage = "Nao foi possivel conectar ao banco de dados. Tente novamente com a API ligada.";
    throw error;
  }

  if (!apiResult.payload) {
    const error = new Error(apiResult.error?.message || "Nao foi possivel salvar no banco de dados.");
    error.userMessage = apiResult.error?.message || "Nao foi possivel salvar no banco de dados.";
    throw error;
  }

  if (apiResult.payload.store) applyApiStore(apiResult.payload.store);
  return true;
}

function mergeUsers(seedUsers, savedUsers) {
  const byId = new Map();
  [...seedUsers, ...savedUsers].forEach((user) => byId.set(user.id, { ...user }));
  return [...byId.values()];
}

function normalizeStore(nextStore) {
  nextStore.clients = (nextStore.clients || []).map(normalizeClient);
  nextStore.inventory = (nextStore.inventory || []).map(normalizeInventoryItem);
  nextStore.serviceFees = normalizeServiceFees(nextStore.serviceFees);
  nextStore.kits = (nextStore.kits || []).map(normalizeKit);
  nextStore.addons = (nextStore.addons || []).map(normalizeAddon);
  nextStore.themes = (nextStore.themes || []).map(normalizeTheme);
  nextStore.paymentMethods = (nextStore.paymentMethods || []).map(normalizePaymentMethod);
  nextStore.reservations = (nextStore.reservations || []).map(normalizeReservation);
  const usersById = new Map((nextStore.users || []).map((user) => [user.id, normalizeUser(user)]));
  nextStore.clients.forEach((client) => {
    if ((client.registrationStatus || "Aprovado") === "Aprovado") {
      usersById.set(client.id, clientToUser(client, usersById.get(client.id)));
    }
  });
  nextStore.users = [...usersById.values()].map(normalizeUser);
  return nextStore;
}

function normalizeServiceFees(serviceFees = {}) {
  return {
    delivery: Number(serviceFees.delivery ?? 80),
    assembly: Number(serviceFees.assembly ?? 120),
    returnService: Number(serviceFees.returnService ?? 60),
  };
}

function normalizeKit(kitEntry) {
  const itemLines = (kitEntry.itemCodes || []).map(findItemInSeedOrStore).filter(Boolean).map(formatItemLine);
  return {
    id: kitEntry.id || slugId("kit", kitEntry.name || "kit"),
    name: kitEntry.name || "Kit",
    basePrice: Number(kitEntry.basePrice ?? kitEntry.value ?? 0),
    defaultDiscount: Number(kitEntry.defaultDiscount ?? kitEntry.discount ?? 0),
    itemCodes: kitEntry.itemCodes || [],
    description: kitEntry.description || "",
    itemsText: kitEntry.itemsText || itemLines.join("\n") || kitEntry.description || "",
    photos: Array.isArray(kitEntry.photos) ? kitEntry.photos.slice(0, 5) : [],
    enabled: kitEntry.enabled !== false,
    colors: kitEntry.colors || ["#f8d8e6", "#b83b5e", "#fff7e7"],
  };
}

function normalizeAddon(addonEntry) {
  return {
    id: addonEntry.id || slugId("add", addonEntry.name || "adicional"),
    name: addonEntry.name || "Adicional",
    price: Number(addonEntry.price ?? addonEntry.value ?? addonEntry.rent ?? 0),
    description: addonEntry.description || addonEntry.itemsText || "",
    itemCodes: addonEntry.itemCodes || [],
    photos: Array.isArray(addonEntry.photos) ? addonEntry.photos.slice(0, 3) : [],
    enabled: addonEntry.enabled !== false,
    colors: addonEntry.colors || ["#fff0f4", "#b83b5e", "#ffffff"],
  };
}

function normalizeTheme(themeEntry) {
  return {
    id: themeEntry.id || slugId("tema", themeEntry.name || "tema"),
    name: themeEntry.name || "Tema",
    description: themeEntry.description || "",
    photos: Array.isArray(themeEntry.photos) ? themeEntry.photos.slice(0, 3) : [],
    enabled: themeEntry.enabled !== false,
    colors: themeEntry.colors || ["#fff0f4", "#b83b5e", "#ffffff"],
  };
}

function normalizePaymentMethod(methodEntry = {}) {
  return {
    id: methodEntry.id || slugId("pagamento", methodEntry.name || "forma"),
    name: methodEntry.name || "Forma de pagamento",
    type: methodEntry.type || "outro",
    instructions: methodEntry.instructions || "",
    pixKey: methodEntry.pixKey || "",
    pixName: methodEntry.pixName || "",
    pixCity: methodEntry.pixCity || "",
    bank: methodEntry.bank || "",
    enabled: methodEntry.enabled !== false,
  };
}

function normalizeReservation(entry) {
  return {
    ...entry,
    status: entry.status === "Finalizada" ? "Finalizado" : entry.status,
    themeId: entry.themeId || "",
    themeName: entry.themeName || entry.theme || "",
    customTheme: entry.customTheme || "",
    balanceDue: entry.balanceDue,
    damageFee: entry.damageFee || 0,
    replacementFee: entry.replacementFee || 0,
    financeNotes: entry.financeNotes || "",
    clientCorrectionNote: entry.clientCorrectionNote || "",
    payments: (entry.payments || []).map(normalizeReservationPayment),
  };
}

function normalizeReservationPayment(payment = {}) {
  return {
    id: payment.id || "",
    reservationId: payment.reservationId || "",
    amount: financialNumber(payment.amount),
    paymentMethod: payment.paymentMethod || "",
    paidAt: payment.paidAt || "",
    fileName: payment.fileName || "",
    fileType: payment.fileType || "",
    fileUrl: payment.fileUrl || "",
    createdByUserId: payment.createdByUserId || "",
    createdByRole: payment.createdByRole || "",
    createdByName: payment.createdByName || "",
    createdAt: payment.createdAt || "",
  };
}

function findItemInSeedOrStore(code) {
  return seedData.inventory.find((entry) => entry.codigo === code);
}

function slugId(prefix, value) {
  const slug = String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${prefix}-${slug || Date.now()}`;
}

function normalizeUser(user) {
  const seedUser = seedData.users.find((entry) => entry.id === user.id);
  const normalized = {
    ...user,
    login: user.login || user.email || "",
    email: user.email || user.login || "",
    password: user.password || seedUser?.password || "",
    enabled: user.id === "admin" || user.role === "admin" ? true : user.enabled !== false,
  };
  return normalized;
}

function normalizeClient(client) {
  const normalized = {
    whatsapp1: client.whatsapp1 || "",
    phone2: client.phone2 || "",
    whatsapp2: client.whatsapp2 || "",
    street: client.street || client.address || "",
    number: client.number || "",
    complement: client.complement || "",
    neighborhood: client.neighborhood || "",
    city: client.city || "",
    uf: client.uf || "",
    cep: client.cep || "",
    location: client.location || "",
    notes: client.notes || client.observation || "",
    login: client.login || client.email || "",
    password: client.password || "cliente123",
    registrationStatus: client.registrationStatus || "Aprovado",
    registrationRequestedAt: client.registrationRequestedAt || "",
    registrationReviewedAt: client.registrationReviewedAt || "",
    registrationReviewedBy: client.registrationReviewedBy || "",
    registrationRejectionReason: client.registrationRejectionReason || "",
    ...client,
  };
  normalized.address = buildClientAddress(normalized);
  return normalized;
}

function normalizeInventoryItem(entry) {
  return {
    codigo: entry.codigo || "",
    name: entry.name || entry.item || "",
    category: entry.category || entry.categoria || "",
    theme: entry.theme || entry.temaCor || "",
    quantity: Number(entry.quantity ?? entry.qtd ?? 0),
    status: entry.status || "Disponível",
    availableAt: entry.availableAt || "",
    supplier: entry.supplier || entry.fornecedor || "",
    rent: Number(entry.rent ?? entry.valorAluguel ?? 0),
    purchaseValue: Number(entry.purchaseValue ?? entry.valorCompra ?? 0),
    replacement: Number(entry.replacement ?? entry.valorReposicao ?? 0),
    purchaseDate: entry.purchaseDate || "",
    rentalCount: Number(entry.rentalCount ?? entry.qtdAlugueis ?? 0),
    revenue: Number(entry.revenue ?? entry.receita ?? 0),
    notes: entry.notes || entry.obs || "",
  };
}

function clientToUser(client, existingUser = {}) {
  return {
    id: client.id,
    role: "client",
    name: client.name,
    email: client.login || client.email,
    login: client.login || client.email,
    password: client.password,
    enabled: existingUser.enabled !== false,
    clientId: client.id,
  };
}

function syncClientUser(client) {
  const existing = store.users.find((entry) => entry.id === client.id);
  const user = clientToUser(client, existing);
  const index = store.users.findIndex((entry) => entry.id === user.id);
  if (index >= 0) store.users[index] = user;
  else store.users.push(user);
}

function removeClientUser(clientId) {
  store.users = store.users.filter((entry) => entry.id !== clientId);
}

function createEmptyClient() {
  return clientFieldDefs.reduce((client, fieldDef) => {
    client[fieldDef.key] = "";
    return client;
  }, {});
}

function buildClientAddress(client) {
  const firstLine = [client.street, client.number].filter(Boolean).join(", ");
  const complement = client.complement ? ` - ${client.complement}` : "";
  const district = client.neighborhood ? ` - ${client.neighborhood}` : "";
  const city = [client.city, client.uf].filter(Boolean).join("/");
  const cityPart = city ? ` - ${city}` : "";
  const cep = client.cep ? ` - CEP: ${client.cep}` : "";
  const location = client.location ? ` | Localização: ${client.location}` : "";
  return `${firstLine}${complement}${district}${cityPart}${cep}${location}`.trim();
}

function nextClientId() {
  const nextNumber =
    Math.max(
      0,
      ...store.clients.map((client) => {
        const match = String(client.id).match(/cliente-(\d+)/);
        return match ? Number(match[1]) : 0;
      }),
    ) + 1;
  return `cliente-${String(nextNumber).padStart(3, "0")}`;
}

async function saveClientFromForm(form) {
  const formData = new FormData(form);
  const clientId = form.dataset.clientId || nextClientId();
  let client = { id: clientId };
  clientFieldDefs.forEach((fieldDef) => {
    client[fieldDef.key] = String(formData.get(fieldDef.key) || "").trim();
  });
  client = normalizeClientContactFields(client);
  client.address = buildClientAddress(client);

  if (await syncClientWithApi(client)) {
    state.modal = null;
    return;
  }

  const existingIndex = store.clients.findIndex((entry) => entry.id === clientId);
  if (existingIndex >= 0) store.clients[existingIndex] = client;
  else store.clients.push(client);
  syncClientUser(client);
  saveStore();
  state.modal = null;
}

async function deleteClient(clientId) {
  const client = store.clients.find((entry) => entry.id === clientId);
  if (!client) return;
  const reservationsCount = store.reservations.filter((entry) => entry.clientId === clientId).length;
  const message = reservationsCount
    ? `Excluir ${client.name} e ${reservationsCount} reserva(s) vinculada(s)?`
    : `Excluir ${client.name}?`;
  if (!confirm(message)) return;

  if (await deleteClientWithApi(clientId)) {
    if (state.draft.clientId === clientId) state.draft = defaultDraft();
    render();
    return;
  }

  store.clients = store.clients.filter((entry) => entry.id !== clientId);
  store.reservations = store.reservations.filter((entry) => entry.clientId !== clientId);
  removeClientUser(clientId);
  if (state.draft.clientId === clientId) state.draft = defaultDraft();
  saveStore();
  render();
}

async function approveClientRegistration(clientId) {
  await approveClientRegistrationWithApi(clientId);
  showToast("Cadastro aprovado. O cliente já pode acessar com CPF e senha inicial.", "success");
  render();
}

async function denyClientRegistration(clientId, reason) {
  await denyClientRegistrationWithApi(clientId, reason);
  showToast("Cadastro negado e mantido sem acesso ao portal.", "warning");
  render();
}

function createEmptyInventoryItem() {
  return inventoryFieldDefs.reduce((entry, fieldDef) => {
    entry[fieldDef.key] = fieldDef.key === "codigo" ? nextItemCode() : "";
    return entry;
  }, {});
}

function nextItemCode() {
  const nextNumber =
    Math.max(
      0,
      ...store.inventory.map((entry) => {
        const match = String(entry.codigo).match(/ITM-(\d+)/);
        return match ? Number(match[1]) : 0;
      }),
    ) + 1;
  return `ITM-${String(nextNumber).padStart(3, "0")}`;
}

async function saveInventoryItemFromForm(form) {
  const formData = new FormData(form);
  const originalCode = form.dataset.itemCode || "";
  const entry = {};
  inventoryFieldDefs.forEach((fieldDef) => {
    const raw = String(formData.get(fieldDef.key) || "").trim();
    entry[fieldDef.key] = fieldDef.type === "number" ? Number(raw || 0) : raw;
  });
  entry.codigo = entry.codigo || originalCode || nextItemCode();
  if (!entry.revenue && entry.rent && entry.rentalCount) entry.revenue = entry.rent * entry.rentalCount;
  const normalized = normalizeInventoryItem(entry);

  if (await syncInventoryItemWithApi(originalCode, normalized)) {
    state.modal = null;
    return;
  }

  const index = store.inventory.findIndex((itemEntry) => itemEntry.codigo === originalCode);
  if (index >= 0) store.inventory[index] = normalized;
  else store.inventory.push(normalized);
  if (originalCode && originalCode !== normalized.codigo) updateItemReferences(originalCode, normalized.codigo);
  saveStore();
  state.modal = null;
}

function updateItemReferences(oldCode, newCode) {
  store.kits.forEach((kitEntry) => {
    kitEntry.itemCodes = kitEntry.itemCodes.map((code) => (code === oldCode ? newCode : code));
  });
  store.addons.forEach((addonEntry) => {
    addonEntry.itemCodes = addonEntry.itemCodes.map((code) => (code === oldCode ? newCode : code));
  });
  store.reservations.forEach((reservationEntry) => {
    reservationEntry.itemCodes = reservationEntry.itemCodes.map((code) => (code === oldCode ? newCode : code));
  });
}

async function deleteInventoryItem(code) {
  const entry = findItem(code);
  if (!entry) return;
  const kitCount = store.kits.filter((kitEntry) => kitEntry.itemCodes.includes(code)).length;
  const reservationCount = store.reservations.filter((reservationEntry) => reservationEntry.itemCodes.includes(code)).length;
  const links = [];
  if (kitCount) links.push(`${kitCount} kit(s)`);
  if (reservationCount) links.push(`${reservationCount} reserva(s)`);
  const message = links.length
    ? `Excluir ${entry.name}? Ele será removido de ${links.join(" e ")}.`
    : `Excluir ${entry.name}?`;
  if (!confirm(message)) return;

  if (await deleteInventoryItemWithApi(code)) {
    render();
    return;
  }

  store.inventory = store.inventory.filter((itemEntry) => itemEntry.codigo !== code);
  store.kits.forEach((kitEntry) => {
    kitEntry.itemCodes = kitEntry.itemCodes.filter((itemCode) => itemCode !== code);
  });
  store.addons.forEach((addonEntry) => {
    addonEntry.itemCodes = addonEntry.itemCodes.filter((itemCode) => itemCode !== code);
  });
  store.reservations.forEach((reservationEntry) => {
    reservationEntry.itemCodes = reservationEntry.itemCodes.filter((itemCode) => itemCode !== code);
  });
  saveStore();
  render();
}

function createEmptyKitAddon(kind) {
  return kind === "kit"
    ? {
        id: "",
        name: "",
        basePrice: 0,
        defaultDiscount: 0,
        description: "",
        itemsText: "",
        photos: [],
        enabled: true,
        itemCodes: [],
        colors: ["#f8d8e6", "#b83b5e", "#fff7e7"],
      }
    : {
        id: "",
        name: "",
        price: 0,
        description: "",
        photos: [],
        enabled: true,
        itemCodes: [],
        colors: ["#fff0f4", "#b83b5e", "#ffffff"],
      };
}

function nextKitAddonId(kind) {
  const collection = kind === "kit" ? store.kits : store.addons;
  const prefix = kind === "kit" ? "kit" : "add";
  const nextNumber =
    Math.max(
      0,
      ...collection.map((entry) => {
        const match = String(entry.id).match(new RegExp(`${prefix}-(\\d+)`));
        return match ? Number(match[1]) : 0;
      }),
    ) + 1;
  return `${prefix}-${String(nextNumber).padStart(3, "0")}`;
}

async function saveKitAddonFromForm(form) {
  const kind = form.dataset.kind;
  const isKit = kind === "kit";
  const formData = new FormData(form);
  const existingId = form.dataset.id;
  const maxPhotos = isKit ? 5 : 3;
  let existingPhotos = [];
  try {
    existingPhotos = JSON.parse(String(formData.get("existingPhotos") || "[]"));
  } catch {
    existingPhotos = [];
  }
  const uploadedPhotos = await readPhotoFiles(form.querySelector('[name="photos"]'), maxPhotos);
  const photos = uploadedPhotos.length ? uploadedPhotos : existingPhotos.slice(0, maxPhotos);
  const itemCodes = formData.getAll("itemCodes").map((code) => String(code)).filter(Boolean);
  const itemLines = itemCodes.map(findItem).filter(Boolean).map(formatItemLine);
  const description = String(formData.get("description") || "").trim();

  const entry = isKit
    ? normalizeKit({
        id: existingId || nextKitAddonId("kit"),
        name: String(formData.get("name") || "").trim(),
        basePrice: Number(formData.get("basePrice") || 0),
        defaultDiscount: Number(formData.get("defaultDiscount") || 0),
        description,
        itemsText: itemLines.join("\n"),
        photos,
        enabled: formData.get("enabled") === "on",
        itemCodes,
        colors: store.kits.find((kitEntry) => kitEntry.id === existingId)?.colors || ["#f8d8e6", "#b83b5e", "#fff7e7"],
      })
    : normalizeAddon({
        id: existingId || nextKitAddonId("addon"),
        name: String(formData.get("name") || "").trim(),
        price: Number(formData.get("price") || 0),
        description: description || itemLines.join("\n"),
        photos,
        enabled: formData.get("enabled") === "on",
        itemCodes,
        colors: store.addons.find((addonEntry) => addonEntry.id === existingId)?.colors || ["#fff0f4", "#b83b5e", "#ffffff"],
      });

  if (await syncKitAddonWithApi(kind, entry)) {
    if (isKit && state.selectedKitId === existingId) state.selectedKitId = entry.id;
    state.modal = null;
    return;
  }

  const collection = isKit ? store.kits : store.addons;
  const index = collection.findIndex((row) => row.id === entry.id);
  if (index >= 0) collection[index] = entry;
  else collection.push(entry);
  if (isKit && state.selectedKitId === existingId) state.selectedKitId = entry.id;
  saveStore();
  state.modal = null;
}

function readPhotoFiles(input, maxPhotos) {
  const files = [...(input?.files || [])].slice(0, maxPhotos);
  return Promise.all(
    files.map(
      (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        }),
    ),
  );
}

function readReceiptFile(file) {
  if (!file) return Promise.resolve({ name: "", type: "", data: "" });
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, type: file.type, data: reader.result });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function readPhysicalContractFile(file) {
  if (!file) return Promise.resolve({ name: "", type: "", data: "" });
  const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
  const allowedExtensions = [".pdf", ".jpg", ".jpeg", ".png"];
  const extension = `.${String(file.name || "").split(".").pop()}`.toLowerCase();
  const isAllowed = allowedTypes.includes(file.type) || allowedExtensions.includes(extension);
  const maxBytes = 8 * 1024 * 1024;

  if (!isAllowed) {
    const error = new Error("Formato de contrato fisico invalido.");
    error.userMessage = "Anexe um contrato em PDF, JPG, JPEG ou PNG.";
    throw error;
  }

  if (file.size > maxBytes) {
    const error = new Error("Contrato fisico muito grande.");
    error.userMessage = "O arquivo do contrato fisico deve ter no maximo 8 MB.";
    throw error;
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, type: file.type || "application/octet-stream", data: reader.result });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function readPaymentReceiptFile(file) {
  if (!file) return Promise.resolve({ name: "", type: "", data: "" });
  const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
  const allowedExtensions = [".pdf", ".jpg", ".jpeg", ".png"];
  const extension = `.${String(file.name || "").split(".").pop()}`.toLowerCase();
  const isAllowed = allowedTypes.includes(file.type) || allowedExtensions.includes(extension);
  const maxBytes = 8 * 1024 * 1024;

  if (!isAllowed) {
    const error = new Error("Formato de comprovante invalido.");
    error.userMessage = "Anexe um comprovante em PDF, JPG, JPEG ou PNG.";
    throw error;
  }

  if (file.size > maxBytes) {
    const error = new Error("Comprovante muito grande.");
    error.userMessage = "O comprovante deve ter no maximo 8 MB.";
    throw error;
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, type: file.type || "application/octet-stream", data: reader.result });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function toggleKitAddon(kind, id) {
  const collection = kind === "kit" ? store.kits : store.addons;
  const entry = collection.find((row) => row.id === id);
  if (!entry) return;
  const previousEnabled = entry.enabled;
  entry.enabled = !entry.enabled;

  try {
    if (await syncKitAddonWithApi(kind, entry)) {
      showToast(`${entry.name} ${entry.enabled ? "habilitado" : "desabilitado"} com sucesso.`);
      render();
      return;
    }
  } catch (error) {
    entry.enabled = previousEnabled;
    throw error;
  }

  saveStore();
  showToast(`${entry.name} ${entry.enabled ? "habilitado" : "desabilitado"} com sucesso.`);
  render();
}

async function deleteKitAddon(kind, id) {
  const collection = kind === "kit" ? store.kits : store.addons;
  const entry = collection.find((row) => row.id === id);
  if (!entry) return;
  if (!confirm(`Excluir ${entry.name}?`)) return;

  if (await deleteKitAddonWithApi(kind, id)) {
    if (kind === "kit" && state.selectedKitId === id) state.selectedKitId = getActiveKits()[0]?.id || store.kits[0]?.id;
    if (kind !== "kit") state.selectedAdditions = state.selectedAdditions.filter((addonId) => addonId !== id);
    showToast(`${entry.name} excluÃ­do com sucesso.`);
    render();
    return;
  }

  if (kind === "kit") {
    store.kits = store.kits.filter((row) => row.id !== id);
    store.reservations.forEach((reservationEntry) => {
      if (reservationEntry.kitId === id) reservationEntry.kitId = "";
    });
    if (state.selectedKitId === id) state.selectedKitId = getActiveKits()[0]?.id || store.kits[0]?.id;
  } else {
    store.addons = store.addons.filter((row) => row.id !== id);
    state.selectedAdditions = state.selectedAdditions.filter((addonId) => addonId !== id);
    store.reservations.forEach((reservationEntry) => {
      reservationEntry.addonIds = (reservationEntry.addonIds || []).filter((addonId) => addonId !== id);
    });
  }
  saveStore();
  showToast(`${entry.name} excluído com sucesso.`);
  render();
}

function createEmptyTheme() {
  return {
    id: "",
    name: "",
    description: "",
    photos: [],
    enabled: true,
    colors: ["#fff0f4", "#b83b5e", "#ffffff"],
  };
}

function nextThemeId() {
  const nextNumber =
    Math.max(
      0,
      ...store.themes.map((entry) => {
        const match = String(entry.id).match(/tema-(\d+)/);
        return match ? Number(match[1]) : 0;
      }),
    ) + 1;
  return `tema-${String(nextNumber).padStart(3, "0")}`;
}

async function saveThemeFromForm(form) {
  const formData = new FormData(form);
  const existingId = form.dataset.id;
  let existingPhotos = [];
  try {
    existingPhotos = JSON.parse(String(formData.get("existingPhotos") || "[]"));
  } catch {
    existingPhotos = [];
  }
  const uploadedPhotos = await readPhotoFiles(form.querySelector('[name="photos"]'), 3);
  const photos = uploadedPhotos.length ? uploadedPhotos : existingPhotos.slice(0, 3);
  const entry = normalizeTheme({
    id: existingId || nextThemeId(),
    name: String(formData.get("name") || "").trim(),
    description: String(formData.get("description") || "").trim(),
    photos,
    enabled: formData.get("enabled") === "on",
    colors: store.themes.find((themeEntry) => themeEntry.id === existingId)?.colors || ["#fff0f4", "#b83b5e", "#ffffff"],
  });

  if (await syncThemeWithApi(entry)) {
    if (state.selectedThemeId === existingId) state.selectedThemeId = entry.id;
    state.modal = null;
    return;
  }

  const index = store.themes.findIndex((row) => row.id === entry.id);
  if (index >= 0) store.themes[index] = entry;
  else store.themes.push(entry);
  if (state.selectedThemeId === existingId) state.selectedThemeId = entry.id;
  saveStore();
  state.modal = null;
}

async function toggleTheme(id) {
  const entry = store.themes.find((row) => row.id === id);
  if (!entry) return;
  const previousEnabled = entry.enabled;
  entry.enabled = !entry.enabled;
  if (state.selectedThemeId === id && entry.enabled === false) state.selectedThemeId = "";

  try {
    if (await syncThemeWithApi(entry)) {
      showToast(`${entry.name} ${entry.enabled ? "habilitado" : "desabilitado"} com sucesso.`);
      render();
      return;
    }
  } catch (error) {
    entry.enabled = previousEnabled;
    throw error;
  }

  saveStore();
  showToast(`${entry.name} ${entry.enabled ? "habilitado" : "desabilitado"} com sucesso.`);
  render();
}

async function deleteTheme(id) {
  const entry = store.themes.find((row) => row.id === id);
  if (!entry) return;
  if (!confirm(`Excluir ${entry.name}?`)) return;

  if (await deleteThemeWithApi(id)) {
    if (state.selectedThemeId === id) state.selectedThemeId = "";
    showToast(`${entry.name} excluÃ­do com sucesso.`);
    render();
    return;
  }

  store.themes = store.themes.filter((row) => row.id !== id);
  store.reservations.forEach((reservationEntry) => {
    if (reservationEntry.themeId === id) reservationEntry.themeId = "";
  });
  if (state.selectedThemeId === id) state.selectedThemeId = "";
  saveStore();
  showToast(`${entry.name} excluído com sucesso.`);
  render();
}

async function saveServiceFeesFromForm(form) {
  const formData = new FormData(form);
  const serviceFees = {
    delivery: Number(formData.get("delivery") || 0),
    assembly: Number(formData.get("assembly") || 0),
    returnService: Number(formData.get("returnService") || 0),
  };
  if (await syncServiceFeesWithApi(serviceFees)) return;
  store.serviceFees = serviceFees;
  saveStore();
}

function createEmptyPaymentMethod() {
  return {
    id: "",
    name: "",
    type: "pix",
    instructions: "",
    pixKey: "",
    pixName: "",
    pixCity: "",
    bank: "",
    enabled: true,
  };
}

function paymentMethodTypeOptions() {
  return [
    ["pix", "PIX"],
    ["dinheiro", "Dinheiro"],
    ["cartao", "Cartao"],
    ["transferencia", "Transferencia"],
    ["outro", "Outro"],
  ];
}

async function savePaymentMethodFromForm(form) {
  const formData = new FormData(form);
  const existingId = form.dataset.id || "";
  const name = textValue(formData, "name");
  if (!name) {
    showToast("Informe o nome da forma de pagamento.", "error");
    return false;
  }

  const entry = normalizePaymentMethod({
    id: existingId || slugId("pagamento", name),
    name,
    type: textValue(formData, "type") || "outro",
    instructions: textValue(formData, "instructions"),
    pixKey: textValue(formData, "pixKey"),
    pixName: textValue(formData, "pixName"),
    pixCity: textValue(formData, "pixCity"),
    bank: textValue(formData, "bank"),
    enabled: formData.get("enabled") === "on",
  });

  if (await syncPaymentMethodWithApi(entry)) {
    state.editingPaymentMethodId = "";
    state.modal = null;
    return true;
  }

  const index = store.paymentMethods.findIndex((row) => row.id === entry.id);
  if (index >= 0) store.paymentMethods[index] = entry;
  else store.paymentMethods.push(entry);
  state.editingPaymentMethodId = "";
  state.modal = null;
  saveStore();
  return true;
}

async function togglePaymentMethod(id) {
  const entry = store.paymentMethods.find((row) => row.id === id);
  if (!entry) return;
  const nextEnabled = entry.enabled === false;

  if (await togglePaymentMethodWithApi(id, nextEnabled)) {
    showToast(`${entry.name} ${nextEnabled ? "habilitada" : "desabilitada"} com sucesso.`);
    render();
    return;
  }

  entry.enabled = nextEnabled;
  saveStore();
  showToast(`${entry.name} ${entry.enabled ? "habilitada" : "desabilitada"} com sucesso.`);
  render();
}

function createEmptyAccess() {
  return {
    id: "",
    role: "client",
    name: "",
    login: "",
    email: "",
    password: "",
    enabled: true,
    clientId: "",
  };
}

function nextAccessId() {
  const nextNumber =
    Math.max(
      0,
      ...store.users.map((user) => {
        const match = String(user.id).match(/usuario-(\d+)/);
        return match ? Number(match[1]) : 0;
      }),
    ) + 1;
  return `usuario-${String(nextNumber).padStart(3, "0")}`;
}

function textValue(formData, key) {
  return String(formData.get(key) || "").trim();
}

function defaultRegistrationDraft() {
  return {
    name: "",
    cpf: "",
    phone: "",
    whatsapp: "",
    email: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    uf: "",
    cep: "",
  };
}

function readRegistrationForm(form) {
  const formData = new FormData(form);
  return registrationFieldDefs.reduce((draft, fieldDef) => {
    draft[fieldDef.key] = textValue(formData, fieldDef.key);
    return draft;
  }, {});
}

function validateRegistrationForm(form) {
  const draft = readRegistrationForm(form);
  const errors = {};
  registrationFieldDefs.forEach((fieldDef) => {
    if (!String(draft[fieldDef.key] || "").trim()) errors[fieldDef.key] = "Campo obrigatório.";
  });
  if (draft.cpf && !isValidCpf(draft.cpf)) errors.cpf = "Informe um CPF válido.";
  if (draft.email && !isValidEmail(draft.email)) errors.email = "Informe um e-mail válido.";
  if (draft.cep && onlyDigits(draft.cep).length !== 8) errors.cep = "Informe um CEP válido.";
  if (draft.phone && !isValidPhone(draft.phone)) errors.phone = "Informe um telefone válido.";
  if (draft.whatsapp && !isValidPhone(draft.whatsapp)) errors.whatsapp = "Informe um WhatsApp válido.";
  if (draft.uf && !/^[A-Z]{2}$/.test(draft.uf.trim().toUpperCase())) errors.uf = "Informe uma UF válida.";
  return errors;
}

function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function isValidPhone(value) {
  const digits = onlyDigits(value);
  return digits.length === 10 || digits.length === 11;
}

function isValidCpf(value) {
  const digits = onlyDigits(value);
  if (digits.length !== 11 || /^(\d)\1{10}$/.test(digits)) return false;
  const calcDigit = (base) => {
    let sum = 0;
    for (let index = 0; index < base.length; index += 1) {
      sum += Number(base[index]) * (base.length + 1 - index);
    }
    const rest = (sum * 10) % 11;
    return rest === 10 ? 0 : rest;
  };
  return calcDigit(digits.slice(0, 9)) === Number(digits[9]) && calcDigit(digits.slice(0, 10)) === Number(digits[10]);
}

function maskCpf(value) {
  const digits = onlyDigits(value).slice(0, 11);
  return digits
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
}

function maskCep(value) {
  const digits = onlyDigits(value).slice(0, 8);
  return digits.replace(/^(\d{5})(\d)/, "$1-$2");
}

function maskPhone(value) {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length <= 10) {
    return digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/^(\(\d{2}\) \d{4})(\d)/, "$1-$2");
  }
  return digits
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/^(\(\d{2}\) \d{5})(\d)/, "$1-$2");
}

function applyMaskedFieldValue(key, value) {
  if (key === "cpf" || key === "loginCpf") return maskCpf(value);
  if (key === "cep") return maskCep(value);
  if (key === "phone" || key === "whatsapp" || key === "phone2") return maskPhone(value);
  if (key === "uf") return String(value || "").toUpperCase().replace(/[^A-Z]/g, "").slice(0, 2);
  return value;
}

function applyRegistrationMask(key, value) {
  return applyMaskedFieldValue(key, value);
}

function normalizeClientContactFields(client) {
  return {
    ...client,
    cpf: maskCpf(client.cpf),
    whatsapp: maskPhone(client.whatsapp),
    phone: maskPhone(client.phone),
    phone2: maskPhone(client.phone2),
    email: String(client.email || "").trim().toLowerCase(),
    uf: applyMaskedFieldValue("uf", client.uf),
    cep: maskCep(client.cep),
    login: onlyDigits(client.login || client.cpf),
  };
}

async function submitClientRegistrationRequest(form) {
  const client = readRegistrationForm(form);
  const payload = await createClientRegistrationRequestWithApi(client);
  state.authView = "login";
  state.registrationDraft = defaultRegistrationDraft();
  showToast(payload.message || "Solicitação enviada com sucesso. Aguarde a aprovação do administrador.", "success");
  render();
}

function validateClientForm(form) {
  const formData = new FormData(form);
  const clientId = form.dataset.clientId || nextClientId();
  const cpf = textValue(formData, "cpf");
  const login = textValue(formData, "login") || cpf;
  const existingId = form.dataset.clientId;
  const errors = {};
  if (!textValue(formData, "name")) errors.name = "Informe o nome.";
  if (!cpf) errors.cpf = "Informe o CPF.";
  else if (!isValidCpf(cpf)) errors.cpf = "Informe um CPF vÃ¡lido.";
  if (textValue(formData, "email") && !isValidEmail(textValue(formData, "email"))) errors.email = "Informe um e-mail vÃ¡lido.";
  if (textValue(formData, "phone") && !isValidPhone(textValue(formData, "phone"))) errors.phone = "Informe um telefone vÃ¡lido.";
  if (textValue(formData, "whatsapp") && !isValidPhone(textValue(formData, "whatsapp"))) errors.whatsapp = "Informe um WhatsApp vÃ¡lido.";
  if (textValue(formData, "cep") && onlyDigits(textValue(formData, "cep")).length !== 8) errors.cep = "Informe um CEP vÃ¡lido.";
  if (textValue(formData, "uf") && !/^[A-Z]{2}$/.test(textValue(formData, "uf").toUpperCase())) errors.uf = "Informe uma UF vÃ¡lida.";
  if (login && !isValidCpf(login)) errors.login = "Use o CPF como login.";
  if (!textValue(formData, "password") && !(existingId && state.apiConnected)) errors.password = "Informe a senha.";
  const loginDigits = onlyDigits(login);
  const duplicate = loginDigits && store.users.find((user) => user.role === "client" && user.id !== clientId && onlyDigits(user.login || user.email) === loginDigits);
  if (duplicate) errors.login = "JÃ¡ existe outro cliente com esse login.";
  return errors;
}

function validateAccessForm(form) {
  const formData = new FormData(form);
  const existingId = form.dataset.accessId;
  const role = existingId === "admin" ? "admin" : textValue(formData, "role") || "client";
  const clientId = role === "admin" ? "" : textValue(formData, "clientId");
  const userId = existingId || (role === "client" && clientId ? clientId : nextAccessId());
  const selectedClient = clientId ? store.clients.find((client) => client.id === clientId) : null;
  const login = textValue(formData, "login") || selectedClient?.cpf || "";
  const errors = {};
  if (!textValue(formData, "name")) errors.name = "Informe o nome.";
  if (!login) errors.login = "Informe o login.";
  else if (role === "client" && !isValidCpf(login)) errors.login = "Use o CPF como login do cliente.";
  if (!textValue(formData, "password") && !(existingId && state.apiConnected)) errors.password = "Informe a senha.";
  if (role === "client" && !clientId) errors.clientId = "Selecione um cliente vinculado.";
  const duplicate = login && store.users.find((user) => {
    const otherLogin = role === "client" ? onlyDigits(user.login || user.email) : String(user.login || user.email || "").trim().toLowerCase();
    const nextLogin = role === "client" ? onlyDigits(login) : login.toLowerCase();
    return user.id !== userId && otherLogin === nextLogin;
  });
  if (duplicate) errors.login = "JÃ¡ existe outro usuÃ¡rio com esse login.";
  return errors;
}

function validateInventoryForm(form) {
  const formData = new FormData(form);
  const originalCode = form.dataset.itemCode || "";
  const code = textValue(formData, "codigo") || originalCode;
  const errors = {};
  if (!code) errors.codigo = "Informe o cÃ³digo.";
  if (!textValue(formData, "name")) errors.name = "Informe o item.";
  const duplicate = code && store.inventory.find((entry) => entry.codigo === code && entry.codigo !== originalCode);
  if (duplicate) errors.codigo = "JÃ¡ existe outro item com esse cÃ³digo.";
  return errors;
}

function validateKitAddonForm(form) {
  const formData = new FormData(form);
  const kind = form.dataset.kind;
  const isKit = kind === "kit";
  const errors = {};
  if (!textValue(formData, "name")) errors.name = isKit ? "Informe o nome do kit." : "Informe o nome do adicional.";
  const valueKey = isKit ? "basePrice" : "price";
  if (String(formData.get(valueKey) || "").trim() === "") errors[valueKey] = "Informe o valor.";
  if (!formData.getAll("itemCodes").length) errors.itemCodes = "Selecione pelo menos um item do estoque.";
  return errors;
}

function validateThemeForm(form) {
  const formData = new FormData(form);
  const errors = {};
  if (!textValue(formData, "name")) errors.name = "Informe o nome do tema.";
  return errors;
}

function validateQuoteForm() {
  const errors = {};
  if (isAdminQuoteMode() && !getAdminQuoteClient()) errors.clientId = "Selecione um cliente.";
  if (!getSelectedKit()) errors.kitId = "Selecione um kit.";
  if (!state.draft.name.trim()) errors.name = "Informe o nome.";
  if (!state.draft.cpf.trim()) errors.cpf = "Informe o CPF.";
  else if (!isValidCpf(state.draft.cpf)) errors.cpf = "Informe um CPF vÃ¡lido.";
  if (state.draft.phone && !isValidPhone(state.draft.phone)) errors.phone = "Informe um telefone vÃ¡lido.";
  if (state.draft.whatsapp && !isValidPhone(state.draft.whatsapp)) errors.whatsapp = "Informe um WhatsApp vÃ¡lido.";
  if (!state.draft.eventDate || state.draft.eventDate < minEventDate()) errors.eventDate = `A data deve ser a partir de ${dateLabel(minEventDate())}.`;
  if (!state.draft.address.trim()) errors.address = "Informe o endereÃ§o do evento.";
  if (isCustomThemeMode() && !state.draft.customTheme.trim()) errors.customTheme = "Informe o tema desejado.";
  if (!themeSelectionName()) errors.themeId = "Escolha um tema ou informe o tema desejado.";
  return errors;
}

async function saveAccessFromForm(form) {
  const formData = new FormData(form);
  const existingId = form.dataset.accessId;
  const existingUser = existingId ? store.users.find((user) => user.id === existingId) : null;
  const role = existingId === "admin" ? "admin" : String(formData.get("role") || "client");
  const protectedAdmin = role === "admin";
  const clientId = protectedAdmin ? "" : String(formData.get("clientId") || "");
  const userId = existingId || (role === "client" && clientId ? clientId : nextAccessId());
  const linkedClient = clientId ? store.clients.find((client) => client.id === clientId) : null;
  const login = role === "client" ? onlyDigits(String(formData.get("login") || linkedClient?.cpf || "")) : String(formData.get("login") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "").trim();
  const name = String(formData.get("name") || "").trim();
  const user = normalizeUser({
    id: userId,
    role,
    name,
    email: role === "client" ? linkedClient?.email || login : login,
    login,
    password,
    enabled: protectedAdmin ? true : formData.get("enabled") === "on",
    clientId: role === "client" ? clientId || existingUser?.clientId || "" : "",
  });

  if (await syncAccessWithApi(user)) {
    state.modal = null;
    return;
  }

  const index = store.users.findIndex((entry) => entry.id === userId);
  if (index >= 0) store.users[index] = user;
  else store.users.push(user);

  if (user.clientId) {
    const client = store.clients.find((entry) => entry.id === user.clientId);
    if (client) {
      client.name = client.name || user.name;
      client.email = client.email || user.email;
      client.login = user.login;
      client.password = user.password;
    }
  }

  saveStore();
  state.modal = null;
}

async function toggleAccess(userId) {
  const user = store.users.find((entry) => entry.id === userId);
  if (!user || user.role === "admin") return;
  const nextEnabled = user.enabled === false;
  if (await toggleAccessWithApi(userId, nextEnabled)) {
    render();
    return;
  }
  user.enabled = nextEnabled;
  saveStore();
  render();
}

function defaultDraft(clientId) {
  const client = (clientId && store.clients.find((entry) => entry.id === clientId)) || store.clients[0];
  return {
    clientId: client?.id || "cliente-001",
    name: client?.name || "",
    cpf: client?.cpf || "",
    phone: client?.phone || "",
    whatsapp: client?.whatsapp || "",
    email: client?.email || "",
    customTheme: "",
    customThemeMode: false,
    eventDate: "",
    deliveryDate: "",
    returnDate: "",
    address: client ? buildClientAddress(client) : "",
    notes: "",
    paymentMethod: getActivePaymentMethods()[0]?.name || store.paymentMethods?.[0]?.name || "PIX",
    delivery: false,
    assembly: false,
    returnService: false,
    clientCorrectionFlag: false,
    clientCorrectionNote: "",
    receiptName: "",
    receiptType: "",
    receiptData: "",
  };
}

function render() {
  if (!state.user) {
    renderLogin();
    return;
  }

  refreshOperationalStatuses();
  renderShell();
  setTimeout(() => {
    drawAllKitArt();
    drawHeroArt();
    if (document.querySelector("#signaturePad")) attachSignaturePad();
  });
}

function minEventDate() {
  return addDaysIso(todayIso(), 1);
}

function todayIso() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

function addDaysIso(value, days) {
  if (!value) return "";
  const date = new Date(`${value}T12:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function isPending(action) {
  return state.pendingAction === action;
}

function pendingDisabledAttr() {
  return state.pendingAction ? "disabled aria-disabled=\"true\"" : "";
}

function pendingLabel(action, idleLabel, pendingText = "Salvando...") {
  return isPending(action) ? `<span class="button-spinner" aria-hidden="true"></span>${pendingText}` : idleLabel;
}

function toastMarkup() {
  if (!state.toast?.message) return "";
  return `<div class="toast ${state.toast.type || "success"}">${escapeHtml(state.toast.message)}</div>`;
}

function updateToastElement() {
  document.querySelectorAll(".toast").forEach((entry) => entry.remove());
  const markup = toastMarkup();
  if (!markup) return;
  (document.querySelector(".app-shell") || app).insertAdjacentHTML("beforeend", markup);
}

function showToast(message, type = "success") {
  state.toast = { message, type };
  updateToastElement();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = null;
    updateToastElement();
  }, 2800);
}

function formError(key) {
  return state.formErrors?.[key] || "";
}

function fieldErrorClass(key) {
  return formError(key) ? " field-error" : "";
}

function fieldErrorMessage(key) {
  const message = formError(key);
  return message ? `<div class="field-error-message">${escapeHtml(message)}</div>` : "";
}

function renderFormAlert() {
  return Object.keys(state.formErrors || {}).length
    ? `<div class="form-alert error">Preencha os campos obrigatÃ³rios destacados.</div>`
    : "";
}

function clearRenderedFormErrors(form) {
  form.querySelectorAll(".form-alert").forEach((entry) => entry.remove());
  form.querySelectorAll(".field-error").forEach((entry) => entry.classList.remove("field-error"));
  form.querySelectorAll(".field-error-message").forEach((entry) => entry.remove());
}

function findFormField(form, key) {
  return form.querySelector(`[name="${key}"]`) || form.querySelector(`[data-draft="${key}"]`) || form.querySelector(`#${key}`);
}

function applyFormErrors(form, errors, message = "Preencha os campos obrigatÃ³rios.") {
  state.formErrors = errors;
  clearRenderedFormErrors(form);
  form.insertAdjacentHTML("afterbegin", `<div class="form-alert error">${escapeHtml(message)}</div>`);
  let firstField = null;
  Object.entries(errors).forEach(([key, errorMessage]) => {
    const field = findFormField(form, key);
    if (!field) return;
    const wrapper = field.closest(".field") || field.closest(".choice-option") || field.parentElement;
    wrapper?.classList.add("field-error");
    wrapper?.insertAdjacentHTML("beforeend", `<div class="field-error-message">${escapeHtml(errorMessage)}</div>`);
    firstField = firstField || field;
  });
  showToast(message, "error");
  if (firstField) {
    firstField.scrollIntoView({ behavior: "smooth", block: "center" });
    firstField.focus({ preventScroll: true });
  }
}

function handleValidationErrors(form, errors, message = "Preencha os campos obrigatÃ³rios.") {
  if (!Object.keys(errors).length) {
    state.formErrors = {};
    clearRenderedFormErrors(form);
    return false;
  }
  applyFormErrors(form, errors, message);
  return true;
}

function clearFormState() {
  state.formErrors = {};
}

function clearFieldError(target) {
  const key = target.name || target.dataset.draft || (target.dataset.clientPicker !== undefined ? "clientId" : "");
  if (!key || !state.formErrors?.[key]) return;
  delete state.formErrors[key];
  const wrapper = target.closest(".field") || target.closest(".choice-option") || target.parentElement;
  wrapper?.classList.remove("field-error");
  wrapper?.querySelectorAll(".field-error-message").forEach((entry) => entry.remove());
  const form = target.closest("form");
  if (form && !Object.keys(state.formErrors).length) form.querySelectorAll(".form-alert").forEach((entry) => entry.remove());
}

function nextFrame() {
  return new Promise((resolve) => window.requestAnimationFrame(resolve));
}

async function runAction(action, callback, successMessage, successType = "success") {
  if (state.pendingAction) return;
  try {
    state.pendingAction = action;
    clearFormState();
    render();
    await nextFrame();
    const result = await Promise.resolve(callback());
    state.pendingAction = "";
    if (result !== false && successMessage) {
      const message = typeof successMessage === "function" ? successMessage(result) : successMessage;
      if (message) showToast(message, successType);
    }
    render();
  } catch (error) {
    console.error(error);
    state.pendingAction = "";
    showToast(error?.userMessage || "NÃ£o foi possÃ­vel concluir a aÃ§Ã£o. Revise os dados e tente novamente.", "error");
    render();
  }
}

function refreshOperationalStatuses() {
  if (state.apiConnected) return;
  let changed = false;
  store.reservations.forEach((entry) => {
    if (entry.status === "Entregue" && entry.returnDate && entry.returnDate <= todayIso()) {
      entry.status = "Devolução";
      changed = true;
    }
  });
  if (changed) saveStore();
}

function renderLogin() {
  const companyName = escapeHtml(store.company.name);
  app.innerHTML = `
    <main class="auth-layout">
      <section class="brand-panel">
        <div class="brand-copy">
          <img class="brand-logo-large" src="assets/atelie-lica-logo.png" alt="${companyName}" />
          <p class="brand-kicker">Atelier boutique de celebrações</p>
          <h1 class="brand-name">${companyName}</h1>
          <div class="brand-divider" aria-hidden="true"><span></span></div>
          <p class="brand-lede">Seu momento merece cuidado e encanto em cada detalhe.</p>
          <div class="brand-notes" aria-label="Diferenciais do Ateliê">
            <span>Curadoria delicada</span>
            <span>Organização clara</span>
            <span>Cuidado em cada detalhe</span>
          </div>
        </div>
        <div class="hero-art-card">
          <img class="hero-login-image" src="assets/imagem_login_atelie_lica.png" alt="Mesa decorada com balões, flores e bolo em tons rosé e champagne" />
          <div class="hero-caption">
            <strong>Festas com afeto</strong>
            <span>Do primeiro orçamento à assinatura, tudo em um fluxo acolhedor.</span>
          </div>
        </div>
      </section>
      <section class="auth-panel">
        ${state.authView === "register" ? renderRegistrationRequestForm() : `
        <form class="login-box" id="loginForm" autocomplete="off">
          <div class="login-emblem" aria-hidden="true">${loginIcon("sparkle")}</div>
          <h2>Entrar no sistema</h2>
          <p>Acesse com CPF e senha para continuar o fluxo.</p>
          <div class="login-divider" aria-hidden="true"><span></span></div>
          <div class="field login-field">
            <label for="loginCredential">CPF ou login</label>
            <div class="login-input-shell">
              <span class="login-input-icon" aria-hidden="true">${loginIcon("user")}</span>
              <input id="loginCredential" name="login" data-login-credential data-no-autofill type="text" value="" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Digite seu CPF ou login" readonly required />
            </div>
          </div>
          <div class="field login-field">
            <label for="loginPassword">Senha</label>
            <div class="login-input-shell">
              <span class="login-input-icon" aria-hidden="true">${loginIcon("lock")}</span>
              <input id="loginPassword" name="password" data-no-autofill type="password" value="" autocomplete="new-password" placeholder="Digite sua senha" readonly required />
              <button class="password-toggle" type="button" data-toggle-password="loginPassword" aria-label="Mostrar senha">${loginIcon("eye")}</button>
            </div>
          </div>
          <div class="login-actions">
            <button class="primary-button" type="submit">Entrar</button>
            <button class="secondary-button auth-link-button" type="button" data-action="show-register">Cadastrar-se</button>
          </div>
        </form>
        `}
      </section>
    </main>
  `;
  drawHeroArt();
  if (state.authView !== "register") clearLoginAutofill();
}

function loginIcon(name) {
  const icons = {
    user: `<svg viewBox="0 0 24 24" focusable="false"><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>`,
    lock: `<svg viewBox="0 0 24 24" focusable="false"><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v3" /></svg>`,
    sparkle: `<svg viewBox="0 0 24 24" focusable="false"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /><path d="M5 4l.6 1.6L7 6l-1.4.4L5 8l-.6-1.6L3 6l1.4-.4L5 4Z" /></svg>`,
    eye: `<svg viewBox="0 0 24 24" focusable="false"><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></svg>`,
  };
  return icons[name] || "";
}

function clearLoginAutofill() {
  const wipe = () => {
    document.querySelectorAll("#loginForm input").forEach((input) => {
      input.defaultValue = "";
      if (document.activeElement !== input) input.value = "";
    });
  };
  const unlock = () => {
    document.querySelectorAll("#loginForm input").forEach((input) => {
      input.readOnly = false;
    });
  };
  wipe();
  window.requestAnimationFrame(wipe);
  window.setTimeout(wipe, 250);
  window.setTimeout(unlock, 350);
  window.setTimeout(wipe, 700);
  window.setTimeout(wipe, 1200);
}

function renderRegistrationRequestForm() {
  return `
    <form class="login-box registration-box" id="registrationForm" novalidate>
      <h2>Solicitar cadastro</h2>
      <p>Preencha os dados para o Ateliê analisar. O acesso será liberado somente após aprovação do Admin.</p>
      ${renderFormAlert()}
      <div class="form-grid">
        ${registrationFieldDefs.map(renderRegistrationField).join("")}
      </div>
      <div class="hint-box">
        Após aprovação, seu login será o CPF e a senha inicial serão os 5 últimos dígitos do CPF.
      </div>
      <div class="actions">
        <button class="primary-button" type="submit" ${pendingDisabledAttr()}>${pendingLabel("client-registration", "Enviar solicitação", "Enviando...")}</button>
        <button class="secondary-button" type="button" data-action="show-login">Voltar ao login</button>
      </div>
    </form>
  `;
}

function renderRegistrationField(fieldDef) {
  const value = escapeHtml(state.registrationDraft[fieldDef.key] || "");
  const span = fieldDef.span ? ` ${fieldDef.span}` : "";
  const inputmode = fieldDef.inputmode ? ` inputmode="${fieldDef.inputmode}"` : "";
  const autocomplete = fieldDef.autocomplete ? ` autocomplete="${fieldDef.autocomplete}"` : "";
  const maxlength = fieldDef.maxlength ? ` maxlength="${fieldDef.maxlength}"` : "";
  return `
    <div class="field${span}${fieldErrorClass(fieldDef.key)}">
      <label for="registration-${fieldDef.key}">${fieldDef.label}</label>
      <input id="registration-${fieldDef.key}" name="${fieldDef.key}" data-registration-field="${fieldDef.key}" type="${fieldDef.type}" value="${value}"${inputmode}${autocomplete}${maxlength} required />
      ${fieldErrorMessage(fieldDef.key)}
    </div>
  `;
}

function renderShell() {
  const roleLabel = state.user.role === "admin" ? "Admin" : "Cliente";
  const companyName = escapeHtml(store.company.name);
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="topbar-brand">
          <img class="topbar-logo" src="assets/atelie-lica-logo.png" alt="${companyName}" />
          <div>
            <strong>${companyName}</strong>
            <small>${roleLabel}: ${escapeHtml(state.user.name)}</small>
          </div>
        </div>
        <nav class="nav-tabs">${renderNav()}</nav>
        <button class="ghost-button" data-action="logout">Sair</button>
      </header>
      <main class="main">
        ${state.user.role === "admin" ? renderAdmin() : renderClient()}
      </main>
      ${toastMarkup()}
      ${renderModal()}
    </div>
  `;
}

function renderNav() {
  if (state.user.role === "admin") {
    return [
      ["dashboard", "Dashboard"],
      ["reservas", "Reservas"],
      ["financeiro", "Financeiro"],
      ["clientes", "Clientes"],
      ["estoque", "Estoque"],
      ["kit-adicionais", "Kit e Adicionais"],
      ["temas", "Temas"],
      ["acessos", "Acessos"],
      ["novo-orcamento", "Novo orçamento"],
    ]
      .map(([id, label]) => `<button class="tab-button ${state.adminTab === id ? "active" : ""}" data-admin-tab="${id}">${label}</button>`)
      .join("");
  }

  return [
    ["orcamento", "Novo orçamento"],
    ["minhas-reservas", "Meus pedidos"],
  ]
    .map(([id, label]) => `<button class="tab-button ${state.tab === id ? "active" : ""}" data-client-tab="${id}">${label}</button>`)
    .join("");
}

function renderClient() {
  if (state.tab === "minhas-reservas") return renderClientReservations();
  return renderClientJourney();
}

function renderClientJourney() {
  const activeKits = getActiveKits();
  if (!activeKits.some((kitEntry) => kitEntry.id === state.selectedKitId)) state.selectedKitId = activeKits[0]?.id || store.kits[0]?.id;
  return `
    <section class="section-title">
      <div>
        <h2>Solicitar reserva</h2>
        <p>Escolha o kit, personalize com adicionais e envie o comprovante do sinal.</p>
      </div>
    </section>
    ${renderJourneyStepper()}
    ${state.clientStep === 1 ? renderStepSelectKit() : ""}
    ${state.clientStep === 2 ? renderStepSelectTheme() : ""}
    ${state.clientStep === 3 ? renderStepSelectAddons() : ""}
    ${state.clientStep === 4 ? renderStepRequestReservation() : ""}
    ${state.clientStep === 5 ? renderStepConfirmReservation() : ""}
    ${state.clientStep === 6 ? renderStepDeliveryReturn() : ""}
  `;
}

function renderAdminQuoteWorkspace() {
  const client = getAdminQuoteClient();
  if (!state.adminQuoteStarted || !client) return renderAdminQuoteClientSelection();

  const activeKits = getActiveKits();
  if (!activeKits.some((kitEntry) => kitEntry.id === state.selectedKitId)) state.selectedKitId = activeKits[0]?.id || store.kits[0]?.id;

  return `
    <section class="section-title">
      <div>
        <h2>Novo orcamento</h2>
        <p>Criando orcamento para: <strong>${escapeHtml(client.name)}</strong></p>
      </div>
      <button class="secondary-button" data-admin-quote-reset>Trocar cliente</button>
    </section>
    ${state.adminQuotePendingOverride ? `<div class="attention-box admin-quote-attention"><strong>Pendencia financeira liberada pelo Admin</strong><p>Esta solicitacao esta sendo criada mesmo com pendencia anterior do cliente.</p></div>` : ""}
    ${renderJourneyStepper()}
    ${state.clientStep === 1 ? renderStepSelectKit() : ""}
    ${state.clientStep === 2 ? renderStepSelectTheme() : ""}
    ${state.clientStep === 3 ? renderStepSelectAddons() : ""}
    ${state.clientStep === 4 ? renderStepRequestReservation() : ""}
    ${state.clientStep === 5 ? renderStepConfirmReservation() : ""}
    ${state.clientStep === 6 ? renderStepDeliveryReturn() : ""}
  `;
}

function renderAdminQuoteClientSelection() {
  const clients = getFilteredAdminQuoteClients();
  const selected = getAdminQuoteClient();
  const summary = selected ? adminQuoteFinancialSummary(selected.id) : null;
  const hasPending = Boolean(summary?.reservations.length);
  return `
    <section class="section-title">
      <div>
        <h2>Novo orcamento</h2>
        <p>Selecione um cliente cadastrado para iniciar a jornada em nome dele.</p>
      </div>
    </section>
    <div class="workspace-grid admin-quote-grid">
      <section class="panel">
        <div class="panel-header"><h3>Cliente do orcamento</h3><span class="small-note">${clients.length} cliente(s)</span></div>
        <div class="panel-body">
          <div class="field">
            <label for="adminQuoteSearch">Buscar por nome, e-mail ou telefone</label>
            <input id="adminQuoteSearch" type="search" data-admin-quote-search value="${escapeHtml(state.adminQuoteSearch)}" placeholder="Digite para filtrar clientes" />
          </div>
          <div class="admin-client-results">
            ${clients.length ? clients.map(renderAdminQuoteClientOption).join("") : `<div class="empty-state">Nenhum cliente aprovado encontrado.</div>`}
          </div>
        </div>
      </section>
      <aside class="panel">
        <div class="panel-header"><h3>Resumo</h3></div>
        <div class="panel-body">
          ${selected ? renderAdminQuoteClientSummary(selected, summary) : `<div class="empty-state">Escolha um cliente para liberar a jornada.</div>`}
          ${
            selected && hasPending && !state.adminQuotePendingOverride
              ? `<div class="attention-box">
                  <strong>Cliente com pendencia financeira</strong>
                  <p>Existe sinal, pagamento ou valor a receber em reserva anterior. O Admin pode continuar mesmo assim ou cancelar esta solicitacao.</p>
                  <div class="actions">
                    <button class="primary-button" data-admin-quote-continue-pending>Continuar mesmo assim</button>
                    <button class="secondary-button" data-admin-quote-cancel-pending>Cancelar solicitacao</button>
                  </div>
                </div>`
              : ""
          }
          ${
            selected && (!hasPending || state.adminQuotePendingOverride)
              ? `<div class="actions"><button class="primary-button" data-admin-quote-start>Iniciar jornada</button></div>`
              : ""
          }
        </div>
      </aside>
    </div>
  `;
}

function renderAdminQuoteClientOption(client) {
  const selected = client.id === state.adminQuoteClientId;
  const contact = [client.email, client.phone || client.whatsapp].filter(Boolean).join(" · ");
  return `
    <button class="admin-client-option ${selected ? "selected" : ""}" data-admin-quote-client="${escapeAttr(client.id)}">
      <strong>${escapeHtml(client.name || "Cliente")}</strong>
      <span>${escapeHtml(contact || client.cpf || "Sem contato")}</span>
    </button>
  `;
}

function renderAdminQuoteClientSummary(client, summary = adminQuoteFinancialSummary(client.id)) {
  const pendingRows = summary.reservations.slice(0, 3);
  return `
    <div class="admin-client-summary">
      <div class="summary-list">
        <div class="summary-row"><span>Nome</span><strong>${escapeHtml(client.name || "Cliente")}</strong></div>
        <div class="summary-row"><span>E-mail</span><strong>${escapeHtml(client.email || "Nao informado")}</strong></div>
        <div class="summary-row"><span>Telefone</span><strong>${escapeHtml(client.phone || client.whatsapp || "Nao informado")}</strong></div>
        <div class="summary-row"><span>Pendencias</span><strong>${summary.reservations.length ? `${summary.reservations.length} reserva(s)` : "Sem pendencias"}</strong></div>
        ${summary.total ? `<div class="summary-row total"><span>Total em aberto</span><strong>${money(summary.total)}</strong></div>` : ""}
      </div>
      ${
        pendingRows.length
          ? `<div class="mini-list">${pendingRows.map((entry) => `<button class="mini-list-row" data-open-reservation="${escapeAttr(entry.id)}" data-jump-reservations="true"><span>${escapeHtml(entry.id)} · ${dateLabel(entry.eventDate)}</span>${statusPill(entry.status)}</button>`).join("")}</div>`
          : `<div class="hint-box">Cliente liberado para uma nova solicitacao pelo Admin.</div>`
      }
    </div>
  `;
}

function renderJourneyStepper() {
  const quote = calculateQuote();
  const steps = [
    [1, "Selecionar Kit"],
    [2, "Escolher Tema"],
    [3, "Adicionais"],
    [4, `Solicitar Reserva - Sinal ${money(quote.deposit)}`],
    [5, "Confirmar Reserva"],
    [6, "Entrega e Devolução do Kit"],
  ];
  return `
    <div class="journey-steps">
      ${steps
        .map(([step, label]) => {
          const canOpen = canOpenClientStep(step);
          return `
            <button class="journey-step ${state.clientStep === step ? "active" : ""} ${state.clientStep > step ? "done" : ""} ${canOpen ? "" : "locked"}" data-client-step="${step}" ${canOpen ? "" : "disabled"} title="${canOpen ? "" : "Etapa bloqueada. Conclua as etapas anteriores ou aguarde o Ateliê."}">
              <span>${step}</span>${label}
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function legacyCanOpenClientStep(step) {
  const requestedStep = Number(step);
  const currentReservation = getCurrentClientReservation();
  if (requestedStep === 1) return true;
  if (requestedStep === 2) return Boolean(getSelectedKit());
  if (requestedStep === 3) return Boolean(getSelectedKit() && themeSelectionName());
  if (requestedStep === 4) return Boolean(getSelectedKit() && themeSelectionName());
  if (requestedStep === 5) return Boolean(currentReservation && !isCreatingNewQuote() && currentReservation.contractGeneratedAt);
  if (requestedStep === 6) {
    return Boolean(
      currentReservation &&
        !isCreatingNewQuote() &&
        (currentReservation.signature || ["Entregue", "Devolução", "Finalizado"].includes(currentReservation.status))
    );
  }
  return false;
}

function legacyGoToClientStep(step) {
  const requestedStep = Number(step);
  if (!canOpenClientStep(requestedStep)) {
    showToast("Essa etapa ainda não está liberada. Conclua as etapas anteriores ou aguarde a confirmação do Ateliê.", "warning");
    return;
  }
  if (requestedStep <= 4 && state.user?.role === "client") {
    state.newQuoteMode = true;
    if (requestedStep < 4) {
      state.selectedReservationId = null;
    }
  }
  state.clientStep = requestedStep;
  render();
}

function canOpenClientStep(step) {
  const requestedStep = Number(step);
  const currentReservation = getCurrentClientReservation();

  if (isAdminQuoteMode()) {
    if (!getAdminQuoteClient()) return false;

    if (state.newQuoteMode) {
      if (requestedStep === 1) return true;
      if (requestedStep === 2 || requestedStep === 3) return Boolean(getSelectedKit());
      if (requestedStep === 4) return Boolean(getSelectedKit() && themeSelectionName());
      if (requestedStep === 5 || requestedStep === 6) return false;
    }

    if (!state.newQuoteMode) {
      if (requestedStep < 4) return false;
      if (requestedStep === 4) return Boolean(currentReservation);

      if (requestedStep === 5) {
        return Boolean(
          currentReservation &&
          (
            currentReservation.contractGeneratedAt ||
            ["Reserva confirmada", "Preparar Kit"].includes(currentReservation.status)
          )
        );
      }

      if (requestedStep === 6) {
        return Boolean(
          currentReservation &&
          (
            isReservationContractSigned(currentReservation) ||
            ["Entregue", "DevoluÃ§Ã£o", "Finalizado"].includes(currentReservation.status)
          )
        );
      }
    }

    return false;
  }

  if (state.user?.role !== "client") return true;

  if (state.newQuoteMode) {
    if (requestedStep === 1) return true;
    if (requestedStep === 2 || requestedStep === 3) return Boolean(getSelectedKit());
    if (requestedStep === 4) return Boolean(getSelectedKit() && themeSelectionName());
    if (requestedStep === 5 || requestedStep === 6) return false;
  }

  if (!state.newQuoteMode) {
    if (requestedStep < 4) return false;
    if (requestedStep === 4) return Boolean(currentReservation);

    if (requestedStep === 5) {
      return Boolean(
        currentReservation &&
        (
          currentReservation.contractGeneratedAt ||
          ["Reserva confirmada", "Preparar Kit"].includes(currentReservation.status)
        )
      );
    }

    if (requestedStep === 6) {
      return Boolean(
        currentReservation &&
        (
          isReservationContractSigned(currentReservation) ||
          ["Entregue", "Devolução", "Finalizado"].includes(currentReservation.status)
        )
      );
    }
  }

  return false;
}

function goToClientStep(step) {
  const requestedStep = Number(step);

  if (!canOpenClientStep(requestedStep)) {
    showToast("Essa etapa ainda não está liberada para esta proposta.", "warning");
    return;
  }

  state.clientStep = requestedStep;
  render();
}

function renderStepSelectKit() {
  const activeKits = getActiveKits();
  if (!activeKits.length) return `<div class="empty-state">Nenhum kit ativo no momento.</div>`;
  return `
    <section class="panel">
      <div class="panel-header"><h3>1. Selecionar Kit</h3><span class="small-note">${activeKits.length} kit(s) disponíveis</span></div>
      <div class="panel-body">
        <div class="kit-grid">${activeKits.map(renderClientKitCard).join("")}</div>
        <div class="actions">
          <button class="primary-button" data-next-step="2" ${state.selectedKitId ? "" : "disabled"}>Avançar para tema</button>
        </div>
      </div>
    </section>
  `;
}

function renderClientKitCard(kitEntry) {
  const selected = kitEntry.id === state.selectedKitId;
  return `
    <article class="kit-card ${selected ? "selected" : ""}">
      ${renderMediaCarousel("kit", kitEntry)}
      <div>
        <h4>${escapeHtml(kitEntry.name)}</h4>
        <p class="kit-meta">${escapeHtml(kitEntry.description || "")}</p>
      </div>
      <div class="kit-meta">${escapeHtml(shortText(kitEntry.itemsText, 140))}</div>
      <div class="price">${money(kitPrice(kitEntry))}</div>
      <button class="${selected ? "primary-button" : "secondary-button"}" data-kit-id="${escapeAttr(kitEntry.id)}">${selected ? "Selecionado" : "Selecionar kit"}</button>
    </article>
  `;
}

function renderStepSelectTheme() {
  const themes = getActiveThemes();
  const customMode = isCustomThemeMode();
  const hasTheme = Boolean(themeSelectionName());
  return `
    <section class="panel">
      <div class="panel-header"><h3>2. Escolher Tema/Kit</h3><span class="small-note">${themes.length} tema(s) disponíveis</span></div>
      <div class="panel-body">
        <div class="item-grid">
          ${themes.map(renderClientThemeCard).join("")}
          ${renderCustomThemeCard()}
        </div>
        ${themes.length ? "" : `<div class="small-note">Nenhum tema cadastrado ativo no momento.</div>`}
        <div class="field full-span theme-custom-field">
          <label for="customTheme">Tema desejado</label>
          <input id="customTheme" data-draft="customTheme" type="text" value="${escapeHtml(state.draft.customTheme || "")}" placeholder="Ex.: Dinossauro, Borboletas, Jardim encantado" ${customMode ? "required" : "disabled"} />
          ${
            customMode
              ? `<div class="hint-box">O tema desejado será personalizado, feito manualmente. Em caso de dúvidas, entre em contato pelo WhatsApp.</div>`
              : `<div class="small-note">Marque "Não tem na lista de temas" para digitar manualmente.</div>`
          }
        </div>
        <div class="actions">
          <button class="secondary-button" data-prev-step="1">Voltar</button>
          <button class="primary-button" data-next-step="3" ${hasTheme ? "" : "disabled"}>Avançar para adicionais</button>
        </div>
      </div>
    </section>
  `;
}

function renderClientThemeCard(themeEntry) {
  const selected = !isCustomThemeMode() && themeEntry.id === state.selectedThemeId;
  return `
    <label class="item-card ${selected ? "selected" : ""}">
      ${renderMediaCarousel("theme", themeEntry)}
      <input type="radio" name="theme" data-theme-id="${escapeAttr(themeEntry.id)}" ${selected ? "checked" : ""} />
      <h4>${escapeHtml(themeEntry.name)}</h4>
      <div class="item-meta">${escapeHtml(themeEntry.description || "")}</div>
    </label>
  `;
}

function renderCustomThemeCard() {
  const selected = isCustomThemeMode();
  return `
    <label class="item-card ${selected ? "selected" : ""}">
      <div class="media-placeholder">Tema</div>
      <input type="radio" name="theme" data-theme-custom="true" ${selected ? "checked" : ""} />
      <h4>Não tem na lista de temas</h4>
      <div class="item-meta">Escolha esta opção para informar um tema personalizado.</div>
    </label>
  `;
}

function renderStepSelectAddons() {
  const addons = getActiveAddons();
  return `
    <section class="panel">
      <div class="panel-header"><h3>3. Adicionais</h3><span class="small-note">${addons.length} adicional(is) disponíveis</span></div>
      <div class="panel-body">
        ${addons.length ? `<div class="item-grid">${addons.map(renderClientAddonCard).join("")}</div>` : `<div class="empty-state">Nenhum adicional ativo no momento.</div>`}
        <div class="actions">
          <button class="secondary-button" data-prev-step="2">Voltar</button>
          <button class="primary-button" data-next-step="4">Avançar para sinal</button>
        </div>
      </div>
    </section>
  `;
}

function renderClientAddonCard(addonEntry) {
  const selected = state.selectedAdditions.includes(addonEntry.id);
  return `
    <label class="item-card ${selected ? "selected" : ""}">
      ${renderMediaCarousel("addon", addonEntry)}
      <input type="checkbox" data-addition-code="${escapeAttr(addonEntry.id)}" ${selected ? "checked" : ""} />
      <h4>${escapeHtml(addonEntry.name)}</h4>
      <div class="item-meta">${escapeHtml(addonEntry.description || "")}</div>
      <strong class="price">${money(addonEntry.price)}</strong>
    </label>
  `;
}

function renderStepRequestReservation() {
  const adminQuoteMode = isAdminQuoteMode();
  const reservation = state.user?.role === "client" || adminQuoteMode
    ? getCurrentClientReservation()
    : store.reservations.find((entry) => entry.id === state.selectedReservationId);
  const status = reservation?.status || "Aguardando envio do comprovante";
  const selectedKit = getSelectedKit();
  const lockedReservation = Boolean(reservation && !state.newQuoteMode && (state.user?.role === "client" || adminQuoteMode));
  if ((state.user?.role === "client" || adminQuoteMode) && !state.newQuoteMode && !reservation) {
    return `
      <section class="panel">
        <div class="panel-header"><h3>4. Solicitar Reserva - Sinal</h3></div>
        <div class="panel-body">
          <div class="empty-state">Não encontramos a proposta selecionada.</div>
          <div class="actions"><button class="secondary-button" data-client-tab="minhas-reservas">Ver meus pedidos</button></div>
        </div>
      </section>
    `;
  }
  return `
    <div class="admin-reservations-layout">
      <section class="panel reservations-list-panel">
        <div class="panel-header"><h3>4. Solicitar Reserva - Sinal</h3>${statusPill(status)}</div>
        <div class="panel-body">
          ${lockedReservation ? renderSubmittedReservationView(reservation) : `${renderSelectedItemsPanel(selectedKit)}${renderReservationRequestForm()}`}
          ${
            lockedReservation
              ? renderLockedReservationActions(reservation)
              : `<div class="actions"><button class="secondary-button" data-prev-step="3">Voltar</button></div>`
          }
        </div>
      </section>
      <aside class="panel reservation-detail-panel">
        <div class="panel-header"><h3>Resumo de valores</h3></div>
        <div class="panel-body">${lockedReservation ? renderReservationValueSummary(reservation) : renderJourneyBudgetSummary()}</div>
      </aside>
    </div>
  `;
}

function renderLockedReservationActions(reservation) {
  if (isAdminQuoteMode()) {
    const canConfirm = canConfirmDeposit(reservation);
    const contractReady = Boolean(reservation.contractGeneratedAt);
    return `
      <div class="actions">
        <button class="primary-button" data-admin-journey-confirm-deposit="${escapeAttr(reservation.id)}" ${canConfirm ? pendingDisabledAttr() : 'disabled title="Disponivel somente quando a reserva estiver aguardando confirmacao de sinal."'}>${pendingLabel("confirm-deposit", "Confirmar sinal e reserva", "Confirmando...")}</button>
        <button class="secondary-button" data-admin-journey-generate-contract="${escapeAttr(reservation.id)}" ${reservation.deposit <= 0 && !contractReady ? "disabled" : pendingDisabledAttr()}>${pendingLabel("generate-contract", "Gerar contrato", "Gerando...")}</button>
        ${contractReady ? `<button class="primary-button" data-next-step="5">Ir para contrato</button>` : ""}
        <button class="secondary-button" data-open-reservation="${escapeAttr(reservation.id)}" data-jump-reservations="true">Abrir em Reservas</button>
        <button class="secondary-button" data-admin-quote-reset>Nova solicitacao</button>
      </div>
    `;
  }

  return `<div class="actions"><button class="primary-button" data-refresh-client-proposal>Atualizar status</button><button class="secondary-button" data-client-tab="minhas-reservas">Ver meus pedidos</button><button class="secondary-button" data-start-client-quote>Solicitar novo orçamento</button></div>`;
}

function renderSubmittedReservationView(reservation) {
  const addonRows = (reservation.addonIds || []).map((id) => store.addons.find((entry) => entry.id === id)).filter(Boolean);
  return `
    <div class="submitted-reservation">
      <div>
        <span class="small-note">Reserva solicitada</span>
        <h4>${escapeHtml(reservation.id)} · ${escapeHtml(reservation.kitName)}</h4>
      </div>
      <div class="summary-list">
        <div class="summary-row"><span>Data do evento</span><strong>${dateLabel(reservation.eventDate)}</strong></div>
        <div class="summary-row"><span>Tema</span><strong>${escapeHtml(reservationThemeLabel(reservation))}</strong></div>
        <div class="summary-row"><span>Devolução</span><strong>${dateLabel(reservation.returnDate)}</strong></div>
        <div class="summary-row"><span>Status</span><strong>${statusPill(reservation.status)}</strong></div>
        <div class="summary-row"><span>Sinal</span><strong>${money(reservation.signalDue || reservation.total * 0.5)}</strong></div>
        <div class="summary-row"><span>Forma de pagamento</span><strong>${escapeHtml(reservation.paymentMethod || "Pendente")}</strong></div>
        <div class="summary-row"><span>Comprovante</span><strong>${reservation.receiptName ? escapeHtml(reservation.receiptName) : "Não anexado"}</strong></div>
      </div>
      ${reservation.clientCorrectionNote ? `<div class="attention-box"><strong>Dados informados como divergentes</strong><p>${escapeHtml(reservation.clientCorrectionNote)}</p></div>` : ""}
      ${
        addonRows.length
          ? `<div><strong>Adicionais</strong><ul class="item-list">${addonRows.map((entry) => `<li>${escapeHtml(entry.name)} · ${money(entry.price)}</li>`).join("")}</ul></div>`
          : `<div class="small-note">Sem adicionais nessa reserva.</div>`
      }
      <div class="hint-box">Sua solicitação foi enviada. Agora os dados ficam bloqueados para edição; o Ateliê LICA Festas confere o sinal e libera o contrato.</div>
    </div>
  `;
}

function renderReservationValueSummary(reservation) {
  const finance = reservationFinancials(reservation);
  return `
    <div class="summary-list">
      <div class="summary-row"><span>Kit</span><strong>${money(reservation.kitValue)}</strong></div>
      <div class="summary-row"><span>Tema</span><strong>${escapeHtml(reservationThemeLabel(reservation))}</strong></div>
      <div class="summary-row"><span>Adicionais</span><strong>${money(reservation.additionalValue || 0)}</strong></div>
      ${reservation.discount ? `<div class="summary-row"><span>Desconto</span><strong>${money(reservation.discount)}</strong></div>` : ""}
      ${reservation.serviceFee ? `<div class="summary-row"><span>Serviços</span><strong>${money(reservation.serviceFee)}</strong></div>` : ""}
      <div class="summary-row total"><strong>Valor Total</strong><strong>${money(reservation.total)}</strong></div>
      <div class="hint-box">Sinal de ${money(reservation.signalDue || reservation.total * 0.5)}.</div>
      <div class="summary-row"><span>Restante do pagamento</span><strong>${money(finance.balanceDue)}</strong></div>
      ${finance.extraCharges ? `<div class="summary-row"><span>Avarias/reposição</span><strong>${money(finance.extraCharges)}</strong></div>` : ""}
      ${finance.finalDue ? `<div class="summary-row total"><strong>Total pendente</strong><strong>${money(finance.finalDue)}</strong></div>` : ""}
      <div>${statusPill(reservation.status)}</div>
    </div>
  `;
}

function renderSelectedItemsPanel(selectedKit) {
  const addons = getSelectedItems();
  return `
    <div class="selected-package">
      <h4>${escapeHtml(selectedKit.name)}</h4>
      <div class="summary-row"><span>Tema escolhido</span><strong>${escapeHtml(themeSelectionName() || "A definir")}</strong></div>
      <p class="muted">${escapeHtml(selectedKit.itemsText || selectedKit.description || "")}</p>
      ${
        addons.length
          ? `<strong>Adicionais selecionados</strong><ul class="item-list">${addons.map((addonEntry) => `<li>${escapeHtml(addonEntry.name)} · ${money(addonEntry.price)}</li>`).join("")}</ul>`
          : `<div class="small-note">Sem adicionais selecionados.</div>`
      }
    </div>
  `;
}

function renderReservationRequestForm() {
  const d = state.draft;
  const quote = calculateQuote();
  return `
    <form id="checkoutForm" novalidate>
      ${renderFormAlert()}
      <div class="form-grid">
        ${renderClientDataReview()}
        <div class="field${fieldErrorClass("eventDate")}">
          <label for="eventDate">Data do evento</label>
          <input id="eventDate" data-draft="eventDate" type="date" min="${minEventDate()}" value="${escapeHtml(d.eventDate || "")}" required />
          ${fieldErrorMessage("eventDate")}
        </div>
        ${
          isAdminQuoteMode()
            ? `<div class="field">
                <label for="deliveryDate">Entrega/retirada</label>
                <input id="deliveryDate" data-draft="deliveryDate" type="date" min="${minEventDate()}" value="${escapeHtml(d.deliveryDate || d.eventDate || "")}" />
              </div>`
            : ""
        }
        <div class="field">
          <label for="returnDate">Devolução</label>
          <input id="returnDate" data-draft="returnDate" type="date" value="${escapeHtml(d.returnDate || "")}" readonly />
        </div>
        <div class="field full-span${fieldErrorClass("address")}">
          <label for="address">Endereço do evento</label>
          <textarea id="address" data-draft="address" required readonly>${escapeHtml(d.address)}</textarea>
          ${fieldErrorMessage("address")}
        </div>
        ${renderClientCorrectionReview()}
        <div class="field full-span">
          <label>Serviços desejados</label>
          <div class="choice-grid">
            <label class="choice-option"><input type="checkbox" data-draft-check="delivery" ${d.delivery ? "checked" : ""} /> Entrega ${money(store.serviceFees.delivery)}</label>
            <label class="choice-option"><input type="checkbox" data-draft-check="assembly" ${d.assembly ? "checked" : ""} /> Montagem ${money(store.serviceFees.assembly)}</label>
            <label class="choice-option"><input type="checkbox" data-draft-check="returnService" ${d.returnService ? "checked" : ""} /> Devolução ${money(store.serviceFees.returnService)}</label>
          </div>
        </div>
        ${renderPaymentMethodSelection(quote)}
        <div class="field full-span">
          <label for="receipt">Anexar comprovante do sinal</label>
          <input id="receipt" type="file" accept="image/*,.pdf" data-receipt />
          <div class="small-note">${d.receiptName ? `Comprovante anexado: ${escapeHtml(d.receiptName)}` : "Anexe o comprovante ou envie pelo WhatsApp."}</div>
        </div>
      </div>
      <div class="actions">
        <button class="primary-button" type="submit" ${pendingDisabledAttr()}>${pendingLabel("submit-reservation", isAdminQuoteMode() ? "Criar reserva em nome do cliente" : "Solicitar reserva", "Criando reserva...")}</button>
        <a class="secondary-button" href="${whatsAppQuoteLink()}" target="_blank" rel="noreferrer">Enviar pelo WhatsApp</a>
      </div>
    </form>
  `;
}

function renderClientDataReview() {
  const d = state.draft;
  const rows = [
    ["Nome", d.name],
    ["CPF", d.cpf],
    ["Telefone", d.phone],
    ["WhatsApp", d.whatsapp],
  ];

  return `
    <div class="readonly-review full-span">
      <div class="readonly-review-header">
        <strong>Dados do cliente</strong>
        <span>Somente visualizacao</span>
      </div>
      <div class="readonly-review-grid">
        ${rows.map(([label, value]) => `
          <div class="readonly-review-item">
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value || "Nao informado")}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderClientCorrectionReview() {
  const d = state.draft;
  return `
    <div class="field full-span">
      <label class="choice-option">
        <input type="checkbox" data-draft-check="clientCorrectionFlag" ${d.clientCorrectionFlag ? "checked" : ""} />
        Algum dado nao confere
      </label>
      ${
        d.clientCorrectionFlag
          ? `<textarea data-draft="clientCorrectionNote" placeholder="Informe o que precisa ser corrigido pelo Atelie antes da reserva.">${escapeHtml(d.clientCorrectionNote || "")}</textarea>`
          : `<div class="small-note">Se algum dado estiver incorreto, marque a opcao para avisar o Atelie.</div>`
      }
    </div>
  `;
}

function renderPaymentMethodSelection(quote) {
  const methods = getActivePaymentMethods();
  if (methods.length && !selectedPaymentMethod()) state.draft.paymentMethod = methods[0].name;
  const selected = selectedPaymentMethod();

  if (!methods.length) {
    return `
      <div class="payment-method-section full-span">
        <div class="deposit-highlight">
          <span>Sinal da reserva</span>
          <strong>${money(quote.deposit)}</strong>
        </div>
        <div class="hint-box">Nenhuma forma de pagamento ativa no momento. Fale com o Atelie para combinar o sinal.</div>
      </div>
    `;
  }

  return `
    <div class="payment-method-section full-span">
      <div class="deposit-highlight">
        <span>Sinal da reserva</span>
        <strong>${money(quote.deposit)}</strong>
      </div>
      <label>Forma de pagamento do sinal</label>
      <div class="payment-method-grid">
        ${methods.map((methodEntry) => {
          const checked = selected?.id === methodEntry.id;
          return `
            <label class="payment-method-option ${checked ? "selected" : ""}">
              <input type="radio" name="paymentMethod" data-payment-method="${escapeAttr(methodEntry.name)}" value="${escapeAttr(methodEntry.name)}" ${checked ? "checked" : ""} />
              <strong>${escapeHtml(methodEntry.name)}</strong>
              <span>${escapeHtml(paymentMethodTypeLabel(methodEntry.type))}</span>
            </label>
          `;
        }).join("")}
      </div>
      ${selected ? renderSelectedPaymentInstructions(selected, quote.deposit) : ""}
    </div>
  `;
}

function renderSelectedPaymentInstructions(methodEntry, amount) {
  const instructions = methodEntry.instructions || "Siga as orientacoes combinadas com o Atelie para concluir o sinal.";
  const isPix = String(methodEntry.type || "").toLowerCase() === "pix" || methodEntry.name.toLowerCase() === "pix";
  const pixPayload = isPix ? buildPixCopiaECola(methodEntry, amount) : "";
  return `
    <div class="payment-detail">
      <div>
        <strong>Dados para pagamento</strong>
        <p>${escapeHtml(instructions)}</p>
        ${methodEntry.bank ? `<p><strong>Banco:</strong> ${escapeHtml(methodEntry.bank)}</p>` : ""}
        ${isPix && (methodEntry.pixKey || store.company.pixKey) ? `<p><strong>Chave PIX:</strong> ${escapeHtml(methodEntry.pixKey || store.company.pixKey)}</p>` : ""}
      </div>
      ${
        pixPayload
          ? `<div class="pix-qr-box">
              <img src="${escapeAttr(pixQrCodeSrc(pixPayload))}" alt="QR Code PIX" />
              <label for="pixCopyCode">PIX Copia e Cola</label>
              <textarea id="pixCopyCode" readonly>${escapeHtml(pixPayload)}</textarea>
            </div>`
          : isPix
            ? `<div class="hint-box">Configure a chave PIX no Financeiro para gerar o QR Code automaticamente.</div>`
            : ""
      }
    </div>
  `;
}

function paymentMethodTypeLabel(type) {
  const labels = {
    pix: "PIX Copia e Cola",
    dinheiro: "Pagamento presencial",
    cartao: "Cartao",
    transferencia: "Transferencia",
    outro: "Personalizado",
  };
  return labels[type] || "Personalizado";
}

function pixQrCodeSrc(payload) {
  return `${apiBaseUrl}/pix/qrcode?data=${encodeURIComponent(payload)}`;
}

function buildPixCopiaECola(methodEntry, amount) {
  const pixKey = String(methodEntry.pixKey || store.company.pixKey || "").trim();
  if (!pixKey) return "";

  const merchantName = sanitizePixField(methodEntry.pixName || store.company.pixName || store.company.name || "ATELIE LICA", 25);
  const merchantCity = sanitizePixField(methodEntry.pixCity || "PARNAIBA", 15);
  const txid = sanitizePixField(state.selectedReservationId || state.user?.clientId || "SINAL", 25);
  const merchantAccount = emvField("00", "br.gov.bcb.pix") + emvField("01", pixKey) + emvField("02", "SINAL RESERVA");
  const payload =
    emvField("00", "01") +
    emvField("26", merchantAccount) +
    emvField("52", "0000") +
    emvField("53", "986") +
    emvField("54", Number(amount || 0).toFixed(2)) +
    emvField("58", "BR") +
    emvField("59", merchantName) +
    emvField("60", merchantCity) +
    emvField("62", emvField("05", txid)) +
    "6304";

  return `${payload}${crc16(payload)}`;
}

function emvField(id, value) {
  const text = String(value || "");
  return `${id}${String(text.length).padStart(2, "0")}${text}`;
}

function sanitizePixField(value, limit) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "")
    .toUpperCase()
    .slice(0, limit);
}

function crc16(payload) {
  let crc = 0xffff;
  for (let offset = 0; offset < payload.length; offset += 1) {
    crc ^= payload.charCodeAt(offset) << 8;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function renderJourneyBudgetSummary() {
  const quote = calculateQuote();
  return `
    <div class="summary-list">
      <div class="summary-row"><span>Kit</span><strong>${money(quote.kitValue)}</strong></div>
      <div class="summary-row"><span>Adicionais</span><strong>${money(quote.additions)}</strong></div>
      ${quote.delivery ? `<div class="summary-row"><span>Entrega</span><strong>${money(quote.delivery)}</strong></div>` : ""}
      ${quote.assembly ? `<div class="summary-row"><span>Montagem</span><strong>${money(quote.assembly)}</strong></div>` : ""}
      ${quote.returnService ? `<div class="summary-row"><span>Devolução</span><strong>${money(quote.returnService)}</strong></div>` : ""}
      <div class="summary-row total"><strong>Valor Total</strong><strong>${money(quote.total)}</strong></div>
      <div class="hint-box">Sinal de ${money(quote.deposit)}. O Ateliê LICA Festas confirma o pagamento do sinal e cria a Reserva e libera o contrato para assinatura.</div>
      <div>${statusPill("Aguardando confirmação de sinal")}</div>
    </div>
  `;
}

function renderStepConfirmReservation() {
  const reservation = getCurrentClientReservation();
  const adminQuoteMode = isAdminQuoteMode();
  if (!reservation || !reservation.contractGeneratedAt) {
    return `
      <section class="panel">
        <div class="panel-header"><h3>5. Confirmar Reserva</h3></div>
        <div class="panel-body">
          <div class="empty-state">Assim que o admin confirmar o sinal, o contrato aparece aqui para assinatura.</div>
          <div class="actions">
            ${adminQuoteMode && reservation ? `<button class="primary-button" data-admin-journey-generate-contract="${escapeAttr(reservation.id)}">Gerar contrato</button>` : `<button class="secondary-button" data-refresh-client-proposal>Atualizar status</button>`}
            <button class="secondary-button" data-prev-step="4">Voltar</button>
          </div>
        </div>
      </section>
    `;
  }
  return `
    <section class="panel">
      <div class="panel-header"><h3>5. Confirmar Reserva</h3>${statusPill(reservation.status)}</div>
      <div class="panel-body">
        ${renderContractPaper(reservation, !reservation.signature && (state.user?.role === "client" || adminQuoteMode))}
        ${adminQuoteMode ? renderPhysicalContractUpload(reservation) : ""}
        <div class="actions">
          ${state.user?.role === "client" ? `<button class="secondary-button" data-refresh-client-proposal>Atualizar status</button>` : ""}
          ${reservation.signature ? "" : `<button class="secondary-button" data-action="clear-signature">Limpar assinatura</button><button class="primary-button" data-save-signature="${escapeAttr(reservation.id)}">Confirmar e assinar contrato</button>`}
          ${reservation.signature ? `<button class="primary-button" data-next-step="6">Ver entrega e devolução</button>` : ""}
          <button class="secondary-button" data-prev-step="4">Voltar</button>
        </div>
      </div>
    </section>
  `;
}

function renderStepDeliveryReturn() {
  const reservation = getCurrentClientReservation();
  if (!reservation) {
    return `
      <section class="panel">
        <div class="panel-header"><h3>6. Entrega e Devolução do Kit</h3></div>
        <div class="panel-body">
          <div class="empty-state">Depois da assinatura, as informações de entrega e devolução aparecem aqui.</div>
        </div>
      </section>
    `;
  }
  const items = (reservation.itemCodes || []).map(findItem).filter(Boolean);
  const replacementTotal = items.reduce((sum, entry) => sum + Number(entry.replacement || 0), 0);
  const deliveryMode = reservation.delivery ? "Entrega pelo Ateliê LICA Festas" : "Retirada pelo cliente";
  const returnMode = reservation.returnService ? "Retirada pelo Ateliê LICA Festas" : "Devolução pelo cliente";
  const finance = reservationFinancials(reservation);
  return `
    <section class="panel">
      <div class="panel-header"><h3>6. Entrega e Devolução do Kit</h3>${statusPill(reservation.status)}</div>
      <div class="panel-body">
        <div class="handoff-grid">
          <article class="handoff-card">
            <span>Entrega/Retirada</span>
            <strong>${dateLabel(reservation.deliveryDate)}</strong>
            <p>${reservation.deliveryDate ? `${deliveryMode}${reservation.assembly ? " com montagem inclusa" : " sem montagem"}` : "O admin ainda vai definir essa data."}</p>
          </article>
          <article class="handoff-card">
            <span>Evento</span>
            <strong>${dateLabel(reservation.eventDate)}</strong>
            <p>${escapeHtml(reservation.kitName)} · Tema: ${escapeHtml(reservationThemeLabel(reservation))} · ${money(reservation.total)}</p>
          </article>
          <article class="handoff-card">
            <span>Devolução</span>
            <strong>${dateLabel(reservation.returnDate)}</strong>
            <p>${returnMode}</p>
          </article>
        </div>
        <div class="care-box">
          <h4>Conservação dos itens</h4>
          <p>Guarde as peças em local seco, evite fita adesiva diretamente nos itens, mantenha bandejas e estruturas longe de chuva e calor excessivo, e confira tudo antes da devolução.</p>
          <div class="summary-row"><span>Itens vinculados</span><strong>${items.length}</strong></div>
          <div class="summary-row"><span>Referência de reposição em caso de perda/dano</span><strong>${money(replacementTotal)}</strong></div>
          <div class="small-note">A cobrança final considera apenas itens perdidos, quebrados ou devolvidos com dano identificado na conferência.</div>
        </div>
        <div class="care-box">
          <h4>Pagamento e conferência</h4>
          <div class="summary-row"><span>Restante do pagamento</span><strong>${money(finance.balanceDue)}</strong></div>
          <div class="summary-row"><span>Avarias</span><strong>${money(finance.damageFee)}</strong></div>
          <div class="summary-row"><span>Reposição</span><strong>${money(finance.replacementFee)}</strong></div>
          <div class="summary-row total"><strong>Total pendente</strong><strong>${money(finance.finalDue)}</strong></div>
          ${reservation.financeNotes ? `<p>${escapeHtml(reservation.financeNotes)}</p>` : `<div class="small-note">Valores de avarias ou reposição aparecem aqui quando houver conferência do admin.</div>`}
        </div>
        <div class="actions">
          <button class="secondary-button" data-refresh-client-proposal>Atualizar status</button>
          <button class="secondary-button" data-start-client-quote>Solicitar novo orçamento</button>
        </div>
      </div>
    </section>
  `;
}

function renderMediaCarousel(kind, entry) {
  const photos = entry.photos || [];
  const placeholder = kind === "kit" ? "Kit" : kind === "theme" ? "Tema" : "Adicional";
  if (!photos.length) return `<div class="media-placeholder">${placeholder}</div>`;
  const key = `${kind}:${entry.id}`;
  const currentIndex = Math.min(state.mediaIndex[key] || 0, photos.length - 1);
  return `
    <div class="media-carousel">
      <img src="${safeImageSrc(photos[currentIndex])}" alt="${escapeAttr(entry.name)}" />
      ${
        photos.length > 1
          ? `<button type="button" class="media-arrow left" data-photo-prev="${escapeAttr(key)}">‹</button><button type="button" class="media-arrow right" data-photo-next="${escapeAttr(key)}">›</button><span class="media-count">${currentIndex + 1}/${photos.length}</span>`
          : ""
      }
    </div>
  `;
}

function getActiveKits() {
  return store.kits.filter((kitEntry) => kitEntry.enabled !== false);
}

function getActiveAddons() {
  return store.addons.filter((addonEntry) => addonEntry.enabled !== false);
}

function getActiveThemes() {
  return store.themes.filter((themeEntry) => themeEntry.enabled !== false);
}

function getPaymentMethods() {
  return store.paymentMethods || [];
}

function getActivePaymentMethods() {
  return getPaymentMethods().filter((methodEntry) => methodEntry.enabled !== false);
}

function paymentMethodOptions(includePending = false) {
  const names = [
    ...getPaymentMethods().map((methodEntry) => methodEntry.name).filter(Boolean),
    ...(includePending ? ["Pendente"] : []),
  ];
  const fallback = includePending
    ? ["PIX", "Dinheiro", "Cartao", "Transferencia", "Pendente"]
    : ["PIX", "Dinheiro", "Cartao", "Transferencia"];
  return [...new Set(names.length ? names : fallback)];
}

function selectedPaymentMethod() {
  const selectedValue = state.draft.paymentMethod;
  const activeMethods = getActivePaymentMethods();
  return activeMethods.find((methodEntry) => methodEntry.name === selectedValue || methodEntry.id === selectedValue) || activeMethods[0] || null;
}

function getSelectedTheme() {
  if (isCustomThemeMode()) return null;
  return getActiveThemes().find((entry) => entry.id === state.selectedThemeId);
}

function isCustomThemeMode() {
  return state.draft.customThemeMode === true;
}

function themeSelectionName() {
  return isCustomThemeMode() ? state.draft.customTheme?.trim() || "" : getSelectedTheme()?.name || "";
}

function reservationThemeLabel(entry) {
  return entry.customTheme || entry.themeName || store.themes.find((themeEntry) => themeEntry.id === entry.themeId)?.name || "A definir";
}

function clientReservations() {
  return getClientReservations();
}

function sortReservationsNewestFirst(entries) {
  return [...entries].sort((a, b) => {
    const createdCompare = String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
    if (createdCompare !== 0) return createdCompare;
    return reservationNumber(b) - reservationNumber(a);
  });
}

function getClientReservations() {
  return sortReservationsNewestFirst(
    store.reservations.filter((entry) => entry.clientId === state.user?.clientId),
  );
}

function isClientProposalInProgress(entry) {
  return entry &&
    entry.clientId === state.user?.clientId &&
    !["Finalizado", "Cancelada"].includes(entry.status);
}

function getClientInProgressReservations() {
  return getClientReservations().filter(isClientProposalInProgress);
}

function getSelectedClientReservation() {
  if (!state.user?.clientId || !state.selectedReservationId) return null;
  return store.reservations.find((entry) => entry.id === state.selectedReservationId && entry.clientId === state.user.clientId) || null;
}

function getCurrentClientReservation() {
  if (isAdminQuoteMode()) {
    const clientId = state.adminQuoteClientId || state.draft.clientId;
    if (!clientId || !state.selectedReservationId) return null;
    return store.reservations.find((entry) => entry.id === state.selectedReservationId && entry.clientId === clientId) || null;
  }

  const entry = getSelectedClientReservation();
  if (!entry) return null;
  if (entry.clientId !== state.user?.clientId) return null;
  return entry;
}

function isCreatingNewQuote() {
  return (state.user?.role === "client" || isAdminQuoteMode()) && state.newQuoteMode;
}

function getClientStepForReservation(entry) {
  if (!entry) return 1;

  if (
    entry.signature ||
    ["Entregue", "Devolução", "Finalizado"].includes(entry.status)
  ) {
    return 6;
  }

  if (
    entry.contractGeneratedAt ||
    ["Reserva confirmada", "Preparar Kit"].includes(entry.status)
  ) {
    return 5;
  }

  return 4;
}

function initializeClientAfterLogin() {
  const inProgress = getClientInProgressReservations();

  state.selectedAdditions = [];
  state.selectedThemeId = "";
  state.selectedKitId = getActiveKits()[0]?.id || store.kits[0]?.id;
  state.signatureDirty = false;

  if (inProgress.length) {
    state.tab = "minhas-reservas";
    state.selectedReservationId = inProgress[0].id;
    state.clientStep = getClientStepForReservation(inProgress[0]);
    state.newQuoteMode = false;
    state.draft = defaultDraft(state.user.clientId);
    return;
  }

  state.tab = "orcamento";
  state.selectedReservationId = null;
  state.clientStep = 1;
  state.newQuoteMode = true;
  state.draft = defaultDraft(state.user.clientId);
}

function hasClientFinancialPending() {
  return store.reservations.some((entry) => {
    if (entry.clientId !== state.user?.clientId) return false;
    if (entry.status === "Cancelada") return false;

    const financials = reservationFinancials(entry);
    return financials.finalDue > 0;
  });
}

function hasClientReservationOnEventDate(eventDate, ignoreReservationId = "") {
  if (!eventDate) return false;

  return store.reservations.some((entry) => {
    if (entry.clientId !== state.user?.clientId) return false;
    if (entry.id === ignoreReservationId) return false;
    if (entry.status === "Cancelada") return false;

    return entry.eventDate === eventDate;
  });
}

function clientProposalNextActionText(entry) {
  const financials = reservationFinancials(entry);

  if (financials.finalDue > 0 && entry.status !== "Cancelada") {
    return "Existe pendência financeira neste pedido.";
  }

  const map = {
    "Aguardando confirmação de sinal": "Aguardando o Ateliê confirmar o sinal.",
    "Reserva confirmada": "Contrato disponível para conferência e assinatura.",
    "Preparar Kit": "O Ateliê está preparando seu kit.",
    "Entregue": "Kit entregue. Acompanhe a devolução.",
    "Devolução": "Processo de devolução em andamento.",
    "Finalizado": "Pedido finalizado.",
    "Pagamento pendente": "Existe pendência financeira neste pedido.",
    "Cancelada": "Pedido cancelado.",
  };

  return map[entry.status] || "Acompanhe o andamento da proposta.";
}

async function reloadStoreFromLocalStorage() {
  if (state.apiConnected || state.authToken) {
    const hydrated = await hydrateStoreFromApi();
    if (hydrated) return true;
  }

  if (localFallbackEnabled) {
    store = loadStore();
    return true;
  }

  return false;
}

async function refreshStoreForActiveSession() {
  if (state.apiConnected || state.authToken) {
    const hydrated = await hydrateStoreFromApi();
    if (hydrated) return true;
  }

  if (localFallbackEnabled) {
    store = loadStore();
    return true;
  }

  return false;
}

async function refreshSelectedClientProposal() {
  if (!state.selectedReservationId) {
    showToast("Nenhuma proposta selecionada.", "warning");
    return;
  }

  const reloaded = await reloadStoreFromLocalStorage();
  if (!reloaded) {
    showToast("Nao foi possivel atualizar. A API e o banco precisam estar ativos.", "error");
    return;
  }

  const entry = store.reservations.find(
    (row) => row.id === state.selectedReservationId && row.clientId === state.user?.clientId,
  );

  if (!entry) {
    showToast("Não encontramos mais esta proposta.", "error");
    state.tab = "minhas-reservas";
    render();
    return;
  }

  const previousStep = state.clientStep;
  const nextStep = getClientStepForReservation(entry);

  state.clientStep = nextStep;
  state.newQuoteMode = false;

  if (nextStep > previousStep) {
    if (nextStep === 5) {
      showToast("Proposta aprovada! O contrato já está disponível.", "success");
    } else if (nextStep === 6) {
      showToast("Sua proposta avançou para entrega/devolução.", "success");
    } else {
      showToast("Status da proposta atualizado.", "success");
    }
  } else {
    showToast("Sua proposta ainda está aguardando confirmação do Ateliê.", "warning");
  }

  render();
}

function openClientProposal(id) {
  const entry = store.reservations.find((row) => row.id === id && row.clientId === state.user?.clientId);

  if (!entry) {
    showToast("Proposta não encontrada.", "error");
    return;
  }

  state.selectedReservationId = entry.id;
  state.newQuoteMode = false;
  state.tab = "orcamento";
  state.clientStep = getClientStepForReservation(entry);
  render();
}

function startNewClientQuote() {
  if (hasClientFinancialPending()) {
    showToast(
      "Você possui pendência financeira em pedido anterior. Regularize com o Ateliê antes de solicitar um novo orçamento.",
      "warning",
    );
    return;
  }

  state.tab = "orcamento";
  state.clientStep = 1;
  state.newQuoteMode = true;
  state.selectedReservationId = null;
  state.selectedAdditions = [];
  state.selectedThemeId = "";
  state.selectedKitId = getActiveKits()[0]?.id || store.kits[0]?.id;
  state.draft = defaultDraft(state.user.clientId);
  render();
}

function isAdminQuoteMode() {
  return state.user?.role === "admin" && state.adminTab === "novo-orcamento" && state.adminQuoteStarted;
}

function getAdminQuoteClient() {
  if (!state.adminQuoteClientId) return null;
  return store.clients.find((entry) => entry.id === state.adminQuoteClientId) || null;
}

function getAdminQuoteClients() {
  return store.clients.filter((client) => (client.registrationStatus || "Aprovado") === "Aprovado");
}

function adminQuoteClientSearchText(client) {
  return [
    client.name,
    client.email,
    client.phone,
    client.whatsapp,
    client.whatsapp1,
    client.cpf,
  ].filter(Boolean).join(" ").toLowerCase();
}

function getFilteredAdminQuoteClients() {
  const term = String(state.adminQuoteSearch || "").trim().toLowerCase();
  const digits = onlyDigits(term);
  return getAdminQuoteClients()
    .filter((client) => {
      if (!term) return true;
      const text = adminQuoteClientSearchText(client);
      const clientDigits = onlyDigits(text);
      return text.includes(term) || (digits && clientDigits.includes(digits));
    })
    .sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")));
}

function clientFinancialPendingReservations(clientId) {
  return store.reservations.filter((entry) => {
    if (entry.clientId !== clientId) return false;
    if (entry.status === "Cancelada" || entry.status === "Finalizado") return false;

    const status = String(entry.status || "").toLowerCase();
    const finance = reservationFinancials(entry);
    const signalDue = financialNumber(entry.signalDue || entry.total * 0.5);
    const signalPending = signalDue > 0 && financialNumber(entry.deposit) < signalDue;
    const statusPending = status.includes("pendente") || (status.includes("aguardando") && status.includes("sinal"));

    return signalPending || statusPending || finance.finalDue > 0;
  });
}

function adminQuoteFinancialSummary(clientId) {
  const reservations = clientFinancialPendingReservations(clientId);
  const total = reservations.reduce((sum, entry) => sum + reservationFinancials(entry).finalDue, 0);
  return { reservations, total };
}

function hasAdminQuoteFinancialPending(clientId) {
  return adminQuoteFinancialSummary(clientId).reservations.length > 0;
}

function resetAdminQuoteSelection() {
  state.adminQuoteClientId = "";
  state.adminQuoteSearch = "";
  state.adminQuoteStarted = false;
  state.adminQuotePendingOverride = false;
  state.selectedReservationId = null;
  state.newQuoteMode = false;
  state.clientStep = 1;
  state.selectedAdditions = [];
  state.selectedThemeId = "";
  state.signatureDirty = false;
  state.draft = defaultDraft();
  clearFormState();
}

function selectAdminQuoteClient(id) {
  const client = store.clients.find((entry) => entry.id === id);
  if (!client) {
    showToast("Cliente nao encontrado.", "error");
    return;
  }

  state.adminQuoteClientId = client.id;
  state.adminQuoteStarted = false;
  state.adminQuotePendingOverride = false;
  state.selectedReservationId = null;
  state.newQuoteMode = true;
  state.clientStep = 1;
  state.selectedAdditions = [];
  state.selectedThemeId = "";
  state.selectedKitId = getActiveKits()[0]?.id || store.kits[0]?.id;
  state.signatureDirty = false;
  state.draft = defaultDraft(client.id);
  clearFormState();
  render();
}

function startAdminQuoteJourney() {
  const client = getAdminQuoteClient();
  if (!client) {
    showToast("Selecione um cliente cadastrado antes de iniciar.", "warning");
    return;
  }

  if (hasAdminQuoteFinancialPending(client.id) && !state.adminQuotePendingOverride) {
    showToast("Este cliente possui pendencia financeira. Confirme se deseja continuar.", "warning");
    return;
  }

  state.adminQuoteStarted = true;
  state.selectedReservationId = null;
  state.newQuoteMode = true;
  state.clientStep = 1;
  state.selectedAdditions = [];
  state.selectedThemeId = "";
  state.selectedKitId = getActiveKits()[0]?.id || store.kits[0]?.id;
  state.signatureDirty = false;
  state.draft = defaultDraft(client.id);
  clearFormState();
  render();
}

function continueAdminQuoteWithPending() {
  state.adminQuotePendingOverride = true;
  startAdminQuoteJourney();
}

function cancelAdminQuoteWithPending() {
  state.adminQuotePendingOverride = false;
  state.adminQuoteStarted = false;
  state.selectedReservationId = null;
  state.newQuoteMode = false;
  state.clientStep = 1;
  state.selectedAdditions = [];
  state.selectedThemeId = "";
  state.draft = state.adminQuoteClientId ? defaultDraft(state.adminQuoteClientId) : defaultDraft();
  render();
}

function isReservationContractSigned(entry) {
  return Boolean(entry?.signature);
}

function isOpenReservation(entry) {
  return Boolean(entry) && !isClosedReservation(entry);
}

function isClosedReservation(entry) {
  const status = String(entry?.status || "").toLowerCase();
  return status.includes("cancelad") || status.includes("finaliz");
}

function whatsAppQuoteLink() {
  const selectedKit = getSelectedKit();
  const quote = calculateQuote();
  const addons = getSelectedItems().map((entry) => entry.name).join(", ") || "Sem adicionais";
  const text = `Olá, Ateliê LICA Festas! Quero solicitar reserva.\nKit: ${selectedKit.name}\nTema: ${themeSelectionName() || "A definir"}\nAdicionais: ${addons}\nValor total: ${money(quote.total)}\nSinal: ${money(quote.deposit)}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}


function renderQuoteBuilder(isAdmin) {
  const selectedKit = getSelectedKit();
  const activeKits = getActiveKits();
  return `
    <section class="section-title">
      <div>
        <h2>Monte o orçamento</h2>
        <p>Selecione um kit fechado com itens e preço predefinidos. Os adicionais entram separados e somam ao valor.</p>
      </div>
      <button class="secondary-button" data-action="reset-draft">Limpar seleção</button>
    </section>
    <div class="workspace-grid">
      <div class="summary-list">
        <section class="panel">
          <div class="panel-header"><h3>Kits predefinidos</h3><span class="small-note">${activeKits.length} kits ativos</span></div>
          <div class="panel-body">
            <div class="kit-grid">${activeKits.map(renderKitCard).join("")}</div>
          </div>
        </section>
        <section class="panel">
          <div class="panel-header">
            <h3>Adicionais</h3>
            <span class="small-note">Itens do estoque com valor de aluguel</span>
          </div>
          <div class="panel-body">
            ${renderAdditionFilters()}
            <div class="item-grid">${renderAdditionCards(selectedKit)}</div>
          </div>
        </section>
        <section class="panel">
          <div class="panel-header"><h3>Dados do evento</h3></div>
          <div class="panel-body">${renderCheckoutForm(isAdmin)}</div>
        </section>
      </div>
      <aside class="panel">
        <div class="panel-header"><h3>Resumo do orçamento</h3></div>
        <div class="panel-body">${renderBudgetSummary(selectedKit)}</div>
      </aside>
    </div>
  `;
}

function renderKitCard(kitData) {
  const selected = kitData.id === state.selectedKitId;
  const items = kitData.itemCodes.map(findItem).filter(Boolean);
  return `
    <article class="kit-card ${selected ? "selected" : ""}">
      <canvas class="kit-art" data-kit-art="${escapeAttr(kitData.id)}" width="480" height="300"></canvas>
      <div>
        <h4>${escapeHtml(kitData.name)}</h4>
        <p class="kit-meta">${escapeHtml(kitData.description)}</p>
      </div>
      <div class="kit-meta">${items.length} itens inclusos</div>
      <div class="price">${money(kitPrice(kitData))}</div>
      <button class="${selected ? "primary-button" : "secondary-button"}" data-kit-id="${escapeAttr(kitData.id)}">
        ${selected ? "Selecionado" : "Selecionar"}
      </button>
    </article>
  `;
}

function renderAdditionFilters() {
  const categories = [
    "Todas",
    ...new Set(getActiveAddons().flatMap(addonCategories).filter(Boolean).sort((a, b) => a.localeCompare(b))),
  ];
  if (!categories.includes(state.categoryFilter)) state.categoryFilter = "Todas";
  return `
    <div class="search-row">
      <input data-action="item-search" value="${escapeHtml(state.itemSearch)}" placeholder="Buscar adicional" />
      <select data-action="category-filter">
        ${categories.map((cat) => optionMarkup(cat, state.categoryFilter)).join("")}
      </select>
    </div>
  `;
}

function renderAdditionCards(selectedKit) {
  const term = state.itemSearch.trim().toLowerCase();
  const selectedCategory = state.categoryFilter;
  const additions = getActiveAddons()
    .filter((entry) => !term || `${entry.name} ${entry.description}`.toLowerCase().includes(term))
    .filter((entry) => selectedCategory === "Todas" || addonCategories(entry).includes(selectedCategory));

  if (!additions.length) return `<div class="empty-state">Nenhum adicional encontrado para esse filtro.</div>`;

  return additions
    .map((entry) => {
      const selected = state.selectedAdditions.includes(entry.id);
      return `
        <label class="item-card ${selected ? "selected" : ""}">
          <input type="checkbox" data-addition-code="${escapeAttr(entry.id)}" ${selected ? "checked" : ""} />
          <h4>${escapeHtml(entry.name)}</h4>
          <div class="item-meta">${escapeHtml(entry.description)}</div>
          <strong class="price">${money(entry.price)}</strong>
        </label>
      `;
    })
    .join("");
}

function renderCheckoutForm(isAdmin = false) {
  const d = state.draft;
  return `
    <form id="checkoutForm" novalidate>
      ${renderFormAlert()}
      <div class="form-grid">
        ${isAdmin ? renderAdminClientPicker() : ""}
        ${field("Nome", "name", d.name, "text")}
        ${field("CPF", "cpf", d.cpf, "text")}
        ${field("Telefone", "phone", d.phone, "tel")}
        ${field("WhatsApp", "whatsapp", d.whatsapp, "tel")}
        ${field("E-mail", "email", d.email, "email")}
        ${selectField("Forma de pagamento desejada", "paymentMethod", d.paymentMethod, paymentMethodOptions())}
        ${field("Data do evento", "eventDate", d.eventDate, "date")}
        ${field("Retirada/Entrega", "deliveryDate", d.deliveryDate, "date")}
        ${field("Devolução", "returnDate", d.returnDate, "date")}
        <div class="field">
          <label>Serviços</label>
          <div class="choice-grid">
            <label class="choice-option"><input type="checkbox" data-draft-check="delivery" ${d.delivery ? "checked" : ""} /> Entrega/Recolhimento R$ 80</label>
            <label class="choice-option"><input type="checkbox" data-draft-check="assembly" ${d.assembly ? "checked" : ""} /> Montagem R$ 120</label>
          </div>
        </div>
        <div class="field full-span${fieldErrorClass("address")}">
          <label for="address">Endereço do evento</label>
          <textarea id="address" data-draft="address" required>${escapeHtml(d.address)}</textarea>
          ${fieldErrorMessage("address")}
        </div>
        <div class="field full-span">
          <label for="notes">Observações</label>
          <textarea id="notes" data-draft="notes">${escapeHtml(d.notes)}</textarea>
        </div>
      </div>
      <div class="actions">
        <button class="primary-button" type="submit" ${pendingDisabledAttr()}>${pendingLabel("submit-reservation", isAdmin ? "Criar orçamento para cliente" : "Enviar orçamento para admin", isAdmin ? "Criando reserva..." : "Criando reserva...")}</button>
      </div>
    </form>
  `;
}

function renderAdminClientPicker() {
  return `
    <div class="field full-span${fieldErrorClass("clientId")}">
      <label for="clientId">Cliente</label>
      <select id="clientId" data-client-picker>
        ${store.clients.map((client) => `<option value="${escapeAttr(client.id)}" ${client.id === state.draft.clientId ? "selected" : ""}>${escapeHtml(client.name)} · ${escapeHtml(client.cpf)}</option>`).join("")}
      </select>
      ${fieldErrorMessage("clientId")}
    </div>
  `;
}

function field(label, key, value, type) {
  return `
    <div class="field${fieldErrorClass(key)}">
      <label for="${key}">${label}</label>
      <input id="${key}" data-draft="${key}" type="${type}" value="${escapeHtml(value || "")}" ${key === "name" || key === "cpf" ? "required" : ""} />
      ${fieldErrorMessage(key)}
    </div>
  `;
}

function selectField(label, key, value, options) {
  return `
    <div class="field${fieldErrorClass(key)}">
      <label for="${key}">${label}</label>
      <select id="${key}" data-draft="${key}">
        ${options.map((option) => optionMarkup(option, value)).join("")}
      </select>
      ${fieldErrorMessage(key)}
    </div>
  `;
}

function renderBudgetSummary(selectedKit) {
  const quote = calculateQuote();
  const selectedItems = getSelectedItems();
  return `
    <div class="summary-list">
      <div>
        <h4>${escapeHtml(selectedKit.name)}</h4>
        <p class="muted">${escapeHtml(selectedKit.description)}</p>
      </div>
      <div>
        <strong>Itens inclusos</strong>
        <ul class="item-list">
          ${selectedKit.itemCodes.map(findItem).filter(Boolean).map((entry) => `<li>${escapeHtml(formatItemLine(entry))}</li>`).join("")}
        </ul>
      </div>
      ${
        selectedItems.length
          ? `<div><strong>Adicionais</strong><ul class="item-list">${selectedItems.map((entry) => `<li>${escapeHtml(entry.name)} · ${money(entry.price)}</li>`).join("")}</ul></div>`
          : `<div class="small-note">Nenhum adicional selecionado.</div>`
      }
      <div class="summary-row"><span>Kit fechado</span><strong>${money(quote.kitValue)}</strong></div>
      ${quote.kitDiscount > 0 ? `<div class="summary-row"><span>Desconto do kit</span><strong>${money(quote.kitDiscount)}</strong></div>` : ""}
      <div class="summary-row"><span>Adicionais selecionados</span><strong>${money(quote.additions)}</strong></div>
      <div class="summary-row"><span>Serviços</span><strong>${money(quote.serviceFee)}</strong></div>
      <div class="summary-row total"><strong>Valor Total</strong><strong>${money(quote.total)}</strong></div>
      <div class="hint-box">Sinal de ${money(quote.deposit)}. O Ateliê LICA Festas confirma o pagamento do sinal e libera o contrato para assinatura.</div>
    </div>
  `;
}

function legacyRenderClientReservations() {
  const rows = store.reservations.filter((entry) => entry.clientId === state.user.clientId);
  return `
    <section class="section-title">
      <div>
        <h2>Meus pedidos</h2>
        <p>Acompanhe orçamentos, sinal confirmado e contratos disponíveis para assinatura.</p>
      </div>
    </section>
    <section class="panel">
      <div class="client-reservation-cards">
        ${rows.length ? rows.map(renderClientReservationCard).join("") : `<div class="empty-state">VocÃª ainda nÃ£o tem propostas ou pedidos.</div>`}
      </div>
      <div class="table-wrap client-reservation-table">
        <table>
          <thead>
            <tr>
              <th>Reserva</th>
              <th>Kit</th>
              <th>Tema</th>
              <th>Evento</th>
              <th>Status</th>
              <th>Total</th>
              <th>Contrato</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map(renderClientReservationRow).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function legacyRenderClientReservationRow(entry) {
  const contractButton = entry.contractGeneratedAt
    ? `<button class="secondary-button" data-open-contract="${escapeAttr(entry.id)}">${entry.signature ? "Ver contrato" : "Assinar"}</button>`
    : `<span class="muted">Aguardando admin</span>`;
  return `
    <tr>
      <td>${escapeHtml(entry.id)}</td>
      <td>${escapeHtml(entry.kitName)}</td>
      <td>${escapeHtml(reservationThemeLabel(entry))}</td>
      <td>${dateLabel(entry.eventDate)}</td>
      <td>${statusPill(entry.status)}</td>
      <td>${money(entry.total)}</td>
      <td>${contractButton}</td>
    </tr>
  `;
}

function renderClientReservations() {
  const rows = getClientReservations();
  return `
    <section class="section-title">
      <div>
        <h2>Meus pedidos</h2>
        <p>Acompanhe orçamentos, sinal confirmado e contratos disponíveis para assinatura.</p>
      </div>
      <button class="primary-button" data-start-client-quote>Solicitar novo orçamento</button>
    </section>
    <section class="panel">
      <div class="client-reservation-cards">
        ${rows.length ? rows.map(renderClientReservationCard).join("") : `<div class="empty-state">VocÃª ainda nÃ£o tem propostas ou pedidos.</div>`}
      </div>
      <div class="table-wrap client-reservation-table">
        <table>
          <thead>
            <tr>
              <th>Proposta</th>
              <th>Kit/Tema</th>
              <th>Evento</th>
              <th>Status</th>
              <th>Total</th>
              <th>Pendência</th>
              <th>Orientação</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            ${rows.length ? rows.map(renderClientReservationRow).join("") : `<tr><td colspan="8"><div class="empty-state">Você ainda não tem propostas ou pedidos.</div></td></tr>`}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderClientReservationCard(entry) {
  const financials = reservationFinancials(entry);
  const pending = financials.finalDue > 0 && entry.status !== "Cancelada" ? money(financials.finalDue) : "Sem pendÃªncia";
  return `
    <article class="client-reservation-card">
      <div class="client-reservation-card-top">
        <div>
          <strong>${escapeHtml(entry.id)}</strong>
          <span>${dateLabel(entry.eventDate)}</span>
        </div>
        ${statusPill(entry.status)}
      </div>
      <div>
        <h3>${escapeHtml(entry.kitName)}</h3>
        <p>${escapeHtml(reservationThemeLabel(entry))}</p>
      </div>
      <div class="client-reservation-card-grid">
        <div><span>Total</span><strong>${money(entry.total)}</strong></div>
        <div><span>PendÃªncia</span><strong>${pending}</strong></div>
      </div>
      <p class="client-reservation-next">${escapeHtml(clientProposalNextActionText(entry))}</p>
      <button class="primary-button" data-view-client-proposal="${escapeAttr(entry.id)}">Ver Proposta</button>
    </article>
  `;
}

function renderClientReservationRow(entry) {
  const financials = reservationFinancials(entry);
  const pending = financials.finalDue > 0 && entry.status !== "Cancelada" ? money(financials.finalDue) : "-";
  return `
    <tr>
      <td>${escapeHtml(entry.id)}</td>
      <td><strong>${escapeHtml(entry.kitName)}</strong><br /><span class="small-note">${escapeHtml(reservationThemeLabel(entry))}</span></td>
      <td>${dateLabel(entry.eventDate)}</td>
      <td>${statusPill(entry.status)}</td>
      <td>${money(entry.total)}</td>
      <td>${pending}</td>
      <td>${escapeHtml(clientProposalNextActionText(entry))}</td>
      <td><button class="primary-button" data-view-client-proposal="${escapeAttr(entry.id)}">Ver Proposta</button></td>
    </tr>
  `;
}

function renderAdmin() {
  if (state.adminTab === "novo-orcamento") return renderAdminQuoteWorkspace();
  if (state.adminTab === "financeiro") return renderAdminFinance();
  if (state.adminTab === "clientes") return renderAdminClients();
  if (state.adminTab === "acessos") return renderAdminAccesses();
  if (state.adminTab === "kit-adicionais") return renderAdminKitAddons();
  if (state.adminTab === "temas") return renderAdminThemes();
  if (state.adminTab === "estoque") return renderAdminInventory();
  if (state.adminTab === "reservas") return renderAdminReservations();
  return renderAdminDashboard();
}

function renderAdminDashboard() {
  const finance = financialSummary();
  const pending = store.reservations.filter((entry) => entry.status.includes("Pré-reserva") || entry.status.includes("Aguardando")).length;
  const signed = store.reservations.filter((entry) => entry.signature).length;
  const recent = getSortedReservations().slice(0, 5);
  const preparing = store.reservations.filter((entry) => entry.status === "Preparar Kit").length;
  const delivered = store.reservations.filter((entry) => entry.status === "Entregue").length;
  const returns = store.reservations.filter((entry) => entry.status === "Devolução").length;
  const registrations = registrationStats();
  const operationalRows = store.reservations
    .filter((entry) => ["Preparar Kit", "Entregue", "Devolução", "Pagamento pendente"].includes(entry.status))
    .sort((a, b) => String(a.eventDate || "").localeCompare(String(b.eventDate || "")));

  return `
    <section class="section-title">
      <div>
        <h2>Dashboard administrativo</h2>
        <p>Indicadores principais importados da lógica da planilha e dos pedidos do site.</p>
      </div>
    </section>
    <div class="dashboard-grid">
      ${metric("Reservas", store.reservations.length)}
      ${metric("Preparar Kit", preparing)}
      ${metric("Entregar/retirada", delivered)}
      ${metric("Devolução/buscar", returns)}
      ${metric("Pagamento pendente", finance.pendingReservations)}
      ${metric("Total Entrada", money(finance.totalReceived))}
      ${metric("Receita prevista", money(finance.revenue))}
      ${metric("Sinais recebidos", money(finance.deposits))}
      ${metric("Total em aberto", money(finance.finalDue))}
      ${registrationMetric(registrations)}
      ${metric("Pré-reservas", pending)}
    </div>
    <div class="workspace-grid" style="margin-top: 18px">
      <section class="panel">
        <div class="panel-header"><h3>Acompanhamento operacional</h3><button class="secondary-button" data-admin-tab="reservas">Ver reservas</button></div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Reserva</th><th>Cliente</th><th>Kit</th><th>Evento</th><th>Status</th><th>Ação</th></tr></thead>
            <tbody>${
              operationalRows.length
                ? operationalRows.map((entry) => `<tr><td>${escapeHtml(entry.id)}</td><td>${escapeHtml(clientName(entry.clientId))}</td><td>${escapeHtml(entry.kitName)}</td><td>${dateLabel(entry.eventDate)}</td><td>${statusPill(entry.status)}</td><td>${escapeHtml(operationalActionLabel(entry))}</td></tr>`).join("")
                : `<tr><td colspan="6"><div class="empty-state">Nenhuma reserva operacional pendente agora.</div></td></tr>`
            }</tbody>
          </table>
        </div>
      </section>
      <aside class="panel">
        <div class="panel-header"><h3>Contratos e últimas reservas</h3></div>
        <div class="panel-body">
          <div class="summary-list">
            <div class="summary-row"><span>Gerados</span><strong>${store.reservations.filter((entry) => entry.contractGeneratedAt).length}</strong></div>
            <div class="summary-row"><span>Assinados</span><strong>${signed}</strong></div>
            <div class="summary-row"><span>Aguardando assinatura</span><strong>${store.reservations.filter((entry) => entry.contractGeneratedAt && !entry.signature).length}</strong></div>
          </div>
          <div class="mini-list">${recent.map((entry) => `<button class="mini-list-row" data-admin-tab="reservas" data-open-reservation="${escapeAttr(entry.id)}"><span>${escapeHtml(entry.id)} · ${escapeHtml(entry.kitName)}</span>${statusPill(entry.status)}</button>`).join("")}</div>
        </div>
      </aside>
    </div>
  `;
}

function operationalActionLabel(entry) {
  if (entry.status === "Preparar Kit") return entry.delivery ? "Separar e entregar" : "Separar para retirada";
  if (entry.status === "Entregue") return entry.returnService ? `Aguardar retirada em ${dateLabel(entry.returnDate)}` : `Cliente devolve em ${dateLabel(entry.returnDate)}`;
  if (entry.status === "Devolução") return entry.returnService ? "Buscar kit" : "Receber devolução";
  if (entry.status === "Pagamento pendente") return "Cobrar saldo";
  return "Acompanhar";
}

function metric(label, value) {
  return `<div class="metric"><b>${value}</b><span>${label}</span></div>`;
}

function registrationStats() {
  return store.clients.reduce(
    (stats, client) => {
      const status = client.registrationStatus || "Aprovado";
      if (status === "Pendente") stats.pending += 1;
      if (status === "Aprovado") stats.approved += 1;
      if (status === "Negado") stats.denied += 1;
      const user = store.users.find((entry) => entry.role === "client" && entry.clientId === client.id);
      if (status === "Aprovado" && user?.enabled !== false) stats.active += 1;
      if (status === "Desabilitado" || user?.enabled === false) stats.disabled += 1;
      return stats;
    },
    { pending: 0, approved: 0, denied: 0, active: 0, disabled: 0 },
  );
}

function registrationMetric(stats) {
  return `
    <div class="metric registration-metric ${stats.pending ? "attention" : ""}">
      <b>${stats.pending}</b>
      <span>Cadastros pendentes</span>
      <small>Aprovados ${stats.approved} · Negados ${stats.denied} · Ativos ${stats.active} · Desabilitados ${stats.disabled}</small>
    </div>
  `;
}

function registrationStatusBadge(status) {
  const value = status || "Aprovado";
  const className = value === "Pendente" ? "pending" : value === "Aprovado" ? "paid" : value === "Negado" ? "cancelled" : "warning";
  return `<span class="status-pill ${className}">${escapeHtml(value)}</span>`;
}

function renderAdminFinance() {
  const summary = financialSummary();
  const rows = filteredFinanceReservations();
  return `
    <section class="section-title">
      <div>
        <h2>Financeiro</h2>
        <p>Visão centralizada de valores, sinais, saldos, avarias e pendências das reservas.</p>
      </div>
    </section>
    <div class="dashboard-grid">
      ${metric("Total Entrada", money(summary.totalReceived))}
      ${metric("Receita prevista", money(summary.revenue))}
      ${metric("Sinais recebidos", money(summary.deposits))}
      ${metric("Saldo em aberto", money(summary.balanceDue))}
      ${metric("Avarias/reposição", money(summary.extraCharges))}
      ${metric("Total pendente", money(summary.finalDue))}
      ${metric("Reservas pendentes", summary.pendingReservations)}
    </div>
    <section class="panel" style="margin-top: 18px">
      <div class="panel-header"><h3>Filtros financeiros</h3></div>
      <div class="panel-body">${renderFinanceFilters()}</div>
    </section>
    ${renderPaymentMethodsManager()}
    <section class="panel finance-table-panel" style="margin-top: 18px">
      <div class="panel-header">
        <h3>Reservas financeiras</h3>
        <span class="small-note">${rows.length} reserva(s) encontrada(s)</span>
      </div>
      <div class="table-wrap">
        <table class="finance-table">
          <thead>
            <tr>
              <th>Reserva</th>
              <th>Cliente</th>
              <th>Kit/Tema</th>
              <th>Data do evento</th>
              <th>Status</th>
              <th>Valor total</th>
              <th>Sinal pago</th>
              <th>Saldo restante</th>
              <th>Avarias</th>
              <th>Reposição</th>
              <th>Total pendente</th>
              <th>Forma de pagamento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>${rows.length ? rows.map(renderFinanceRow).join("") : `<tr><td colspan="13"><div class="empty-state">Nenhuma reserva encontrada para os filtros.</div></td></tr>`}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderFinanceFilters() {
  const statuses = ["Todos", ...new Set([...reservationStatuses, ...store.reservations.map((entry) => entry.status)].filter(Boolean))];
  const payments = ["Todas", ...new Set([...paymentMethodOptions(true), ...store.reservations.map((entry) => entry.paymentMethod || "Pendente")].filter(Boolean))];
  const filters = state.financeFilters;
  return `
    <div class="form-grid">
      <div class="field full-span">
        <label for="financeSearch">Buscar</label>
        <input id="financeSearch" data-finance-filter="search" type="search" value="${escapeHtml(filters.search)}" placeholder="Cliente, reserva ou kit" />
      </div>
      <div class="field">
        <label for="financeStatus">Status</label>
        <select id="financeStatus" data-finance-filter="status">
          ${statuses.map((status) => `<option value="${escapeHtml(status)}" ${filters.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label for="financePayment">Forma de pagamento</label>
        <select id="financePayment" data-finance-filter="payment">
          ${payments.map((payment) => `<option value="${escapeHtml(payment)}" ${filters.payment === payment ? "selected" : ""}>${escapeHtml(payment)}</option>`).join("")}
        </select>
      </div>
      <div class="field">
        <label for="financeDateFrom">Evento de</label>
        <input id="financeDateFrom" data-finance-filter="dateFrom" type="date" value="${escapeHtml(filters.dateFrom)}" />
      </div>
      <div class="field">
        <label for="financeDateTo">Evento até</label>
        <input id="financeDateTo" data-finance-filter="dateTo" type="date" value="${escapeHtml(filters.dateTo)}" />
      </div>
      <label class="choice-option full-span">
        <input type="checkbox" data-finance-pending ${filters.pendingOnly ? "checked" : ""} />
        Mostrar somente reservas com saldo pendente
      </label>
    </div>
    <div class="actions">
      <button class="secondary-button" data-action="clear-finance-filters">Limpar filtros</button>
    </div>
  `;
}

function renderPaymentMethodsManager() {
  return `
    <section class="panel" style="margin-top: 18px">
      <div class="panel-header">
        <h3>Formas de pagamento</h3>
        <button class="secondary-button" data-action="new-payment-method">Nova forma</button>
      </div>
      <div class="panel-body">
        <div class="payment-admin-list">
          ${store.paymentMethods.length ? store.paymentMethods.map(renderPaymentMethodAdminCard).join("") : `<div class="empty-state">Nenhuma forma cadastrada.</div>`}
        </div>
      </div>
    </section>
  `;
}

function renderPaymentMethodAdminCard(methodEntry) {
  return `
    <article class="payment-admin-card">
      <div>
        <strong>${escapeHtml(methodEntry.name)}</strong>
        <span>${escapeHtml(paymentMethodTypeLabel(methodEntry.type))}</span>
        <p>${escapeHtml(shortText(methodEntry.instructions || "Sem orientacoes cadastradas.", 120))}</p>
      </div>
      <div class="row-actions">
        ${enabledPill(methodEntry.enabled)}
        <button class="secondary-button" data-edit-payment-method="${escapeAttr(methodEntry.id)}">Editar</button>
        <button class="secondary-button" data-toggle-payment-method="${escapeAttr(methodEntry.id)}">${methodEntry.enabled ? "Desabilitar" : "Habilitar"}</button>
      </div>
    </article>
  `;
}

function renderFinanceRow(entry) {
  const finance = reservationFinancials(entry);
  const isSelected = entry.id === state.selectedReservationId;
  return `
    <tr class="finance-table-row ${isSelected ? "selected" : ""}">
      <td>${escapeHtml(entry.id)}</td>
      <td>${escapeHtml(clientName(entry.clientId))}${entry.clientCorrectionNote ? `<br /><span class="status-pill warning">Dados a revisar</span>` : ""}</td>
      <td><strong>${escapeHtml(entry.kitName)}</strong><br /><span class="small-note">${escapeHtml(reservationThemeLabel(entry))}</span></td>
      <td>${dateLabel(entry.eventDate)}</td>
      <td>${statusPill(entry.status)}</td>
      <td>${money(entry.total)}</td>
      <td>${money(entry.deposit)}</td>
      <td>${money(finance.balanceDue)}</td>
      <td>${money(finance.damageFee)}</td>
      <td>${money(finance.replacementFee)}</td>
      <td>${money(finance.finalDue)}</td>
      <td>${escapeHtml(entry.paymentMethod || "Pendente")}</td>
      <td>
        <div class="row-actions finance-row-actions">
          <button class="secondary-button" data-open-finance="${escapeAttr(entry.id)}">${isSelected ? "Fechar" : "Abrir"}</button>
          <button class="secondary-button" data-new-payment="${escapeAttr(entry.id)}">Novo pagamento</button>
        </div>
      </td>
    </tr>
    ${
      isSelected
        ? `<tr class="finance-expanded-row"><td colspan="13"><div class="finance-expanded-detail">${renderFinanceDetail(entry)}</div></td></tr>`
        : ""
    }
  `;
}

function renderFinanceDetail(entry) {
  const finance = reservationFinancials(entry);
  return `
    <div class="reservation-detail finance-expanded-content">
      ${renderReservationHeaderCard(entry, finance)}
      ${renderReservationFinancialSummary(entry, finance)}
      ${renderFinancePaymentsCard(entry)}
      <section class="reservation-info-card finance-adjustments-card">
        <div class="reservation-card-heading">
          <div>
            <span class="detail-eyebrow">Ajustes financeiros</span>
            <h4>Pagamento, avarias e pendências</h4>
          </div>
          <span class="status-pill ${finance.finalDue > 0 ? "warning" : "signed"}">${finance.finalDue > 0 ? "Pendente" : "Quitado"}</span>
        </div>
        <div class="admin-reservation-fields">
          <div class="field">
            <label for="financeDeposit">Sinal pago</label>
            <input id="financeDeposit" type="number" min="0" step="0.01" value="${Number(entry.deposit || 0)}" />
          </div>
          <div class="field">
            <label for="financeBalanceDue">Saldo restante</label>
            <input id="financeBalanceDue" type="number" min="0" step="0.01" value="${finance.balanceDue}" />
          </div>
          <div class="field">
            <label for="financeDamageFee">Avarias</label>
            <input id="financeDamageFee" type="number" min="0" step="0.01" value="${finance.damageFee}" />
          </div>
          <div class="field">
            <label for="financeReplacementFee">Reposição</label>
            <input id="financeReplacementFee" type="number" min="0" step="0.01" value="${finance.replacementFee}" />
          </div>
          <div class="field">
            <label for="financeDetailPaymentMethod">Forma de pagamento</label>
            <select id="financeDetailPaymentMethod">
              ${paymentMethodOptions(true).map((method) => optionMarkup(method, entry.paymentMethod)).join("")}
            </select>
          </div>
          <div class="field">
            <label for="financeDetailStatus">Status da reserva</label>
            <select id="financeDetailStatus">
              ${[...new Set([entry.status, ...reservationStatuses].filter(Boolean))].map((status) => optionMarkup(status, entry.status)).join("")}
            </select>
          </div>
          <div class="field full-span">
            <label for="financeNotes">Observações financeiras</label>
            <textarea id="financeNotes">${escapeHtml(entry.financeNotes || "")}</textarea>
          </div>
          <div class="hint-box full-span">Total pendente atual: ${money(finance.finalDue)}.</div>
        </div>
        <div class="actions finance-expanded-actions">
          <button class="primary-button" data-save-finance="${escapeAttr(entry.id)}" ${pendingDisabledAttr()}>${pendingLabel("save-reservation-finance", "Salvar financeiro", "Salvando financeiro...")}</button>
          <button class="secondary-button" data-new-payment="${escapeAttr(entry.id)}">Novo pagamento</button>
          <button class="secondary-button" data-open-reservation="${escapeAttr(entry.id)}" data-jump-reservations="true">Abrir reserva</button>
        </div>
      </section>
    </div>
  `;
}

function renderFinancePaymentsCard(entry) {
  const payments = entry.payments || [];
  return `
    <section class="reservation-info-card finance-payments-card">
      <div class="reservation-card-heading">
        <div>
          <span class="detail-eyebrow">Pagamentos adicionais</span>
          <h4>Histórico de valores recebidos</h4>
        </div>
        <button class="secondary-button" data-new-payment="${escapeAttr(entry.id)}">Novo pagamento</button>
      </div>
      ${
        payments.length
          ? `<div class="finance-payment-list">${payments.map(renderFinancePaymentRow).join("")}</div>`
          : `<div class="empty-state">Nenhum pagamento adicional registrado para esta reserva.</div>`
      }
    </section>
  `;
}

function renderFinancePaymentRow(payment) {
  return `
    <article class="finance-payment-row">
      <div class="finance-payment-value">
        <strong>${money(payment.amount)}</strong>
        <span>${escapeHtml(payment.paymentMethod || "Forma não informada")}</span>
      </div>
      <div class="finance-payment-meta">
        ${detail("Data do pagamento", dateLabel(payment.paidAt) || "Não informada")}
        ${detail("Registrado por", escapeHtml(payment.createdByName || payment.createdByRole || "Admin"))}
        ${detail("Criado em", dateTimeLabel(payment.createdAt) || "-")}
      </div>
      ${renderPaymentFilePreview(payment)}
    </article>
  `;
}

function renderPaymentFilePreview(payment) {
  if (!payment.fileUrl && !payment.fileName) {
    return `<div class="finance-payment-file"><span class="small-note">Sem comprovante anexado.</span></div>`;
  }
  const isImage = String(payment.fileType || "").startsWith("image/");
  const preview = payment.fileUrl
    ? isImage
      ? `<img class="receipt-thumb" src="${safeImageSrc(payment.fileUrl)}" alt="Comprovante do pagamento" />`
      : `<span class="receipt-file-icon">PDF</span>`
    : `<span class="receipt-file-icon">Arquivo</span>`;
  const action = payment.fileUrl
    ? `<a class="secondary-button" href="${safeReceiptHref(payment.fileUrl)}" target="_blank" rel="noreferrer">Visualizar</a>`
    : "";
  return `
    <div class="finance-payment-file">
      ${preview}
      <div>
        <strong>${escapeHtml(payment.fileName || "Comprovante anexado")}</strong>
        <p class="small-note">${escapeHtml(payment.fileType || "Tipo não informado")}</p>
        ${action}
      </div>
    </div>
  `;
}

function renderAdminReservations() {
  const reservationRows = getSortedReservations();
  return `
    <section class="section-title">
      <div>
        <h2>Reservas e pagamentos</h2>
        <p>Confirme o sinal, gere contrato e acompanhe a assinatura digital.</p>
      </div>
    </section>
    <section class="panel reservations-table-panel">
      <div class="table-wrap">
        <table class="reservations-table">
          <thead><tr><th>Reserva</th><th>Cliente</th><th>Kit</th><th>Tema</th><th>Data</th><th>Status</th><th>Total</th><th></th></tr></thead>
          <tbody>${reservationRows.map(renderAdminReservationRow).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderAdminReservationRow(entry) {
  const isSelected = entry.id === state.selectedReservationId;
  return `
    <tr class="reservation-table-row ${isSelected ? "selected" : ""}">
      <td>${escapeHtml(entry.id)}</td>
      <td>${escapeHtml(clientName(entry.clientId))}${entry.clientCorrectionNote ? `<br /><span class="status-pill warning">Dados a revisar</span>` : ""}</td>
      <td>${escapeHtml(entry.kitName)}</td>
      <td>${escapeHtml(reservationThemeLabel(entry))}</td>
      <td>${dateLabel(entry.eventDate)}</td>
      <td>${statusPill(entry.status)}</td>
      <td>${money(entry.total)}</td>
      <td><button class="secondary-button" data-open-reservation="${escapeAttr(entry.id)}">${isSelected ? "Fechar" : "Abrir"}</button></td>
    </tr>
    ${
      isSelected
        ? `<tr class="reservation-expanded-row"><td colspan="8"><div class="reservation-expanded-detail">${renderReservationDetail(entry)}</div></td></tr>`
        : ""
    }
  `;
}

function renderReservationDetail(entry) {
  const finance = reservationFinancials(entry);
  const confirmDepositDisabled = canConfirmDeposit(entry) ? pendingDisabledAttr() : 'disabled title="Disponivel somente quando a reserva estiver aguardando confirmacao de sinal."';
  return `
    <div class="reservation-detail">
      ${renderReservationHeaderCard(entry, finance)}
      ${renderClientCorrectionAlert(entry)}
      ${renderReservationFinancialSummary(entry, finance)}
      ${renderReservationActionPanel(entry, confirmDepositDisabled)}
      ${renderReservationEventBlock(entry)}
      ${renderReservationItemsCard(entry)}
      ${renderReceiptAdminBlock(entry)}
      ${renderReservationClosingBlock(entry, finance)}
      ${renderReservationContractBlock(entry)}
    </div>
  `;
}

function renderReservationHeaderCard(entry, finance) {
  const pendingClass = finance.finalDue > 0 ? "warning" : "signed";
  const pendingText = finance.finalDue > 0 ? `Pendência: ${money(finance.finalDue)}` : "Sem pendência";
  return `
    <section class="reservation-hero-card">
      <div class="reservation-hero-main">
        <span class="detail-eyebrow">Código da reserva</span>
        <h3>${escapeHtml(entry.id)}</h3>
        <strong>${escapeHtml(clientName(entry.clientId))}</strong>
        <div class="reservation-hero-meta">
          ${statusPill(entry.status)}
          <span class="status-pill ${pendingClass}">${escapeHtml(pendingText)}</span>
        </div>
      </div>
      <div class="reservation-hero-total">
        <span>Total</span>
        <strong>${money(entry.total)}</strong>
        <small>Evento: ${dateLabel(entry.eventDate)}</small>
      </div>
    </section>
  `;
}

function renderReservationEventBlock(entry) {
  return `
    <section class="reservation-info-card">
      <div class="reservation-card-heading">
        <div>
          <span class="detail-eyebrow">Evento e logística</span>
          <h4>Dados principais</h4>
        </div>
      </div>
      <div class="reservation-info-grid">
        ${detail("Kit", escapeHtml(entry.kitName))}
        ${detail("Tema escolhido", escapeHtml(reservationThemeLabel(entry)))}
        ${detail("Data do evento", dateLabel(entry.eventDate))}
        ${detail("Entrega/Retirada", entry.delivery ? "Ateliê entrega" : "Cliente retira")}
        ${detail("Montagem", entry.assembly ? "Com montagem" : "Sem montagem")}
        ${detail("Devolução/Busca", entry.returnService ? "Ateliê retira" : "Cliente devolve")}
        <div class="field full-span compact-field">
          <label for="adminDeliveryDate">Data entrega/coleta</label>
          <input id="adminDeliveryDate" type="date" value="${escapeHtml(entry.deliveryDate || "")}" />
        </div>
      </div>
    </section>
  `;
}

function renderReservationFinancialSummary(entry, finance = reservationFinancials(entry)) {
  const signalDue = financialNumber(entry.signalDue, financialNumber(entry.total) * 0.5);
  const dueClass = finance.finalDue > 0 ? "is-pending" : "is-paid";
  return `
    <section class="reservation-info-card reservation-summary-card">
      <div class="reservation-card-heading">
        <div>
          <span class="detail-eyebrow">Resumo financeiro</span>
          <h4>Valores da reserva</h4>
        </div>
      </div>
      <div class="finance-mini-grid">
        ${financeMiniCard("Valor do kit", money(entry.kitValue))}
        ${financeMiniCard("Adicionais", money(entry.additionalValue || 0))}
        ${financeMiniCard("Serviços", money(entry.serviceFee))}
        ${financeMiniCard("Desconto", money(entry.discount))}
        ${financeMiniCard("Sinal solicitado", money(signalDue))}
        ${financeMiniCard("Sinal pago", money(entry.deposit))}
        ${financeMiniCard("Pagamentos adicionais", money(finance.additionalPayments), finance.additionalPayments > 0 ? "is-paid" : "")}
        ${financeMiniCard("Total", money(entry.total), "is-total")}
        ${financeMiniCard("Restante pendente", money(finance.finalDue), dueClass)}
      </div>
      ${renderAdditionalPaymentsCompact(entry)}
    </section>
  `;
}

function financeMiniCard(label, value, className = "") {
  return `
    <div class="finance-mini-card ${className}">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function renderAdditionalPaymentsCompact(entry) {
  const payments = entry.payments || [];
  if (!payments.length) return `<div class="small-note payment-compact-empty">Nenhum pagamento adicional registrado.</div>`;
  return `
    <div class="payment-compact-list">
      <span class="detail-eyebrow">Pagamentos adicionais</span>
      ${payments.map((payment) => `
        <div class="payment-compact-row">
          <span>${escapeHtml(paymentDescription(payment))}</span>
          <strong>${money(payment.amount)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function paymentDescription(payment) {
  return `${payment.paymentMethod || "Pagamento"}${payment.paidAt ? ` · ${dateLabel(payment.paidAt)}` : ""}`;
}

function renderReservationActionPanel(entry, confirmDepositDisabled) {
  return `
    <section class="reservation-info-card reservation-actions-panel">
      <div class="reservation-card-heading">
        <div>
          <span class="detail-eyebrow">Ações principais</span>
          <h4>Próximos passos</h4>
        </div>
      </div>
      <div class="field">
        <label for="adminDeposit">Sinal pago</label>
        <input id="adminDeposit" type="number" min="0" step="1" value="${entry.deposit || entry.signalDue || entry.total * 0.5}" />
      </div>
      <div class="field">
        <label for="adminPayment">Forma de pagamento</label>
        <select id="adminPayment">
          ${paymentMethodOptions(true).map((method) => optionMarkup(method, entry.paymentMethod)).join("")}
        </select>
      </div>
      <div class="field">
        <label for="adminStatus">Status da reserva</label>
        <select id="adminStatus">
          ${[...new Set([entry.status, ...reservationStatuses].filter(Boolean))].map((status) => optionMarkup(status, entry.status)).join("")}
        </select>
      </div>
      <div class="reservation-action-stack">
        <button class="primary-button" data-confirm-deposit="${escapeAttr(entry.id)}" ${confirmDepositDisabled}>${pendingLabel("confirm-deposit", "Confirmar sinal e reserva", "Confirmando...")}</button>
        <button class="secondary-button" data-generate-contract="${escapeAttr(entry.id)}" ${entry.deposit <= 0 && !entry.contractGeneratedAt ? "disabled" : pendingDisabledAttr()}>${pendingLabel("generate-contract", "Gerar contrato", "Gerando contrato...")}</button>
        ${entry.contractGeneratedAt ? `<button class="secondary-button" data-open-contract="${escapeAttr(entry.id)}">Ver contrato</button>` : ""}
        <button class="secondary-button" data-new-payment="${escapeAttr(entry.id)}">Novo pagamento</button>
        <button class="secondary-button" data-save-reservation-status="${escapeAttr(entry.id)}" ${pendingDisabledAttr()}>${pendingLabel("save-status", "Salvar financeiro", "Salvando...")}</button>
        <button class="danger-button" data-cancel-reservation="${escapeAttr(entry.id)}" ${pendingDisabledAttr()}>${pendingLabel("cancel-reservation", "Cancelar reserva", "Cancelando...")}</button>
      </div>
    </section>
  `;
}

function renderReservationItemsCard(entry) {
  const { included, additional } = splitReservationItems(entry);
  const kitText = store.kits.find((kitEntry) => kitEntry.id === entry.kitId)?.itemsText || "";
  const kitTextRows = kitText.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const includedCount = kitTextRows.length || included.length;
  const addonRows = (entry.addonIds || []).map((id) => store.addons.find((addonEntry) => addonEntry.id === id)).filter(Boolean);
  const additionalCount = addonRows.length || additional.length;
  const addonList = addonRows.length
    ? addonRows.map((addonEntry) => `<li>${escapeHtml(addonEntry.name)} · ${money(addonEntry.price)}</li>`).join("")
    : additional.map((entryItem) => `<li>${escapeHtml(formatItemLine(entryItem))}</li>`).join("");

  return `
    <section class="reservation-info-card">
      <div class="reservation-card-heading">
        <div>
          <span class="detail-eyebrow">Itens da reserva</span>
          <h4>Kit e adicionais</h4>
        </div>
        <span class="small-note">${includedCount} item(ns) no kit · ${additionalCount} adicional(is)</span>
      </div>
      <details class="reservation-accordion">
        <summary><span>Itens inclusos no kit</span><strong>${includedCount} item(ns)</strong></summary>
        ${
          kitText
            ? `<p class="muted">${escapeHtml(kitText).replaceAll("\n", "<br />")}</p>`
            : `<ul class="item-list">${included.map((entryItem) => `<li>${escapeHtml(formatItemLine(entryItem))}</li>`).join("")}</ul>`
        }
      </details>
      <details class="reservation-accordion">
        <summary><span>Adicionais selecionados</span><strong>${additionalCount} adicional(is)</strong></summary>
        ${additionalCount ? `<ul class="item-list">${addonList}</ul>` : `<div class="small-note">Sem adicionais nessa reserva.</div>`}
      </details>
    </section>
  `;
}

function renderReservationClosingBlock(entry, finance = reservationFinancials(entry)) {
  return `
    <details class="reservation-info-card reservation-closing-card">
      <summary class="reservation-card-heading">
        <div>
          <span class="detail-eyebrow">Fechamento financeiro</span>
          <h4>Pagamento, avarias e reposição</h4>
        </div>
        <span class="status-pill ${finance.finalDue > 0 ? "warning" : "signed"}">${finance.finalDue > 0 ? "Pendente" : "Quitado"}</span>
      </summary>
      ${renderAdminOperationalFields(entry)}
    </details>
  `;
}

function renderReservationContractBlock(entry) {
  const signature = entry.signature;
  const signatureType = signature?.type === "physical" ? "Físico anexado" : signature ? "Digital" : "Pendente";
  const signatureStatus = signature ? "Contrato assinado" : entry.contractGeneratedAt ? "Aguardando assinatura" : "Contrato ainda não gerado";
  return `
    <section class="reservation-info-card">
      <div class="reservation-card-heading">
        <div>
          <span class="detail-eyebrow">Contrato e assinatura</span>
          <h4>${signatureStatus}</h4>
        </div>
        <span class="status-pill ${signature ? "signed" : "pending"}">${escapeHtml(signatureType)}</span>
      </div>
      <div class="reservation-info-grid">
        ${detail("Gerado em", dateTimeLabel(entry.contractGeneratedAt) || "Não gerado")}
        ${detail("Status da assinatura", signature ? "Assinado" : "Pendente")}
        ${detail("Tipo de assinatura", signatureType)}
        ${detail("Assinante", escapeHtml(signature?.signer || "Aguardando assinatura"))}
        ${detail("Assinado em", dateTimeLabel(signature?.signedAt) || "Aguardando assinatura")}
      </div>
      ${signature ? renderSignatureEvidence(entry) : ""}
      ${entry.contractGeneratedAt ? renderPhysicalContractUpload(entry) : `<div class="hint-box">Gere o contrato para liberar assinatura digital ou anexo físico.</div>`}
    </section>
  `;
}

function renderClientCorrectionAlert(entry) {
  if (!entry.clientCorrectionNote) return "";
  return `
    <div class="attention-box full-span">
      <strong>Cliente informou divergencia nos dados</strong>
      <p>${escapeHtml(entry.clientCorrectionNote)}</p>
    </div>
  `;
}

function canConfirmDeposit(entry) {
  const status = String(entry?.status || "").toLowerCase();
  return status.includes("aguardando") && status.includes("confirma") && status.includes("sinal");
}

function renderAdminOperationalFields(entry) {
  const finance = reservationFinancials(entry);
  return `
    <div class="admin-reservation-fields">
      <div class="field">
        <label for="adminBalanceDue">Restante do pagamento</label>
        <input id="adminBalanceDue" type="number" min="0" step="0.01" value="${finance.balanceDue}" />
      </div>
      <div class="field">
        <label for="adminDamageFee">Avarias</label>
        <input id="adminDamageFee" type="number" min="0" step="0.01" value="${finance.damageFee}" />
      </div>
      <div class="field">
        <label for="adminReplacementFee">Reposição</label>
        <input id="adminReplacementFee" type="number" min="0" step="0.01" value="${finance.replacementFee}" />
      </div>
      <div class="field full-span">
        <label for="adminFinanceNotes">Observações de pagamento/avarias</label>
        <textarea id="adminFinanceNotes">${escapeHtml(entry.financeNotes || "")}</textarea>
      </div>
      <div class="hint-box full-span">Total pendente atual: ${money(finance.finalDue)}.</div>
    </div>
  `;
}

function renderReceiptAdminBlock(entry) {
  if (!entry.receiptName) {
    return `
      <section class="reservation-info-card">
        <div class="reservation-card-heading">
          <div>
          <span class="detail-eyebrow">Comprovante de pagamento</span>
            <h4>Não anexado</h4>
          </div>
        </div>
        <div class="small-note">Nenhum comprovante foi anexado para esta reserva.</div>
      </section>
    `;
  }
  const preview = entry.receiptData
    ? entry.receiptType?.startsWith("image/")
      ? `<img class="receipt-thumb" src="${safeImageSrc(entry.receiptData)}" alt="Comprovante anexado" />`
      : `<span class="receipt-file-icon">PDF</span>`
    : `<span class="receipt-file-icon">Arquivo</span>`;
  const action = entry.receiptData
    ? `<button class="secondary-button" data-open-receipt="${escapeAttr(entry.id)}">Visualizar comprovante</button>`
    : `<span class="small-note">Arquivo antigo sem pré-visualização salva.</span>`;
  return `
    <section class="reservation-info-card receipt-admin-card">
      <div class="reservation-card-heading">
        <div>
          <span class="detail-eyebrow">Comprovante de pagamento</span>
          <h4>${escapeHtml(entry.receiptName)}</h4>
        </div>
      </div>
      <div class="receipt-compact">
        ${preview}
        <div>
          <strong>${escapeHtml(entry.receiptName)}</strong>
          <p class="small-note">${escapeHtml(entry.receiptType || "Tipo não informado")}</p>
          ${action}
        </div>
      </div>
    </section>
  `;
}

function detail(label, value) {
  return `<div class="detail-row"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderReservationItemSections(entry) {
  const { included, additional } = splitReservationItems(entry);
  const kitText = store.kits.find((kitEntry) => kitEntry.id === entry.kitId)?.itemsText || "";
  const addonRows = (entry.addonIds || []).map((id) => store.addons.find((addonEntry) => addonEntry.id === id)).filter(Boolean);
  return `
    <div>
      <strong>Itens inclusos no kit</strong>
      ${
        kitText
          ? `<p class="muted">${escapeHtml(kitText).replaceAll("\n", "<br />")}</p>`
          : `<ul class="item-list">${included.map((entryItem) => `<li>${escapeHtml(formatItemLine(entryItem))}</li>`).join("")}</ul>`
      }
    </div>
    ${
      addonRows.length
        ? `<div><strong>Adicionais</strong><ul class="item-list">${addonRows.map((addonEntry) => `<li>${escapeHtml(addonEntry.name)} · ${money(addonEntry.price)}</li>`).join("")}</ul></div>`
        : additional.length
        ? `<div><strong>Adicionais</strong><ul class="item-list">${additional.map((entryItem) => `<li>${escapeHtml(formatItemLine(entryItem))}</li>`).join("")}</ul></div>`
        : `<div class="small-note">Sem adicionais nessa reserva.</div>`
    }
  `;
}

function splitReservationItems(entry) {
  const kitData = store.kits.find((kitEntry) => kitEntry.name === entry.kitName);
  const allItems = entry.itemCodes.map(findItem).filter(Boolean);
  if (!kitData) return { included: allItems, additional: [] };
  const kitCodes = new Set(kitData.itemCodes);
  return {
    included: kitData.itemCodes.map(findItem).filter(Boolean),
    additional: allItems.filter((entryItem) => !kitCodes.has(entryItem.codigo)),
  };
}

function renderAdminClients() {
  return `
    <section class="section-title">
      <div>
        <h2>Clientes</h2>
        <p>Cadastre clientes com dados completos e acesso ao portal.</p>
      </div>
      <button class="primary-button" data-action="new-client">Cadastrar cliente</button>
    </section>
    ${renderClientRegistrationRequestsPanel()}
    <section class="panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              ${clientFieldDefs.map((fieldDef) => `<th>${fieldDef.label}</th>`).join("")}
              <th>Status cadastro</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            ${store.clients
              .map(
                (client) => `
                  <tr>
                    ${clientFieldDefs.map((fieldDef) => `<td>${escapeHtml(client[fieldDef.key] || "")}</td>`).join("")}
                    <td>${registrationStatusBadge(client.registrationStatus)}</td>
                    <td>
                      <div class="row-actions">
                        <button class="secondary-button" data-edit-client="${escapeAttr(client.id)}">Editar</button>
                        <button class="danger-button" data-delete-client="${escapeAttr(client.id)}">Excluir</button>
                      </div>
                    </td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderClientRegistrationRequestsPanel() {
  const pendingRequests = store.clients
    .filter((client) => (client.registrationStatus || "Aprovado") === "Pendente")
    .sort((a, b) => String(b.registrationRequestedAt || "").localeCompare(String(a.registrationRequestedAt || "")));
  const stats = registrationStats();

  return `
    <section class="panel registration-requests-panel">
      <div class="panel-header">
        <div>
          <h3>Solicitações de cadastro</h3>
          <p class="small-note">Pendentes ${stats.pending} · Aprovados ${stats.approved} · Negados ${stats.denied} · Ativos ${stats.active} · Desabilitados ${stats.disabled}</p>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>CPF</th>
              <th>Contato</th>
              <th>Endereço</th>
              <th>Solicitado em</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            ${
              pendingRequests.length
                ? pendingRequests.map(renderClientRegistrationRequestRow).join("")
                : `<tr><td colspan="6"><div class="empty-state">Nenhuma solicitação de cadastro pendente.</div></td></tr>`
            }
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderClientRegistrationRequestRow(client) {
  const address = [client.street, client.number, client.complement, client.neighborhood, [client.city, client.uf].filter(Boolean).join("/")].filter(Boolean).join(", ");
  return `
    <tr>
      <td><strong>${escapeHtml(client.name)}</strong><br /><span class="small-note">${escapeHtml(client.email)}</span></td>
      <td>${escapeHtml(client.cpf)}</td>
      <td>${escapeHtml(client.phone)}<br /><span class="small-note">WhatsApp: ${escapeHtml(client.whatsapp)}</span></td>
      <td>${escapeHtml(address)}</td>
      <td>${dateTimeLabel(client.registrationRequestedAt)}</td>
      <td>
        <div class="registration-actions">
          <input type="text" data-registration-deny-reason="${escapeAttr(client.id)}" placeholder="Motivo da negativa (opcional)" />
          <div class="row-actions">
            <button class="primary-button" data-approve-registration="${escapeAttr(client.id)}">Aprovar</button>
            <button class="danger-button" data-deny-registration="${escapeAttr(client.id)}">Negar</button>
          </div>
        </div>
      </td>
    </tr>
  `;
}

function renderAdminAccesses() {
  const users = [...store.users].sort((a, b) => {
    if (a.id === "admin") return -1;
    if (b.id === "admin") return 1;
    return String(a.name || "").localeCompare(String(b.name || ""), "pt-BR");
  });
  return `
    <section class="section-title">
      <div>
        <h2>Acessos</h2>
        <p>Crie, visualize e edite os logins do sistema. Acessos com perfil Admin não podem ser desabilitados.</p>
      </div>
      <button class="primary-button" data-action="new-access">Criar acesso</button>
    </section>
    <section class="panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Perfil</th>
              <th>Login</th>
              <th>Cliente vinculado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            ${users.map(renderAccessRow).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderAccessRow(user) {
  const protectedAdmin = user.role === "admin";
  const linkedClient = user.clientId ? clientName(user.clientId) : "Sem vínculo";
  return `
    <tr>
      <td>${escapeHtml(user.name || "")}</td>
      <td>${escapeHtml(accessRoleLabels[user.role] || user.role)}</td>
      <td>${escapeHtml(user.login || user.email || "")}</td>
      <td>${escapeHtml(linkedClient)}</td>
      <td>${accessStatusPill(user)}</td>
      <td>
        <div class="row-actions">
          <button class="secondary-button" data-edit-access="${escapeAttr(user.id)}">Editar</button>
          <button class="secondary-button" data-toggle-access="${escapeAttr(user.id)}" ${protectedAdmin ? "disabled" : ""}>${user.enabled === false ? "Habilitar" : "Desabilitar"}</button>
        </div>
      </td>
    </tr>
  `;
}

function accessStatusPill(user) {
  if (user.role === "admin") return `<span class="status-pill paid">Ativo protegido</span>`;
  return user.enabled === false
    ? `<span class="status-pill cancelled">Desabilitado</span>`
    : `<span class="status-pill signed">Habilitado</span>`;
}

function renderAdminKitAddons() {
  return `
    <section class="section-title">
      <div>
        <h2>Kit e Adicionais</h2>
        <p>Cadastre o que o cliente vê na jornada de reserva e ajuste os valores dos serviços opcionais.</p>
      </div>
      <div class="section-actions kit-addon-shortcuts">
        <a class="secondary-button" href="#admin-kits">Ir para Kit</a>
        <a class="secondary-button" href="#admin-addons">Ir para Adicionais</a>
      </div>
    </section>
    <section class="panel service-fees-panel">
      <div class="panel-header"><h3>Valores de serviços</h3></div>
      <div class="panel-body">
        <form id="serviceFeesForm" class="service-fees-form" novalidate>
          <div class="service-fees-fields">
            ${serviceField("Entrega", "delivery", store.serviceFees.delivery)}
            ${serviceField("Montagem", "assembly", store.serviceFees.assembly)}
            ${serviceField("Devolução", "returnService", store.serviceFees.returnService)}
          </div>
          <div class="actions">
            <button class="primary-button" type="submit" ${pendingDisabledAttr()}>${pendingLabel("save-service-fees", "Salvar valores", "Salvando valores...")}</button>
          </div>
        </form>
      </div>
    </section>
    <div class="kit-addon-stack">
      <section class="panel" id="admin-kits">
        <div class="panel-header">
          <h3>Kits</h3>
          <button class="primary-button" data-action="new-kit">Criar kit</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Kit</th><th>Fotos</th><th>Itens</th><th>Valor</th><th>Status</th><th>Ações</th></tr></thead>
            <tbody>${store.kits.map(renderKitAdminRow).join("")}</tbody>
          </table>
        </div>
      </section>
      <section class="panel" id="admin-addons">
        <div class="panel-header">
          <h3>Adicionais</h3>
          <button class="primary-button" data-action="new-addon">Criar adicional</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Adicional</th><th>Fotos</th><th>Descrição</th><th>Valor</th><th>Status</th><th>Ações</th></tr></thead>
            <tbody>${store.addons.map(renderAddonAdminRow).join("")}</tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function renderAdminThemes() {
  return `
    <section class="section-title">
      <div>
        <h2>Temas</h2>
        <p>Cadastre os temas que o cliente pode escolher na jornada de reserva.</p>
      </div>
      <button class="primary-button" data-action="new-theme">Criar tema</button>
    </section>
    <section class="panel">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Tema</th><th>Fotos</th><th>Descrição</th><th>Status</th><th>Ações</th></tr></thead>
          <tbody>${store.themes.map(renderThemeAdminRow).join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderThemeAdminRow(themeEntry) {
  return `
    <tr>
      <td><strong>${escapeHtml(themeEntry.name)}</strong></td>
      <td>${themeEntry.photos.length}/3</td>
      <td>${escapeHtml(shortText(themeEntry.description, 120))}</td>
      <td>${enabledPill(themeEntry.enabled)}</td>
      <td>
        <div class="row-actions">
          <button class="secondary-button" data-edit-theme="${escapeAttr(themeEntry.id)}">Editar</button>
          <button class="secondary-button" data-toggle-theme="${escapeAttr(themeEntry.id)}">${themeEntry.enabled ? "Desabilitar" : "Habilitar"}</button>
          <button class="danger-button" data-delete-theme="${escapeAttr(themeEntry.id)}">Excluir</button>
        </div>
      </td>
    </tr>
  `;
}

function serviceField(label, key, value) {
  return `
    <div class="field">
      <label for="service-${key}">${label}</label>
      <input id="service-${escapeAttr(key)}" name="${escapeAttr(key)}" type="number" min="0" step="0.01" value="${escapeAttr(value)}" />
    </div>
  `;
}

function renderKitAdminRow(kitEntry) {
  return `
    <tr>
      <td><strong>${escapeHtml(kitEntry.name)}</strong><br /><span class="small-note">${escapeHtml(kitEntry.description || "")}</span></td>
      <td>${kitEntry.photos.length}/5</td>
      <td>${escapeHtml(shortText(kitEntry.itemsText, 100))}</td>
      <td>${money(kitPrice(kitEntry))}</td>
      <td>${enabledPill(kitEntry.enabled)}</td>
      <td>
        <div class="row-actions">
          <button class="secondary-button" data-edit-kit="${escapeAttr(kitEntry.id)}">Editar</button>
          <button class="secondary-button" data-toggle-kit="${escapeAttr(kitEntry.id)}">${kitEntry.enabled ? "Desabilitar" : "Habilitar"}</button>
          <button class="danger-button" data-delete-kit="${escapeAttr(kitEntry.id)}">Excluir</button>
        </div>
      </td>
    </tr>
  `;
}

function renderAddonAdminRow(addonEntry) {
  return `
    <tr>
      <td><strong>${escapeHtml(addonEntry.name)}</strong></td>
      <td>${addonEntry.photos.length}/3</td>
      <td>${escapeHtml(shortText(addonEntry.description, 100))}</td>
      <td>${money(addonEntry.price)}</td>
      <td>${enabledPill(addonEntry.enabled)}</td>
      <td>
        <div class="row-actions">
          <button class="secondary-button" data-edit-addon="${escapeAttr(addonEntry.id)}">Editar</button>
          <button class="secondary-button" data-toggle-addon="${escapeAttr(addonEntry.id)}">${addonEntry.enabled ? "Desabilitar" : "Habilitar"}</button>
          <button class="danger-button" data-delete-addon="${escapeAttr(addonEntry.id)}">Excluir</button>
        </div>
      </td>
    </tr>
  `;
}

function enabledPill(enabled) {
  return enabled
    ? `<span class="status-pill signed">Ativo</span>`
    : `<span class="status-pill cancelled">Inativo</span>`;
}

function shortText(value, limit) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
}

function formatInventoryCell(entry, fieldDef) {
  const value = entry[fieldDef.key];
  if (["rent", "purchaseValue", "replacement", "revenue"].includes(fieldDef.key)) return money(value);
  if (["availableAt", "purchaseDate"].includes(fieldDef.key)) return value ? escapeHtml(dateLabel(value)) : "";
  return escapeHtml(value ?? "");
}

function renderAdminInventory() {
  return `
    <section class="section-title">
      <div>
        <h2>Estoque</h2>
        <p>Cadastre itens para aluguel com valores, disponibilidade, fornecedor e histórico.</p>
      </div>
      <button class="primary-button" data-action="new-inventory-item">Cadastrar Item para Aluguel</button>
    </section>
    <section class="panel">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              ${inventoryFieldDefs.map((fieldDef) => `<th>${fieldDef.label}</th>`).join("")}
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            ${store.inventory
              .map(
                (entry) => `
                  <tr>
                    ${inventoryFieldDefs.map((fieldDef) => `<td>${formatInventoryCell(entry, fieldDef)}</td>`).join("")}
                    <td>
                      <div class="row-actions">
                        <button class="secondary-button" data-edit-inventory="${escapeAttr(entry.codigo)}">Editar</button>
                        <button class="danger-button" data-delete-inventory="${escapeAttr(entry.codigo)}">Excluir</button>
                      </div>
                    </td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderContractPaper(entry, canSign) {
  const client = store.clients.find((row) => row.id === entry.clientId);
  return `
    <article class="contract-paper">
      <h3>Contrato de locação de kit festa</h3>
      <p><strong>Contratante:</strong> ${escapeHtml(client?.name || "")}, CPF ${escapeHtml(client?.cpf || "")}, telefone ${escapeHtml(client?.phone || "")}.</p>
      <p><strong>Contratada:</strong> ${escapeHtml(store.company.name)}, representada por ${escapeHtml(store.company.pixName)}.</p>
      <p><strong>Objeto:</strong> locação do ${escapeHtml(entry.kitName)}, tema ${escapeHtml(reservationThemeLabel(entry))}, para o evento em ${dateLabel(entry.eventDate)}, com devolução em ${dateLabel(entry.returnDate)}.</p>
      <p><strong>Itens locados:</strong></p>
      ${renderReservationItemSections(entry)}
      <p><strong>Valores:</strong> kit ${money(entry.kitValue)}, adicionais ${money(entry.additionalValue || 0)}, serviços ${money(entry.serviceFee)}, sinal ${money(entry.deposit)}, valor total ${money(entry.total)}.</p>
      <p><strong>Pagamento do sinal:</strong> ${escapeHtml(entry.paymentMethod)}. Dados PIX: ${escapeHtml(store.company.pixName)}, ${escapeHtml(store.company.pixBank)}, chave ${escapeHtml(store.company.pixKey)}.</p>
      <p><strong>Responsabilidade:</strong> o cliente se compromete a devolver os itens no prazo e no mesmo estado de conservação. Danos, perdas ou atrasos podem gerar cobrança conforme valor de reposição.</p>
      <p><strong>Assinatura digital:</strong> a assinatura abaixo registra aceite dos termos deste contrato.</p>
      ${renderContractSignatureBlock(entry, canSign)}
    </article>
  `;
}

function renderContractSignatureBlock(entry, canSign) {
  if (entry.signature) return renderSignatureEvidence(entry);
  return `<div class="${canSign ? "" : "hidden"}"><canvas id="signaturePad" class="signature-pad" width="900" height="260" aria-label="Campo de assinatura"></canvas></div>`;
}

function renderSignatureEvidence(entry) {
  const signature = entry.signature;
  if (!signature) return "";

  if (signature.type === "physical") {
    const fileLink = signature.physicalFileUrl
      ? `<a class="secondary-button" href="${safeReceiptHref(signature.physicalFileUrl)}" target="_blank" rel="noreferrer">Abrir contrato anexado</a>`
      : "";
    return `
      <div class="physical-contract-card">
        <p><strong>Contrato físico anexado:</strong> ${escapeHtml(signature.physicalFileName || "arquivo assinado")} em ${dateTimeLabel(signature.signedAt)}</p>
        ${fileLink}
      </div>
    `;
  }

  return `<p><strong>Assinado por:</strong> ${escapeHtml(signature.signer)} em ${dateTimeLabel(signature.signedAt)}</p><img class="signature-preview" src="${safeImageSrc(signature.image)}" alt="Assinatura digital" />`;
}

function renderPhysicalContractUpload(reservation) {
  if (reservation.signature?.type === "physical") {
    return `<div class="hint-box physical-contract-note">Contrato físico anexado e registrado como assinatura da reserva.</div>`;
  }

  if (reservation.signature) {
    return `<div class="hint-box physical-contract-note">Contrato assinado digitalmente.</div>`;
  }

  return `
    <div class="physical-contract-upload">
      <div>
        <strong>Anexar contrato assinado fisicamente</strong>
        <p class="small-note">Aceita PDF, JPG, JPEG ou PNG. O anexo marca o contrato como assinado.</p>
      </div>
      <input type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" data-physical-contract="${escapeAttr(reservation.id)}" />
    </div>
  `;
}

function renderModal() {
  if (!state.modal) return "";
  if (state.modal.type === "client") return renderClientModal();
  if (state.modal.type === "access") return renderAccessModal();
  if (state.modal.type === "inventory") return renderInventoryModal();
  if (state.modal.type === "kit-addon") return renderKitAddonModal();
  if (state.modal.type === "theme") return renderThemeModal();
  if (state.modal.type === "receipt") return renderReceiptModal();
  if (state.modal.type === "payment") return renderPaymentModal();
  if (state.modal.type === "payment-method") return renderPaymentMethodModal();
  if (state.modal.type !== "contract") return "";

  const entry = store.reservations.find((row) => row.id === state.modal.id);
  if (!entry) return "";
  const client = store.clients.find((row) => row.id === entry.clientId);
  const canSign = state.user.role === "client" && entry.contractGeneratedAt && !entry.signature;
  return `
    <div class="modal-backdrop">
      <section class="modal">
        <div class="modal-title">
          <div>
            <h2>Contrato ${escapeHtml(entry.id)}</h2>
            <p>${escapeHtml(client?.name || "Cliente")} · ${escapeHtml(entry.kitName)} · ${dateLabel(entry.eventDate)}</p>
          </div>
          <button class="ghost-button" data-action="close-modal">Fechar</button>
        </div>
        <div class="modal-content">
          <article class="contract-paper">
            <h3>Contrato de locação de kit festa</h3>
            <p><strong>Contratante:</strong> ${escapeHtml(client?.name || "")}, CPF ${escapeHtml(client?.cpf || "")}, telefone ${escapeHtml(client?.phone || "")}.</p>
            <p><strong>Contratada:</strong> ${escapeHtml(store.company.name)}, representada por ${escapeHtml(store.company.pixName)}.</p>
            <p><strong>Objeto:</strong> locação do ${escapeHtml(entry.kitName)} para o evento em ${dateLabel(entry.eventDate)}, com retirada/entrega em ${dateLabel(entry.deliveryDate)} e devolução em ${dateLabel(entry.returnDate)}.</p>
            <p><strong>Itens locados:</strong></p>
            ${renderReservationItemSections(entry)}
            <p><strong>Valores:</strong> kit fechado ${money(entry.kitValue)}, adicionais ${money(entry.additionalValue || 0)}, desconto ${money(entry.discount)}, serviços ${money(entry.serviceFee)}, sinal pago ${money(entry.deposit)}, total previsto ${money(entry.total)}.</p>
            <p><strong>Pagamento do sinal:</strong> ${escapeHtml(entry.paymentMethod)}. Dados PIX: ${escapeHtml(store.company.pixName)}, ${escapeHtml(store.company.pixBank)}, chave ${escapeHtml(store.company.pixKey)}.</p>
            <p><strong>Responsabilidade:</strong> o cliente se compromete a devolver os itens no prazo e no mesmo estado de conservação. Danos, perdas ou atrasos podem gerar cobrança conforme valor de reposição.</p>
            <p><strong>Assinatura digital:</strong> a assinatura abaixo registra aceite dos termos deste contrato.</p>
            ${renderContractSignatureBlock(entry, canSign)}
          </article>
          <div class="actions">
            ${canSign ? `<button class="secondary-button" data-action="clear-signature">Limpar assinatura</button><button class="primary-button" data-save-signature="${escapeAttr(entry.id)}">Salvar assinatura</button>` : ""}
            <button class="secondary-button" data-action="print-contract">Imprimir contrato</button>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderReceiptModal() {
  const entry = store.reservations.find((row) => row.id === state.modal.id);
  if (!entry || !entry.receiptData) return "";
  const href = safeReceiptHref(entry.receiptData);
  const preview = entry.receiptType?.startsWith("image/")
    ? `<img class="receipt-modal-preview" src="${safeImageSrc(entry.receiptData)}" alt="Comprovante anexado" />`
    : `<iframe class="receipt-pdf-preview" src="${href}" title="Comprovante anexado"></iframe>`;

  return `
    <div class="modal-backdrop">
      <section class="modal receipt-modal">
        <div class="modal-title">
          <div>
            <h2>Comprovante ${escapeHtml(entry.id)}</h2>
            <p>${escapeHtml(entry.receiptName || "Arquivo anexado")} · ${escapeHtml(clientName(entry.clientId))}</p>
          </div>
          <button class="ghost-button" data-action="close-modal">Fechar</button>
        </div>
        <div class="modal-content">
          ${preview}
          <div class="actions">
            <a class="secondary-button" href="${href}" target="_blank" rel="noreferrer">Abrir em nova aba</a>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderPaymentModal() {
  const entry = store.reservations.find((row) => row.id === state.modal.id);
  if (!entry) return "";
  const finance = reservationFinancials(entry);
  const today = new Date().toISOString().slice(0, 10);
  return `
    <div class="modal-backdrop">
      <section class="modal payment-modal">
        <div class="modal-title">
          <div>
            <h2>Novo pagamento</h2>
            <p>${escapeHtml(entry.id)} · ${escapeHtml(clientName(entry.clientId))} · pendente ${money(finance.finalDue)}</p>
          </div>
          <button class="ghost-button" data-action="close-modal">Fechar</button>
        </div>
        <form class="modal-content" id="reservationPaymentForm" data-reservation-id="${escapeAttr(entry.id)}" novalidate>
          <div class="payment-modal-summary">
            <div><span>Total</span><strong>${money(entry.total)}</strong></div>
            <div><span>Sinal pago</span><strong>${money(entry.deposit)}</strong></div>
            <div><span>Pagamentos adicionais</span><strong>${money(finance.additionalPayments)}</strong></div>
            <div><span>Restante</span><strong>${money(finance.finalDue)}</strong></div>
          </div>
          <div class="form-grid">
            <div class="field">
              <label for="newPaymentAmount">Valor pago</label>
              <input id="newPaymentAmount" name="amount" type="number" min="0.01" step="0.01" value="${finance.finalDue > 0 ? finance.finalDue : ""}" required />
            </div>
            <div class="field">
              <label for="newPaymentMethod">Forma de pagamento</label>
              <select id="newPaymentMethod" name="paymentMethod" required>
                ${paymentMethodOptions(true).map((method) => optionMarkup(method, entry.paymentMethod || state.draft.paymentMethod)).join("")}
              </select>
            </div>
            <div class="field">
              <label for="newPaymentDate">Data do pagamento</label>
              <input id="newPaymentDate" name="paidAt" type="date" value="${today}" required />
            </div>
            <div class="field">
              <label for="newPaymentReceipt">Comprovante/anexo</label>
              <input id="newPaymentReceipt" name="receipt" type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" />
              <div class="small-note">Aceita PDF, JPG, JPEG ou PNG. Limite de 8 MB.</div>
            </div>
          </div>
          <div class="actions">
            <button class="primary-button" type="submit" ${pendingDisabledAttr()}>${pendingLabel("save-payment", "Registrar pagamento", "Registrando...")}</button>
            <button class="secondary-button" type="button" data-action="close-modal">Cancelar</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderPaymentMethodModal() {
  const methodEntry = state.modal.id ? store.paymentMethods.find((entry) => entry.id === state.modal.id) : null;
  const model = methodEntry || createEmptyPaymentMethod();
  const isEditing = Boolean(methodEntry?.id);
  const title = isEditing ? "Editar forma de pagamento" : "Nova forma de pagamento";
  return `
    <div class="modal-backdrop">
      <section class="modal payment-method-modal">
        <div class="modal-title">
          <div>
            <h2>${title}</h2>
            <p>Atualize os dados exibidos ao cliente sem alterar a lista principal da aba Financeiro.</p>
          </div>
          <button class="ghost-button" data-action="close-modal">Fechar</button>
        </div>
        <form class="modal-content" id="paymentMethodForm" data-id="${escapeAttr(model.id || "")}" novalidate>
          <div class="form-grid">
            <div class="field">
              <label for="paymentName">Nome</label>
              <input id="paymentName" name="name" type="text" value="${escapeHtml(model.name || "")}" placeholder="PIX, Cartao, Transferencia" required />
            </div>
            <div class="field">
              <label for="paymentType">Tipo</label>
              <select id="paymentType" name="type">
                ${paymentMethodTypeOptions().map(([value, label]) => optionMarkup(value, model.type, label)).join("")}
              </select>
            </div>
            <div class="field">
              <label for="paymentPixKey">Chave PIX</label>
              <input id="paymentPixKey" name="pixKey" type="text" value="${escapeHtml(model.pixKey || "")}" />
            </div>
            <div class="field">
              <label for="paymentPixName">Recebedor PIX</label>
              <input id="paymentPixName" name="pixName" type="text" value="${escapeHtml(model.pixName || "")}" />
            </div>
            <div class="field">
              <label for="paymentPixCity">Cidade PIX</label>
              <input id="paymentPixCity" name="pixCity" type="text" value="${escapeHtml(model.pixCity || "")}" />
            </div>
            <div class="field">
              <label for="paymentBank">Banco/dados auxiliares</label>
              <input id="paymentBank" name="bank" type="text" value="${escapeHtml(model.bank || "")}" />
            </div>
            <div class="field full-span">
              <label for="paymentInstructions">Orientacoes para o cliente</label>
              <textarea id="paymentInstructions" name="instructions">${escapeHtml(model.instructions || "")}</textarea>
            </div>
            <label class="choice-option full-span">
              <input type="checkbox" name="enabled" ${model.enabled !== false ? "checked" : ""} />
              Forma ativa para clientes
            </label>
          </div>
          <div class="actions">
            <button class="primary-button" type="submit" ${pendingDisabledAttr()}>${pendingLabel("save-payment-method", isEditing ? "Salvar forma" : "Criar forma", "Salvando...")}</button>
            <button class="secondary-button" type="button" data-action="close-modal">Cancelar</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderClientModal() {
  const client = state.modal.id ? store.clients.find((entry) => entry.id === state.modal.id) : null;
  const model = client || createEmptyClient();
  const title = client ? "Editar cliente" : "Cadastrar cliente";
  return `
    <div class="modal-backdrop">
      <section class="modal">
        <div class="modal-title">
          <div>
            <h2>${title}</h2>
            <p>Dados cadastrais, contato, endereço e acesso do cliente.</p>
          </div>
          <button class="ghost-button" data-action="close-modal">Fechar</button>
        </div>
        <form class="modal-content" id="clientForm" data-client-id="${escapeAttr(client?.id || "")}" novalidate>
          ${renderFormAlert()}
          <div class="form-grid">
            ${clientFieldDefs.map((fieldDef) => renderClientFormField(fieldDef, model)).join("")}
          </div>
          <div class="actions">
            <button class="primary-button" type="submit" ${pendingDisabledAttr()}>${pendingLabel("save-client", client ? "Salvar alterações" : "Cadastrar cliente", client ? "Salvando cliente..." : "Cadastrando cliente...")}</button>
            <button class="secondary-button" type="button" data-action="close-modal">Cancelar</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderClientFormField(fieldDef, client) {
  const value = escapeHtml(client[fieldDef.key] || "");
  const required = fieldDef.required ? "required" : "";
  const span = fieldDef.type === "textarea" || fieldDef.key === "street" ? " full-span" : "";
  const attributes = clientFormFieldAttributes(fieldDef);
  if (fieldDef.type === "textarea") {
    return `
      <div class="field${span}${fieldErrorClass(fieldDef.key)}">
        <label for="client-${fieldDef.key}">${fieldDef.label}</label>
        <textarea id="client-${fieldDef.key}" name="${fieldDef.key}" ${required}>${value}</textarea>
        ${fieldErrorMessage(fieldDef.key)}
      </div>
    `;
  }
  return `
    <div class="field${span}${fieldErrorClass(fieldDef.key)}">
      <label for="client-${fieldDef.key}">${fieldDef.label}</label>
      <input id="client-${fieldDef.key}" name="${fieldDef.key}" type="${fieldDef.type}" value="${value}" ${attributes} ${required} />
      ${fieldErrorMessage(fieldDef.key)}
    </div>
  `;
}

function clientFormFieldAttributes(fieldDef) {
  if (fieldDef.key === "cpf") return 'data-mask-field="cpf" inputmode="numeric" autocomplete="off"';
  if (fieldDef.key === "phone" || fieldDef.key === "whatsapp" || fieldDef.key === "phone2") return 'data-mask-field="phone" inputmode="tel" autocomplete="tel"';
  if (fieldDef.key === "cep") return 'data-mask-field="cep" inputmode="numeric" autocomplete="postal-code"';
  if (fieldDef.key === "uf") return 'data-mask-field="uf" maxlength="2" autocomplete="address-level1"';
  if (fieldDef.key === "email") return 'autocomplete="email"';
  if (fieldDef.key === "login") return 'data-mask-field="loginCpf" inputmode="numeric" autocomplete="off"';
  if (fieldDef.key === "password") return 'autocomplete="new-password"';
  return "";
}

function renderAccessModal() {
  const user = state.modal.id ? store.users.find((entry) => entry.id === state.modal.id) : null;
  const model = user || createEmptyAccess();
  const protectedAdmin = model.role === "admin";
  const title = user ? "Editar acesso" : "Criar acesso";
  const passwordRequired = user && state.apiConnected && !model.password ? "" : "required";
  return `
    <div class="modal-backdrop">
      <section class="modal">
        <div class="modal-title">
          <div>
            <h2>${title}</h2>
            <p>Controle login, senha, perfil e status de acesso ao portal.</p>
          </div>
          <button class="ghost-button" data-action="close-modal">Fechar</button>
        </div>
        <form class="modal-content" id="accessForm" data-access-id="${escapeAttr(user?.id || "")}" novalidate>
          ${renderFormAlert()}
          <div class="form-grid">
            <div class="field${fieldErrorClass("name")}">
              <label for="access-name">Nome</label>
              <input id="access-name" name="name" type="text" value="${escapeHtml(model.name || "")}" required />
              ${fieldErrorMessage("name")}
            </div>
            <div class="field">
              <label for="access-role">Perfil</label>
              <select id="access-role" name="role" ${protectedAdmin ? "disabled" : ""}>
                ${Object.entries(accessRoleLabels).map(([role, label]) => optionMarkup(role, model.role, label)).join("")}
              </select>
            </div>
            <div class="field${fieldErrorClass("login")}">
              <label for="access-login">Login ${model.role === "client" ? "(CPF)" : ""}</label>
              <input id="access-login" name="login" data-access-login type="text" value="${escapeHtml(model.role === "client" ? maskCpf(model.login || model.email || "") : model.login || model.email || "")}" inputmode="${model.role === "client" ? "numeric" : "text"}" autocomplete="off" required />
              ${fieldErrorMessage("login")}
            </div>
            <div class="field${fieldErrorClass("password")}">
              <label for="access-password">Senha</label>
              <input id="access-password" name="password" type="password" value="${escapeHtml(model.password || "")}" autocomplete="new-password" ${passwordRequired} />
              ${fieldErrorMessage("password")}
              ${user && state.apiConnected ? `<div class="small-note">Deixe em branco para manter a senha atual.</div>` : ""}
            </div>
            <div class="field full-span${fieldErrorClass("clientId")}">
              <label for="access-client">Cliente vinculado</label>
              <select id="access-client" name="clientId" data-access-client-picker ${protectedAdmin ? "disabled" : ""}>
                <option value="">Sem vínculo</option>
                ${store.clients.map((client) => `<option value="${escapeAttr(client.id)}" ${model.clientId === client.id ? "selected" : ""}>${escapeHtml(client.name)} · ${escapeHtml(client.cpf)}</option>`).join("")}
              </select>
              ${fieldErrorMessage("clientId")}
              <div class="small-note">Use vínculo para liberar acesso de cliente já cadastrado.</div>
            </div>
            <label class="choice-option full-span">
              <input type="checkbox" name="enabled" ${model.enabled === false ? "" : "checked"} ${protectedAdmin ? "disabled" : ""} />
              Usuário habilitado
            </label>
            ${protectedAdmin ? `<div class="hint-box full-span">Perfil Admin é exceção: fica sempre habilitado para evitar bloqueio do sistema.</div>` : ""}
          </div>
          <div class="actions">
            <button class="primary-button" type="submit" ${pendingDisabledAttr()}>${pendingLabel("save-access", user ? "Salvar acesso" : "Criar acesso", user ? "Salvando acesso..." : "Criando acesso...")}</button>
            <button class="secondary-button" type="button" data-action="close-modal">Cancelar</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderInventoryModal() {
  const entry = state.modal.code ? findItem(state.modal.code) : null;
  const model = entry || createEmptyInventoryItem();
  const title = entry ? "Editar item para aluguel" : "Cadastrar item para aluguel";
  return `
    <div class="modal-backdrop">
      <section class="modal">
        <div class="modal-title">
          <div>
            <h2>${title}</h2>
            <p>Dados do item, disponibilidade, valores e histórico de aluguel.</p>
          </div>
          <button class="ghost-button" data-action="close-modal">Fechar</button>
        </div>
        <form class="modal-content" id="inventoryForm" data-item-code="${escapeHtml(entry?.codigo || "")}" novalidate>
          ${renderFormAlert()}
          <div class="form-grid">
            ${inventoryFieldDefs.map((fieldDef) => renderInventoryFormField(fieldDef, model)).join("")}
          </div>
          <div class="actions">
            <button class="primary-button" type="submit" ${pendingDisabledAttr()}>${pendingLabel("save-inventory", entry ? "Salvar alterações" : "Cadastrar item", entry ? "Salvando item..." : "Cadastrando item...")}</button>
            <button class="secondary-button" type="button" data-action="close-modal">Cancelar</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderInventoryFormField(fieldDef, entry) {
  const value = escapeHtml(entry[fieldDef.key] ?? "");
  const required = fieldDef.required ? "required" : "";
  const step = fieldDef.type === "number" ? `step="0.01"` : "";
  const min = fieldDef.type === "number" ? `min="0"` : "";
  const span = fieldDef.type === "textarea" || fieldDef.key === "supplier" ? " full-span" : "";
  if (fieldDef.type === "textarea") {
    return `
      <div class="field${span}${fieldErrorClass(fieldDef.key)}">
        <label for="inventory-${fieldDef.key}">${fieldDef.label}</label>
        <textarea id="inventory-${fieldDef.key}" name="${fieldDef.key}" ${required}>${value}</textarea>
        ${fieldErrorMessage(fieldDef.key)}
      </div>
    `;
  }
  return `
    <div class="field${span}${fieldErrorClass(fieldDef.key)}">
      <label for="inventory-${fieldDef.key}">${fieldDef.label}</label>
      <input id="inventory-${fieldDef.key}" name="${fieldDef.key}" type="${fieldDef.type}" value="${value}" ${required} ${step} ${min} />
      ${fieldErrorMessage(fieldDef.key)}
    </div>
  `;
}

function renderKitAddonModal() {
  const kind = state.modal.kind;
  const isKit = kind === "kit";
  const collection = isKit ? store.kits : store.addons;
  const item = state.modal.id ? collection.find((entry) => entry.id === state.modal.id) : null;
  const model = item || createEmptyKitAddon(kind);
  const title = item ? `Editar ${isKit ? "kit" : "adicional"}` : `Criar ${isKit ? "kit" : "adicional"}`;
  const maxPhotos = isKit ? 5 : 3;
  return `
    <div class="modal-backdrop">
      <section class="modal">
        <div class="modal-title">
          <div>
            <h2>${title}</h2>
            <p>${isKit ? "Fotos, itens inclusos, valor e status do kit." : "Fotos, discriminação, valor e status do adicional."}</p>
          </div>
          <button class="ghost-button" data-action="close-modal">Fechar</button>
        </div>
        <form class="modal-content" id="kitAddonForm" data-kind="${escapeAttr(kind)}" data-id="${escapeAttr(item?.id || "")}" novalidate>
          ${renderFormAlert()}
          <div class="form-grid">
            ${kitAddonFieldDefs[kind].map((fieldDef) => renderKitAddonField(fieldDef, model)).join("")}
            <div class="field full-span">
              <label for="kit-addon-description">${isKit ? "Descrição comercial do kit" : "Observação do adicional"}</label>
              <textarea id="kit-addon-description" name="description">${escapeHtml(model.description || "")}</textarea>
            </div>
            ${renderInventorySelector(model.itemCodes || [], isKit)}
            <div class="field full-span">
              <label for="kit-addon-photos">Fotos até ${maxPhotos}</label>
              <input id="kit-addon-photos" name="photos" type="file" accept="image/*" multiple />
              <input name="existingPhotos" type="hidden" value="${escapeAttr(JSON.stringify(model.photos || []))}" />
              ${renderPhotoPreview(model.photos || [])}
              <div class="small-note">Ao enviar novas fotos, elas substituem as anteriores.</div>
            </div>
            <label class="choice-option full-span">
              <input type="checkbox" name="enabled" ${model.enabled === false ? "" : "checked"} />
              Ativo para o cliente visualizar
            </label>
          </div>
          <div class="actions">
            <button class="primary-button" type="submit" ${pendingDisabledAttr()}>${pendingLabel("save-kit-addon", item ? "Salvar alterações" : "Criar", item ? `Salvando ${isKit ? "kit" : "adicional"}...` : `Criando ${isKit ? "kit" : "adicional"}...`)}</button>
            <button class="secondary-button" type="button" data-action="close-modal">Cancelar</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderThemeModal() {
  const item = state.modal.id ? store.themes.find((entry) => entry.id === state.modal.id) : null;
  const model = item || createEmptyTheme();
  const title = item ? "Editar tema" : "Criar tema";
  return `
    <div class="modal-backdrop">
      <section class="modal">
        <div class="modal-title">
          <div>
            <h2>${title}</h2>
            <p>Fotos, descrição e status do tema exibido ao cliente.</p>
          </div>
          <button class="ghost-button" data-action="close-modal">Fechar</button>
        </div>
        <form class="modal-content" id="themeForm" data-id="${escapeAttr(item?.id || "")}" novalidate>
          ${renderFormAlert()}
          <div class="form-grid">
            <div class="field${fieldErrorClass("name")}">
              <label for="theme-name">Nome do tema</label>
              <input id="theme-name" name="name" type="text" value="${escapeHtml(model.name || "")}" required />
              ${fieldErrorMessage("name")}
            </div>
            <div class="field full-span">
              <label for="theme-description">Descrição do tema</label>
              <textarea id="theme-description" name="description">${escapeHtml(model.description || "")}</textarea>
            </div>
            <div class="field full-span">
              <label for="theme-photos">Fotos até 3</label>
              <input id="theme-photos" name="photos" type="file" accept="image/*" multiple />
              <input name="existingPhotos" type="hidden" value="${escapeAttr(JSON.stringify(model.photos || []))}" />
              ${renderPhotoPreview(model.photos || [])}
              <div class="small-note">Ao enviar novas fotos, elas substituem as anteriores.</div>
            </div>
            <label class="choice-option full-span">
              <input type="checkbox" name="enabled" ${model.enabled === false ? "" : "checked"} />
              Ativo para o cliente visualizar
            </label>
          </div>
          <div class="actions">
            <button class="primary-button" type="submit" ${pendingDisabledAttr()}>${pendingLabel("save-theme", item ? "Salvar alterações" : "Criar tema", item ? "Salvando tema..." : "Criando tema...")}</button>
            <button class="secondary-button" type="button" data-action="close-modal">Cancelar</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderKitAddonField(fieldDef, model) {
  const value = escapeHtml(model[fieldDef.key] ?? "");
  const required = fieldDef.required ? "required" : "";
  if (fieldDef.type === "textarea") {
    return `
      <div class="field full-span${fieldErrorClass(fieldDef.key)}">
        <label for="kit-addon-${fieldDef.key}">${fieldDef.label}</label>
        <textarea id="kit-addon-${fieldDef.key}" name="${fieldDef.key}" ${required}>${value}</textarea>
        ${fieldErrorMessage(fieldDef.key)}
      </div>
    `;
  }
  return `
    <div class="field${fieldErrorClass(fieldDef.key)}">
      <label for="kit-addon-${fieldDef.key}">${fieldDef.label}</label>
      <input id="kit-addon-${fieldDef.key}" name="${fieldDef.key}" type="${fieldDef.type}" min="0" step="0.01" value="${value}" ${required} />
      ${fieldErrorMessage(fieldDef.key)}
    </div>
  `;
}

function renderInventorySelector(selectedCodes, isKit) {
  const selected = new Set(selectedCodes || []);
  if (!store.inventory.length) {
    return `<div class="empty-state full-span">Cadastre itens no estoque antes de montar ${isKit ? "kits" : "adicionais"}.</div>`;
  }
  return `
    <div class="field full-span${fieldErrorClass("itemCodes")}">
      <label>${isKit ? "Itens do kit no estoque" : "Item adicional no estoque"}</label>
      <div class="inventory-picker">
        ${store.inventory
          .map(
            (entry) => `
              <label class="inventory-choice">
                <input type="checkbox" name="itemCodes" value="${escapeAttr(entry.codigo)}" ${selected.has(entry.codigo) ? "checked" : ""} />
                <span>
                  <strong>${escapeHtml(entry.codigo)} · ${escapeHtml(entry.name)}</strong>
                  <small>${escapeHtml(entry.category || "Sem categoria")} · ${escapeHtml(entry.theme || "Sem tema")} · ${money(entry.rent || 0)}</small>
                </span>
              </label>
            `,
          )
          .join("")}
      </div>
      ${fieldErrorMessage("itemCodes")}
      <div class="small-note">A discriminação exibida ao cliente será gerada a partir dos itens selecionados.</div>
    </div>
  `;
}

function renderPhotoPreview(photos) {
  if (!photos?.length) return `<div class="small-note">Nenhuma foto cadastrada.</div>`;
  return `<div class="photo-preview-row">${photos.map((src) => `<img src="${safeImageSrc(src)}" alt="Foto cadastrada" />`).join("")}</div>`;
}

function kitDiscount(kitEntry) {
  const basePrice = financialNumber(kitEntry?.basePrice);
  const discount = Math.max(0, financialNumber(kitEntry?.defaultDiscount));
  return Math.min(basePrice, discount);
}

function kitPrice(kitEntry) {
  return Math.max(0, financialNumber(kitEntry?.basePrice) - kitDiscount(kitEntry));
}

function addonCategories(addonEntry) {
  const categories = (addonEntry.itemCodes || [])
    .map(findItem)
    .filter(Boolean)
    .map((entry) => entry.category || "Sem categoria");
  return [...new Set(categories.length ? categories : ["Sem categoria"])];
}

function calculateQuote() {
  const selectedKit = getSelectedKit();
  const discount = kitDiscount(selectedKit);
  const kitValue = kitPrice(selectedKit);
  const additions = getSelectedItems().reduce((sum, entry) => sum + entry.price, 0);
  const delivery = state.draft.delivery ? store.serviceFees.delivery : 0;
  const assembly = state.draft.assembly ? store.serviceFees.assembly : 0;
  const returnService = state.draft.returnService ? store.serviceFees.returnService : 0;
  const serviceFee = delivery + assembly + returnService;
  const total = Math.max(0, kitValue + additions + serviceFee);
  return {
    kitBaseValue: financialNumber(selectedKit.basePrice),
    kitDiscount: discount,
    kitValue,
    additions,
    delivery,
    assembly,
    returnService,
    serviceFee,
    total,
    deposit: total * 0.5,
    suggestedDeposit: total * 0.5,
  };
}

function financialNumber(value, fallback = 0) {
  if (value === undefined || value === null || value === "") return fallback;
  if (typeof value === "number") return Number.isFinite(value) ? value : fallback;
  const normalized = String(value)
    .replace(/[^\d,.-]/g, "")
    .replace(/\.(?=\d{3}(?:\D|$))/g, "")
    .replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function reservationFinancials(entry) {
  const total = financialNumber(entry.total);
  const deposit = financialNumber(entry.deposit);
  const defaultBalance = Math.max(0, total - deposit);
  const hasBalanceDue = entry.balanceDue !== undefined && entry.balanceDue !== null && entry.balanceDue !== "";
  const balanceDue = hasBalanceDue ? financialNumber(entry.balanceDue) : defaultBalance;
  const damageFee = financialNumber(entry.damageFee);
  const replacementFee = financialNumber(entry.replacementFee);
  const additionalPayments = reservationAdditionalPaymentsTotal(entry);
  const legacyExtraCharges = entry.extraCharges !== undefined && entry.extraCharges !== null && entry.extraCharges !== ""
    ? financialNumber(entry.extraCharges)
    : 0;
  const extraCharges = damageFee + replacementFee || legacyExtraCharges;
  return {
    balanceDue,
    damageFee,
    replacementFee,
    extraCharges,
    additionalPayments,
    finalDue: Math.max(0, balanceDue + extraCharges - additionalPayments),
  };
}

function reservationAdditionalPaymentsTotal(entry) {
  return (entry?.payments || []).reduce((sum, payment) => sum + financialNumber(payment.amount), 0);
}

function reservationNumber(entry) {
  const match = String(entry?.id || "").match(/RES-(\d+)/);
  return match ? Number(match[1]) : 0;
}

function getSortedReservations(rows = store.reservations) {
  return [...rows].sort((a, b) => {
    const numberDiff = reservationNumber(b) - reservationNumber(a);
    if (numberDiff) return numberDiff;
    return String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
  });
}

function isCancelledReservation(entry) {
  return String(entry?.status || "").toLowerCase().includes("cancelad");
}

function financialReservations() {
  return getSortedReservations(store.reservations.filter((entry) => !isCancelledReservation(entry)));
}

function financialSummary(rows = financialReservations()) {
  return rows.reduce(
    (summary, entry) => {
      const finance = reservationFinancials(entry);
      summary.revenue += financialNumber(entry.total);
      summary.deposits += financialNumber(entry.deposit);
      summary.totalReceived += financialNumber(entry.deposit) + reservationAdditionalPaymentsTotal(entry);
      summary.balanceDue += finance.balanceDue;
      summary.extraCharges += finance.extraCharges;
      summary.finalDue += finance.finalDue;
      if (finance.finalDue > 0 || entry.status === "Pagamento pendente") summary.pendingReservations += 1;
      return summary;
    },
    { totalReceived: 0, revenue: 0, deposits: 0, balanceDue: 0, extraCharges: 0, finalDue: 0, pendingReservations: 0 },
  );
}

function filteredFinanceReservations() {
  const filters = state.financeFilters;
  const term = filters.search.trim().toLowerCase();
  return financialReservations().filter((entry) => {
    const finance = reservationFinancials(entry);
    const haystack = `${entry.id} ${clientName(entry.clientId)} ${entry.kitName} ${reservationThemeLabel(entry)}`.toLowerCase();
    if (term && !haystack.includes(term)) return false;
    if (filters.status !== "Todos" && entry.status !== filters.status) return false;
    if (filters.payment !== "Todas" && (entry.paymentMethod || "Pendente") !== filters.payment) return false;
    if (filters.pendingOnly && finance.finalDue <= 0) return false;
    if (filters.dateFrom && String(entry.eventDate || "") < filters.dateFrom) return false;
    if (filters.dateTo && String(entry.eventDate || "") > filters.dateTo) return false;
    return true;
  });
}

function getSelectedKit() {
  const activeKits = getActiveKits();
  return activeKits.find((entry) => entry.id === state.selectedKitId) || activeKits[0] || store.kits[0];
}

function getSelectedItems() {
  return state.selectedAdditions.map((id) => getActiveAddons().find((entry) => entry.id === id)).filter(Boolean);
}

function findItem(code) {
  return store.inventory.find((entry) => entry.codigo === code);
}

function clientName(clientId) {
  return store.clients.find((entry) => entry.id === clientId)?.name || "Cliente";
}

function completeLogin(user) {
  state.user = user;
  state.tab = "orcamento";
  state.adminTab = "dashboard";
  state.selectedAdditions = [];
  state.selectedKitId = getActiveKits()[0]?.id || store.kits[0]?.id;
  state.selectedThemeId = "";
  state.signatureDirty = false;

  if (user.role === "client") {
    initializeClientAfterLogin();
  } else {
    state.selectedReservationId = null;
    state.newQuoteMode = false;
    state.adminQuoteClientId = "";
    state.adminQuoteSearch = "";
    state.adminQuoteStarted = false;
    state.adminQuotePendingOverride = false;
    state.draft = defaultDraft();
  }

  render();
}

async function handleLogin(form) {
  const role = new FormData(form).get("role") || "";
  const formData = new FormData(form);
  const login = String(formData.get("login") || formData.get("email") || "").trim().toLowerCase();
  const password = form.password.value;

  const apiLogin = await loginWithApi(role, login, password);
  if (apiLogin.available) {
    if (!apiLogin.payload) {
      alert(apiLogin.error?.message || "Login ou senha invalidos.");
      return;
    }

    applyApiStore(apiLogin.payload.store);
    setAuthToken(apiLogin.payload.token);
    completeLogin(normalizeUser(apiLogin.payload.user));
    return;
  }

  if (!localFallbackEnabled) {
    alert("Nao foi possivel conectar ao servidor. Em producao, o portal exige API e banco de dados ativos.");
    return;
  }

  const user = store.users.find((entry) => {
    const userLogin = String(entry.login || entry.email || "").trim().toLowerCase();
    const userEmail = String(entry.email || "").trim().toLowerCase();
    return entry.role === role && (userLogin === login || userEmail === login) && entry.password === password;
  });
  if (!user) {
    alert("Login ou senha inválidos.");
    return;
  }
  if (user.id !== "admin" && user.enabled === false) {
    alert("Usuário desabilitado. Fale com o administrador.");
    return;
  }
  completeLogin(user);
}

async function submitQuote() {
  const adminQuoteMode = isAdminQuoteMode();
  if (!state.apiConnected && !localFallbackEnabled) {
    showToast("A API e o banco precisam estar ativos para criar reservas em producao.", "error");
    return false;
  }

  if (adminQuoteMode && !getAdminQuoteClient()) {
    showToast("Selecione um cliente cadastrado antes de criar a reserva.", "warning");
    return false;
  }

  if (!state.draft.eventDate || state.draft.eventDate < minEventDate()) {
    showToast(`A data do evento deve ser a partir de ${dateLabel(minEventDate())}.`, "error");
    return false;
  }
  state.draft.returnDate = addDaysIso(state.draft.eventDate, 1);
  state.draft.deliveryDate = state.user?.role === "client" ? "" : state.draft.deliveryDate || state.draft.eventDate;
  const selectedKit = getSelectedKit();
  const selectedTheme = getSelectedTheme();
  const customTheme = isCustomThemeMode() ? state.draft.customTheme.trim() : "";
  const selectedThemeName = customTheme || selectedTheme?.name || (state.user.role === "admin" ? "A definir" : "");
  if (isCustomThemeMode() && !customTheme) {
    showToast("Informe o tema desejado.", "error");
    state.clientStep = 2;
    return false;
  }
  if (!selectedThemeName) {
    showToast("Escolha um tema ou informe o tema desejado.", "error");
    state.clientStep = 2;
    return false;
  }
  if (state.user?.role === "client" && hasClientFinancialPending()) {
    showToast("Você possui pendência financeira em pedido anterior. Regularize com o Ateliê antes de solicitar um novo orçamento.", "warning");
    return false;
  }
  if (state.user?.role === "client" && hasClientReservationOnEventDate(state.draft.eventDate, state.selectedReservationId)) {
    showToast("Já existe uma proposta ou pedido para esta data de evento. Acesse Meus pedidos para acompanhar.", "warning");
    return false;
  }
  const quote = calculateQuote();
  if (adminQuoteMode) state.draft.clientId = state.adminQuoteClientId;
  const client = ensureClientFromDraft();
  const selectedAddons = getSelectedItems();
  const duplicate = findDuplicateReservation(client.id, selectedKit.id, state.draft.eventDate);
  if (duplicate && state.user?.role !== "client") {
    const message = `Já existe uma reserva aberta para este cliente, kit e data: ${duplicate.id}. Deseja criar outra mesmo assim?`;
    if (!confirm(message)) {
      state.selectedReservationId = duplicate.id;
      state.newQuoteMode = false;
      state.clientStep = duplicate.signature ? 6 : duplicate.contractGeneratedAt ? 5 : 4;
      showToast(`Já existe uma reserva aberta para este cliente, kit e data: ${duplicate.id}. Nenhuma nova reserva foi criada.`, "warning");
      return false;
    }
  }
  const itemCodes = [...(selectedKit.itemCodes || []), ...selectedAddons.flatMap((entry) => entry.itemCodes || [])];
  const nextId = nextReservationId();
  const entry = {
    id: nextId,
    clientId: client.id,
    kitId: selectedKit.id,
    kitName: selectedKit.name,
    themeId: customTheme ? "" : selectedTheme?.id || "",
    themeName: selectedThemeName,
    customTheme,
    deliveryDate: state.user.role === "client" ? "" : state.draft.deliveryDate || state.draft.eventDate,
    eventDate: state.draft.eventDate,
    returnDate: state.draft.returnDate,
    delivery: state.draft.delivery,
    assembly: state.draft.assembly,
    returnService: state.draft.returnService,
    status: "Aguardando confirmação de sinal",
    kitValue: quote.kitValue,
    additionalValue: quote.additions,
    addonIds: selectedAddons.map((entry) => entry.id),
    deposit: 0,
    signalDue: quote.deposit,
    balanceDue: Math.max(0, quote.total - quote.deposit),
    damageFee: 0,
    replacementFee: 0,
    financeNotes: "",
    discount: quote.kitDiscount,
    serviceFee: quote.serviceFee,
    total: quote.total,
    paymentMethod: state.draft.paymentMethod,
    depositGuarantee: 0,
    itemCodes,
    notes: state.draft.notes,
    clientCorrectionNote: state.draft.clientCorrectionFlag ? String(state.draft.clientCorrectionNote || "").trim() : "",
    receiptName: state.draft.receiptName,
    receiptType: state.draft.receiptType,
    receiptData: state.draft.receiptData,
    createdByRole: state.user?.role || "",
    createdByUserId: state.user?.id || "",
    createdAt: new Date().toISOString(),
    contractGeneratedAt: null,
    signature: null,
  };
  if (state.apiConnected) {
    const apiResult = await createReservationWithApi(client, entry, selectedAddons);
    if (!apiResult.available) {
      state.apiConnected = false;
      showToast("Nao foi possivel conectar ao banco de dados. Tente novamente com a API ligada.", "error");
      return false;
    }

    if (!apiResult.payload) {
      showToast(apiResult.error?.message || "Nao foi possivel salvar a reserva no banco de dados.", "error");
      return false;
    }

    if (apiResult.payload?.store) {
      applyApiStore(apiResult.payload.store);
    } else {
      store.reservations.push(entry);
    }
  } else {
    store.reservations.push(entry);
    saveStore();
  }
  console.log("Reserva criada:", entry);
  console.log("Total de reservas:", store.reservations.length);
  console.log("Últimas reservas:", store.reservations.slice(-3));
  state.selectedReservationId = entry.id;
  if (adminQuoteMode) {
    state.clientStep = 4;
    state.newQuoteMode = false;
    state.adminQuoteStarted = true;
  } else if (state.user.role === "admin") {
    state.adminTab = "reservas";
  }
  if (state.user.role === "client") {
    state.clientStep = 4;
    state.newQuoteMode = false;
  }
  if (state.user.role === "admin" && !adminQuoteMode) {
    state.selectedAdditions = [];
    state.selectedThemeId = "";
    state.draft = { ...defaultDraft(), clientId: state.draft.clientId, name: state.draft.name, cpf: state.draft.cpf, phone: state.draft.phone, whatsapp: state.draft.whatsapp, email: state.draft.email, address: state.draft.address };
  }
  return { id: entry.id };
}

function findDuplicateReservation(clientId, kitId, eventDate) {
  return store.reservations.find((entry) =>
    entry.clientId === clientId &&
    entry.kitId === kitId &&
    entry.eventDate === eventDate &&
    isOpenReservation(entry)
  );
}

function ensureClientFromDraft() {
  const currentId = state.user.role === "admin" ? state.draft.clientId || "cliente-001" : state.user.clientId || "cliente-001";
  let client = store.clients.find((entry) => entry.id === currentId);
  if (!client) {
    client = { id: currentId };
    store.clients.push(client);
  }
  Object.assign(client, {
    name: state.draft.name,
    cpf: state.draft.cpf,
    whatsapp: state.draft.whatsapp,
    phone: state.draft.phone,
    email: state.draft.email,
    address: state.draft.address,
  });
  return client;
}

function nextReservationId() {
  const nextNumber =
    Math.max(
      0,
      ...store.reservations.map(reservationNumber),
    ) + 1;
  return `RES-${String(nextNumber).padStart(3, "0")}`;
}

function readAdminReservationFieldValues() {
  return {
    deposit: document.querySelector("#adminDeposit")?.value,
    paymentMethod: document.querySelector("#adminPayment")?.value,
    status: document.querySelector("#adminStatus")?.value,
    deliveryDate: document.querySelector("#adminDeliveryDate")?.value,
    balanceDue: document.querySelector("#adminBalanceDue")?.value,
    damageFee: document.querySelector("#adminDamageFee")?.value,
    replacementFee: document.querySelector("#adminReplacementFee")?.value,
    financeNotes: document.querySelector("#adminFinanceNotes")?.value,
  };
}

function readFinanceFieldValues() {
  return {
    deposit: document.querySelector("#financeDeposit")?.value,
    balanceDue: document.querySelector("#financeBalanceDue")?.value,
    damageFee: document.querySelector("#financeDamageFee")?.value,
    replacementFee: document.querySelector("#financeReplacementFee")?.value,
    paymentMethod: document.querySelector("#financeDetailPaymentMethod")?.value,
    status: document.querySelector("#financeDetailStatus")?.value,
    financeNotes: document.querySelector("#financeNotes")?.value,
  };
}

async function confirmDeposit(id, values = readAdminReservationFieldValues()) {
  if (await syncReservationActionWithApi(id, "confirm-deposit", values)) {
    state.selectedReservationId = id;
    return;
  }

  const entry = store.reservations.find((row) => row.id === id);
  if (!entry) return;
  entry.deposit = financialNumber(values.deposit, financialNumber(entry.signalDue));
  entry.paymentMethod = values.paymentMethod || entry.paymentMethod;
  applyAdminReservationFields(entry, values);
  entry.status = "Reserva confirmada";
  entry.contractGeneratedAt = entry.contractGeneratedAt || new Date().toISOString();
  saveStore();
}

async function generateContract(id) {
  if (await syncReservationActionWithApi(id, "generate-contract")) {
    state.modal = { type: "contract", id };
    return;
  }

  const entry = store.reservations.find((row) => row.id === id);
  if (!entry) return;
  entry.contractGeneratedAt = new Date().toISOString();
  if (!entry.status.includes("confirmada")) entry.status = "Reserva confirmada";
  saveStore();
  state.modal = { type: "contract", id };
}

async function cancelReservation(id) {
  if (await syncReservationActionWithApi(id, "cancel")) return;

  const entry = store.reservations.find((row) => row.id === id);
  if (!entry) return;
  entry.status = "Cancelada";
  saveStore();
}

async function saveReservationStatus(id, values = readAdminReservationFieldValues()) {
  if (await syncReservationActionWithApi(id, "save-status", values)) {
    state.selectedReservationId = id;
    return;
  }

  const entry = store.reservations.find((row) => row.id === id);
  if (!entry) return;
  applyAdminReservationFields(entry, values);
  entry.status = values.status || entry.status;
  entry.paymentMethod = values.paymentMethod || entry.paymentMethod;
  saveStore();
}

function applyAdminReservationFields(entry, values = readAdminReservationFieldValues()) {
  const finance = reservationFinancials(entry);
  entry.deliveryDate = values.deliveryDate ?? entry.deliveryDate ?? "";
  entry.balanceDue = values.balanceDue !== undefined ? financialNumber(values.balanceDue) : finance.balanceDue;
  entry.damageFee = values.damageFee !== undefined ? financialNumber(values.damageFee) : finance.damageFee;
  entry.replacementFee = values.replacementFee !== undefined ? financialNumber(values.replacementFee) : finance.replacementFee;
  entry.extraCharges = entry.damageFee + entry.replacementFee;
  entry.financeNotes = values.financeNotes ?? entry.financeNotes ?? "";
  entry.finalDue = reservationFinancials(entry).finalDue;
}

async function saveFinanceFields(id, values = readFinanceFieldValues()) {
  if (await syncReservationActionWithApi(id, "save-finance", values)) {
    state.selectedReservationId = id;
    return;
  }

  const entry = store.reservations.find((row) => row.id === id);
  if (!entry) return;
  const current = reservationFinancials(entry);
  entry.deposit = values.deposit !== undefined ? financialNumber(values.deposit) : financialNumber(entry.deposit);
  entry.balanceDue = values.balanceDue !== undefined ? financialNumber(values.balanceDue) : current.balanceDue;
  entry.damageFee = values.damageFee !== undefined ? financialNumber(values.damageFee) : current.damageFee;
  entry.replacementFee = values.replacementFee !== undefined ? financialNumber(values.replacementFee) : current.replacementFee;
  entry.extraCharges = entry.damageFee + entry.replacementFee;
  entry.paymentMethod = values.paymentMethod || entry.paymentMethod || "Pendente";
  entry.financeNotes = values.financeNotes ?? entry.financeNotes ?? "";
  entry.status = values.status || entry.status;
  entry.finalDue = reservationFinancials(entry).finalDue;
  state.selectedReservationId = entry.id;
  saveStore();
}

async function saveSignature(id) {
  const canvas = document.querySelector("#signaturePad");
  if (!canvas || !state.signatureDirty) {
    alert("Assine no campo antes de salvar.");
    return;
  }
  const entry = store.reservations.find((row) => row.id === id);
  if (!entry) return;

  const signatureData = canvas.toDataURL("image/png");
  if (await saveSignatureWithApi(id, state.user.name, signatureData)) {
    state.signatureDirty = false;
    state.selectedReservationId = id;
    state.clientStep = 6;
    state.newQuoteMode = false;
    showToast("Contrato assinado. O kit entrou em preparaÃ§Ã£o.");
    render();
    return;
  }

  entry.signature = {
    image: signatureData,
    signer: state.user.name,
    signedAt: new Date().toISOString(),
  };
  entry.status = "Preparar Kit";
  saveStore();
  state.signatureDirty = false;
  state.selectedReservationId = entry.id;
  state.clientStep = 6;
  state.newQuoteMode = false;
  showToast("Contrato assinado. O kit entrou em preparação.");
  render();
}

async function uploadPhysicalContract(id, fileInput) {
  if (state.user?.role !== "admin") {
    showToast("Apenas o Admin pode anexar contrato fisico.", "error");
    return;
  }

  const entry = store.reservations.find((row) => row.id === id);
  if (!entry) {
    showToast("Reserva nao encontrada.", "error");
    return;
  }

  const file = await readPhysicalContractFile(fileInput?.files?.[0]);
  if (!file.data) return;

  if (await uploadPhysicalContractWithApi(id, file)) {
    state.selectedReservationId = id;
    state.clientStep = 6;
    state.newQuoteMode = false;
    state.signatureDirty = false;
    showToast("Contrato fisico anexado e marcado como assinado.");
    render();
    return;
  }

  entry.signature = {
    type: "physical",
    signer: state.user.name,
    signedAt: new Date().toISOString(),
    physicalFileName: file.name,
    physicalFileType: file.type,
    physicalFileUrl: file.data,
  };
  entry.status = "Preparar Kit";
  entry.contractGeneratedAt = entry.contractGeneratedAt || new Date().toISOString();
  saveStore();
  state.selectedReservationId = id;
  state.clientStep = 6;
  state.newQuoteMode = false;
  showToast("Contrato fisico anexado e marcado como assinado.");
  render();
}

async function submitReservationPayment(form) {
  if (state.user?.role !== "admin") {
    const error = new Error("Acesso restrito.");
    error.userMessage = "Apenas o Admin pode registrar pagamentos adicionais.";
    throw error;
  }

  const id = form.dataset.reservationId;
  const entry = store.reservations.find((row) => row.id === id);
  if (!entry) {
    const error = new Error("Reserva nao encontrada.");
    error.userMessage = "Reserva nao encontrada para registrar o pagamento.";
    throw error;
  }

  const formData = new FormData(form);
  const amount = financialNumber(formData.get("amount"));
  const paymentMethod = String(formData.get("paymentMethod") || "").trim();
  const paidAt = String(formData.get("paidAt") || "").trim();

  if (amount <= 0) {
    const error = new Error("Valor invalido.");
    error.userMessage = "Informe um valor pago maior que zero.";
    throw error;
  }

  if (!paymentMethod) {
    const error = new Error("Forma de pagamento ausente.");
    error.userMessage = "Selecione a forma de pagamento.";
    throw error;
  }

  if (!paidAt) {
    const error = new Error("Data do pagamento ausente.");
    error.userMessage = "Informe a data do pagamento.";
    throw error;
  }

  const receipt = await readPaymentReceiptFile(form.querySelector('[name="receipt"]')?.files?.[0]);
  await createReservationPaymentWithApi(id, {
    amount,
    paymentMethod,
    paidAt,
    fileName: receipt.name,
    fileType: receipt.type,
    fileData: receipt.data,
  });

  state.selectedReservationId = id;
  state.modal = null;
}

function attachSignaturePad() {
  const canvas = document.querySelector("#signaturePad");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  ctx.scale(dpr, dpr);
  ctx.lineWidth = 2.6;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#1f2933";
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, rect.width, rect.height);
  ctx.fillStyle = "#98a6b3";
  ctx.font = "14px Segoe UI, sans-serif";
  ctx.fillText("Assine aqui com o mouse ou dedo", 18, 28);

  let drawing = false;
  let last = null;
  const point = (event) => {
    const bounds = canvas.getBoundingClientRect();
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  };
  canvas.onpointerdown = (event) => {
    drawing = true;
    last = point(event);
    canvas.setPointerCapture(event.pointerId);
  };
  canvas.onpointermove = (event) => {
    if (!drawing || !last) return;
    const next = point(event);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(next.x, next.y);
    ctx.stroke();
    last = next;
    state.signatureDirty = true;
  };
  canvas.onpointerup = () => {
    drawing = false;
    last = null;
  };
  canvas.onpointerleave = () => {
    drawing = false;
    last = null;
  };
}

function clearSignaturePad() {
  state.signatureDirty = false;
  attachSignaturePad();
}

function drawAllKitArt() {
  document.querySelectorAll("[data-kit-art]").forEach((canvas) => {
    const kitData = store.kits.find((entry) => entry.id === canvas.dataset.kitArt);
    if (kitData) drawKitArt(canvas, kitData);
  });
}

function drawHeroArt() {
  const canvas = document.querySelector("#heroCanvas");
  if (!canvas) return;
  drawLoginHeroArt(canvas);
}

function drawKitArt(canvas, kitData) {
  drawPartyScene(canvas, kitData.colors || ["#F7F2EC", "#C97B8B", "#A8B8A1"], false);
}

function drawLoginHeroArt(canvas) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  ctx.clearRect(0, 0, width, height);

  const backdrop = ctx.createLinearGradient(0, 0, width, height);
  backdrop.addColorStop(0, "#f7dcc5");
  backdrop.addColorStop(0.46, "#d8a977");
  backdrop.addColorStop(1, "#8b5f45");
  ctx.fillStyle = backdrop;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(255,253,249,.42)";
  roundRect(ctx, width * 0.34, height * 0.08, width * 0.36, height * 0.72, 34);
  ctx.fill();

  ctx.strokeStyle = "rgba(255,253,249,.52)";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(width * 0.28, height * 0.5, height * 0.35, Math.PI * 1.05, Math.PI * 1.92);
  ctx.stroke();

  [
    [0.08, 0.34, 0.08, "#f4d7c7"],
    [0.14, 0.25, 0.065, "#efd4bd"],
    [0.2, 0.38, 0.075, "#f9e4d4"],
    [0.15, 0.48, 0.055, "#d8be96"],
    [0.25, 0.28, 0.055, "#e8b9a3"],
    [0.28, 0.42, 0.07, "#f7dfcb"],
  ].forEach(([x, y, radius, color]) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(width * x, height * y, width * radius, height * radius * 1.18, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "rgba(255,253,249,.92)";
  roundRect(ctx, width * 0.42, height * 0.58, width * 0.18, height * 0.07, 10);
  roundRect(ctx, width * 0.45, height * 0.49, width * 0.12, height * 0.09, 12);
  roundRect(ctx, width * 0.47, height * 0.41, width * 0.08, height * 0.08, 12);
  ctx.fill();

  ctx.fillStyle = "rgba(216,190,150,.96)";
  roundRect(ctx, width * 0.34, height * 0.66, width * 0.34, height * 0.045, 14);
  ctx.fill();
  ctx.fillStyle = "rgba(95,63,44,.5)";
  roundRect(ctx, width * 0.39, height * 0.705, width * 0.035, height * 0.17, 8);
  roundRect(ctx, width * 0.59, height * 0.705, width * 0.035, height * 0.17, 8);
  ctx.fill();

  ctx.fillStyle = "rgba(255,244,225,.92)";
  for (let i = 0; i < 10; i += 1) {
    const x = width * (0.72 + Math.cos(i) * 0.08);
    const y = height * (0.38 + Math.sin(i * 1.8) * 0.12);
    ctx.beginPath();
    ctx.ellipse(x, y, width * 0.028, height * 0.045, i, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = "rgba(201,123,139,.88)";
  for (let i = 0; i < 9; i += 1) {
    ctx.beginPath();
    ctx.arc(width * (0.74 + Math.cos(i * 1.4) * 0.09), height * (0.43 + Math.sin(i) * 0.13), width * 0.022, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = "rgba(255,253,249,.92)";
  ctx.font = `${Math.round(width * 0.055)}px "Cormorant Garamond", Georgia, serif`;
  ctx.textAlign = "center";
  ctx.fillText("Celebre", width * 0.52, height * 0.28);
  ctx.fillText("cada", width * 0.52, height * 0.38);
  ctx.fillText("momento", width * 0.52, height * 0.48);

  const glow = ctx.createRadialGradient(width * 0.56, height * 0.68, 0, width * 0.56, height * 0.68, width * 0.42);
  glow.addColorStop(0, "rgba(255,246,223,.45)");
  glow.addColorStop(1, "rgba(255,246,223,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);
}

function drawPartyScene(canvas, colors, large) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const [soft, accent, extra] = colors;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbf8f3";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = soft;
  ctx.fillRect(0, height * 0.6, width, height * 0.4);
  ctx.fillStyle = "#fffdf9";
  roundRect(ctx, width * 0.18, height * 0.25, width * 0.32, height * 0.42, 18);
  ctx.fill();
  ctx.strokeStyle = accent;
  ctx.lineWidth = large ? 12 : 7;
  ctx.beginPath();
  ctx.arc(width * 0.34, height * 0.48, height * 0.25, Math.PI * 1.05, Math.PI * 1.95);
  ctx.stroke();
  ctx.fillStyle = "#fffdf9";
  roundRect(ctx, width * 0.22, height * 0.63, width * 0.56, height * 0.09, 8);
  ctx.fill();
  ctx.fillStyle = "#2C3A47";
  roundRect(ctx, width * 0.28, height * 0.72, width * 0.05, height * 0.18, 4);
  roundRect(ctx, width * 0.66, height * 0.72, width * 0.05, height * 0.18, 4);
  ctx.fill();
  const balloons = [
    [0.67, 0.26, accent],
    [0.76, 0.21, soft],
    [0.83, 0.32, extra],
    [0.72, 0.39, "#D8BE96"],
  ];
  balloons.forEach(([x, y, color], index) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(width * x, height * y, width * 0.045, height * 0.075, index * 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(31,41,51,.28)";
    ctx.beginPath();
    ctx.moveTo(width * x, height * (y + 0.075));
    ctx.quadraticCurveTo(width * (x - 0.02), height * 0.58, width * 0.67, height * 0.72);
    ctx.stroke();
  });
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function statusPill(status) {
  const text = String(status || "");
  const className = text.includes("Pré") || text.includes("Aguardando")
    ? "pending"
    : text.includes("confirmada") || text === "Preparar Kit"
      ? "paid"
      : text.includes("assinado") || text === "Entregue" || text === "Devolução" || text === "Finalizado"
        ? "signed"
        : text.includes("Cancelada") || text === "Pagamento pendente"
          ? "cancelled"
          : "";
  return `<span class="status-pill ${className}">${escapeHtml(status)}</span>`;
}

function formatItemLine(entry) {
  if (!entry) return "";
  return `${entry.codigo} - ${entry.name} - ${entry.category} - ${entry.theme}`;
}

function money(value) {
  return Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function dateLabel(value) {
  if (!value) return "A definir";
  const [year, month, day] = String(value).slice(0, 10).split("-");
  if (!year || !month || !day) return value;
  return `${day}/${month}/${year}`;
}

function dateTimeLabel(value) {
  if (!value) return "";
  return new Date(value).toLocaleString("pt-BR");
}

function syncDraftDateFields(key) {
  if (key !== "eventDate") return;
  state.draft.returnDate = addDaysIso(state.draft.eventDate, 1);
  state.draft.deliveryDate = state.user?.role === "client" ? "" : state.draft.deliveryDate || state.draft.eventDate;
  const returnInput = document.querySelector("#returnDate");
  if (returnInput) returnInput.value = state.draft.returnDate;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function safeApiFileUrl(value) {
  const src = String(value || "");
  const filePathPattern = /^\/api\/files\/[\w-]+\/content$/i;

  if (filePathPattern.test(src)) {
    return new URL(src, apiBaseUrl).href;
  }

  try {
    const url = new URL(src);
    const apiUrl = new URL(apiBaseUrl);
    if (url.origin === apiUrl.origin && filePathPattern.test(url.pathname)) {
      return url.href;
    }
  } catch {
    return "";
  }

  return "";
}

function safeImageSrc(value) {
  const src = String(value || "");
  if (/^assets\/[\w./-]+$/i.test(src)) return escapeAttr(src);
  if (/^data:image\/(?:png|jpe?g|gif|webp);base64,/i.test(src)) return escapeAttr(src);
  const apiFileUrl = safeApiFileUrl(src);
  if (apiFileUrl) return escapeAttr(apiFileUrl);
  return "";
}

function safeReceiptHref(value) {
  const href = String(value || "");
  if (/^data:(?:image\/(?:png|jpe?g|gif|webp)|application\/pdf);base64,/i.test(href)) return escapeAttr(href);
  const apiFileUrl = safeApiFileUrl(href);
  if (apiFileUrl) return escapeAttr(apiFileUrl);
  return "#";
}

function optionMarkup(value, selectedValue, label = value) {
  const safeValue = escapeAttr(value);
  return `<option value="${safeValue}" ${value === selectedValue ? "selected" : ""}>${escapeHtml(label)}</option>`;
}

document.addEventListener("submit", async (event) => {
  if (event.target.id === "loginForm") {
    event.preventDefault();
    await handleLogin(event.target);
    return;
  }
  if (event.target.id === "registrationForm") {
    event.preventDefault();
    if (handleValidationErrors(event.target, validateRegistrationForm(event.target), "Revise os dados do cadastro.")) return;
    await runAction("client-registration", () => submitClientRegistrationRequest(event.target), "");
    return;
  }
  if (state.pendingAction) {
    event.preventDefault();
    return;
  }
  if (event.target.id === "checkoutForm") {
    event.preventDefault();
    if (handleValidationErrors(event.target, validateQuoteForm(), "Preencha os dados obrigatórios da reserva.")) return;
    await runAction(
      "submit-reservation",
      () => submitQuote(),
      (result) => result?.id ? `Reserva ${result.id} criada com sucesso.` : "",
    );
    return;
  }
  if (event.target.id === "clientForm") {
    event.preventDefault();
    const isEdit = Boolean(event.target.dataset.clientId);
    if (handleValidationErrors(event.target, validateClientForm(event.target), "Revise os dados do cliente.")) return;
    await runAction("save-client", () => saveClientFromForm(event.target), isEdit ? "Cliente atualizado com sucesso." : "Cliente criado com sucesso.");
    return;
  }
  if (event.target.id === "accessForm") {
    event.preventDefault();
    const isEdit = Boolean(event.target.dataset.accessId);
    if (handleValidationErrors(event.target, validateAccessForm(event.target), "Revise os dados do acesso.")) return;
    await runAction("save-access", () => saveAccessFromForm(event.target), isEdit ? "Acesso atualizado com sucesso." : "Acesso criado com sucesso.");
    return;
  }
  if (event.target.id === "inventoryForm") {
    event.preventDefault();
    const isEdit = Boolean(event.target.dataset.itemCode);
    if (handleValidationErrors(event.target, validateInventoryForm(event.target), "Revise os dados do item.")) return;
    await runAction("save-inventory", () => saveInventoryItemFromForm(event.target), isEdit ? "Item de estoque atualizado com sucesso." : "Item de estoque criado com sucesso.");
    return;
  }
  if (event.target.id === "kitAddonForm") {
    event.preventDefault();
    const isKit = event.target.dataset.kind === "kit";
    const isEdit = Boolean(event.target.dataset.id);
    const label = isKit ? "Kit" : "Adicional";
    if (handleValidationErrors(event.target, validateKitAddonForm(event.target), `Revise os dados do ${isKit ? "kit" : "adicional"}.`)) return;
    await runAction("save-kit-addon", () => saveKitAddonFromForm(event.target), `${label} ${isEdit ? "atualizado" : "criado"} com sucesso.`);
    return;
  }
  if (event.target.id === "themeForm") {
    event.preventDefault();
    const isEdit = Boolean(event.target.dataset.id);
    if (handleValidationErrors(event.target, validateThemeForm(event.target), "Revise os dados do tema.")) return;
    await runAction("save-theme", () => saveThemeFromForm(event.target), isEdit ? "Tema atualizado com sucesso." : "Tema criado com sucesso.");
    return;
  }
  if (event.target.id === "paymentMethodForm") {
    event.preventDefault();
    const isEdit = Boolean(event.target.dataset.id);
    await runAction("save-payment-method", () => savePaymentMethodFromForm(event.target), isEdit ? "Forma de pagamento atualizada." : "Forma de pagamento criada.");
    return;
  }
  if (event.target.id === "reservationPaymentForm") {
    event.preventDefault();
    await runAction("save-payment", () => submitReservationPayment(event.target), "Pagamento registrado com sucesso.");
    return;
  }
  if (event.target.id === "serviceFeesForm") {
    event.preventDefault();
    await runAction("save-service-fees", () => saveServiceFeesFromForm(event.target), "Valores de entrega, montagem e devolução salvos.");
  }
});

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.action === "logout") {
    clearAuthToken();
    state.user = null;
    state.authView = "login";
    render();
  }
  if (target.dataset.action === "show-register") {
    clearFormState();
    state.authView = "register";
    render();
    return;
  }
  if (target.dataset.action === "show-login") {
    clearFormState();
    state.authView = "login";
    render();
    return;
  }
  if (target.dataset.togglePassword) {
    const input = document.getElementById(target.dataset.togglePassword);
    if (!input) return;
    const shouldShow = input.type === "password";
    input.type = shouldShow ? "text" : "password";
    target.setAttribute("aria-label", shouldShow ? "Ocultar senha" : "Mostrar senha");
    target.classList.toggle("active", shouldShow);
    return;
  }
  if (target.dataset.action === "reset-draft") {
    if (state.user?.role === "client") {
      startNewClientQuote();
      return;
    }
    state.selectedAdditions = [];
    state.selectedThemeId = "";
    state.selectedKitId = getActiveKits()[0]?.id || store.kits[0]?.id;
    state.clientStep = 1;
    state.selectedReservationId = state.user?.role === "admin" ? state.selectedReservationId : null;
    state.newQuoteMode = state.user?.role === "client";
    state.draft = defaultDraft(state.user?.role === "client" ? state.user.clientId : undefined);
    render();
  }
  if (target.dataset.adminQuoteClient) {
    selectAdminQuoteClient(target.dataset.adminQuoteClient);
    return;
  }
  if (target.dataset.adminQuoteStart !== undefined) {
    startAdminQuoteJourney();
    return;
  }
  if (target.dataset.adminQuoteContinuePending !== undefined) {
    continueAdminQuoteWithPending();
    return;
  }
  if (target.dataset.adminQuoteCancelPending !== undefined) {
    cancelAdminQuoteWithPending();
    return;
  }
  if (target.dataset.adminQuoteReset !== undefined) {
    resetAdminQuoteSelection();
    render();
    return;
  }
  if (target.dataset.action === "clear-finance-filters") {
    state.financeFilters = {
      search: "",
      status: "Todos",
      payment: "Todas",
      pendingOnly: false,
      dateFrom: "",
      dateTo: "",
    };
    render();
  }
  if (target.dataset.action === "new-payment-method") {
    clearFormState();
    state.editingPaymentMethodId = "";
    state.modal = { type: "payment-method" };
    render();
    return;
  }
  if (target.dataset.action === "close-modal") {
    state.modal = null;
    clearFormState();
    render();
  }
  if (target.dataset.action === "new-client") {
    clearFormState();
    state.modal = { type: "client" };
    render();
  }
  if (target.dataset.action === "new-access") {
    clearFormState();
    state.modal = { type: "access" };
    render();
  }
  if (target.dataset.action === "new-inventory-item") {
    clearFormState();
    state.modal = { type: "inventory" };
    render();
  }
  if (target.dataset.action === "new-kit") {
    clearFormState();
    state.modal = { type: "kit-addon", kind: "kit" };
    render();
  }
  if (target.dataset.action === "new-addon") {
    clearFormState();
    state.modal = { type: "kit-addon", kind: "addon" };
    render();
  }
  if (target.dataset.action === "new-theme") {
    clearFormState();
    state.modal = { type: "theme" };
    render();
  }
  if (target.dataset.action === "print-contract") window.print();
  if (target.dataset.action === "clear-signature") clearSignaturePad();
  if (target.dataset.adminTab) {
    await refreshStoreForActiveSession();
    state.adminTab = target.dataset.adminTab;
    if (!target.dataset.openReservation && !target.dataset.openFinance) {
      render();
      return;
    }
  }
  if (target.dataset.viewClientProposal) {
    await refreshStoreForActiveSession();
    openClientProposal(target.dataset.viewClientProposal);
    return;
  }
  if (target.dataset.refreshClientProposal !== undefined) {
    await refreshSelectedClientProposal();
    return;
  }
  if (target.dataset.startClientQuote !== undefined) {
    await refreshStoreForActiveSession();
    startNewClientQuote();
    return;
  }
  if (target.dataset.clientTab) {
    await refreshStoreForActiveSession();
    if (state.user?.role === "client" && target.dataset.clientTab === "orcamento") {
      startNewClientQuote();
      return;
    }
    state.tab = target.dataset.clientTab;
    render();
  }
  if (target.dataset.clientStep) {
    goToClientStep(target.dataset.clientStep);
  }
  if (target.dataset.nextStep) {
    goToClientStep(target.dataset.nextStep);
  }
  if (target.dataset.prevStep) {
    goToClientStep(target.dataset.prevStep);
  }
  if (target.dataset.kitId) {
    if (state.user?.role === "client" && state.clientStep < 3) {
      state.newQuoteMode = true;
      state.selectedReservationId = null;
    }
    state.selectedKitId = target.dataset.kitId;
    state.selectedThemeId = "";
    state.draft.customTheme = "";
    state.draft.customThemeMode = false;
    state.selectedAdditions = [];
    render();
  }
  if (target.dataset.photoNext || target.dataset.photoPrev) {
    const key = target.dataset.photoNext || target.dataset.photoPrev;
    const [kind, id] = key.split(":");
    const entry = kind === "kit"
      ? store.kits.find((row) => row.id === id)
      : kind === "theme"
        ? store.themes.find((row) => row.id === id)
        : store.addons.find((row) => row.id === id);
    const total = entry?.photos?.length || 1;
    const current = state.mediaIndex[key] || 0;
    state.mediaIndex[key] = target.dataset.photoNext ? (current + 1) % total : (current - 1 + total) % total;
    render();
  }
  if (target.dataset.openReservation) {
    const requestedReservationId = target.dataset.openReservation;
    if (target.dataset.jumpReservations) {
      state.adminTab = "reservas";
      state.selectedReservationId = requestedReservationId;
    } else {
      state.selectedReservationId = state.selectedReservationId === requestedReservationId ? null : requestedReservationId;
    }
    render();
  }
  if (target.dataset.openFinance) {
    state.adminTab = "financeiro";
    const requestedFinanceId = target.dataset.openFinance;
    state.selectedReservationId = state.selectedReservationId === requestedFinanceId ? null : requestedFinanceId;
    render();
  }
  if (target.dataset.newPayment) {
    state.modal = { type: "payment", id: target.dataset.newPayment };
    render();
    return;
  }
  if (target.dataset.openReceipt) {
    state.modal = { type: "receipt", id: target.dataset.openReceipt };
    render();
    return;
  }
  if (target.dataset.editPaymentMethod) {
    clearFormState();
    state.editingPaymentMethodId = target.dataset.editPaymentMethod;
    state.modal = { type: "payment-method", id: target.dataset.editPaymentMethod };
    render();
    return;
  }
  if (target.dataset.togglePaymentMethod) {
    try {
      await togglePaymentMethod(target.dataset.togglePaymentMethod);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "Nao foi possivel atualizar a forma de pagamento.", "error");
      render();
    }
    return;
  }
  if (target.dataset.adminJourneyConfirmDeposit) {
    const id = target.dataset.adminJourneyConfirmDeposit;
    const entry = store.reservations.find((row) => row.id === id);
    const values = {
      deposit: entry?.signalDue || entry?.total * 0.5 || 0,
      paymentMethod: entry?.paymentMethod || state.draft.paymentMethod,
    };
    await runAction("confirm-deposit", async () => {
      await confirmDeposit(id, values);
      state.clientStep = 5;
      state.newQuoteMode = false;
    }, "Sinal confirmado e contrato liberado com sucesso.");
    return;
  }
  if (target.dataset.adminJourneyGenerateContract) {
    const id = target.dataset.adminJourneyGenerateContract;
    await runAction("generate-contract", async () => {
      await generateContract(id);
      state.modal = null;
      state.selectedReservationId = id;
      state.clientStep = 5;
      state.newQuoteMode = false;
    }, "Contrato gerado com sucesso.");
    return;
  }
  if (target.dataset.confirmDeposit) {
    const values = readAdminReservationFieldValues();
    await runAction("confirm-deposit", () => confirmDeposit(target.dataset.confirmDeposit, values), "Sinal confirmado e reserva liberada com sucesso.");
    return;
  }
  if (target.dataset.saveReservationStatus) {
    const values = readAdminReservationFieldValues();
    await runAction("save-status", () => saveReservationStatus(target.dataset.saveReservationStatus, values), "Status e dados da reserva salvos com sucesso.");
    return;
  }
  if (target.dataset.saveFinance) {
    const values = readFinanceFieldValues();
    await runAction("save-reservation-finance", () => saveFinanceFields(target.dataset.saveFinance, values), "Dados financeiros salvos com sucesso.");
    return;
  }
  if (target.dataset.generateContract) {
    await runAction("generate-contract", () => generateContract(target.dataset.generateContract), "Contrato gerado com sucesso.");
    return;
  }
  if (target.dataset.cancelReservation) {
    await runAction("cancel-reservation", () => cancelReservation(target.dataset.cancelReservation), "Reserva cancelada com sucesso.", "warning");
    return;
  }
  if (target.dataset.editClient) {
    clearFormState();
    state.modal = { type: "client", id: target.dataset.editClient };
    render();
  }
  if (target.dataset.approveRegistration) {
    await runAction("approve-registration", () => approveClientRegistration(target.dataset.approveRegistration), "");
    return;
  }
  if (target.dataset.denyRegistration) {
    const reasonInput = document.querySelector(`[data-registration-deny-reason="${CSS.escape(target.dataset.denyRegistration)}"]`);
    const reason = reasonInput?.value || "";
    await runAction("deny-registration", () => denyClientRegistration(target.dataset.denyRegistration, reason), "");
    return;
  }
  if (target.dataset.deleteClient) {
    try {
      await deleteClient(target.dataset.deleteClient);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "NÃ£o foi possÃ­vel excluir o cliente.", "error");
      render();
    }
    return;
  }
  if (target.dataset.editAccess) {
    clearFormState();
    state.modal = { type: "access", id: target.dataset.editAccess };
    render();
  }
  if (target.dataset.toggleAccess) {
    try {
      await toggleAccess(target.dataset.toggleAccess);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "Nao foi possivel atualizar o acesso.", "error");
      render();
    }
    return;
  }
  if (target.dataset.editInventory) {
    clearFormState();
    state.modal = { type: "inventory", code: target.dataset.editInventory };
    render();
  }
  if (target.dataset.deleteInventory) {
    try {
      await deleteInventoryItem(target.dataset.deleteInventory);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "NÃ£o foi possÃ­vel excluir o item.", "error");
      render();
    }
    return;
  }
  if (target.dataset.editKit) {
    clearFormState();
    state.modal = { type: "kit-addon", kind: "kit", id: target.dataset.editKit };
    render();
  }
  if (target.dataset.editAddon) {
    clearFormState();
    state.modal = { type: "kit-addon", kind: "addon", id: target.dataset.editAddon };
    render();
  }
  if (target.dataset.editTheme) {
    clearFormState();
    state.modal = { type: "theme", id: target.dataset.editTheme };
    render();
  }
  if (target.dataset.toggleKit) {
    try {
      await toggleKitAddon("kit", target.dataset.toggleKit);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "NÃ£o foi possÃ­vel atualizar o kit.", "error");
      render();
    }
    return;
  }
  if (target.dataset.toggleAddon) {
    try {
      await toggleKitAddon("addon", target.dataset.toggleAddon);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "NÃ£o foi possÃ­vel atualizar o adicional.", "error");
      render();
    }
    return;
  }
  if (target.dataset.toggleTheme) {
    try {
      await toggleTheme(target.dataset.toggleTheme);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "NÃ£o foi possÃ­vel atualizar o tema.", "error");
      render();
    }
    return;
  }
  if (target.dataset.deleteKit) {
    try {
      await deleteKitAddon("kit", target.dataset.deleteKit);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "NÃ£o foi possÃ­vel excluir o kit.", "error");
      render();
    }
    return;
  }
  if (target.dataset.deleteAddon) {
    try {
      await deleteKitAddon("addon", target.dataset.deleteAddon);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "NÃ£o foi possÃ­vel excluir o adicional.", "error");
      render();
    }
    return;
  }
  if (target.dataset.deleteTheme) {
    try {
      await deleteTheme(target.dataset.deleteTheme);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "NÃ£o foi possÃ­vel excluir o tema.", "error");
      render();
    }
    return;
  }
  if (target.dataset.openContract) {
    clearFormState();
    state.modal = { type: "contract", id: target.dataset.openContract };
    render();
  }
  if (target.dataset.saveSignature) {
    try {
      await saveSignature(target.dataset.saveSignature);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "Nao foi possivel salvar a assinatura.", "error");
      render();
    }
    return;
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  clearFieldError(target);
  if (target.dataset.draft) {
    const key = target.dataset.draft;
    const masked = applyMaskedFieldValue(key, target.value);
    target.value = masked;
    state.draft[key] = masked;
    syncDraftDateFields(target.dataset.draft);
    if (target.dataset.draft === "customTheme" && isCustomThemeMode()) {
      state.selectedThemeId = "";
    }
    if (target.dataset.draft === "customTheme") {
      const nextButton = document.querySelector('[data-next-step="3"]');
      if (nextButton) nextButton.disabled = !themeSelectionName();
    }
  }
  if (target.dataset.registrationField) {
    const key = target.dataset.registrationField;
    const masked = applyRegistrationMask(key, target.value);
    target.value = masked;
    state.registrationDraft[key] = masked;
  }
  if (target.dataset.maskField) {
    target.value = applyMaskedFieldValue(target.dataset.maskField, target.value);
    if (target.name === "cpf") {
      const loginInput = target.form?.querySelector('[name="login"]');
      if (loginInput && (!loginInput.value || onlyDigits(loginInput.value) === onlyDigits(target.defaultValue))) {
        loginInput.value = maskCpf(target.value);
      }
    }
  }
  if (target.dataset.accessLogin !== undefined) {
    const role = target.form?.querySelector('[name="role"]')?.value || "client";
    if (role === "client") target.value = maskCpf(target.value);
  }
  if (target.dataset.loginCredential !== undefined) {
    const value = target.value;
    if (/^[\d.\-\s]*$/.test(value)) target.value = maskCpf(value);
  }
  if (target.dataset.action === "item-search") {
    state.itemSearch = target.value;
    render();
  }
  if (target.dataset.adminQuoteSearch !== undefined) {
    state.adminQuoteSearch = target.value;
    render();
  }
  if (target.dataset.financeFilter) {
    state.financeFilters[target.dataset.financeFilter] = target.value;
    render();
  }
});

document.addEventListener("focusin", (event) => {
  const target = event.target;
  if (target.dataset?.noAutofill !== undefined) {
    target.readOnly = false;
  }
});

document.addEventListener("change", async (event) => {
  const target = event.target;
  clearFieldError(target);
  if (target.dataset.draft) {
    state.draft[target.dataset.draft] = target.value;
    syncDraftDateFields(target.dataset.draft);
    if (target.dataset.draft === "customTheme" && isCustomThemeMode()) state.selectedThemeId = "";
  }
  if (target.dataset.paymentMethod) {
    state.draft.paymentMethod = target.value || target.dataset.paymentMethod;
    render();
  }
  if (target.dataset.receipt !== undefined) {
    const receipt = await readReceiptFile(target.files?.[0]);
    state.draft.receiptName = receipt.name;
    state.draft.receiptType = receipt.type;
    state.draft.receiptData = receipt.data;
    render();
  }
  if (target.dataset.physicalContract) {
    try {
      await uploadPhysicalContract(target.dataset.physicalContract, target);
    } catch (error) {
      console.error(error);
      showToast(error?.userMessage || "Nao foi possivel anexar o contrato fisico.", "error");
      target.value = "";
      render();
    }
    return;
  }
  if (target.dataset.clientPicker !== undefined) {
    const client = store.clients.find((entry) => entry.id === target.value);
    if (client) {
      state.draft = {
        ...state.draft,
        clientId: client.id,
        name: client.name,
        cpf: client.cpf,
        phone: client.phone,
        whatsapp: client.whatsapp,
        email: client.email,
        address: client.address,
      };
      render();
    }
  }
  if (target.dataset.accessClientPicker !== undefined) {
    const client = store.clients.find((entry) => entry.id === target.value);
    if (client) {
      const nameInput = target.form?.querySelector('[name="name"]');
      const loginInput = target.form?.querySelector('[name="login"]');
      if (nameInput && !nameInput.value.trim()) nameInput.value = client.name || "";
      if (loginInput) loginInput.value = maskCpf(client.cpf || "");
    }
  }
  if (target.dataset.draftCheck) {
    state.draft[target.dataset.draftCheck] = target.checked;
    render();
  }
  if (target.dataset.additionCode) {
    const code = target.dataset.additionCode;
    if (target.checked && !state.selectedAdditions.includes(code)) state.selectedAdditions.push(code);
    if (!target.checked) state.selectedAdditions = state.selectedAdditions.filter((entry) => entry !== code);
    render();
  }
  if (target.dataset.themeId) {
    state.selectedThemeId = target.dataset.themeId;
    state.draft.customTheme = "";
    state.draft.customThemeMode = false;
    render();
  }
  if (target.dataset.themeCustom) {
    state.selectedThemeId = "";
    state.draft.customThemeMode = true;
    render();
  }
  if (target.dataset.action === "category-filter") {
    state.categoryFilter = target.value;
    render();
  }
  if (target.dataset.financeFilter) {
    state.financeFilters[target.dataset.financeFilter] = target.value;
    render();
  }
  if (target.dataset.financePending !== undefined) {
    state.financeFilters.pendingOnly = target.checked;
    render();
  }
});

async function initializePortal() {
  app.innerHTML = `
    <main class="auth-layout">
      <section class="auth-card">
        <h1>Atelie LICA Festas</h1>
        <p>Carregando dados do portal...</p>
      </section>
    </main>
  `;
  if (await resumeSessionWithApi()) return;
  const apiReady = await hydrateStoreFromApi();
  if (!apiReady) {
    if (localFallbackEnabled) {
      store = loadStore();
    } else {
      app.innerHTML = `
        <main class="auth-layout">
          <section class="auth-card">
            <h1>Atelie LICA Festas</h1>
            <p>Nao foi possivel conectar ao servidor. Em producao, o portal exige API e banco de dados ativos.</p>
          </section>
        </main>
      `;
      return;
    }
  }
  render();
}

initializePortal();
