Meu primeiro projeto compartilhado - Painel de Filmes
Baseado na Imersão Dev 7 da Alura realizada na semana entre 13 e 17 de Novembro de 2023

O projeto base da Imersão era criar um front-end que aceitasse um link para um pôster e um nome de filme e os mostrava na tela em formato de painel. No final algumas propostas de melhorias foram indicadas, como por exemplo clicar no pôster e acessar o trailer do filme. 

Minha modificação foi além de algumas alterações visuais implementar um mecanismo dinâmico de incorporação de trailer. Ao invés de implementar uma terceira caixa de preenchimento para receber o link do trailer, ele faz um web scraping bem simnples do youtube e incorpora diretamente o trailer como um link no pôster a partir da string que o usuário insere como nome do pôster. Isso foi feito com a criação de um simples servidor node.js que recebe uma requisição desse front-end, realiza as funções de web scraping e devolve a url do link. Então sim, para a aplicação funcionar o usuário precisa primeiro levantar o servidor node via linha de comando por exemplo.

Não há verificação se o nome e o pôster correspondem pois a intenção futura é implementar um mecanismo dinâmico também para os pôsteres, mas o web scraping se mostrou infrutífero para lidar com a caixa de busca. A solução de usar a própria API do Google está em estudo. Da mesma forma não se considerou fazer a hospedagem desse servidor em qualquer tipo de serviço propício pois esse código existe para propósitos educacionais e pretende manter os custos ao mínimo. É reconhecida a necessidade de modificar a lógica de implementação do servidor e da chamada a este pela interface numa situação de mundo real.

Também não há infelizmente no momento quaisquer capacidades de salvar o estado do painel para utilização futura. Este diferente dos outros não é um exercício com barreiras significativas para a sua execução, e está na lista para ser implementado no futuro.

Quaisquer dúvidas, conselhos ou comentários, entrar em contato via os meios disponibilizados pela plataforma.

Muito obrigado por sua atenção!