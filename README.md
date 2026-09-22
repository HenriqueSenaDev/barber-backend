# Sistema de Agendamento para Barbearia

## 1. Problema ou Necessidade
A gestão manual de horários em barbearias por telefone ou mensagens frequentemente causa conflitos de agenda, filas de espera e falta de autonomia para o cliente consultar horários e serviços disponíveis em tempo real. A aplicação busca centralizar e automatizar o processo de agendamento e gerenciamento do estabelecimento.

## 2. Público-Alvo
* **Clientes:** Pessoas que desejam agendar serviços de corte e barba com praticidade pelo celular.
* **Administradores:** Donos ou gerentes da barbearia que precisam organizar a agenda, gerenciar serviços e controlar a equipe de profissionais.

## 3. Principais Funcionalidades

### Cliente
* Cadastro e login no sistema.
* Visualização dos serviços disponíveis e profissionais da equipe.
* Realização de agendamentos escolhendo serviço, barbeiro, data e horário disponível.
* Visualização e cancelamento dos próprios agendamentos.

### Administrador
* Gerenciamento de agendamentos (visualizar, confirmar e cancelar/apagar horários).
* Gerenciamento de serviços (cadastrar, editar e remover serviços, preços e durações).
* Gerenciamento da equipe (cadastrar e gerenciar barbeiros/cabeleireiros).
* Visualização da lista de clientes cadastrados.

## 4. Entidades e Informações do Sistema
* **Usuário:** Identificador, nome, e-mail, senha, telefone e perfil de acesso (cliente ou administrador).
* **Barbeiro:** Identificador, nome, especialidade e status (ativo/inativo).
* **Serviço:** Identificador, nome, descrição, preço e duração estimada em minutos.
* **Agendamento:** Identificador, cliente associado, barbeiro associado, serviço associado, data/hora e status (pendente, confirmado, cancelado).

## 5. Justificativa da Solução (API + Aplicação Mobile)
A solução requer uma API centralizada para sincronizar horários em tempo real, evitando agendamentos duplicados no mesmo intervalo e barbeiro, além de garantir o controle de permissões entre clientes e administradores. A aplicação mobile oferece aos clientes acesso rápido e prático para marcar e consultar horários a qualquer momento.
