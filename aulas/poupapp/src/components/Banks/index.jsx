import { IconWallet } from "../Icons";
import { Button } from "../Button";
import { Bank } from "../Bank";

import styles from "./banks.module.css"

export const Banks = () => {
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
      <ul className={styles.list}>
        {banks.map((bank, index) => {
          return (
            <li key={index}>
              <Bank bank={bank} />
            </li>
          );
        })}
      </ul>

      <div className={styles.actions}>
        <Button>
          <IconWallet /> Adicionar conta
        </Button>
      </div>
    </>
  );
};
