// to treat this a module we need to add empty export
export {}

declare global {
  interface Window {
    ethereum: any;
    web3: any;
    keplr: any;
  }
}
