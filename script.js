// ============================================
// SISTEMA DE LOGIN
// ============================================

// Adicione novos usuários aqui
const usuarios = [
    {
        usuario: "Jonathan",
        senha: "1234"
    }
    // Adicione mais usuários aqui seguindo o formato:
    // { usuario: "nome", senha: "senha" },
];

// Elementos do DOM
const loginScreen = document.getElementById('loginScreen');
const appScreen = document.getElementById('appScreen');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');

// Verificar se já está logado (persistência na sessão)
window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        showApp();
    }
});

// Evento de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    const usuario = usuarios.find(u => u.usuario === username && u.senha === password);
    
    if (usuario) {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('currentUser', username);
        showApp();
        loginError.classList.remove('show');
        loginForm.reset();
    } else {
        loginError.textContent = 'Usuário ou senha incorretos!';
        loginError.classList.add('show');
    }
});

// Evento de logout
logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('currentUser');
    showLogin();
});

// Funções para alternar telas
function showLogin() {
    loginScreen.classList.remove('hidden');
    appScreen.classList.add('hidden');
}

function showApp() {
    loginScreen.classList.add('hidden');
    appScreen.classList.remove('hidden');
    initializeApp();
}

// ============================================
// BASE DE DADOS DE CULTURAS
// Estrutura: espaçamento + recomendação em kg/ha
// ============================================

