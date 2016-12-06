/* eslint-env mocha, meteor */
/* global meteor, ddp, expect */

describe('polls', () => {
  const server = meteor({flavor: 'fiber'});
  const client = ddp(server, {flavor: 'fiber'});

  before(() => {
    server.execute(() => {

    });
  });

  describe('polls.create', () => {
    it('should do something');
  });

  describe('polls.edit', () => {
    it('should do something');
  });

  describe('polls.delete', () => {
    it('should do something');
  });
});
