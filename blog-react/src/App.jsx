import React from "react";

// =============================
// Componentes reutilizáveis
// =============================
function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

function Navigation({ links }) {
  return (
    <nav>
      <ul>
        {links.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Article({ title, author, date, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>
        Por <strong>{author}</strong> · {new Date(date).toLocaleDateString()}
      </p>
      {content.split("\n\n").map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </article>
  );
}

function Sidebar({ related }) {
  return (
    <aside>
      <h3>Posts relacionados</h3>
      <ul>
        {related.map((post) => (
          <li key={post.id}>
            <a href={post.href}>{post.title}</a> – {post.author}
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Footer({ copyright }) {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} {copyright}. Todos os direitos reservados.
      </p>
    </footer>
  );
}

// =============================
// Componente principal <App>
// =============================
export default function App() {
  // Dados do post
  const post = {
    title: "Como componentizar uma página de Blog com React",
    author: "Marcus Zanol Penso Vanso",
    date: "2025-09-16",
    content:
      "Nesta aula, refatoramos a estrutura HTML do blog para uma aplicação React.\n\n" +
      "Dividimos a interface em componentes reutilizáveis (Header, Navigation, Article, Sidebar e Footer) e utilizamos props para passar dados dinamicamente ao componente Article.\n\n" +
      "Com essa abordagem, ganhamos flexibilidade para reutilizar componentes e manter o código organizado.",
  };

  const links = [
    { href: "#home", label: "Início" },
    { href: "#posts", label: "Posts" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  const related = [
    {
      id: 1,
      title: "Entendendo JSX e o Virtual DOM",
      author: "Equipe do Blog",
      href: "#jsx",
    },
    {
      id: 2,
      title: "Props vs State: quando usar cada um?",
      author: "Equipe do Blog",
      href: "#props-state",
    },
    {
      id: 3,
      title: "Estilizando componentes em React",
      author: "Equipe do Blog",
      href: "#css",
    },
  ];

  return (
    <div>
      <Header title="Meu Blog" />
      <Navigation links={links} />

      <main>
        <div>
          <Article
            title={post.title}
            author={post.author}
            date={post.date}
            content={post.content}
          />
        </div>
        <div>
          <Sidebar related={related} />
        </div>
      </main>

      <Footer copyright="Meu Blog" />
    </div>
  );
}
