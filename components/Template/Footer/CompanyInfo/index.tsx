function CompanyInfo() {
    return(
        <div className='flex flex-col gap-5'>
            <h4 className='text-3xl font-bold tracking-tight'>Informações da Empresa</h4>
            <ul className="flex flex-col text-base gap-1.5">
                <li><strong className="font-semibold ml-2">Telefone: </strong>(19) 99188-0399</li>
                <li><strong className="font-semibold ml-2">Endereço: </strong>Rua Carmelinda Valdi Pavani, 771 - São Paulo, Brasil</li>
                <li><strong className="font-semibold ml-2">Acessibilidade: </strong>Entrada e banheiros acessíveis a pessoas com deficiência</li>
            </ul>
        </div>
    );
}

export default CompanyInfo;