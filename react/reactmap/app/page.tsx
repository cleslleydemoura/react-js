export default function Home() {

  const produtos = [
    { id: 1, nome: "Notebook", preco: 2500 },
    { id: 2, nome: "Smartphone", preco: 1500 },
    { id: 3, nome: "Tablet", preco: 1200 }
  ];

  const cidades = [
    { id: 4, nome: "São Paulo", lugar: "Centro"},
    { id: 5, nome: "Rio de Janeiro", lugar: "Ipanema"},
    { id: 6, nome: "Brasília", lugar: "Plano Piloto"},
  ]
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-emerald-950">
      <div className="font-arial">
      {produtos.map((item, idx) => (
        <div
          key={idx} // identifica cada item do array
        >
        {item.nome}{", "}{item.preco}
        </div>
      ))}
    </div>
    <div className="font-arial">
      {cidades.map((value, index) => (
        <div key={index}>
          {value.nome}{", "}{value.lugar}
        </div>
      ))}
    </div>
    </div>
  );
}
