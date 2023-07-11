const users = require('../../../repositories/users');

test('should return the list of users successfully', async () => {
  const result = await users.list();
  expect(result.code).toBe(200);
});