const culturas = {
    "Alface": {
        espacamento_linha: 0.30,
        espacamento_planta: 0.30,
        recomendacao_kg_ha: {
            N: 30,
            P2O5: 400,
            K2O: 90
        }
    },
    "Chicória": {
        espacamento_linha: 0.30,
        espacamento_planta: 0.30,
        recomendacao_kg_ha: {
            N: 30,
            P2O5: 400,
            K2O: 90
        }
    },
    "Agrião": {
        espacamento_linha: 0.20,
        espacamento_planta: 0.15,
        recomendacao_kg_ha: {
            N: 15,
            P2O5: 150,
            K2O: 50
        }
    },
    "Alho": {
        espacamento_linha: 0.25,
        espacamento_planta: 0.10,
        recomendacao_kg_ha: {
            N: 20,
            P2O5: 500,
            K2O: 120
        }
    },
    "Cebola": {
        espacamento_linha: 0.30,
        espacamento_planta: 0.10,
        recomendacao_kg_ha: {
            N: 30,
            P2O5: 300,
            K2O: 150
        }
    },
    "Cebolinha": {
        espacamento_linha: 0.20,
        espacamento_planta: 0.10,
        recomendacao_kg_ha: {
            N: 30,
            P2O5: 300,
            K2O: 120
        }
    },
    "Alho-poró": {
        espacamento_linha: 0.40,
        espacamento_planta: 0.15,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 350,
            K2O: 150
        }
    },
    "Couve-flor": {
        espacamento_linha: 0.80,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 80,
            P2O5: 500,
            K2O: 200
        }
    },
    "Repolho": {
        espacamento_linha: 0.80,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 300,
            K2O: 150
        }
    },
    "Brócolos": {
        espacamento_linha: 0.80,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 80,
            P2O5: 500,
            K2O: 200
        }
    },
    "Couve-folha": {
        espacamento_linha: 0.80,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 200,
            K2O: 70
        }
    },
    "Couve-bruxelas": {
        espacamento_linha: 0.80,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 200,
            K2O: 70
        }
    },
    "Mostarda": {
        espacamento_linha: 0.30,
        espacamento_planta: 0.20,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 200,
            K2O: 70
        }
    },
    "Rúcula": {
        espacamento_linha: 0.20,
        espacamento_planta: 0.10,
        recomendacao_kg_ha: {
            N: 0,
            P2O5: 100,
            K2O: 0
        }
    },
    "Rabanete": {
        espacamento_linha: 0.20,
        espacamento_planta: 0.05,
        recomendacao_kg_ha: {
            N: 35,
            P2O5: 120,
            K2O: 0
        }
    },
    "Nabo": {
        espacamento_linha: 0.20,
        espacamento_planta: 0.10,
        recomendacao_kg_ha: {
            N: 0,
            P2O5: 100,
            K2O: 0
        }
    },
    "Cenoura": {
        espacamento_linha: 0.30,
        espacamento_planta: 0.05,
        recomendacao_kg_ha: {
            N: 20,
            P2O5: 400,
            K2O: 130
        }
    },
    "Batata-baroa": {
        espacamento_linha: 0.40,
        espacamento_planta: 0.20,
        recomendacao_kg_ha: {
            N: 10,
            P2O5: 150,
            K2O: 100
        }
    },
    "Salsa": {
        espacamento_linha: 0.20,
        espacamento_planta: 0.10,
        recomendacao_kg_ha: {
            N: 30,
            P2O5: 180,
            K2O: 80
        }
    },
    "Coentro": {
        espacamento_linha: 0.20,
        espacamento_planta: 0.10,
        recomendacao_kg_ha: {
            N: 45,
            P2O5: 180,
            K2O: 80
        }
    },
    "Feijão-vagem": {
        espacamento_linha: 0.50,
        espacamento_planta: 0.20,
        recomendacao_kg_ha: {
            N: 30,
            P2O5: 300,
            K2O: 80
        }
    },
    "Ervilha": {
        espacamento_linha: 0.50,
        espacamento_planta: 0.20,
        recomendacao_kg_ha: {
            N: 20,
            P2O5: 130,
            K2O: 70
        }
    },
    "Feijão-corda": {
        espacamento_linha: 0.50,
        espacamento_planta: 0.30,
        recomendacao_kg_ha: {
            N: 0,
            P2O5: 80,
            K2O: 20
        }
    },
    "Pepino": {
        espacamento_linha: 1.00,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 250,
            P2O5: 2000,
            K2O: 900
        }
    },
    "Melancia": {
        espacamento_linha: 2.00,
        espacamento_planta: 1.00,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 350,
            K2O: 100
        }
    },
    "Melão": {
        espacamento_linha: 2.00,
        espacamento_planta: 1.00,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 400,
            K2O: 100
        }
    },
    "Abóbora": {
        espacamento_linha: 2.00,
        espacamento_planta: 1.50,
        recomendacao_kg_ha: {
            N: 30,
            P2O5: 300,
            K2O: 100
        }
    },
    "Abobrinha": {
        espacamento_linha: 1.00,
        espacamento_planta: 0.80,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 400,
            K2O: 150
        }
    },
    "Chuchu": {
        espacamento_linha: 2.00,
        espacamento_planta: 1.50,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 400,
            K2O: 150
        }
    },
    "Batata-doce": {
        espacamento_linha: 0.80,
        espacamento_planta: 0.30,
        recomendacao_kg_ha: {
            N: 20,
            P2O5: 140,
            K2O: 110
        }
    },
    "Beterraba": {
        espacamento_linha: 0.30,
        espacamento_planta: 0.10,
        recomendacao_kg_ha: {
            N: 20,
            P2O5: 350,
            K2O: 150
        }
    },
    "Espinafre": {
        espacamento_linha: 0.30,
        espacamento_planta: 0.20,
        recomendacao_kg_ha: {
            N: 20,
            P2O5: 90,
            K2O: 50
        }
    },
    "Morango": {
        espacamento_linha: 0.30,
        espacamento_planta: 0.30,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 800,
            K2O: 400
        }
    },
    "Quiabo": {
        espacamento_linha: 0.80,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 20,
            P2O5: 350,
            K2O: 80
        }
    },
    "Aspargo": {
        espacamento_linha: 1.50,
        espacamento_planta: 0.30,
        recomendacao_kg_ha: {
            N: 30,
            P2O5: 800,
            K2O: 250
        }
    },
    "Milho-verde": {
        espacamento_linha: 0.80,
        espacamento_planta: 0.20,
        recomendacao_kg_ha: {
            N: 20,
            P2O5: 100,
            K2O: 70
        }
    },
    "Inhame": {
        espacamento_linha: 1.00,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 20,
            P2O5: 180,
            K2O: 90
        }
    },
    // Novas culturas adicionadas
    "Batata inglesa": {
        espacamento_linha: 0.80,
        espacamento_planta: 0.30,
        recomendacao_kg_ha: {
            N: 200,
            P2O5: 500,
            K2O: 200
        }
    },
    "Tomate": {
        espacamento_linha: 1.00,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 400,
            P2O5: 1000,
            K2O: 800
        }
    },
    "Pimentão": {
        espacamento_linha: 0.80,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 500,
            K2O: 180
        }
    },
    "Pimenta": {
        espacamento_linha: 0.80,
        espacamento_planta: 0.40,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 500,
            K2O: 180
        }
    },
    "Berinjela": {
        espacamento_linha: 1.00,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 400,
            K2O: 80
        }
    },
    "Jiló": {
        espacamento_linha: 1.00,
        espacamento_planta: 0.50,
        recomendacao_kg_ha: {
            N: 40,
            P2O5: 200,
            K2O: 80
        }
    }
};

