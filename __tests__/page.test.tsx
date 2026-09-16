import { render } from "@testing-library/react";
import Home from "@/app/page";
import { navLinks } from "@/components/Navbar";

describe("page d'accueil", () => {
  it("rend toutes les sections", () => {
    const { container } = render(<Home />);
    for (const id of ["features", "colors", "specs", "order"]) {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
  });

  // Sur une page unique, une ancre de navigation qui ne correspond plus à
  // aucune section est un lien mort silencieux : rien ne casse, le clic ne
  // fait simplement rien. Ce test lie les deux listes.
  it("chaque lien de navigation pointe vers une section existante", () => {
    const { container } = render(<Home />);
    for (const { href, label } of navLinks) {
      expect(href.startsWith("#"), `${label} doit être une ancre`).toBe(true);
      expect(
        container.querySelector(href),
        `le lien « ${label} » pointe vers ${href}, qui n'existe pas`,
      ).not.toBeNull();
    }
  });

  it("expose un titre de niveau 1", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("h1")).not.toBeNull();
  });
});
