import { IconBank } from "../Icons";

export const Account = ({ bank }) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="flex justify-between text-neutral-text items-center px-4">
      <div className="flex gap-2 items-center">
        <IconBank /> {bank.bank}
      </div>
      <div>
        <p className="font-bold">Saldo</p>
        <p>{formatter.format(bank.balance)}</p>
      </div>
    </div>
  );
};
