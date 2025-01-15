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
  quantity: number;  // This is stock quantity, i.e., how many units are available.
};

type CartItem = Product & {
  cartQuantity: number; // This tracks the quantity in the cart, separate from stock quantity.
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Retrieve cart data from localStorage when the component mounts
  useEffect(() => {
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

  // Increase the quantity of an item in the cart
  const increaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.cartQuantity < item.quantity) { // Ensure cart quantity doesn't exceed stock
        const updatedItem = { ...item, cartQuantity: item.cartQuantity + 1 };
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease the quantity of an item in the cart
  const decreaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.cartQuantity > 1) {
        const updatedItem = { ...item, cartQuantity: item.cartQuantity - 1 };
        return updatedItem;
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Add a product to the cart or increase the quantity if it already exists
  const addToCart = (product: Product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Check if the item already exists in the cart
    const existingItem = storedCart.find((item: CartItem) => item.id === product.id);

    if (existingItem) {
      // If the item exists, increase its cartQuantity by 1 (only if stock is available)
      if (existingItem.cartQuantity < product.quantity) {
        existingItem.cartQuantity += 1;
      } else {
        toast.error("Cannot add more. Out of stock.", {
          position: "top-center",
        });
        return;
      }
    } else {
      // Otherwise, add the item with cartQuantity set to 1
      storedCart.push({ ...product, cartQuantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(storedCart));
    setCartItems(storedCart);

    toast.success("Item added to cart", {
      position: "top-center",
    });
  };

  // Calculate the total price of the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price * item.cartQuantity;
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
              <div
                key={item.id}
                className="flex items-center justify-between border-b-2 pb-6 pt-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-xl">{item.title}</h2>
                    <p className="text-gray-500">{item.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="text-lg text-gray-600 px-3 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="mx-4 text-lg">{item.cartQuantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="text-lg text-gray-600 px-3 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      {item.cartQuantity} / {item.quantity} in stock
                    </p>
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
            <div className="text-gray-900">
              Total: ${calculateTotal().toFixed(2)}
            </div>
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
