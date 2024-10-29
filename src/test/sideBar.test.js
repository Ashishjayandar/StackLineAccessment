import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "../components/sideBar";

const mockProduct = {
  image: "test-image.jpg",
  title: "Test Product",
  subtitle: "Test Subtitle",
  tags: ["Tag1", "Tag2", "Tag3"],
};

describe("Sidebar Component", () => {
  test("renders Sidebar with product data", () => {
    render(<Sidebar product={mockProduct} />);

    expect(screen.getByAltText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    

    mockProduct.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  test("does not render when no product is provided", () => {
    const { container } = render(<Sidebar product={null} />);
    expect(container.firstChild).toBeNull();
  });

  test("renders horizontal dividers above and below tags", () => {
    render(<Sidebar product={mockProduct} />);

    const tagsContainer = screen.getByText("Tag1").parentElement;
    expect(tagsContainer.previousSibling).toBeInTheDocument();
    expect(tagsContainer.nextSibling).toBeInTheDocument();
  });
});
