import { useCartStore } from "@/stores/cart-store"
import { useCheckoutStore } from "@/stores/checkout-store"

export const generateMessage = () => {
    const { name, address } = useCheckoutStore(state=>state)
    const { cart } = useCartStore(state=>state)

    let orderProducts = []
    for(let item of cart){
        orderProducts.push(`${item.quantity} X ${item.product.name}`)
    }

    return `**Dados do cleinte**
    Nome: ${name}
    Endereço: ${address.street}, ${address.number} (${address.complemente})
    ${address.district}, ${address.city}/${address.state}
    ----------------
    **Pedido**
    ${orderProducts.join("\n")}`;
}