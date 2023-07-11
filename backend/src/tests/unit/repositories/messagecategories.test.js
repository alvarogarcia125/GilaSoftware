const messagecategories = require('../../../repositories/messagecategories');

test('should return the list of message categories successfully', async () => {
  const result = await messagecategories.list();
  expect(result.code).toBe(200);
});
