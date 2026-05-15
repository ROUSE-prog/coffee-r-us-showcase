import React from "react";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

beforeEach(() => {
  localStorage.clear();
});

function renderApp() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

describe("Coffee R Us App", () => {
  it("renders the home page", () => {
    renderApp();

    expect(screen.getByText(/Coffee R Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Premium Roasted Coffee/i)).toBeInTheDocument();
  });

  it("navigates to the shop page", async () => {
    const user = userEvent.setup();

    renderApp();

    await user.click(screen.getByRole("link", { name: /shop/i }));

    expect(screen.getByRole("heading", { name: /Shop Coffee/i })).toBeInTheDocument();
    expect(screen.getByText(/Vanilla Bean/i)).toBeInTheDocument();
  });

  it("filters coffees using the search input", async () => {
    const user = userEvent.setup();

    renderApp();

    await user.click(screen.getByRole("link", { name: /shop/i }));
    await user.type(screen.getByPlaceholderText(/search coffee/i), "House");

    expect(screen.getByText(/House Blend/i)).toBeInTheDocument();
    expect(screen.queryByText(/Vanilla Bean/i)).not.toBeInTheDocument();
  });

  it("shows an empty state when no coffees match search", async () => {
    const user = userEvent.setup();

    renderApp();

    await user.click(screen.getByRole("link", { name: /shop/i }));
    await user.type(screen.getByPlaceholderText(/search coffee/i), "xyz");

    expect(screen.getByText(/No coffees found/i)).toBeInTheDocument();
  });

  it("adds a coffee to the cart", async () => {
    const user = userEvent.setup();

    renderApp();

    await user.click(screen.getByRole("link", { name: /shop/i }));
    await user.click(screen.getAllByRole("button", { name: /add to cart/i })[0]);

    expect(screen.getByRole("link", { name: /Cart \(1\)/i })).toBeInTheDocument();
  });

  it("removes a coffee from the cart", async () => {
    const user = userEvent.setup();

    renderApp();

    await user.click(screen.getByRole("link", { name: /shop/i }));
    await user.click(screen.getAllByRole("button", { name: /add to cart/i })[0]);

    await user.click(screen.getByRole("link", { name: /cart/i }));
    await user.click(screen.getByRole("button", { name: /remove from cart/i }));

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });

  it("adds a new coffee through the admin form", async () => {
    const user = userEvent.setup();

    renderApp();

    await user.click(screen.getByRole("link", { name: /admin portal/i }));

    await user.type(screen.getByPlaceholderText(/coffee name/i), "Cinnamon Cloud");
    await user.type(screen.getByPlaceholderText(/description/i), "Sweet warm roast");
    await user.type(screen.getByPlaceholderText(/origin/i), "Mexico");
    await user.type(screen.getByPlaceholderText(/price/i), "16");
    await user.type(
      screen.getByPlaceholderText(/image url/i),
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    );

    await user.click(screen.getByRole("button", { name: /add coffee/i }));

    await user.click(screen.getByRole("link", { name: /shop/i }));

    expect(screen.getByText(/Cinnamon Cloud/i)).toBeInTheDocument();
  });

  it("removes a product from the shop", async () => {
    const user = userEvent.setup();

    renderApp();

    await user.click(screen.getByRole("link", { name: /shop/i }));

    expect(screen.getByText(/Vanilla Bean/i)).toBeInTheDocument();

    await user.click(screen.getAllByRole("button", { name: /remove/i })[0]);

    expect(screen.queryByText(/Vanilla Bean/i)).not.toBeInTheDocument();
  });
});