// ============================================
// FUNÇÕES DE CÁLCULO AGRONÔMICO
// Seguindo a regra matemática obrigatória
// ============================================

/**
 * Converte kg/ha para g/m²
 * @param {number} kg_por_ha - Quantidade em kg/ha
 * @returns {number} Quantidade em g/m²
 */
function converterKgHaParaGm2(kg_por_ha) {
    return (kg_por_ha * 1000) / 10000;
}

/**
 * Calcula a área ocupada por uma planta (m²)
 * @param {number} espacamento_linha - Espaçamento entre linhas (m)
 * @param {number} espacamento_planta - Espaçamento entre plantas (m)
 * @returns {number} Área por planta em m²
 */
function calcularAreaPorPlanta(espacamento_linha, espacamento_planta) {
    return espacamento_linha * espacamento_planta;
}

/**
 * Calcula g de nutriente por planta
 * @param {number} g_por_m2 - Gramas por metro quadrado
 * @param {number} area_por_planta - Área ocupada por uma planta (m²)
 * @returns {number} Gramas de nutriente por planta
 */
function calcularGPorPlanta(g_por_m2, area_por_planta) {
    return g_por_m2 * area_por_planta;
}

/**
 * Calcula o total de nutriente necessário para todas as plantas
 * @param {number} g_por_planta - Gramas por planta
 * @param {number} numero_de_plantas - Número total de plantas
 * @returns {number} Total de nutriente necessário (g)
 */
function calcularNutrienteTotal(g_por_planta, numero_de_plantas) {
    return g_por_planta * numero_de_plantas;
}

/**
 * Converte nutriente necessário para quantidade de produto comercial
 * @param {number} nutriente_total - Total de nutriente necessário (g)
 * @param {number} percentual_nutriente - Porcentagem do nutriente no produto
 * @returns {number} Quantidade de produto comercial (g)
 */
function calcularProdutoComercial(nutriente_total, percentual_nutriente) {
    return nutriente_total / (percentual_nutriente / 100);
}

/**
 * Calcula a recomendação completa para um nutriente
 * @param {object} cultura - Objeto da cultura com espaçamento e recomendação
 * @param {string} nutriente - 'N', 'P2O5' ou 'K2O'
 * @param {number} numero_de_plantas - Número total de plantas
 * @returns {object} Objeto com todos os valores do cálculo
 */
function calcularRecomendacaoNutriente(cultura, nutriente, numero_de_plantas) {
    // 1. Converter kg/ha para g/m²
    const kg_por_ha = cultura.recomendacao_kg_ha[nutriente];
    const g_por_m2 = converterKgHaParaGm2(kg_por_ha);
    
    // 2. Calcular área ocupada por uma planta
    const area_por_planta = calcularAreaPorPlanta(
        cultura.espacamento_linha,
        cultura.espacamento_planta
    );
    
    // 3. Calcular g de nutriente por planta
    const g_por_planta = calcularGPorPlanta(g_por_m2, area_por_planta);
    
    // 4. Calcular nutriente total para o número de plantas
    const nutriente_total = calcularNutrienteTotal(g_por_planta, numero_de_plantas);
    
    return {
        kg_por_ha,
        g_por_m2,
        area_por_planta,
        g_por_planta,
        nutriente_total
    };
}

// ============================================
// INICIALIZAÇÃO DO APP
// ============================================

function initializeApp() {
    populateCulturaSelect();
    setupEventListeners();
    // Garantir que o botão está habilitado
    const calcularBtn = document.getElementById('calcularBtn');
    if (calcularBtn) {
        calcularBtn.disabled = false;
    }
}

// Popular select de culturas
function populateCulturaSelect() {
    const culturaSelect = document.getElementById('culturaSelect');
    culturaSelect.innerHTML = '<option value="">Selecione uma cultura...</option>';
    
    Object.keys(culturas).sort().forEach(cultura => {
        const option = document.createElement('option');
        option.value = cultura;
        option.textContent = cultura;
        culturaSelect.appendChild(option);
    });
}

