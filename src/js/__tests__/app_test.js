import GameSavingLoader from '../app';

test('Преобразование данных', () => {
  expect(GameSavingLoader.load().then((s) => console.log(s))).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
  });
});
