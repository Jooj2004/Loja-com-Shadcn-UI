"use client"

import { RocketIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Separator } from "../ui/separator"
import { useCartStore } from "@/stores/cart-store"
import { CartItem } from "./item"
import { useState } from "react"
import { CheckoutDialog } from "../checkout/dialog"

export const CartSidebar = () => {
    const [checkoutOpen, setCheckOutOpen ] = useState(false)

    // zustand
    const { cart } = useCartStore(state => state)

    let subtotal = 0 
    for(let item of cart) {
        subtotal += item.quantity * item.product.price
    }

/* O Trigger é uma área clicavél e o botão também é. Isso gera um conflito. Então é necessário colocar o asChild para anular a área clicavél do Trigger e deixar só a do button mas com a mesma funcionalidade */
    return(
        <Sheet >
            <SheetTrigger asChild>
                <Button className="relative">
                    <RocketIcon className="mr-2"/>
                    <p>Carrinho</p>
                    {cart.length > 0 &&
                        <div className="size-3 absolute bg-red-600 rounded-full -right-1 -top-1"></div>
                    }
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col gap-5 my-3">
                    {cart.map(item => (
                        <CartItem key={item.product.id} item={item}/>
                    ))}
                </div>

                <Separator className="my-4"/>

                <div className="flex justify-between items-center text-xs">
                    <div>Subtotal: </div>
                    <div>R$ {subtotal.toFixed(2)}</div>
                </div>

                <Separator className="my-4"/>

                <div className="text-center">
                    <Button 
                        onClick={() => setCheckOutOpen(true)}
                        disabled={cart.length === 0}
                    >Finalizar Compra</Button>
                </div>

                <CheckoutDialog 
                    open={checkoutOpen}
                    onOpenChange={setCheckOutOpen}
                />

            </SheetContent>
        </Sheet>
    )
}