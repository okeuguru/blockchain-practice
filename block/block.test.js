const Block = require('./block')

const block = new Block.Block("Test Block");

describe('Block', () => {
    let id, nonce
    beforeEach(() => {
        id = block.id
        nonce = block.nonce

    })

    it('Set the `Block.id` to match the input id', () => {
        expect(id).toEqual(0)
    })

    it('sets the object `block.hash` to make sure it matches', () => {
        expect(nonce).toEqual(144444)

    })
})