// Setup libraries

const bitcoinMessage = require('bitcoinjs-message')


// Verify a Bitcoin message
const address = 'bc1qc4dejd8880r3txelpaw5yzqzxtl2h32sm50dkz'

const signature = 'HJLQlDWLyb1Ef8bQKEISzFbDAKctIlaqOpGbrk3YVtRsjmC61lpE5ErkPRUFtDKtx98vHFGUWlFhsh3DiW6N0rE'

const message = 'Udacity rocks!'

console.log(bitcoinMessage.verify(message, address, signature));