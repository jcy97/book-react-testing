import { render } from "@testing-library/react";
import { CartProvider } from "./contexts/CartContext";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: CartProvider, ...options });

export * from "@testing-library/react";

export { renderWithContext as render };