// Configurar event listeners
function setupEventListeners() {
    const culturaSelect = document.getElementById('culturaSelect');
    const numPlantas = document.getElementById('numPlantas');
    const calcularBtn = document.getElementById('calcularBtn');
    
    if (!culturaSelect || !numPlantas || !calcularBtn) {
        console.error('Elementos do formulário não encontrados');
        return;
    }
    
    // Event listeners para validação em tempo real
    culturaSelect.addEventListener('change', () => {
        updateNutrienteFields();
        validateForm();
    });
    numPlantas.addEventListener('input', validateForm);
    
    // Event listener para cálculo
    calcularBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Botão calcular clicado');
        calcularAdubacao();
    });
    
    // Fallback: também adicionar como onclick direto
    calcularBtn.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Botão calcular clicado (onclick)');
        calcularAdubacao();
        return false;
    };
    
    // Event listeners para checkboxes de nutrientes
    ['N', 'P2O5', 'K2O'].forEach(nutriente => {
        const checkbox = document.getElementById(`checkbox_${nutriente}`);
        if (checkbox) {
            checkbox.addEventListener('change', () => {
                toggleNutrienteFields(nutriente);
                validateForm();
            });
        }
    });
    
    // Adicionar event listeners para inputs de porcentagem e NPK
    // Mesmo que estejam ocultos, os listeners serão adicionados para quando forem exibidos
    ['N', 'P2O5', 'K2O'].forEach(nutriente => {
        const percentualInput = document.getElementById(`percentual_${nutriente}`);
        const npkInput = document.getElementById(`npk_${nutriente}`);
        
        if (percentualInput) {
            // Remover listener antigo se existir
            percentualInput.removeEventListener('input', validateForm);
            percentualInput.addEventListener('input', validateForm);
        }
        if (npkInput) {
            // Remover listener antigo se existir
            npkInput.removeEventListener('input', validateForm);
            npkInput.addEventListener('input', validateForm);
        }
    });
}

// Atualizar campos de nutrientes quando cultura muda
function updateNutrienteFields() {
    const culturaNome = document.getElementById('culturaSelect').value;
    if (!culturaNome) return;
    
    const cultura = culturas[culturaNome];
    if (!cultura) return;
    
    // Desmarcar todos os checkboxes
    ['N', 'P2O5', 'K2O'].forEach(nutriente => {
        const checkbox = document.getElementById(`checkbox_${nutriente}`);
        if (checkbox) {
            checkbox.checked = false;
            toggleNutrienteFields(nutriente);
        }
    });
}

// Alternar visibilidade dos campos de um nutriente
function toggleNutrienteFields(nutriente) {
    const checkbox = document.getElementById(`checkbox_${nutriente}`);
    const container = document.getElementById(`container_${nutriente}`);
    
    if (checkbox && container) {
        if (checkbox.checked) {
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
            // Limpar campos
            const tipoSelect = document.getElementById(`tipo_${nutriente}`);
            const percentualInput = document.getElementById(`percentual_${nutriente}`);
            const npkInput = document.getElementById(`npk_${nutriente}`);
            
            if (tipoSelect) tipoSelect.value = '';
            if (percentualInput) percentualInput.value = '';
            if (npkInput) npkInput.value = '';
            
            // Ocultar inputs dinâmicos
            const inputSimples = document.getElementById(`inputSimples_${nutriente}`);
            const inputNPK = document.getElementById(`inputNPK_${nutriente}`);
            if (inputSimples) inputSimples.classList.add('hidden');
            if (inputNPK) inputNPK.classList.add('hidden');
        }
    }
}

// Função global para gerenciar mudança de tipo de produto
window.handleTipoProdutoChange = function(nutriente) {
    handleTipoProdutoChangeInternal(nutriente);
};

// Gerenciar mudança de tipo de produto para um nutriente específico
function handleTipoProdutoChangeInternal(nutriente) {
    const tipoSelect = document.getElementById(`tipo_${nutriente}`);
    if (!tipoSelect) return;
    
    const tipoProduto = tipoSelect.value;
    const inputSimples = document.getElementById(`inputSimples_${nutriente}`);
    const inputNPK = document.getElementById(`inputNPK_${nutriente}`);
    const percentualInput = document.getElementById(`percentual_${nutriente}`);
    const npkInput = document.getElementById(`npk_${nutriente}`);
    
    if (tipoProduto === '') {
        if (inputSimples) inputSimples.classList.add('hidden');
        if (inputNPK) inputNPK.classList.add('hidden');
    } else if (tipoProduto === 'simples') {
        if (inputSimples) inputSimples.classList.remove('hidden');
        if (inputNPK) inputNPK.classList.add('hidden');
        if (npkInput) npkInput.value = '';
        
        // O event listener já foi adicionado no setupEventListeners
    } else if (tipoProduto === 'npk') {
        if (inputSimples) inputSimples.classList.add('hidden');
        if (inputNPK) inputNPK.classList.remove('hidden');
        if (percentualInput) percentualInput.value = '';
        
        // O event listener já foi adicionado no setupEventListeners
    }
    
    // Validar após mudança
    setTimeout(() => validateForm(), 10);
}

