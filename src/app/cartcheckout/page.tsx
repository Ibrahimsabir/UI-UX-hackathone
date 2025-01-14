"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
  priceWas: string;
  rating: number;
  quantity: number
};
const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    // Retrieve cart data from localStorage when component mounts
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  // Remove an item from the cart
  const removeItemFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item removed from cart", {
      position: "top-center",
    });
  };

  // Update the quantity of an item in the cart
  const updateQuantity = (id: number, action: "increase" | "decrease") => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const updatedItem = { ...item };
        updatedItem.quantity = action === "increase"
          ? updatedItem.quantity + 1
          : updatedItem.quantity > 1
          ? updatedItem.quantity - 1
          : updatedItem.quantity;
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="min-h-screen py-12 px-6 sm:px-12 lg:px-20">
      <Toaster />
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6">Your Cart</h1>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="text-center text-xl">Your cart is empty</div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b-2 pb-6 pt-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl">{item.title}</h2>
                    <p className="text-gray-500">{item.price}</p>
                    {/* Quantity Selector */}
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, "decrease")}
                        className="text-lg text-gray-600 px-3 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="mx-4 text-lg">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, "increase")}
                        className="text-lg text-gray-600 px-3 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <AiOutlineDelete className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Total Price and Checkout */}
        {cartItems.length > 0 && (
          <div className="mt-8 flex justify-between items-center text-lg font-semibold">
            <div className="text-gray-900">Total: ${calculateTotal().toFixed(2)}</div>
            <Link href="/checkout">
              <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
