# Ateliê LICA Festas - Portal Web

Protótipo local criado a partir da planilha `Ateliê_LICA_Festas_V3.xlsm`.

## Como abrir

Abra o arquivo `index.html` no navegador.

## Acesso inicial

- Admin: `admin@lica.com` / `admin123`

## Fluxo implementado

- Login de cliente e admin.
- Cliente ou admin seleciona kit predefinido.
- Kit tem itens inclusos e preço fechado.
- Adicionais do estoque ficam separados e acrescem o valor.
- Orçamento calcula kit fechado, adicionais, entrega, montagem, desconto e sinal sugerido.
- Admin visualiza reservas.
- Admin confirma pagamento do sinal.
- Admin gera contrato.
- Cliente assina no canvas, com assinatura estilo caneta.
- Admin cadastra, edita e exclui clientes com login e senha de acesso.
- Admin cria, visualiza e edita acessos, com habilitar/desabilitar usuários e admin protegido.
- Admin cadastra, edita e exclui itens de estoque para aluguel com código automático `ITM-###`.
- Admin cadastra, edita, exclui, habilita e desabilita Kits e Adicionais com fotos e valores.
- Cliente solicita reserva em jornada por etapas: Kit, Adicionais, Sinal e Contrato.
- Serviços de Entrega, Montagem e Devolução têm valores editáveis no admin.
- Com o modo producao ativo, os dados principais vêm do PostgreSQL e nao ha fallback de dados no navegador.

## Próximo passo para produção

Para virar sistema real, trocar o armazenamento local por backend com banco de dados, autenticação segura, envio de contrato por link e integração de pagamento/PIX.

Veja tambem `docs/backend-auth-roadmap.md` para um roteiro inicial de backend, autenticacao, permissoes e modelo de dados.

## PostgreSQL e backend

- `db/migrations/001_initial_postgres.sql`: estrutura inicial para PostgreSQL.
- `db/seeds/001_admin_only.sql`: carga inicial recomendada, zerada, com somente o acesso admin.
- `db/seeds/001_demo_data.sql`: carga opcional de demonstracao, apenas para testes com dados ficticios.
- `server/`: esqueleto inicial da API Node.js para conectar no PostgreSQL.
- `docs/postgres-setup.md`: passo a passo para criar o banco no DataGrip e testar a API.
- Ao abrir, o frontend tenta carregar `http://localhost:3333/api/store` antes de renderizar dados locais.
- O login do frontend usa `http://localhost:3333/api`; em modo producao, se a API estiver indisponivel, o acesso fica bloqueado.
- A criacao de nova reserva ja envia dados para `POST /api/reservations` quando a API estiver conectada.
- Confirmar sinal, salvar status, salvar financeiro, gerar contrato e cancelar reserva ja usam a API quando conectada.
- Cadastro, edicao e exclusao de clientes e itens de estoque ja usam a API quando conectada.
- Cadastro, edicao, habilitacao e exclusao de kits, adicionais e temas ja usam a API quando conectada.
- Comprovantes de sinal e assinaturas de contrato ja sao gravados no PostgreSQL quando a API esta conectada.
- Acessos/admins e taxas de entrega, montagem e devolucao ja usam a API quando conectada.
- O frontend nao grava snapshots no navegador em modo producao.
- Se a API estiver indisponivel, o portal bloqueia o acesso em vez de usar fallback local.
- Novos comprovantes e assinaturas sao salvos como arquivos em `server/uploads/`; o banco guarda a referencia em `files.storage_key`.
- Login via API emite token JWT; rotas administrativas exigem perfil Admin e cliente fica restrito ao proprio cadastro/reservas.
