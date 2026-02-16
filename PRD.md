=============================================================================
DOCUMENTO DE REQUISITOS DO PRODUTO (PRD) - CHURRASCARIA BETA
=============================================================================

VERSÃO: 2.0 (Final)
DATA: 16 de Fevereiro de 2026
RESPONSÁVEL: Product Owner
STATUS: Pronto para Desenvolvimento

-----------------------------------------------------------------------------
1. VISÃO GERAL DO PRODUTO
-----------------------------------------------------------------------------
Desenvolvimento de um website de alta conversão para a Churrascaria Beta.
O site deve funcionar como a principal ferramenta de vendas (reservas) e
recrutamento da empresa, substituindo a dependência exclusiva das redes sociais.

FOCO PRINCIPAL:
1. Mobile-First (Otimizado para celulares).
2. Velocidade Extrema (Carregamento instantâneo).
3. "Food Porn" (Fotos grandes e atraentes para gerar desejo).

-----------------------------------------------------------------------------
2. STACK TECNOLÓGICA (DEFINIÇÃO TÉCNICA)
-----------------------------------------------------------------------------
- Framework: Next.js 16+ (App Router)
  * Utilizar Server Components para SEO.
  * Utilizar a diretiva "use cache" para performance.

- Estilização: Tailwind CSS
  * Uso de classes utilitárias.

- Imagens: Cloudinary
  * Entrega via CDN.
  * Formato automático (f_auto).
  * Recorte inteligente (gravity: auto) para focar nas carnes no mobile.

- Mapas: Google Maps Embed API.
- Hospedagem Sugerida: Vercel.

-----------------------------------------------------------------------------
3. IDENTIDADE VISUAL & CORES
-----------------------------------------------------------------------------
Baseado no logotipo (Touro, Losango Vermelho, Fundo Amarelo):

PALETA DE CORES (Configuração Tailwind):
- Brand Red (#991B1B): Cor Institucional (Cabeçalho, Rodapé, Títulos).
- Brand Gold (#F59E0B): Cor de AÇÃO (Botões de Reserva, Preços, Estrelas).
- Charcoal  (#1F2937): Cor do Texto (Leitura agradável).
- Cream     (#FDFBF7): Cor de Fundo do Site (Off-white suave).

TIPOGRAFIA:
- Títulos: Fonte robusta (ex: Oswald ou Montserrat).
- Corpo: Fonte legível (ex: Inter ou Lato).

-----------------------------------------------------------------------------
4. ESTRUTURA DE PÁGINAS E CONTEÚDO
-----------------------------------------------------------------------------

4.1. HOME (PÁGINA PRINCIPAL - FOCO EM VENDA)
--------------------------------------------
A. HERO SECTION (Topo):
   - Imagem de fundo: Carne sendo fatiada (alta qualidade).
   - Manchete: "O Melhor Rodízio da Região".
   - Botão Principal (GOLD): "RESERVAR MESA" (Link para WhatsApp).

B. RODÍZIO & PREÇOS:
   - Card 1: Almoço (Segunda a Sexta).
   - Card 2: Jantar e Finais de Semana.
   - Aviso importante: "Crianças até 5 anos não pagam".

C. PROVA SOCIAL:
   - Seção "O que dizem nossos clientes".
   - 3 a 5 depoimentos reais (extraídos do Google Maps) com 5 estrelas.

D. GALERIA:
   - Grade de fotos integrada ao Cloudinary (Carnes, Buffet, Sobremesas).

4.2. QUEM SOMOS (INSTITUCIONAL)
-------------------------------
- Breve história da Churrascaria.
- Foto da equipe e fachada.
- Valores: Tradição e Qualidade.

4.3. TRABALHE CONOSCO (ESTRATÉGICO)
-----------------------------------
Objetivo: Criar banco de talentos para alta rotatividade.
- Texto: "Faça parte da Família Beta".
- Formulário Simples:
  1. Nome.
  2. WhatsApp (Obrigatório).
  3. Cargo desejado (Garçom, Cozinha, Churrasqueiro).
  4. Resumo de experiência.

4.4. CONTATO (LOCALIZAÇÃO)
--------------------------
- Mapa do Google (Largura total no mobile).
- Endereço completo por extenso (Rua, Número, Bairro, CEP).
- Botões Fixos no Rodapé (Mobile):
  [Botão 1] Ir com Waze/Maps.
  [Botão 2] Ligar Agora.

-----------------------------------------------------------------------------
5. ESTRUTURA DE ARQUIVOS SUGERIDA (NEXT.JS)
-----------------------------------------------------------------------------
/src
  /app
    layout.tsx      (Navbar e Footer globais)
    page.tsx        (Home)
    /quem-somos
       page.tsx
    /trabalhe-conosco
       page.tsx
    /contato
       page.tsx
    global.css
  /components
    /ui             (Botões, Cards)
    /home           (Hero, TabelaPrecos, Depoimentos)
    /shared         (BotaoWhatsApp, ImagemCloudinary)
  /lib
    cloudinary.ts   (Configuração SDK)

-----------------------------------------------------------------------------
6. REQUISITOS FUNCIONAIS EXTRAS
-----------------------------------------------------------------------------
1. BOTÃO FLUTUANTE DO WHATSAPP:
   - Deve ficar fixo no canto inferior direito.
   - Link direto com mensagem pré-definida: "Olá, gostaria de reservar...".

2. OTIMIZAÇÃO DE IMAGEM:
   - Todas as fotos devem usar o componente CldImage do Cloudinary.
   - Garantir que o foco da imagem não corte a carne em telas pequenas.

3. SEO LOCAL (SCHEMA.ORG):
   - Implementar JSON-LD do tipo "Restaurant" com endereço e faixa de preço.

=============================================================================
FIM DO DOCUMENTO
=============================================================================