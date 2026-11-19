# RELATÓRIO TÉCNICO — DESCARTE CERTO

**Disciplina:** Projeto e Desenvolvimento I  
**Tema:** Educação ambiental e sustentabilidade  
**Aluno(a):** [PREENCHER]  
**Curso / turma:** [PREENCHER]  
**Data:** [PREENCHER]

> **Atenção:** Documento-base para revisão e personalização. Substitua os campos entre colchetes, realize os testes e registre resultados reais antes de entregar.

## 1. Resumo

O Descarte Certo é uma aplicação web educativa, criada com HTML, CSS e JavaScript, para apresentar orientações gerais sobre a separação e o descarte de resíduos domésticos. O site contém guia pesquisável, filtros por categoria e quiz interativo. Seu objetivo é promover a conscientização ambiental por meio de uma interface simples e responsiva.

## 2. Problema, objetivo e público-alvo

**Problema:** pessoas podem ter dúvidas sobre o destino correto de materiais como pilhas, óleo de cozinha, papel e eletrônicos.  
**Objetivo geral:** facilitar o acesso a informações introdutórias sobre descarte consciente.  
**Público-alvo:** estudantes e moradores interessados em sustentabilidade.

## 3. Tecnologias e arquitetura

- HTML5: organização semântica das seções.
- CSS3: aparência, organização em grade e adaptação a telas pequenas.
- JavaScript: exibição de materiais, pesquisa, filtros e quiz.
- Arquitetura: aplicação estática executada localmente no navegador; sem servidor, API ou banco de dados.

## 4. Requisitos funcionais

| Código | Requisito | Implementação |
|---|---|---|
| RF01 | Exibir orientações por material | Cartões no guia |
| RF02 | Filtrar materiais por categoria | Botões de filtro |
| RF03 | Buscar material por nome ou descrição | Campo de pesquisa |
| RF04 | Realizar quiz educativo | Cinco questões interativas |
| RF05 | Exibir resultado e permitir reiniciar | Pontuação e botão de reinício |

## 5. Requisitos não funcionais

| Código | Requisito | Implementação |
|---|---|---|
| RNF01 | Ser utilizável em celular e computador | Layout responsivo com CSS |
| RNF02 | Não exigir instalação de programas adicionais | HTML/CSS/JS nativos |
| RNF03 | Facilitar navegação por teclado | Botões nativos, foco visível, link para conteúdo |
| RNF04 | Oferecer texto legível e organização clara | Hierarquia de títulos e contraste visual |

## 6. História de usuário e caso de uso

**História de usuário:** Como pessoa que deseja descartar resíduos, quero pesquisar um material para entender qual é a orientação geral de descarte.  
**Caso de uso UC01 — Consultar material:** o usuário abre o site, digita o nome do material, visualiza o cartão correspondente e lê a orientação. Caso não haja correspondência, o site informa que nenhum material foi encontrado.

## 7. Protótipo textual (wireframe simplificado)

```text
+--------------------------------------------------------+
| ♻ Descarte Certo                    Guia | Quiz | Sobre |
+--------------------------------------------------------+
| Seu lixo tem um destino melhor.                        |
| [Explorar guia de descarte]                            |
+--------------------------------------------------------+
| O que você quer descartar?                             |
| [Todos] [Recicláveis] [Especiais] [Orgânicos]           |
| [Buscar material...]                                   |
| [Cartão]              [Cartão]            [Cartão]     |
+--------------------------------------------------------+
| Teste seus conhecimentos!                              |
| Pergunta + alternativas + feedback + resultado         |
+--------------------------------------------------------+
| Sobre o projeto                                        |
+--------------------------------------------------------+
```

## 8. Metodologia e planejamento simplificado

**Método proposto:** Kanban, com as colunas A fazer, Em andamento e Concluído.  
**Etapas:** (1) definir problema e requisitos; (2) desenhar estrutura; (3) implementar guia; (4) implementar quiz; (5) testar e documentar.

> Ajuste esta seção ao processo que você realmente seguiu. Não declare trabalho em equipe se o projeto foi individual.

## 9. Plano de testes (preencher após executar)

| Teste | Procedimento | Resultado esperado | Resultado obtido |
|---|---|---|---|
| T01 | Abrir `index.html` no navegador | Página aparece corretamente | [PREENCHER] |
| T02 | Clicar em “Especiais” | Exibir apenas materiais especiais | [PREENCHER] |
| T03 | Buscar “óleo” | Exibir óleo de cozinha | [PREENCHER] |
| T04 | Buscar “xyz123” | Exibir mensagem de nenhum resultado | [PREENCHER] |
| T05 | Responder as 5 questões | Mostrar pontuação final | [PREENCHER] |
| T06 | Clicar em “Refazer quiz” | Voltar à primeira pergunta | [PREENCHER] |
| T07 | Abrir em largura de celular | Conteúdo se reorganiza sem cortes | [PREENCHER] |
| T08 | Navegar usando tecla Tab | Links e botões recebem foco visível | [PREENCHER] |

## 10. Limitações e melhorias futuras

A aplicação não possui cadastro, localização automática, mapa, persistência de dados ou consulta a serviços municipais. Uma melhoria futura seria integrar uma base verificada de pontos de coleta por cidade e permitir atualização das orientações.

## 11. Conclusão (revisar após testar)

O projeto demonstra uma solução digital educativa para o tema de sustentabilidade, com interface responsiva e funcionalidades de busca, filtros e quiz. Sua simplicidade facilita o uso e a manutenção. A validação final depende da execução dos testes acima.

## 12. Roteiro de apresentação (aproximadamente 2 minutos)

1. Apresentar o problema: dúvidas sobre o descarte de resíduos.
2. Explicar o objetivo e o público-alvo.
3. Mostrar o guia e filtrar “Especiais”.
4. Buscar “óleo” e explicar a orientação.
5. Responder uma pergunta do quiz.
6. Mostrar a versão para celular e comentar limitações e melhorias futuras.

## 13. Relação com o plano de ensino

O projeto aborda concepção, requisitos funcionais e não funcionais, interface centrada no usuário, prototipação textual, desenvolvimento web responsivo, implementação, testes e documentação. Não implementa integração com APIs, banco de dados ou aplicativo móvel nativo; confirme com o docente se essas funcionalidades são obrigatórias para a sua entrega específica.
