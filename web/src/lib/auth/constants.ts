import {base, baseSepolia, mainnet, optimism} from 'viem/chains';
import type {ChainsMetadata} from './types';
import {Chains} from './types';

/**
 *
 */
export const chainsMetadata: ChainsMetadata = {
  [Chains.ETH]: mainnet,
  [Chains.OP]: optimism,
  [Chains.BASE_SEPOLIA]: baseSepolia,
  [Chains.BASE]: base
};
