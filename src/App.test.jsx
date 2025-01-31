import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";

describe("App Component", () => {
  it("Renderiza o título corretamente", () => {
    render(<App />);
    expect(screen.getByText(/Bem-vindo ao Mini Projeto S3/i)).toBeInTheDocument();
  });

  it("Renderiza a imagem corretamente", () => {
    render(<App />);
    const img = screen.getByAltText("Paisagem de montanha");
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("cloudinary.com");
  });
});
