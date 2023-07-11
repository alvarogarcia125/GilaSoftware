const logs = require('./../../../repositories/logs');

test('should return the list of logs successfully', async () => {
  const result = await logs.list();
  expect(result.code).toBe(200);
});
