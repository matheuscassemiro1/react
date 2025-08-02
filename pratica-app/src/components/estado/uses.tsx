import React from "react";
import "./uses.css";

export const Uses: React.FC = () => {
    const [contador, setContador] = React.useState<number>(0);
    const nome = React.useRef<HTMLInputElement | null>(null);
    const lastScore = React.useRef<HTMLParagraphElement | null>(null);
    function handleReset() {
        setContador(0);
        lastScore.current!.textContent = `Último score: ${nomeTela.current?.textContent} (${contador})`;
    }

    let nomeTela = React.useRef<HTMLSpanElement | null>(null);

    //TESTE CONTROLE DE ESTADO (LIFECYCLE)
    React.useEffect(() => {
        console.log("Componente iniciado")
        return () => {
            console.log('Componente desmontado')
        }
    }, [])

    //CONTROLE DE ESTADO DE ATUALIZAÇÃO
    React.useEffect(() => {
        console.log("Contador mudou para:", contador);
    }, [contador]);

    //NOVO NOME
    function handleNovoNome() {
       nomeTela.current!.textContent = nome.current!.value;
       console.log("Novo nome:", nomeTela);
    }
    return (
        <div className="backdiv">
            <h2>Minha div de testes | UseRef/UseState/UseEffect</h2>
            <span><span ref={nomeTela}></span> {nome.current?.value ? `(${contador})` : ""}</span>
            <br /><input ref={nome} type="text" placeholder="Jogador" />
            <button onClick={() => handleNovoNome()}>salvar</button>
            <h1>#{contador}</h1>
            <button onClick={() => setContador(contador + 1)}>add +1</button>
            <button onClick={() => handleReset()}>Reset</button>
            <span>{nomeTela && <p ref={lastScore}> </p>}</span>
        </div>
    )
}