// Validar formulário
function validateForm() {
    const culturaSelect = document.getElementById('culturaSelect');
    const numPlantas = document.getElementById('numPlantas');
    const calcularBtn = document.getElementById('calcularBtn');
    
    if (!culturaSelect || !numPlantas || !calcularBtn) {
        return;
    }
    
    let isValid = true;
    
    // Validar campos básicos
    if (!culturaSelect.value) {
        isValid = false;
    }
    
    const numPlantasValue = parseInt(numPlantas.value);
    if (!numPlantas.value || isNaN(numPlantasValue) || numPlantasValue <= 0) {
        isValid = false;
    }
    
    // Validar se pelo menos um nutriente está selecionado e completo
    let hasNutrienteSelected = false;
    ['N', 'P2O5', 'K2O'].forEach(nutriente => {
        const checkbox = document.getElementById(`checkbox_${nutriente}`);
        if (checkbox && checkbox.checked) {
            hasNutrienteSelected = true;
            
            const tipoSelect = document.getElementById(`tipo_${nutriente}`);
            if (!tipoSelect || !tipoSelect.value) {
                isValid = false;
            } else if (tipoSelect.value === 'simples') {
                const percentualInput = document.getElementById(`percentual_${nutriente}`);
                if (percentualInput) {
                    const percentual = parseFloat(percentualInput.value);
                    if (isNaN(percentual) || percentual <= 0 || percentual > 100) {
                        isValid = false;
                    }
                } else {
                    isValid = false;
                }
            } else if (tipoSelect.value === 'npk') {
                const npkInput = document.getElementById(`npk_${nutriente}`);
                if (npkInput) {
                    const npkValue = npkInput.value.trim();
                    const npkPattern = /^\d{1,2}-\d{1,2}-\d{1,2}$/;
                    if (!npkValue || !npkPattern.test(npkValue)) {
                        isValid = false;
                    }
                } else {
                    isValid = false;
                }
            }
        }
    });
    
    if (!hasNutrienteSelected) {
        isValid = false;
    }
    
    // SEMPRE habilitar o botão - validação acontece no cálculo
    calcularBtn.disabled = false;
}

// ============================================
// CÁLCULO DE ADUBAÇÃO MULTINUTRIENTE
// ============================================

