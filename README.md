<h1 align="center">Cardápio New Khoder Lounge - mini programa para os garçons</h1>

O cardápio do New Khoder Lounge é feito de forma digital, onde o cliente aponta a camera do seu celular à um QRcode e tem acesso ao cárdpaio, onde ele chama um garçon ou se direciona à um caixa para efetuar o pedido. O garçom precisa pegar o código do cartão de consumação do cliente e lançar o produto dentro dele através de um tablet. Porém, o lançamento desse produto é feita por códigos, não tendo a possibilidade de ser lançada pelo nome. Por se tratar de muitos produtos, os garçons não conseguem decorar todos, os obrigando a ter um papel enorme com todos os produtos anotados com o código do lado, que não era prático, enchiam os bolsos de papeis e era facilmente destruidos se molhassem (e não era dificil acontecer).

O sistema do New khoder Lounge, que se chama Nyte, não disponibiliza esses códigos no sistema para os garçons. É preciso abrir a central do sistema e os produtos ficam empilhados de forma numérica, nao aceitando uma busca pelo nome. Então o atendimento era muitas vezes dificil, lento e não funcional. 

Eu, que trabalho no caixa e responsável por deixar o sistema funcionando, as vezes costumava lançar produtos para clientes  no caixa quando o estabelecimento estava muito lotado. E mesmo eu tendo a planilha abrindo na central, era dificil e trabalhoso, já que eu tinha que procurar aba por aba o produto específicom onde as vezes uma cerveja long Neck estava em um código muito diferente dos padrões das demais. 

Aplicando meus novos conhecimentos de Desenvolvedor, decidi facilitar minha vida: Criei um programa com todos os produtos agrupados por sua tipologia em tabelas, onde tinham seu código de produto e preço ao lado (não aguentava mais ficar abrindo no QRcode o cardapio para verificar o preço).

<h3>Primeira versão do projeto</h3>

![versaoantiga](https://user-images.githubusercontent.com/86988795/178396261-b71474ec-6702-4dd3-9a24-8263f98b8f3d.png)


A primeira versão do projeto era bem simples e não foi usado nenhuma boa prática. O meu código JavaScript ficou longo pois não entendia muito bem sobre lógica de programação, porém, ele ficou funcional. E me ajudou <strong>muito</strong> no meu trabalho. 

Os garçons perceberam o que eu tinha feito e pediram para criar algo para eles também. Então, decidi colocar o projeto no GIT HUB e assim, eles teriam o acesso ao cardápio digital para saberem o nome do produto com o código de forma prática.
Além de facilitar a agilidade do atendimento, a rotatividade melhor, pois eles conseguem atender mais pessoas, aumentando o número de vendas

<h3>Nova versão do projeto</h3>

![versaoatual](https://user-images.githubusercontent.com/86988795/178396095-91a40c5d-924a-4bb6-86d2-b96ab83cfb10.png)

Estudando mais, decidi melhorar o programa em base de feedbacks.
Nessa versão, acrescentei uma barra de pesquisa utilizando Reggex no Javascript.
Deixei o código Javascript mais fácil para manutenção e a responsividade melhor para cada tamanho de tela. 
Criei uma calculadora para facilitar os calculos de fechamento de combo. Afinal, os garçons tinham que minimizar tudo e abrir uma calculadora para facilitar o calculo. Agora, a calculadora já está no próprio programa.

![videocalc](https://user-images.githubusercontent.com/86988795/178400786-634b81be-4d71-44f9-9b32-67d458faedae.gif)




