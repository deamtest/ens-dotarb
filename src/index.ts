
import { ethers } from "ethers";
import namehash from '@deamtest/ens-namehash'

const config = {
    contract: "0x0E74FcED5185f686132baa6203506d373E826c41",
    rpc: "https://goerli-rollup.arbitrum.io/rpc"
}

export const provider = new ethers.providers.JsonRpcProvider(config.rpc);
const deamNameWrapper = new ethers.Contract(config.contract, ["function getDomainInfo(string,bytes32,bool) public view returns(address[],uint, bytes, string[][], uint[], string[])"], provider);

const initialize = (rpc: string, contract: string) => {
	config.rpc = rpc
	config.contract = contract
}
export const getAddressFromEns = async (domain: string) => {
    const p = domain.indexOf('.');
    const label = domain.slice(0, p);
    const isSecondLevel = domain.slice(p + 1).indexOf('.')===-1;
    // const _labelhash = namehash.keccak256(label)
    const _domainhash = namehash.hash(domain)
    const d = await deamNameWrapper.getDomainInfo(label, _domainhash, isSecondLevel);
    return d[0][0]
}

export default initialize