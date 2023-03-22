import test from 'tape';

import {getAddressFromEns} from '../src'
// Test results specified in original ENS Proposal:
// https://github.com/ethereum/EIPs/issues/137

test('empty name', (t) => {
	t.plan(1)
	const domain = "robin.arb"
    getAddressFromEns(domain).then(address=>{
		console.log(domain, address)
	})
    
})