/*SPA
useEffect(() => {//primeiro parametro é o que quer executar
    fetch('http://localhost:3434/episodes')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []) //o segundo é quando
*/
/* SSR
export async function getServerSideProps() {
  const response = await fetch('http://localhost:3434/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    }
  }
}
*/
//SSG Gera uma versão estatica que é servida para varias pessoas, sem requisição nova

//import { useEffect } from "react"; Dispara algo sempre que algo mudar(efeitos colarerais);

export default function Home(props) {
  console.log(props.episodes);

  return (
    <>
      <h1>Hello World! sera ?</h1>
      <div>
        <p>{JSON.stringify(props.episodes)}</p>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3434/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}