import { useCheckoutStore } from "@/stores/checkout-store"
import { Button } from "../ui/button"
import Link from "next/link"
import { generateMessage } from "@/lib/generete-message"

export const StepFinish = () => {
    const { name } = useCheckoutStore(state => state)
    
    const message = generateMessage()
    const linkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}` //Foi usada uma váriavel de ambiente

    return(
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong>!</p>
            <p>Agora envie seu pedido ao nosso whatsapp para concluir. Nosso atendente irá te guiar sobre o acompanhamento do pedido.</p>
            <Button>
                <Link target="_blank" href={linkZap}>Enviar pata o WhatsApp</Link>
            </Button>
        </div>
    )
}