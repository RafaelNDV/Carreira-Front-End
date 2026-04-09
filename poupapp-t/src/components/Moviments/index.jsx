import { IconCurrency, IconWallet } from "../Icons"
import { MoviemntItem } from "../MovimentItem"

export const Moviments = () => {

    const items = [
    {
      "description": "iFood",
      "value": -20,
      "date": "2024-10-01T00:00:00-03:00"
    },
    {
      "description": "Papelaria Mila",
      "value": -80,
      "date": "2024-10-03T00:00:00-03:00"
    },
    {
      "description": "Freela (2ª parte)",
      "value": 1000,
      "date": "2024-10-03T00:00:00-03:00"
    },
    {
      "description": "Magazine Luiza",
      "value": -300,
      "date": "2024-10-05T00:00:00-03:00"
    }
    ]

    return (
        <>
        <ul>
            {items.map((item, index) => {
                return (
                    <>
                        <li key={index}>
                            <MoviemntItem item={item}/>
                        </li>
                        <hr className="m-4 text-neutral-header" />
                    </>
                )
            })}
        </ul>

        <div>
            <button className="border-solid border-2 border-white flex items-center py-2 px-4 gap-2 rounded-4xl text-neutral-text m-auto cursor-pointer">
                <IconCurrency/> Adicionar transação
            </button>
        </div>
        </>
    )
}