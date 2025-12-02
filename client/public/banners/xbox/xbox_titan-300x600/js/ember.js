class Ember {
  emberBlobs = [];
  embers;

  constructor(colors, app, pixelate = false) {
    this.embers = new PIXI.Container();

    if (pixelate) {
      this.embers.filters = [new PIXI.filters.PixelateFilter()];
    }

    colors.map((color) => {
      var circle = new PIXI.Graphics();
      circle.lineStyle(0);
      // circle.lineStyle(PIXI.LINE_CAP.BUTT);
      circle.beginFill(color, 1);
      // circle.drawCircle(0, 0, 3);
  		circle.drawRect(0, 0, 10, 2);
      circle.endFill();

      this.emberBlobs.push(app.renderer.generateTexture(circle));
    });

    const emberTimer = setInterval(() => {
      this.addEmber();
    }, 0);

    setTimeout(() => {
      clearInterval(emberTimer);
    }, 1500);
  }

  makeBlob() {
    let texture = this.emberBlobs[Math.floor(Math.random() * this.emberBlobs.length)];
    let blob = new PIXI.Sprite(texture);
/*    blob.anchor.set(0.8);
    let scaleScale = Math.random();
    blob.scale.set(0.5 * scaleScale, 0.07 * scaleScale);*/
    blob.anchor.set(0.5);
    let scaleScale = Math.random();
    blob.scale.set(0.6 * scaleScale, .6 * scaleScale);
    blob.rotation = Math.random() * Math.PI * 3;
    return blob;
  }

  addEmber() {
    let time = 8 + this.time * (4 * Math.random());
    let blob = this.makeBlob();
    this.embers.addChild(blob);
    let embersMotionPath = [
      {
        x: (Math.random() * 300),
        y: -200
      },
      {
        x: Math.random() * 300 - 200,
        y: -400 + Math.random() * -420
      },
      {
        x: Math.random() * 300 - 200,
        y: -400 + (Math.random() * -250)
      },
      {
        x: Math.random() * 300 - 200,
        y: -420 + (Math.random() * -250)
      },
      {
        x: Math.random() * 300 - 150,
        y: -600 + (Math.random() * -500)
      },
      {
        x: (Math.random() * 200) - 70,
        y: -700 + (Math.random() * -250)
      }
    ];

    gsap.to(blob, {
      duration: time / 1.5,
      ease: "power1.out",
      alpha: 0.2,
      rotation: Math.PI * 2 * Math.random()
    });
    gsap.to(blob.position, {
      duration: time,
      ease: "power1.out",
      motionPath: { path: embersMotionPath },
      onComplete: () => {
        this.embers.removeChild(blob);
        blob = null;
      },
    });
  }

  get time() {
    return 1 + Math.random() * 0.5;
  }
}

class EmberStage {
  app;
  stage;
  ember;

  constructor(canvas, pixelate = false, background = false) {
    this.app = new PIXI.Application(bannerSize.width, bannerSize.height, {
      view: canvas,
      transparent: true,
      antialias: true,
    });
    this.stage = new PIXI.Container();

    this.add(this.stage, this.app.stage);

    // this.ember = new Ember([0xff0000, 0xff7070, 0xff5050], this.app, pixelate);
    this.ember = new Ember([0x480b00, 0x8f4619, 0x831313], this.app, pixelate);
    this.add(this.ember.embers);

    this.onResize();
  }

  onResize = function () {
    this.app.renderer.resize(bannerSize.width, bannerSize.height);
    this.stage.position.x = 25 + Math.random() * 100;
    this.stage.position.y = 640;
  };

  add = function (element, container = this.stage) {
    container.addChild(element);
  };

  remove = function (element, container = this.stage) {
    container.removeChild(element);
  };

  reset = function () {
    this.stage.removeChildren();
    // this.ember = new Ember([0xff0000, 0xff7070, 0xff5050], this.app, pixelate);
    this.ember = new Ember([0x480b00, 0x8f4619, 0x831313], this.app, pixelate);
    this.add(this.ember.embers);
  }
}
