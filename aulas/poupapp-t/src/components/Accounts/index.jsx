import { IconWallet } from "../Icons";
import { Account } from "../Account"

export const Accounts = () => {
    const banks = [
    { bank: "Anybank", balance: 1200 },
    { bank: "Bytebank", balance: 800 },
    { bank: "Switch Bank", balance: 1800 },
    { bank: "Switch Bank", balance: 1800 },
    { bank: "Switch Bank", balance: 1800 },
    { bank: "Switch Bank", balance: 1800 },
  ];
  return (
    <>
        <ul>
            {banks.map((bank) => {
                return (
                    <>
                        <li>
                            <Account bank={bank}/>
                        </li>
                        <hr className="m-4 text-neutral-header"/>
                    </>
                )
            })}
        </ul>

        <div>
            <button className="border-solid border-2 border-white flex items-center py-2 px-4 gap-2 rounded-4xl text-neutral-text m-auto cursor-pointer">
                <IconWallet/> Adicionar conta
            </button>
        </div>
  </>
  )
}