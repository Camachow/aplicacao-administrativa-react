import { useState, useEffect } from 'react';

export default function useFetch<T>({url} : { url: string}) {
    const [dados, setDados] = useState <T | null>(null);
    const [erro, setErros] = useState ('');

    useEffect(() => {
        fetch(`http://localhost:8080/${url}`)
            .then((res) => res.json())
            .then((data) => setDados(data))
            .catch((err) => setErros(err));
    }, [url]); //Requisição so é feita quando o url muda

    return { dados, erro };
}