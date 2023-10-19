

document.addEventListener("DOMContentLoaded", function () {
    const metaForm = document.getElementById("meta-form");
    const exerciciosDiv = document.getElementById("exercicios");
    const alimentacaoDiv = document.getElementById("alimentacao");

    // Verifica se o elemento com ID "meta-form" foi encontrado
    if (metaForm) {
        // Defina uma função nomeada para o evento change
        function onMetaFormChange() {
            const selectedOption = metaForm.meta.value;

            // Limpa as informações anteriores
            exerciciosDiv.innerHTML = "";
            alimentacaoDiv.innerHTML = "";

            // Adicione aqui a lógica para exibir exercícios e planos de alimentação com base na escolha do usuário
            switch (selectedOption) {
                case "hipertrofia":
                    exerciciosDiv.innerHTML = "<pre>Exercícios paaaara hipertrofia: ...</pre>";
                    alimentacaoDiv.innerHTML = "<pre>Plano de alimentaçaaaão para hipertrofia: ...</pre>";
                    break;
                case "perda-de-peso":
                    exerciciosDiv.innerHTML = "<pre>Exercícios para perda de peso: ...</pre>";
                    alimentacaoDiv.innerHTML = "<pre>Plano de alimentação para perda de peso: ...</pre>";
                    break;
                // Adicione casos para outras opções
            }
        }

        // Adicione o ouvinte de evento ao elemento
        metaForm.addEventListener("change", onMetaFormChange);
    }
});






















/* ##############################################################################################################*/
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const images = slider.querySelectorAll("img");
    const imageCount = images.length;
    let currentIndex = 0;

    function nextImage() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % imageCount;
        images[currentIndex].style.display = "block";
    }

    function prevImage() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        images[currentIndex].style.display = "block";
    }

    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    prevButton.addEventListener("click", prevImage);
    nextButton.addEventListener("click", nextImage);

    setInterval(nextImage, 5000); // Altere o intervalo conforme desejado (aqui, 5000ms = 5 segundos).
    nextImage(); // Comece a transição imediatamente.
});





/* ########################################pagina_Principal######################################################################*/





function confirmPersonalInfo() {
    document.getElementById("imc-calculator").style.display = "block";
}

