import GameSavingLoader from '../app';
import json from '../parser';
import read from '../reader';

// jest.setTimeout(5000);

// test('Преобразование данных', (done) => {
//   expect(GameSavingLoader.load()).toEqual({
//     id: 9,
//     created: 1546git300800,
//     userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
//   });
//   done();
// });

// test('Преобразование данных',
//   GameSavingLoader.load((data) => {
//     expect(data).toEqual({
//       id: 9,
//       created: 1546300800,
//       userInfo:
//         {
//           id: 1, name: 'Hitman', level: 10, points: 2000,
//         },
//     });
//     done();
//   });
// );

test('Преобразование данных', () => {
  // expect.assertions(1);
  expect(GameSavingLoader.load()).resolves.toEqual({
    id: 9,
    created: 1546300800,
    userInfo:
      {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
  });
});


test('Преобразование данных', () => {
  class GameSavingLoaderTest {
    static load() {
      const value = read().then((data) => json(data));
      return value;
    }
  }
  expect(GameSavingLoaderTest.load()).resolves.toEqual({
    id: 9,
    created: 1546300800,
    userInfo:
      {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
  });
});

test('Преобразование данных', () => {
  class GameSavingLoaderTest {
    static load() {
      const value = read().then((data) => {
        json(data);
        throw new Error();
      }).then((data) => JSON.parse(data)).catch((err) => err);
      return value;
    }
  }
  expect(GameSavingLoaderTest.load()).rejects.toTHrowError(new Error());
});
