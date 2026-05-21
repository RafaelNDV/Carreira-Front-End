import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Menubar } from "radix-ui";
import "./styles.css";

const categorias = [
  {
    id: 1,
    titulo: "PROGRAMAÇÃO",
    subcategorias: [
      "Lógica",
      "Java",
      ".NET",
      "PHP",
      "Games",
      "OO",
      "Funcional",
      "Python",
      "Outros",
    ],
  },
  {
    id: 2,
    titulo: "FRONT-END",
    subcategorias: ["HTML + CSS", "JavaScript"],
  },
  {
    id: 3,
    titulo: "MOBILE",
    subcategorias: ["iOS", "Android", "Multiplataforma"],
  },
  {
    id: 4,
    titulo: "INFRAESTRUTURA",
    subcategorias: ["WEB", "DADOS"],
  },
  {
    id: 5,
    titulo: "BUSINESS",
    subcategorias: ["Startups", "Marketing Digital", "Gestão", "Agile"],
  },
];

const MenuBarDemo = () => {

  return (
    <Menubar.Root className="MenubarRoot">
      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger">CATEGORIAS</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="MenubarContent"
            align="start"
            sideOffset={5}
          >
            {categorias.map((categoria) => (
              <Menubar.Sub key={categoria.id}>
                <Menubar.SubTrigger className="MenubarSubTrigger">
                  {categoria.titulo}
                  <ChevronRightIcon />
                </Menubar.SubTrigger>
                <Menubar.Portal>
                  <Menubar.SubContent
                    className="MenubarSubContent"
                    alignOffset={-3}
                  >
                    {categoria.subcategorias.map((subcategoria) => (
                      <Menubar.Item
                        className="MenubarItem"
                        key={`${categoria.id}-${subcategoria}`}
                      >
                        {subcategoria}
                      </Menubar.Item>
                    ))}
                  </Menubar.SubContent>
                </Menubar.Portal>
              </Menubar.Sub>
            ))}
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};
export default MenuBarDemo;