function calcularAdubacao() {
    console.log('Função calcularAdubacao chamada');
    try {
        const culturaNome = document.getElementById('culturaSelect').value;
        const numPlantas = parseInt(document.getElementById('numPlantas').value);
        
        console.log('Cultura:', culturaNome, 'Plantas:', numPlantas);
        
        if (!culturaNome) {
            alert('Por favor, selecione uma cultura.');
            return;
        }
        
        if (!numPlantas || numPlantas <= 0) {
            alert('Por favor, informe o número de plantas.');
            return;
        }
        
        const cultura = culturas[culturaNome];
        
        if (!cultura) {
            alert('Cultura não encontrada na base de dados.');
            return;
        }
        
        const resultados = [];
        const erros = [];
        
        // Calcular para cada nutriente selecionado
        ['N', 'P2O5', 'K2O'].forEach(nutriente => {
            const checkbox = document.getElementById(`checkbox_${nutriente}`);
            if (checkbox && checkbox.checked) {
                try {
                    // Obter tipo de produto e porcentagem
                    const tipoProduto = document.getElementById(`tipo_${nutriente}`).value;
                    
                    if (!tipoProduto) {
                        erros.push(`Selecione o tipo de produto para ${nutriente === 'N' ? 'Nitrogênio' : nutriente === 'P2O5' ? 'Fósforo' : 'Potássio'}.`);
                        return; // Continua para o próximo nutriente
                    }
                    
                    let percentualNutrienteNoProduto = 0;
                    
                    if (tipoProduto === 'simples') {
                        const percentualInput = document.getElementById(`percentual_${nutriente}`);
                        if (!percentualInput || !percentualInput.value) {
                            erros.push(`Informe a porcentagem do nutriente para ${nutriente === 'N' ? 'Nitrogênio' : nutriente === 'P2O5' ? 'Fósforo' : 'Potássio'}.`);
                            return;
                        }
                        percentualNutrienteNoProduto = parseFloat(percentualInput.value);
                        
                        if (!percentualNutrienteNoProduto || percentualNutrienteNoProduto <= 0 || percentualNutrienteNoProduto > 100) {
                            erros.push(`Porcentagem inválida para ${nutriente === 'N' ? 'Nitrogênio' : nutriente === 'P2O5' ? 'Fósforo' : 'Potássio'}.`);
                            return;
                        }
                    } else if (tipoProduto === 'npk') {
                        const npkInput = document.getElementById(`npk_${nutriente}`);
                        if (!npkInput || !npkInput.value) {
                            erros.push(`Informe a formulação NPK para ${nutriente === 'N' ? 'Nitrogênio' : nutriente === 'P2O5' ? 'Fósforo' : 'Potássio'}.`);
                            return;
                        }
                        const formulacao = npkInput.value;
                        const npkPattern = /^\d{1,2}-\d{1,2}-\d{1,2}$/;
                        
                        if (!npkPattern.test(formulacao)) {
                            erros.push(`Formulação NPK inválida para ${nutriente === 'N' ? 'Nitrogênio' : nutriente === 'P2O5' ? 'Fósforo' : 'Potássio'}. Use o formato: 04-14-08`);
                            return;
                        }
                        
                        const [n, p2o5, k2o] = formulacao.split('-').map(Number);
                        
                        if (nutriente === 'N') {
                            percentualNutrienteNoProduto = n;
                        } else if (nutriente === 'P2O5') {
                            percentualNutrienteNoProduto = p2o5;
                        } else if (nutriente === 'K2O') {
                            percentualNutrienteNoProduto = k2o;
                        }
                    }
                    
                    // Verificar se o nutriente tem recomendação na cultura
                    if (!cultura.recomendacao_kg_ha[nutriente] || cultura.recomendacao_kg_ha[nutriente] === 0) {
                        erros.push(`A cultura ${culturaNome} não possui recomendação para ${nutriente === 'N' ? 'Nitrogênio' : nutriente === 'P2O5' ? 'Fósforo' : 'Potássio'}.`);
                        return;
                    }
                    
                    // Calcular recomendação usando a função correta
                    const calc = calcularRecomendacaoNutriente(cultura, nutriente, numPlantas);
                    
                    // Calcular produto comercial
                    const produtoComercial = calcularProdutoComercial(calc.nutriente_total, percentualNutrienteNoProduto);
                    
                    resultados.push({
                        nutriente,
                        tipoProduto,
                        percentualNutrienteNoProduto,
                        ...calc,
                        produtoComercial
                    });
                } catch (error) {
                    console.error(`Erro ao processar nutriente ${nutriente}:`, error);
                    erros.push(`Erro ao processar ${nutriente === 'N' ? 'Nitrogênio' : nutriente === 'P2O5' ? 'Fósforo' : 'Potássio'}: ${error.message}`);
                }
            }
        });
        
        // Mostrar erros se houver
        if (erros.length > 0) {
            console.warn('Erros encontrados:', erros);
            // Não bloquear se houver pelo menos um resultado válido
            if (resultados.length === 0) {
                alert('Erros encontrados:\n' + erros.join('\n'));
                return;
            }
        }
        
        if (resultados.length === 0) {
            alert('Por favor, selecione pelo menos um nutriente para calcular.');
            return;
        }
        
        console.log('Resultados calculados:', resultados);
        
        // Exibir resultados
        exibirResultados(culturaNome, numPlantas, resultados);
    } catch (error) {
        console.error('Erro ao calcular adubação:', error);
        alert('Ocorreu um erro ao calcular. Por favor, verifique os dados informados. Erro: ' + error.message);
    }
}

