import React, { useState, useEffect } from 'react'


function WalletConnectButton() {
    const [walletAddress, setWallet] = useState("");
    // useEffect(async () => {
    //     const { address } = await getCurrentWalletConnected();
    //     setWallet(address);
    //     addWalletListener();
    //     }, []);
        const connectWallet = async () => {
            if (window.ethereum) {
                try {
                    const addressArray = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    const obj = {
                        address: addressArray[0],
                    };
                    return obj;
                } catch (err) {
                    return {
                        address: "",
                    };
                }
            } else {
                return {
                    address: "",
                };
            }
        };
    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setWallet(walletResponse.address);
    }
    
    // function addWalletListener() {
    //     if (window.ethereum) {
    //       window.ethereum.on("accountsChanged", (accounts) => {
    //         if (accounts.length > 0) {
    //           setWallet(accounts[0]);
    //         } else {
    //           setWallet("");
    //         }
    //       });
    //     } 
    //   }
    // const getCurrentWalletConnected = async () => {
    //     if (window.ethereum) {
    //       try {
    //         const addressArray = await window.ethereum.request({
    //           method: "eth_accounts",
    //         });
    //         if (addressArray.length > 0) {
    //           return {
    //             address: addressArray[0],
    //           };
    //         } else {
    //           return {
    //             address: "",
    //           };
    //         }
    //       } catch (err) {
    //         return {
    //           address: "",
    //         };
    //       }
    //     } else {
    //       return {
    //         address: "",
    //       };
    //     }
    //   };
    return (
        <div>
            <button onClick={connectWalletPressed}class="btn btn-outline-primary">
                {walletAddress.length > 0 ? ("Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                ) : (
                    <span>Connect Wallet</span>
                )}
            </button>
        </div>
    )
}

export default WalletConnectButton