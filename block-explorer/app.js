/**
 * Importing BlockExplorer API to search Block Data
 */
const be = require('blockexplorer');

/**
 *  Explore Block Data function
 * @param {*} index 
 * 
 * Start by requesting the hash then request the block and use console.log()
 * 
 */
function getBlock(index) {
	//add your code here
	const hash = be.blockIndex(index)
		.then(hash => be.block(JSON.parse(hash).blockHash))
		.then(block => {
			console.log(`block ${index}:  ${JSON.stringify(JSON.parse(block), undefined, 2)}`)
		})
		.catch(err => console.log('Error', err.message))
}

/**
 * Function to execute the `getBlock(index)` function
 * Nothing to implement here.
 */

(function theLoop(i) {
	setTimeout(function () {
		getBlock(i);
		i++;
		if (i < 3) theLoop(i);
	}, 3000);
})(0);