export const MoviemntItem = ({ item }) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const cor = item.value < 0 ? "text-secondary-expense" : "text-secondary-income"

  console.log(cor)

  return (
    <div className={`flex flex-row justify-between ${cor}`}>
      <div className="flex flex-col">
        <p>{item.description}</p>
        <p>{formatter.format(item.value)}</p>
      </div>
      <div className="text-neutral-text">
        {new Date(item.date).toLocaleDateString("pt-BR")}
      </div>
    </div>
  );
};