// Exibir resultados
function exibirResultados(culturaNome, numPlantas, resultados) {
    try {
        const resultCard = document.getElementById('resultCard');
        const resultCultura = document.getElementById('resultCultura');
        const resultPlantas = document.getElementById('resultPlantas');
        const calculationSteps = document.getElementById('calculationSteps');
        const finalResultsContainer = document.getElementById('finalResultsContainer');
        
        if (!resultCard || !resultCultura || !resultPlantas || !calculationSteps || !finalResultsContainer) {
            console.error('Elementos do DOM não encontrados');
            alert('Erro ao exibir resultados. Elementos da página não encontrados.');
            return;
        }
        
        // Nomes formatados dos nutrientes
        const nutrienteNomes = {
            'N': 'Nitrogênio (N)',
            'P2O5': 'Fósforo (P₂O₅)',
            'K2O': 'Potássio (K₂O)'
        };
        
        // Preencher resumo básico
        resultCultura.textContent = culturaNome;
        resultPlantas.textContent = numPlantas.toLocaleString('pt-BR');
    
    // Construir passos de cálculo detalhados
    let stepsHTML = '';
    
    resultados.forEach((resultado, index) => {
        const nutrienteNome = nutrienteNomes[resultado.nutriente];
        
        stepsHTML += `
            <div class="calculation-step">
                <h4 style="margin-bottom: 12px; color: var(--primary-green);">${nutrienteNome}</h4>
                <div style="margin-left: 12px;">
                    <strong>Passo 1:</strong> Converter kg/ha para g/m²<br>
                    ${resultado.kg_por_ha} kg/ha = (${resultado.kg_por_ha} × 1000) ÷ 10000 = ${resultado.g_por_m2.toFixed(4)} g/m²<br><br>
                    
                    <strong>Passo 2:</strong> Calcular área ocupada por uma planta<br>
                    Área = ${culturas[culturaNome].espacamento_linha} m × ${culturas[culturaNome].espacamento_planta} m = ${resultado.area_por_planta.toFixed(4)} m²<br><br>
                    
                    <strong>Passo 3:</strong> Calcular g de nutriente por planta<br>
                    g/planta = ${resultado.g_por_m2.toFixed(4)} g/m² × ${resultado.area_por_planta.toFixed(4)} m² = ${resultado.g_por_planta.toFixed(4)} g/planta<br><br>
                    
                    <strong>Passo 4:</strong> Calcular nutriente total necessário<br>
                    Total = ${resultado.g_por_planta.toFixed(4)} g/planta × ${numPlantas.toLocaleString('pt-BR')} plantas = ${resultado.nutriente_total.toFixed(2)} g de ${nutrienteNome}<br><br>
                    
                    <strong>Passo 5:</strong> Converter para produto comercial<br>
                    Produto comercial = ${resultado.nutriente_total.toFixed(2)} g ÷ (${resultado.percentualNutrienteNoProduto} ÷ 100) = ${resultado.produtoComercial.toFixed(2)} g
                </div>
            </div>
        `;
    });
    
    calculationSteps.innerHTML = stepsHTML;
    
    // Construir resultados finais
    let finalResultsHTML = '';
    
    resultados.forEach(resultado => {
        const nutrienteNome = nutrienteNomes[resultado.nutriente];
        let resultadoFormatado = '';
        
        if (resultado.produtoComercial >= 1000) {
            const kg = resultado.produtoComercial / 1000;
            resultadoFormatado = `${kg.toFixed(2)} kg (${resultado.produtoComercial.toFixed(2)} g)`;
        } else {
            resultadoFormatado = `${resultado.produtoComercial.toFixed(2)} g`;
        }
        
        finalResultsHTML += `
            <div class="final-result-item">
                <span class="final-label">${nutrienteNome}:</span>
                <span class="final-value">${resultadoFormatado}</span>
            </div>
        `;
    });
    
    finalResultsContainer.innerHTML = finalResultsHTML;
    
        // Garantir que o accordion comece fechado
        const accordionContent = document.getElementById('calculationDetails');
        const accordionToggle = document.querySelector('.accordion-toggle');
        const accordionIcon = document.getElementById('accordionIcon');
        
        if (accordionContent && accordionToggle && accordionIcon) {
            accordionContent.classList.add('hidden');
            accordionToggle.classList.remove('active');
            accordionIcon.textContent = '▼';
        }
        
        // Mostrar card de resultado
        resultCard.classList.remove('hidden');
        resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (error) {
        console.error('Erro ao exibir resultados:', error);
        alert('Ocorreu um erro ao exibir os resultados.');
    }
}

// ============================================
// FUNÇÕES GLOBAIS PARA HTML
// ============================================

// Tornar funções acessíveis globalmente para uso em atributos HTML
window.handleTipoProdutoChange = function(nutriente) {
    handleTipoProdutoChangeInternal(nutriente);
};

window.validateForm = function() {
    validateForm();
};

// ============================================
// FUNÇÃO PARA TOGGLE DO ACCORDION
// ============================================

window.toggleCalculationDetails = function() {
    const accordionContent = document.getElementById('calculationDetails');
    const accordionToggle = document.querySelector('.accordion-toggle');
    const accordionIcon = document.getElementById('accordionIcon');
    
    if (accordionContent && accordionToggle && accordionIcon) {
        if (accordionContent.classList.contains('hidden')) {
            accordionContent.classList.remove('hidden');
            accordionToggle.classList.add('active');
            accordionIcon.textContent = '▲';
        } else {
            accordionContent.classList.add('hidden');
            accordionToggle.classList.remove('active');
            accordionIcon.textContent = '▼';
        }
    }
};

// ============================================
// FUNÇÕES PARA NAVEGAÇÃO POR ABAS
// ============================================

window.showTab = function(tabName) {
    // Ocultar todas as abas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remover active de todos os botões
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar aba selecionada
    const selectedTab = document.getElementById(`tab-${tabName}`);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
    }
    
    // Adicionar active ao botão correspondente
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => {
        if (btn.textContent.includes(tabName === 'calculadora' ? '🧮' : tabName === 'tratos' ? '📚' : 'ℹ️')) {
            btn.classList.add('active');
        }
    });
    
    // Se for a aba de tratos, inicializar
    if (tabName === 'tratos') {
        initializeTratos();
    }
};

