# SGHSS Vida Plus - Sistema de Gestão Hospitalar e de Serviços de Saúde

Sistema web moderno desenvolvido em HTML, CSS e JavaScript para gestão hospitalar, com foco em front-end responsivo e acessível.

## 📋 Descrição

O SGHSS Vida Plus é um sistema completo para gestão de hospitais, clínicas, laboratórios e equipes de home care. O sistema oferece três painéis principais para diferentes tipos de usuários:

- **Pacientes**: Visualização de histórico clínico, agendamento de consultas, acesso a exames e telemedicina
- **Profissionais de Saúde**: Gestão de agendas, prontuários eletrônicos, prescrições digitais e telemedicina
- **Administradores**: Gestão completa de pacientes, profissionais, leitos, suprimentos, financeiro e auditoria

## 🚀 Funcionalidades

### Autenticação
- ✅ Tela de Login com seleção de tipo de usuário
- ✅ Tela de Cadastro (Paciente e Profissional)
- ✅ Tela de Recuperação de Acesso

### Dashboard do Paciente
- 📅 Visualização de consultas agendadas
- 🔬 Acompanhamento de exames
- 📋 Acesso ao prontuário eletrônico
- 💻 Agendamento de teleconsultas
- 💊 Visualização de receitas digitais
- 👤 Gerenciamento de perfil

### Dashboard do Profissional
- 📅 Gestão de agenda e consultas
- 👥 Listagem de pacientes
- 📋 Atualização de prontuários eletrônicos
- 💊 Emissão de prescrições digitais
- 💻 Telemedicina
- 📊 Relatórios de atividades

### Dashboard do Administrador
- 👥 Gestão de pacientes e profissionais
- 🛏️ Controle de leitos e internações
- 📦 Gestão de suprimentos
- 💰 Relatórios financeiros
- 📊 Relatórios gerenciais
- 🔒 Logs de auditoria (LGPD)
- ⚙️ Configurações do sistema

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design moderno com variáveis CSS, Flexbox e Grid
- **JavaScript (Vanilla)**: Interatividade e navegação
- **Design Responsivo**: Compatível com desktop, tablet e mobile
- **Acessibilidade**: Conformidade com padrões WCAG

## 📁 Estrutura do Projeto

```
SISTEMA_SGHSS_VIDAPLUS/
│
├── index.html                  # Página de login
├── cadastro.html               # Página de cadastro
├── recuperacao.html            # Página de recuperação de senha
├── dashboard-paciente.html     # Dashboard do paciente
├── dashboard-profissional.html # Dashboard do profissional
├── dashboard-admin.html        # Dashboard do administrador
│
├── css/
│   └── style.css              # Estilos globais e componentes
│
├── js/
│   └── main.js                # JavaScript para navegação e interatividade
│
└── README.md                  # Este arquivo
```

## 🎨 Características de Design

### Design System
- **Cores**: Paleta moderna com azul primário (#2563eb)
- **Tipografia**: Sistema de fontes do sistema para melhor performance
- **Espaçamentos**: Sistema consistente de espaçamentos
- **Componentes**: Cards, botões, formulários e tabelas estilizados

### Responsividade
- **Desktop**: Layout completo com sidebar fixo
- **Tablet**: Adaptação de grid e navegação
- **Mobile**: Sidebar colapsável e layout otimizado

### Acessibilidade
- Suporte a navegação por teclado
- Contraste adequado de cores
- Labels descritivos em formulários
- Suporte a leitores de tela
- Modo de alto contraste

## 🚀 Como Usar

### Instalação Local

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` em um navegador moderno
3. Não é necessário servidor web para visualização básica

### Navegação

1. **Login**: Acesse `index.html` e selecione o tipo de usuário
   - Use qualquer e-mail/CPF e senha para testar
   - O sistema redireciona automaticamente para o dashboard correspondente

2. **Cadastro**: Clique em "Cadastre-se aqui" na tela de login
   - Preencha os dados do formulário
   - Campos específicos aparecem ao selecionar "Profissional de Saúde"

3. **Recuperação**: Clique em "Esqueci minha senha" na tela de login
   - Informe e-mail/CPF e tipo de usuário
   - Sistema simula envio de e-mail de recuperação

4. **Dashboards**: Navegue pelas seções usando o menu lateral
   - Cada seção mostra informações e funcionalidades específicas
   - Botões de ação estão disponíveis para interação

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Navegadores mobile (iOS Safari, Chrome Mobile)

## 🔒 Segurança e LGPD

O sistema foi projetado considerando:

- **Controle de Acesso**: Diferentes níveis de permissão por tipo de usuário
- **Auditoria**: Logs de todas as ações realizadas no sistema
- **LGPD**: Conformidade com Lei Geral de Proteção de Dados
- **Criptografia**: Preparado para implementação de criptografia de dados sensíveis

## 📊 Funcionalidades Implementadas

### ✅ Implementado (Front-end)
- Interface completa de todas as telas
- Navegação entre seções
- Formulários com validação básica
- Máscaras de entrada (CPF, telefone, CEP)
- Design responsivo
- Acessibilidade básica

### ⚠️ Pendente (Back-end)
- Autenticação real
- Banco de dados
- Integração com APIs
- Videochamadas (telemedicina)
- Geração de relatórios em PDF
- Sistema de notificações em tempo real

## 🎯 Próximos Passos

Para tornar o sistema funcional, seria necessário:

1. **Back-end**: Desenvolver API REST com Node.js, Python ou outra tecnologia
2. **Banco de Dados**: Implementar PostgreSQL ou MySQL
3. **Autenticação**: Integrar JWT ou OAuth2
4. **Telemedicina**: Integrar WebRTC para videochamadas
5. **Relatórios**: Implementar geração de PDFs
6. **Notificações**: Sistema de push notifications
7. **Testes**: Implementar testes automatizados

## 📝 Notas de Desenvolvimento

- Este é um **protótipo front-end** focado em design e usabilidade
- As funcionalidades estão **simuladas** para demonstração
- O código está organizado e comentado para fácil manutenção
- O design segue princípios de UX/UI modernos

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido como parte do estudo de caso do curso de Sistemas de Informação, focado em:

- Análise e Requisitos
- Modelagem e Arquitetura Front-end
- Prototipagem de Interface
- Design Responsivo
- Acessibilidade Web

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.

## 📧 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através do AVA da instituição.

---

**Desenvolvido com ❤️ para o SGHSS Vida Plus**

