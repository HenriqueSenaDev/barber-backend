# Sistema de Agendamento para Barbearia

## 1. Problema ou Necessidade
A gestão manual de horários em barbearias por telefone ou mensagens frequentemente causa conflitos de agenda, filas de espera e falta de autonomia para o cliente consultar horários e serviços disponíveis em tempo real. A aplicação busca centralizar e automatizar o processo de agendamento e gerenciamento do estabelecimento.

## 2. Público-Alvo
* **Clientes:** Pessoas que desejam agendar serviços de corte e barba com praticidade pelo celular.
* **Administradores:** Donos ou gerentes da barbearia que precisam organizar a agenda, gerenciar serviços e controlar a equipe de profissionais.

## 3. Principais Funcionalidades

### Cliente
* Autenticação simplificada por nome e telefone.
* Visualização dos serviços disponíveis e profissionais da equipe.
* Realização de agendamentos escolhendo serviço, barbeiro (ou sem preferência), data e horário disponível.
* Visualização e cancelamento dos próprios agendamentos.

### Administrador
* Autenticação restrita por senha.
* Gerenciamento de agendamentos (visualizar por status: pendente, confirmado, concluído; confirmar, concluir e cancelar).
* Gerenciamento de serviços (cadastrar, editar e remover serviços com preços e durações).
* Gerenciamento da equipe (cadastrar e gerenciar barbeiros/cabeleireiros).
* Visualização e busca da lista de clientes cadastrados.

## 4. Entidades e Informações do Sistema
* **Customer (Cliente):** Identificador (`id`), nome (`name`) e telefone (`phone`).
* **Admin (Administrador):** Identificador (`id`) e senha criptografada (`password`).
* **Barber (Barbeiro):** Identificador (`id`), nome (`name`), avatar (`avatarUrl`), especialidade (`specialty`), avaliação (`rating`), experiência (`experience`), tags (`tags`) e status ativo (`isActive`).
* **BarberService (Serviço de Barbearia):** Identificador (`id`), nome (`name`), descrição (`description`), preço (`price`), duração em minutos (`durationMinutes`), ícone (`icon`) e status ativo (`isActive`).
* **Appointment (Agendamento):** Identificador (`id`), cliente (`customerId`), barbeiro opcional (`barberId`), serviço (`barberServiceId`), data/hora agendada (`scheduledAt`), preço cobrado (`price`) e status (`status`: PENDING, CONFIRMED, COMPLETED, CANCELED).

## 5. Justificativa da Solução (API + Aplicação Mobile)
A solução requer uma API centralizada para sincronizar horários em tempo real, evitando agendamentos duplicados no mesmo intervalo e barbeiro, além de garantir o controle de permissões entre clientes e administradores. A aplicação mobile oferece aos clientes acesso rápido e prático para marcar e consultar horários a qualquer momento.

## 6. Configuração do Ambiente e Banco de Dados

### 1. Variáveis de Ambiente
Copie o arquivo de exemplo para criar seu `.env`:
```bash
cp .env.example .env
```

### 2. Inicializar o Banco de Dados com Docker
Execute o comando abaixo para iniciar o container do PostgreSQL 17 (`barberpro-db`) compatível com a `DATABASE_URL`:
```bash
docker run -d \
  --name barberpro-db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=barberpro \
  -v barberpro_data:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:17
```

### 3. Rodar as Migrações
Com o banco em execução, aplique as migrações do Prisma:
```bash
npm run prisma:migrate
```