// ============================================
// FUNÇÕES PARA TRATOS CULTURAIS
// ============================================

function initializeTratos() {
    populateTratosList();
    loadPDF();
}

function populateTratosList() {
    const tratosList = document.getElementById('tratosList');
    if (!tratosList) return;
    
    const culturasList = Object.keys(culturas).sort();
    
    tratosList.innerHTML = culturasList.map(cultura => `
        <div class="trato-item" onclick="showTratoDetails('${cultura}')">
            <span class="trato-icon">🌱</span>
            <span class="trato-name">${cultura}</span>
            <span class="trato-arrow">→</span>
        </div>
    `).join('');
}

window.searchTratos = function() {
    const searchTerm = document.getElementById('tratosSearch').value.toLowerCase();
    const items = document.querySelectorAll('.trato-item');
    
    items.forEach(item => {
        const name = item.querySelector('.trato-name').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
};

window.showTratoDetails = function(culturaNome) {
    const cultura = culturas[culturaNome];
    if (!cultura) return;
    
    const tratosList = document.getElementById('tratosList');
    const tratosDetails = document.getElementById('tratosDetails');
    const tratosContent = document.getElementById('tratosContent');
    
    if (tratosList && tratosDetails && tratosContent) {
        tratosList.classList.add('hidden');
        tratosDetails.classList.remove('hidden');
        
        tratosContent.innerHTML = `
            <h3>${culturaNome}</h3>
            <div class="trato-info-section">
                <h4>📏 Espaçamento</h4>
                <p>Entre linhas: ${cultura.espacamento_linha} m</p>
                <p>Entre plantas: ${cultura.espacamento_planta} m</p>
                <p>Área por planta: ${(cultura.espacamento_linha * cultura.espacamento_planta).toFixed(4)} m²</p>
            </div>
            <div class="trato-info-section">
                <h4>🧪 Recomendações de Adubação (kg/ha)</h4>
                <p><strong>Nitrogênio (N):</strong> ${cultura.recomendacao_kg_ha.N} kg/ha</p>
                <p><strong>Fósforo (P₂O₅):</strong> ${cultura.recomendacao_kg_ha.P2O5} kg/ha</p>
                <p><strong>Potássio (K₂O):</strong> ${cultura.recomendacao_kg_ha.K2O} kg/ha</p>
            </div>
            <div class="trato-info-section">
                <p><em>Para informações completas sobre tratos culturais, consulte o manual em PDF abaixo.</em></p>
            </div>
        `;
    }
};

window.hideTratosDetails = function() {
    const tratosList = document.getElementById('tratosList');
    const tratosDetails = document.getElementById('tratosDetails');
    
    if (tratosList && tratosDetails) {
        tratosList.classList.remove('hidden');
        tratosDetails.classList.add('hidden');
    }
};

function loadPDF() {
    const pdfContainer = document.getElementById('pdfContainer');
    if (!pdfContainer) return;
    
    const pdfPath = 'Manual de Olericultura UFV_251019_153106.pdf';
    
    pdfContainer.innerHTML = `
        <div class="pdf-buttons">
            <button class="btn-open-pdf" onclick="openPDF('${pdfPath}')">
                📖 Abrir Manual de Olericultura
            </button>
            <button class="btn-open-pdf-secondary" onclick="openPDFNewTab('${pdfPath}')">
                🔗 Abrir em Nova Aba
            </button>
        </div>
        <div class="pdf-preview">
            <iframe src="${pdfPath}#page=1" type="application/pdf" class="pdf-viewer" frameborder="0">
                <p>Seu navegador não suporta visualização de PDF. 
                <a href="${pdfPath}" target="_blank">Clique aqui para abrir o PDF</a></p>
            </iframe>
        </div>
    `;
}

window.openPDF = function(pdfPath) {
    window.open(pdfPath, '_blank');
};

window.openPDFNewTab = function(pdfPath) {
    window.open(pdfPath, '_blank');
};