function calculateIMC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    const imc = weight / (height * height);

    const resultElement = document.getElementById("imc-result");
    resultElement.innerHTML = `<pre>${imc.toFixed(2)}</pre>`;

    document.getElementById("goal-questionnaire").style.display = "block";
}

    function showWorkoutAndDiet() {
    const selectedGoal = document.querySelector('input[name="goal"]:checked').value;
    let workout = "";
    let diet = "";

    // Lógica para gerar planos de treino e dieta com base na meta selecionada.
    switch (selectedGoal) {
        case "Hipertrofia":
            workout = `<pre class="red-text"> Plano de treino para hipertrofia:
           
           
            Dia 1: Peito e Tríceps

           1. Supino reto - 4 séries de 8-10 repetições.
           2.Supino inclinado com barra - 3 séries de 8-10 repetições.
           3.Crucifixo inclinado com halteres - 3 séries de 10-12 repetições.
           4.Tríceps pulldown - 4 séries de 10-12 repetições.
           5.Tríceps testa com barra EZ - 3 séries de 10-12 repetições.
           
           Dia 2: Costas e Bíceps
            
           1.Puxada na máquina ou Barra fixa - 4 séries de 8-10 repetições.
           2.Levantamento terra - 3 séries de 6-8 repetições.
           3.Remada curvada com barra - 3 séries de 8-10 repetições.
           4.Rosca direta com barra EZ - 4 séries de 10-12 repetições.
           5.Rosca martelo - 3 séries de 10-12 repetições.
           
           Dia 3: Pernas
            
           1.Agachamento livre - 4 séries de 8-10 repetições.
           2.Leg press - 3 séries de 8-10 repetições.
           3.Extensão de pernas - 3 séries de 10-12 repetições.
           4.Flexão de pernas (leg curl) - 3 séries de 10-12 repetições.
           5.Panturrilhas em pé - 4 séries de 12-15 repetições.
           
           Dia 4: Ombros e Abdômen
            
           1.Desenvolvimento militar - 4 séries de 8-10 repetições.
           2.Elevação lateral com halteres - 3 séries de 10-12 repetições.
           3.Elevação frontal com barra - 3 séries de 10-12 repetições.
           4.Prancha abdominal - 3 séries de 30-60 segundos.
           5.Crunch abdominal - 3 séries de 15-20 repetições.</pre>`;


            diet = `<pre class="blue-text">Dieta para hipertrofia:
            
            1. Consuma Proteína Suficiente:

            A proteína é essencial para o reparo e o crescimento muscular. 
            Consuma fontes de proteína magra, como peito de frango, peixe, 
            carne magra, ovos, laticínios com baixo teor de gordura, tofu 
            e leguminosas.
            
            2. Mantenha um Balanço Calórico Positivo:
            
            Para ganhar massa muscular, você deve consumir mais calorias 
            do que gasta. Isso significa que você precisa estar em um 
            superávitcalórico. No entanto, evite exagerar, pois o excesso de
            gordura corporal pode ocorrer se você consumir muitas calorias além 
            do necessário.
            
            3. Carboidratos Complexos:
            
            Os carboidratos são importantes para fornecer energia durante os 
            treinose para repor as reservas de glicogênio muscular. Opte por 
            carboidratos complexos,como aveia, arroz integral, batata-doce,
            quinoa e legumes.
            
            4. Gorduras Saudáveis:
            
            Inclua gorduras saudáveis em sua dieta, como abacate, nozes, sementes, 
            azeite de oliva e peixes ricos em ômega-3 (salmão, sardinha).
            
            5. Coma Refeições Balanceadas:
            
            Planeje refeições que incluam uma combinação de proteína, carboidratos e
             gorduras saudáveis. Isso ajuda a manter um equilíbrio nutricional.
            
            6. Refeições Pré e Pós-Treino:
            
            Consuma uma refeição ou lanche que inclua proteína e carboidratos antes do 
            treino para fornecer energia. Após o treino, uma refeição ou shake de proteína
            ajuda na recuperação muscular.
            
            7. Hidratação Adequada:
            
            Beba água suficiente para manter-se hidratado, pois a desidratação pode afetar
            negativamente o desempenho nos treinos.
            
            8. Suplementos Opcionais:
            
            Suplementos como proteína em pó, creatina, BCAAs (aminoácidos de cadeia ramificada) 
            e glutamina podem ser usados ​para complementar sua dieta, mas eles não substituem 
            alimentos de verdade.
            
            9. Planejamento e Monitoramento:
            
            Mantenha um registro de suas refeições e monitore seu progresso. Isso pode ajudar 
            a ajustar sua dieta conforme necessário.
            
            10. Descanso e Recuperação:
            
            Lembre-se de que a recuperação adequada é tão importante quanto a dieta. Dê ao 
            seu corpo tempo para se recuperar entre os treinos.</pre>`;
            break;


        case "Perda de peso":
            workout = `<pre class="red-text">Plano de treino para perda de peso:


            Segunda-feira: Treinamento de Força

            1.Agachamento (3 séries de 12-15 repetições)
            2.Supino (3 séries de 12-15 repetições)
            3.Levantamento Terra (3 séries de 12-15 repetições)
            4.Pull-ups ou Pulldowns (3 séries de 12-15 repetições)
            5.Abdominais (3 séries de 15-20 repetições)
            
            Terça-feira: Cardiovascular

            1.Corrida ou esteira (30-45 minutos)
            2.Ciclismo ou bicicleta ergométrica (30-45 minutos)
            3.Treinamento intervalado de alta intensidade (HIIT) (10-15 minutos)
            
            Quarta-feira: Treinamento de Força

            1.Leg Press (3 séries de 12-15 repetições)
            2.Desenvolvimento de Ombros (3 séries de 12-15 repetições)
            3.Rosca direta (3 séries de 12-15 repetições)
            4.Tríceps Pulldown (3 séries de 12-15 repetições)
            5.Prancha (3 séries de 30-60 segundos)
            
            
            Quinta-feira: Cardiovascular

            1.Natação (30-45 minutos)
            2.Máquina de remo (30-45 minutos)
            3.Treinamento intervalado de alta intensidade (HIIT) (10-15 minutos)
            
            Sexta-feira: Treinamento de Força

            1.Lunges (3 séries de 12-15 repetições por perna)
            2.Pull-ups ou Pulldowns (3 séries de 12-15 repetições)
            3.Flexões (3 séries de 12-15 repetições)
            4.Rosca martelo (3 séries de 12-15 repetições)
            5.Prancha lateral (3 séries de 30-60 segundos por lado)
            
            Sábado: Cardiovascular e Flexibilidade

            1.Corrida ou esteira (30-45 minutos)
            2.Alongamento e yoga (20-30 minutos)
            
            Domingo: Descanso</pre>`;


            diet = `<pre class="blue-text">Dieta para perda de peso:
           
            - Café da Manhã:

            Opção 1: Omelete de claras de ovos com vegetais (espinafre, tomate, pimentão), 
            uma fatia de abacate e uma porção de aveia com frutas vermelhas.
            Opção 2: Iogurte grego com granola e frutas frescas (morangos, mirtilos ou framboesas).
            Lanche da Manhã:

            Um punhado de nozes ou amêndoas.
            Uma maçã ou uma pera.
            Almoço:

            Peito de frango grelhado com uma porção generosa de legumes cozidos no vapor 
            (brócolis, cenoura, couve-flor).
            Quinoa ou arroz integral como acompanhamento.
            Lanche da Tarde:

            Um shake de proteína com leite de amêndoa, proteína em pó, e uma banana.
            Cenouras baby ou aipo com hummus.
            Jantar:

            Salmão assado com aspargos grelhados e uma pequena porção de batata-doce.
            Uma salada de folhas verdes com um molho à base de azeite de oliva e limão.
            Lanche Noturno (opcional, se necessário):

            Um iogurte light ou uma porção de queijo cottage com algumas bagas.
            
            Dicas Gerais:

           1. Beba bastante água ao longo do dia para se manter hidratado.
           2. Evite alimentos processados, ricos em açúcares e gorduras saturadas.
           3. Mantenha o controle das porções para evitar o excesso de calorias.
           4. Coma com moderação e evite fazer grandes refeições à noite.
           5. Priorize alimentos ricos em fibras, como vegetais, frutas e grãos integrais.
           6. Considere a possibilidade de trabalhar com um nutricionista ou dietista para
            desenvolver um plano de alimentação personalizado.</pre>`;
            break;

        case "Saúde":
            workout = `<pre class="red-text">Plano de treino para manter uma boa saúde:
           
            Objetivo do Plano: Melhorar a saúde geral, aumentar a resistência, a força muscular 
            e a flexibilidade.

            Duração do Plano: Este plano é projetado para ser executado continuamente, com ajustes 
            à medida que você progride.
            
            Frequência: Recomenda-se realizar este treino de 3 a 5 vezes por semana, dependendo 
            da sua disponibilidade e nível de condicionamento físico.
            
            Aquecimento: Comece cada sessão de treinamento com 5-10 minutos de aquecimento
             cardiovascular leve, como caminhada rápida, bicicleta ergométrica ou pular corda.
            
            Treino de Força: Realize exercícios de treinamento de força para fortalecer 
            os principais grupos musculares. Você pode começar com 2-3 séries de 8-12 
            repetições para cada exercício.
            
            1.Agachamento: Trabalha as pernas e glúteos.
            2.Supino: Trabalha o peito, ombros e tríceps.
            3.Puxada na polia ou barra fixa: Trabalha as costas e bíceps.
            4.Desenvolvimento com halteres: Trabalha os ombros.
            5.Prancha abdominal: Fortalece o core (abdômen e lombar).
            6.Flexões de braço: Trabalha o peito, tríceps e ombros.
            
            
            Treino de Cardiovascular: Realize atividades cardiovasculares para melhorar
            a resistência cardiovascular. Isso pode incluir corrida, bicicleta, natação,
            esteira ou elíptico. Tente acumular pelo menos 150 minutos de atividade
            moderada por semana.
            
            Treino de Flexibilidade: Dedique 10-15 minutos a exercícios de alongamento no 
            final de cada treino ou em dias separados. Isso ajudará a melhorar a 
            flexibilidade e reduzir o risco de lesões.
            
            Descanso: Certifique-se de incluir dias de descanso para permitir a recuperação 
            adequada. Se você estiver treinando 5 vezes por semana, por exemplo, faça 2 dias
             de descanso ativo (como uma caminhada leve) e 2 dias completos de descanso.
            
            Nutrição: Lembre-se de manter uma dieta equilibrada, rica em alimentos nutritivos,
             e beba bastante água para apoiar seus esforços de treinamento.
            
            Progressão: À medida que você se torna mais forte e mais condicionado, aumente
             gradualmente a intensidade e o peso dos exercícios. Um personal trainer pode
              ajudá-lo a criar um plano de progressão adequado.
            
            Monitoramento: Acompanhe seu progresso ao longo do tempo para se manter motivado.
             Isso pode ser feito registrando suas atividades, pesos e medidas corporais.
             </pre>`;


            diet = `<pre class="blue-text">Dieta para manter a boa saúde:
            
            
            Frutas e Vegetais: Consuma uma variedade de frutas e vegetais diariamente.
             Eles são ricos em vitaminas, minerais, fibras e antioxidantes. Tente preencher
              metade do seu prato com frutas e vegetais em cada refeição.

            Grãos Integrais: Opte por grãos integrais em vez de grãos refinados. 
            Isso inclui alimentos como pão integral, arroz integral, massa integral 
            e aveia. Os grãos integrais fornecem fibras e nutrientes essenciais.
            
            Proteínas Magras: Inclua fontes de proteína magra em sua dieta, como peito 
            de frango, peixe, carne magra, ovos, tofu, legumes e feijões. A proteína é 
            importante para a reparação e crescimento dos tecidos.
            
            Laticínios com Baixo Teor de Gordura: Se você consome laticínios, escolha 
            opções com baixo teor de gordura ou alternativas à base de plantas, como leite 
            de amêndoa ou soja.
            
            Gorduras Saudáveis: Opte por gorduras saudáveis, como abacate, azeite de
             oliva, nozes e sementes. Evite gorduras saturadas e trans, encontradas em 
             alimentos processados e fast-food.
            
            Limitação de Açúcares e Alimentos Processados: Reduza o consumo de açúcares 
            adicionados, refrigerantes, doces e alimentos altamente processados. Eles 
            tendem a ser pobres em nutrientes e ricos em calorias vazias.
            
            Controle de Porções: Mantenha o controle das porções para evitar excessos. 
            Comer em pratos menores pode ajudar a controlar o tamanho das porções.
            
            Hidratação: Beba bastante água ao longo do dia para se manter hidratado. 
            Evite bebidas açucaradas e refrigerantes.
            
            Refeições Balanceadas: Tente equilibrar suas refeições incluindo uma fonte 
            de proteína, vegetais, grãos e uma pequena quantidade de gordura saudável.
            
            Variedade: Uma dieta variada ajuda a garantir que você obtenha todos os 
            nutrientes de que precisa. Experimente novos alimentos e receitas para 
            manter sua alimentação interessante.
            
            Reduza o Sal: Diminua a ingestão de sódio, evitando alimentos excessivamente
             salgados. Use ervas e especiarias para dar sabor à comida em vez de sal.
            
            Evite o Álcool em Excesso: Se você bebe álcool, faça-o com moderação. 
            Limite a ingestão de álcool a quantidades recomendadas.</pre>`;
            break;

        case "Fortalecimento":
            workout = `<pre class="red-text">Plano de treino para quem fortalecer os musculos:
                
                
             Dia 1: Treino de Peito e Tríceps

            Supino reto: 3 séries de 8-10 repetições
            Supino inclinado com halteres: 3 séries de 8-10 repetições
            Crucifixo: 3 séries de 10-12 repetições
            Tríceps testa com barra EZ: 3 séries de 8-10 repetições
            Tríceps corda no pulley: 3 séries de 10-12 repetições
            Dia 2: Treino de Costas e Bíceps

            Puxada na frente com barra: 3 séries de 8-10 repetições
            Pulldown com polia alta: 3 séries de 8-10 repetições
            Remada curvada com barra T: 3 séries de 10-12 repetições
            Rosca direta com barra EZ: 3 séries de 8-10 repetições
            Rosca martelo com halteres: 3 séries de 10-12 repetições
            Dia 3: Treino de Pernas

            Agachamento livre: 3 séries de 8-10 repetições
            Leg press: 3 séries de 10-12 repetições
            Extensora de pernas: 3 séries de 10-12 repetições
            Flexora de pernas: 3 séries de 10-12 repetições
            Panturrilha em pé: 4 séries de 12-15 repetições
            Dia 4: Treino de Ombros e Trapézio

            Desenvolvimento militar com barra: 3 séries de 8-10 repetições
            Elevação lateral com halteres: 3 séries de 10-12 repetições
            Elevação frontal com halteres: 3 séries de 10-12 repetições
            Encolhimento de ombros com barra: 4 séries de 10-12 repetições
            Dia 5: Treino de Pernas
            Repita o treino de pernas do Dia 3.

            Dia 6: Descanso ou Atividade de Baixa Intensidade (como caminhada)

            Dia 7: Descanso</pre>`;


            diet = `<pre class="blue-text">Dieta para fortalecer os musculo:
                
                
            Café da Manhã:

            Omelete com 3 ovos inteiros e vegetais (espinafre, cogumelos, tomate)
            Aveia cozida com banana e um punhado de nozes
            Uma fatia de pão integral
            Chá verde ou café preto
            Lanche da Manhã:

            Iogurte grego com frutas vermelhas e uma pitada de mel
            Almoço:

            Peito de frango grelhado ou peixe (salmão, tilápia, atum)
            Quinoa ou arroz integral
            Brócolis ou aspargos
            Uma salada verde com abacate e azeite de oliva
            Lanche da Tarde:

            Um punhado de amêndoas ou nozes
            Uma maçã ou outra fruta
            Pré-Treino:

            Um shake de proteína com água ou leite desnatado
            Uma banana ou uma fatia de pão integral com pasta de amendoim
            Pós-Treino:

            Outro shake de proteína ou uma refeição rica em proteínas, como frango
             grelhado com batata-doce e vegetais
            Jantar:

            Salmão ou outra fonte magra de proteína
            Brócolis, couve-flor ou espargos
            Quinoa ou arroz integral
            Lanche Noturno (opcional, se necessário):

            Um iogurte grego ou uma porção de queijo cottage com algumas frutas vermelhas
            Dicas Nutricionais:

            Mantenha-se hidratado ao longo do dia bebendo água regularmente.
            Priorize fontes magras de proteína, como peito de frango, peixe, carne 
            magra e produtos lácteos com baixo teor de gordura.
            Inclua uma variedade de vegetais em suas refeições para obter uma ampla 
            gama de nutrientes.Coma carboidratos complexos, como aveia, quinoa e arroz 
            integral, para fornecer energia sustentada.
            Consuma gorduras saudáveis, como abacate, nozes, sementes e azeite de oliva.
            Evite alimentos processados, ricos em açúcar e alimentos fritos.
            Ajuste as porções de acordo com suas necessidades calóricas e metas de 
            composição corporal.</pre>`;
            break;

        case "Condicionamento físico":
            workout = `<pre class="red-text">Plano de treino para quem quer manter condicionameto fisico:
                
                
            Semana 1-2: Preparação Inicial

            Dia 1: Treino de Corpo Inteiro

            Agachamentos (3 séries de 12-15 repetições)
            Supino (3 séries de 12-15 repetições)
            Pull-ups ou lat pulldowns (3 séries de 10-12 repetições)
            Prancha (3 séries de 30-45 segundos)
            Dia 2: Treino de Cardio

            Corrida, bicicleta ou elíptico (30 minutos, aumentando gradualmente a intensidade)
            Dia 3: Treino de Corpo Inteiro

            Levantamento Terra (3 séries de 10-12 repetições)
            Flexões (3 séries de 10-12 repetições)
            Rosca direta (3 séries de 12-15 repetições)
            Prancha (3 séries de 30-45 segundos)
            Dia 4: Descanso Ativo

            Caminhada leve ou ioga para a flexibilidade (30 minutos)
            Dia 5: Treino de Cardio

            Corrida, bicicleta ou elíptico (30 minutos, aumentando gradualmente a intensidade)
            Dia 6: Treino de Corpo Inteiro

            Agachamentos (3 séries de 12-15 repetições)
            Supino (3 séries de 12-15 repetições)
            Pull-ups ou lat pulldowns (3 séries de 10-12 repetições)
            Prancha (3 séries de 30-45 segundos)
            Dia 7: Descanso

            Semana 3-4: Intensificação

            Dia 1: Treino de Corpo Inteiro

            Agachamentos (4 séries de 10-12 repetições)
            Supino (4 séries de 10-12 repetições)
            Pull-ups ou lat pulldowns (4 séries de 8-10 repetições)
            Prancha (4 séries de 45-60 segundos)
            Dia 2: Treino de Cardio

            Corrida, bicicleta ou elíptico (40 minutos, aumentando gradualmente a intensidade)
            Dia 3: Treino de Corpo Inteiro

            Levantamento Terra (4 séries de 8-10 repetições)
            Flexões (4 séries de 8-10 repetições)
            Rosca direta (4 séries de 10-12 repetições)
            Prancha (4 séries de 45-60 segundos)
            Dia 4: Descanso Ativo

            Caminhada leve ou ioga para a flexibilidade (30-40 minutos)
            Dia 5: Treino de Cardio

            Corrida, bicicleta ou elíptico (40 minutos, aumentando gradualmente a intensidade)
            Dia 6: Treino de Corpo Inteiro

            Agachamentos (4 séries de 10-12 repetições)
            Supino (4 séries de 10-12 repetições)
            Pull-ups ou lat pulldowns (4 séries de 8-10 repetições)
            Prancha (4 séries de 45-60 segundos)
            Dia 7: Descanso </pre>`;


            diet = `<pre class="blue-text">Dieta para Condicionamento Fisico:
                
                
                1. Proteína:

            Inclua fontes de proteína magra em todas as refeições, como frango, 
            peixe, carne magra, ovos, tofu, leguminosas e laticínios com baixo teor
            de gordura.
            A proteína é essencial para a recuperação muscular e o crescimento.
            
            2. Carboidratos:

            Escolha carboidratos complexos, como grãos integrais, aveia, arroz integral,
            quinoa e batata-doce.
            Os carboidratos fornecem energia para os treinos e ajudam na recuperação.
            
            3. Gorduras saudáveis:

            Inclua fontes de gorduras saudáveis, como abacate, nozes, sementes, 
            azeite de oliva e peixes ricos em ômega-3 (salmão, sardinha).
            As gorduras saudáveis são importantes para a saúde geral e a
            função celular.
            
            4. Vegetais e frutas:

            Coma uma variedade de vegetais e frutas coloridos para obter uma ampla 
            gama de nutrientes e antioxidantes.
            Eles são ricos em vitaminas, minerais e fibras, que promovem a saúde e 
            a recuperação.
            
            5. Hidratação:

            Beba água suficiente ao longo do dia para se manter bem hidratado.
            Durante os treinos intensos, considere bebidas esportivas ou água com 
            eletrólitos para repor os nutrientes perdidos.
            
            6. Refeições equilibradas:

            Planeje refeições que incluam proteínas, carboidratos e gorduras em 
            quantidades adequadas.
            Coma a cada 3-4 horas para manter os níveis de energia estáveis.
            
            7. Porções adequadas:

            Controle o tamanho das porções para evitar excessos de calorias.
            Preste atenção às necessidades individuais de calorias com base no seu 
            nível de atividade e objetivos.
            
            8. Evite alimentos processados e açúcares adicionados:

            Reduza o consumo de alimentos ricos em açúcar, gorduras trans e alimentos 
            processados.
            Opte por lanches saudáveis, como iogurte grego, frutas, nozes e barras de 
            proteína de qualidade.
            
            9. Suplementação (opcional):

            Considere suplementos como proteína em pó, creatina, BCAAs (aminoácidos de cadeia ramificada) e multivitaminas, se necessário, após consultar um profissional de saúde.</pre>`;
            break;
        // Adicione mais casos para outras metas aqui.
    }

    document.getElementById("workout").innerHTML = `<h3>Plano de Treino:</h3>${workout}`;
    document.getElementById("diet").innerHTML = `<h3>Dieta:</h3>${diet}`;

    document.getElementById("workout-and-diet").style.display = "block"; 
}