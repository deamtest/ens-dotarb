# Deamtest ENS Namehash

A javascript library for generating Ethereum Name Service (ENS) namehashes per [spec](https://github.com/ethereum/EIPs/issues/137).

## Installation

```shell
yarn add @deamtest/ens-namehash
```
or 
```shell
npm install @deamtest/ens-namehash -S
```

## Usage

```javascript
const dotarb = require("@deamtest/ens-dotarb");
const domain = "leopawel.arb";
dotarb.getAddressFromEns(domain).then(address => {
    console.log(domain, address);
});
```

- typescript

```typescript
import {getAddressFromEns} from '@deamtest/ens-dotarb'

const domain = "leopawel.arb"
getAddressFromEns(domain).then(address=>{
    console.log(domain, address)
})
```