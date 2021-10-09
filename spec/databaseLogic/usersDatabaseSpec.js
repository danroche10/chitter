// need solution for addUser function altering the database size
describe('usersDatabase', () => {
  const usersDatabase = require('../../model/databaseLogic/usersDatabase');
  require('./databasehelpers');
  let userData;

  describe('#findByUsername', () => {
    beforeAll(async () => {
      userData = await usersDatabase.findByUsername('test');
    });

    it('returns array of correct length', () => {
      expect(userData.length).toEqual(1);
    });
    it('returns object with correct keys', () => {
      expect(Object.keys(userData[0])).toContain('id');
      expect(Object.keys(userData[0])).toContain('username');
      expect(Object.keys(userData[0])).toContain('password');
      expect(Object.keys(userData[0])).toContain('email');
    });

    it('returns correct values in object', () => {
      expect(userData[0].username).toEqual('test');
      expect(userData[0].id).toEqual(1);
      expect(userData[0].password).toEqual('test');
      expect(userData[0].email).toEqual('test@test');
    });
  });

  describe('#addUser', () => {
    it('returns array of length 1', async () => {
      setTimeout(() => {
        userData = usersDatabase.addUser(
          'new test user',
          'new-test-password',
          'newtestemail@test'
        );
        expect(userData.length).toEqual(1);
      }, 500);
    });
    it('returns object with correct keys', async () => {
      setTimeout(() => {
        userData = usersDatabase.addUser(
          'new test user',
          'new-test-password',
          'newtestemail@test'
        );
        expect(Object.keys(userData[0])).toContain('id');
        expect(Object.keys(userData[0])).toContain('username');
        expect(Object.keys(userData[0])).toContain('password');
        expect(Object.keys(userData[0])).toContain('email');
      }, 500);
    });

    it('returns correct values in object', async () => {
      setTimeout(() => {
        userData = usersDatabase.addUser(
          'new test user',
          'new-test-password',
          'newtestemail@test'
        );
        expect(userData[0].id).toEqual(1);
        expect(userData[0].username).toEqual('test');
        expect(userData[0].password).toEqual('test');
        expect(userData[0].email).toEqual('test@test');
      }, 500);
    });
  });
});
