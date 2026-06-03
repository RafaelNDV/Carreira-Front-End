import { IconSavings } from "../Icons"
import { ProgressBar } from "../ProgressBar"

export const Savings = () => {
    return (
        <div className="flex flex-col gap-10">
            <p className="text-secondary-income flex gap-2 itmes-center justify-center text-xl leading-[125%]">
            <IconSavings/> Economizar
            </p>
            <ProgressBar percent={38}/>
        </div>
    )
}