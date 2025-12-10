// ============================================
// NAVEGAÇÃO ENTRE SEÇÕES DO DASHBOARD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Navegação do sidebar
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.dashboard-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            
            // Remove active de todos os itens e seções
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Adiciona active ao item clicado e seção correspondente
            this.classList.add('active');
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
                
                // Atualiza breadcrumb
                updateBreadcrumb(targetSection, this.textContent.trim());
            }
            
            // Fecha sidebar em mobile após clicar
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('show');
            }
        });
    });
    
    // Função para atualizar breadcrumb
    function updateBreadcrumb(sectionId, sectionName) {
        // Remove breadcrumbs existentes e cria novo apenas na seção ativa
        const activeSection = document.querySelector('.dashboard-section.active');
        if (activeSection) {
            // Remove breadcrumbs existentes
            const existingBreadcrumb = activeSection.querySelector('.breadcrumb');
            if (!existingBreadcrumb) {
                const breadcrumb = document.createElement('nav');
                breadcrumb.className = 'breadcrumb';
                breadcrumb.innerHTML = `
                    <a href="#inicio" class="breadcrumb-item">Início</a>
                    <span class="breadcrumb-item active">${sectionName}</span>
                `;
                activeSection.insertBefore(breadcrumb, activeSection.firstChild);
            } else {
                existingBreadcrumb.innerHTML = `
                    <a href="#inicio" class="breadcrumb-item">Início</a>
                    <span class="breadcrumb-item active">${sectionName}</span>
                `;
            }
        }
    }
    
    // ============================================
    // FORMULÁRIO DE LOGIN
    // ============================================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userType = document.getElementById('userType').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!userType || !email || !password) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Redireciona para o dashboard apropriado
            switch(userType) {
                case 'paciente':
                    window.location.href = 'dashboard-paciente.html';
                    break;
                case 'profissional':
                    window.location.href = 'dashboard-profissional.html';
                    break;
                case 'admin':
                    window.location.href = 'dashboard-admin.html';
                    break;
                default:
                    alert('Tipo de usuário inválido.');
            }
        });
    }
    
    // ============================================
    // FORMULÁRIO DE CADASTRO
    // ============================================
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        // Mostra/esconde campos específicos de profissional
        const userTypeSelect = document.getElementById('userType');
        const crmGroup = document.getElementById('crmGroup');
        const especialidadeGroup = document.getElementById('especialidadeGroup');
        
        if (userTypeSelect) {
            userTypeSelect.addEventListener('change', function() {
                if (this.value === 'profissional') {
                    crmGroup.style.display = 'block';
                    especialidadeGroup.style.display = 'block';
                    document.getElementById('crm').required = true;
                    document.getElementById('especialidade').required = true;
                } else {
                    crmGroup.style.display = 'none';
                    especialidadeGroup.style.display = 'none';
                    document.getElementById('crm').required = false;
                    document.getElementById('especialidade').required = false;
                }
            });
        }
        
        // Máscara de CPF
        const cpfInput = document.getElementById('cpf');
        if (cpfInput) {
            cpfInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length <= 11) {
                    value = value.replace(/(\d{3})(\d)/, '$1.$2');
                    value = value.replace(/(\d{3})(\d)/, '$1.$2');
                    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                    e.target.value = value;
                }
            });
        }
        
        // Máscara de Telefone
        const telefoneInput = document.getElementById('telefone');
        if (telefoneInput) {
            telefoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length <= 11) {
                    if (value.length <= 10) {
                        value = value.replace(/(\d{2})(\d)/, '($1) $2');
                        value = value.replace(/(\d{4})(\d)/, '$1-$2');
                    } else {
                        value = value.replace(/(\d{2})(\d)/, '($1) $2');
                        value = value.replace(/(\d{5})(\d)/, '$1-$2');
                    }
                    e.target.value = value;
                }
            });
        }
        
        // Máscara de CEP
        const cepInput = document.getElementById('cep');
        if (cepInput) {
            cepInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length <= 8) {
                    value = value.replace(/(\d{5})(\d)/, '$1-$2');
                    e.target.value = value;
                }
            });
        }
        
        // Validação de senha
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        
        if (confirmPasswordInput) {
            confirmPasswordInput.addEventListener('input', function() {
                if (passwordInput.value !== this.value) {
                    this.setCustomValidity('As senhas não coincidem.');
                } else {
                    this.setCustomValidity('');
                }
            });
        }
        
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            if (passwordInput.value !== confirmPasswordInput.value) {
                alert('As senhas não coincidem.');
                return;
            }
            
            // Simula cadastro bem-sucedido
            alert('Cadastro realizado com sucesso! Redirecionando para o login...');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
    
    // ============================================
    // FORMULÁRIO DE RECUPERAÇÃO
    // ============================================
    const recoveryForm = document.getElementById('recoveryForm');
    if (recoveryForm) {
        recoveryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const userType = document.getElementById('userType').value;
            
            if (!email || !userType) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Mostra mensagem de sucesso
            const successDiv = document.getElementById('recoverySuccess');
            if (successDiv) {
                recoveryForm.style.display = 'none';
                successDiv.style.display = 'block';
            }
        });
    }
    
    // ============================================
    // FUNÇÕES AUXILIARES
    // ============================================
    
    // Formatação de números
    function formatNumber(value) {
        return value.replace(/\D/g, '');
    }
    
    // Validação de email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Validação de CPF (básica)
    function validateCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');
        if (cpf.length !== 11) return false;
        if (/^(\d)\1+$/.test(cpf)) return false;
        return true;
    }
    
    // ============================================
    // INTERAÇÕES DO DASHBOARD
    // ============================================
    
    // Toggle Sidebar
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            // Salva o estado no localStorage
            localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
        });
        
        // Restaura o estado salvo
        const savedState = localStorage.getItem('sidebarCollapsed');
        if (savedState === 'true') {
            sidebar.classList.add('collapsed');
        }
        
        // Em mobile, adiciona classe 'show' para mostrar sidebar
        if (window.innerWidth <= 768) {
            sidebar.classList.add('show');
            sidebarToggle.addEventListener('click', function() {
                sidebar.classList.toggle('show');
            });
        }
    }
    
    // User Menu Dropdown
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userMenu = document.getElementById('userMenu');
    
    if (userMenuBtn && userMenu) {
        userMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            userMenu.classList.toggle('show');
        });
        
        // Fecha o menu ao clicar fora
        document.addEventListener('click', function(e) {
            if (!userMenuBtn.contains(e.target) && !userMenu.contains(e.target)) {
                userMenu.classList.remove('show');
            }
        });
    }
    
    // Global Search
    const globalSearchInput = document.querySelector('.search-input-global');
    if (globalSearchInput) {
        globalSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    console.log('Buscar:', searchTerm);
                    alert(`Buscando por: ${searchTerm}\n(Em desenvolvimento)`);
                }
            }
        });
    }
    
    // Simulação de notificações
    const notificationBadges = document.querySelectorAll('.notification-badge');
    notificationBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            alert('Sistema de notificações - Em desenvolvimento');
        });
    });
    
    // Botões de ação nas tabelas
    const actionButtons = document.querySelectorAll('.btn-icon');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent;
            const title = this.getAttribute('title');
            if (title === 'Visualizar') {
                console.log('Visualizar');
            } else if (title === 'Editar') {
                console.log('Editar');
            } else if (title === 'Excluir' || title === 'Remover') {
                if (confirm('Tem certeza que deseja excluir este item?')) {
                    console.log('Excluir');
                }
            } else if (title === 'Cancelar') {
                if (confirm('Tem certeza que deseja cancelar?')) {
                    console.log('Cancelar');
                }
            }
        });
    });
    
    // Formulários do dashboard
    const dashboardForms = document.querySelectorAll('.profile-form, .prescription-form, .report-form, .settings-form');
    dashboardForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Dados salvos com sucesso! (Simulação)');
        });
    });
    
    // Botões de ação
    const actionBtns = document.querySelectorAll('.btn-primary, .btn-secondary');
    actionBtns.forEach(btn => {
        if (!btn.closest('form')) {
            btn.addEventListener('click', function(e) {
                if (this.textContent.includes('Agendar') || 
                    this.textContent.includes('Nova') ||
                    this.textContent.includes('Cadastrar')) {
                    e.preventDefault();
                    alert('Funcionalidade em desenvolvimento');
                }
            });
        }
    });
});

// ============================================
// FUNÇÕES GLOBAIS
// ============================================

// Função para exibir mensagens de sucesso/erro
function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `alert-item alert-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.right = '20px';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.minWidth = '300px';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Função para confirmar ações
function confirmAction(message) {
    return confirm(message);
}

