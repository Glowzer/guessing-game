class GuessingGame {
    constructor() {
      this._max = 0;
      this._min = 0;
    }

    setRange(min, max) {
      this._max = max;
      this._min = min;
    }

    guess() {
      return Math.ceil((this._max + this._min) / 2);
    }

    lower() {
      this._max = Math.ceil((this._max + this._min) / 2);
    }

    greater() {
      this._min = Math.ceil((this._max + this._min) / 2);
    }
}

module.exports = GuessingGame;
