/* tslint:disable no-invalid-this */
import * as assert from 'assert'

import Query from '../src'
import { QueriessJsonEntry } from './types'

import { zeros, privateToPublic, toBuffer } from 'flureejs-utils'

const queryFixtures: QueriessJsonEntry[] = require('./queries.json')

describe('[Query]: Basic functions', function() {
  const queries: Query[] = []
  it('should decode queries', function() {
    queryFixtures.slice(0, 3).forEach(function(query: any) {
      const pQ = new Query(query.raw)
      assert.equal('0x' + pQ.param.toString('hex'), query.raw[0])
      assert.equal('0x' + pQ.type.toString('hex'), query.raw[1])
      assert.equal('0x' + pQ.host.toString('hex'), query.raw[2])
      assert.equal('0x' + pQ.db.toString('hex'), query.raw[3])
      assert.equal('0x' + pQ.formattedDate.toString('hex'), query.raw[4])
      assert.equal('0x' + pQ.v.toString('hex'), query.raw[6])
      assert.equal('0x' + pQ.r.toString('hex'), query.raw[7])
      assert.equal('0x' + pQ.s.toString('hex'), query.raw[8])
      queries.push(pQ)
    })
  })

  it('should verify Signatures', function() {
    queries.forEach(function(query) {
      assert.equal(query.verifySignature(), true)
    })
  })

  it('should not verify Signatures', function() {
    queries.forEach(function(query) {
      query.s = zeros(32)
      assert.equal(query.verifySignature(), false)
    })
  })

  it('should give a string about not verifing Signatures', function() {
    queries.forEach(function(query) {
      assert.equal(query.validate(true).slice(0, 17), 'Invalid Signature')
    })
  })

  it('should validate', function() {
    queries.forEach(function(query) {
      assert.equal(query.validate(), false)
    })
  })

  it('should sign query', function() {
    queries.forEach(function(query, i) {
      if (queryFixtures[i].privateKey) {
        const privKey = new Buffer(queryFixtures[i].privateKey, 'hex')
        query.sign(privKey)
      }
    })
  })
  it("should get sender's AuthID after signing it", function() {
    queries.forEach(function(query, i) {
      if (queryFixtures[i].privateKey) {
        assert.equal(query.getSenderAuthID(), queryFixtures[i].sendersAuthID)
      }
    })
  })

  it("should get sender's public key after signing it", function() {
    queries.forEach(function(query, i) {
      if (queryFixtures[i].privateKey) {
        assert.equal(
          query.getSenderPublicKey().toString('hex'),
          privateToPublic(new Buffer(queryFixtures[i].privateKey, 'hex')).toString('hex'),
        )
      }
    })
  })

  it("should get sender's authID after signing it (second call should be cached)", function() {
    queries.forEach(function(query, i) {
      if (queryFixtures[i].privateKey) {
        assert.equal(query.getSenderAuthID(), queryFixtures[i].sendersAuthID)
        assert.equal(query.getSenderAuthID(), queryFixtures[i].sendersAuthID)
      }
    })
  })

  it('should verify signing it', function() {
    queries.forEach(function(query, i) {
      if (queryFixtures[i].privateKey) {
        assert.equal(query.verifySignature(), true)
      }
    })
  })

  it('should accept lesser r values', function() {
    const query = new Query()
    query.r = toBuffer('0x0005')
    assert.equal(query.r.toString('hex'), '05')
  })
})
