import green from '../assets/produtores/green';
import salad from '../assets/produtores/salad';
import jennyJack from '../assets/produtores/jenny-jack';
import grow from '../assets/produtores/grow';
import potager from '../assets/produtores/potager';


const gerarNumeroAleatorio = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            image: green,
            distancia: gerarNumeroAleatorio(1,500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Salad",
            image: salad,
            distancia: gerarNumeroAleatorio(1,500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Jenny Jack Farm",
            image: jennyJack,
            distancia: gerarNumeroAleatorio(1,500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Grow",
            image: grow,
            distancia: gerarNumeroAleatorio(1,500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Potager",
            image: potager,
            distancia: gerarNumeroAleatorio(1,500),
            estrelas: gerarNumeroAleatorio(1, 5),
        }
    ]
}


export default produtores;