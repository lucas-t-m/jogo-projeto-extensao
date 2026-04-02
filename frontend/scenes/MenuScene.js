
export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    this.add.text(300, 200, 'Jogo Educativo', { fontSize: '32px' });

    const botao = this.add.text(350, 300, 'Iniciar', { backgroundColor: '#0f0' })
      .setInteractive();

    botao.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}