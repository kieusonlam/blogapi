const assert = require('assert');
const app = require('../../src/app');

describe('\'postTag\' service', () => {
  it('registered the service', () => {
    const service = app.service('postTag');

    assert.ok(service, 'Registered the service');
  });
});
