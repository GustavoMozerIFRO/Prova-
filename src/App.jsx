import Botao from "./Botao";

function App(){

	const botao = [
		{
			titulo: "Entregador",
		},
		{
			titulo: "Restaurante e Mercado",
		},
    {
			titulo: "Carreiras",
		},
    {
			titulo: "iFood Card",
		},
    
	];

	return(

		<div className="cont"> 
			{
			botao.map((cons, cont) => {
					return <Botao key={cont}
          titulo={cons.titulo}
							
						/>;
				})
			}
	  </div>
	);
}

export default App;