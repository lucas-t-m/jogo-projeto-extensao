export default class ResultScene extends Phaser.Scene {
  constructor() {
    super('ResultScene');
  }

  init(data) {
    this.score = data.score;
  }

  create() {
    this.add.text(300, 200, `Pontuação: ${this.score}`);

    const botao = this.add.text(350, 300, 'Voltar', { backgroundColor: '#f00' })
      .setInteractive();

    botao.on('pointerdown', () => {
      this.scene.start('MenuScene');
    });
  }
}