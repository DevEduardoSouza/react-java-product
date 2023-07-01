import React from 'react'
import './Tabela.css'

const Tabela = ({ vetor , selecionar}) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Imagem</th>
                    <th>Quantidade</th>
                    <th>Marca</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Ativo</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{obj.name}</td>
                            <td>
                                <img src={obj.src_image} alt="" />
                            </td>
                            <td>{obj.qty}</td>
                            <td>{obj.marca}</td>
                            <td>{obj.description}</td>
                            <td>R$ {obj.price}</td>
                            {
                                obj.active
                                    ?
                                    <td className='situacao ativo'>
                                        <div></div>
                                    </td>
                                    :
                                    <td className='situacao inativo'>
                                        <div></div>
                                    </td>
                            }
                            <td><button onClick={() => {selecionar(index)}} className='btn btn-success'>Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela