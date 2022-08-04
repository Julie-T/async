import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    const value = read()
      .then((data) => json(data))
      .then((data) => JSON.parse(data)).catch((err) => err);
    return value;
  }
}

GameSavingLoader.load().then((s) => console.log(s));
