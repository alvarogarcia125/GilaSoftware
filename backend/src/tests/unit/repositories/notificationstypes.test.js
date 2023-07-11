const notificationtypes = require('../../../repositories/notificationtypes');

test('should return the list of notification types successfully', async () => {
  const result = await notificationtypes.list();
  expect(result.code).toBe(200);
});
