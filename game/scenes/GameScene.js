export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.pontuacao = 0;

    this.pergunta = this.add.text(100, 100, 'Quanto é 2 + 2?');

    const opcao1 = this.criarOpcao(100, 200, '3', false);
    const opcao2 = this.criarOpcao(100, 250, '4', true);
  }

  criarOpcao(x, y, texto, correta) {
    const opcao = this.add.text(x, y, texto, { backgroundColor: '#ccc' })
      .setInteractive();

    opcao.on('pointerdown', () => {
      if (correta) {
        this.pontuacao += 10;
      }
      this.scene.start('ResultScene', { score: this.pontuacao });
    });

    return opcao;
  }
}