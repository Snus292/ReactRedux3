// упрощает выполнение HTTP-запросов


import { useCallback } from "react";
// позволяет создавать мемоизированные функции, 
// которые не будут пересоздаваться при каждом рендеринге компонента.

export const useHttp = () => {
    // const [process, setProcess] = useState("waiting");


    // выполняет HTTP-запрос
    const request = useCallback(async (url, method = "GET", body = null, headers = {"Content-Type": "application/json"}) => {
        // setProcess("loading");

        try {
            const response = await fetch(url, {method, body, headers});
            // данные парсятся и возвращаются

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            //setProcess("error");
            throw e;
        }
    }, []);

    // const clearError = useCallback(()) => {
    //     setProcess("loading");
    // }, []);
    

    return {request,
        //  clearError,
        //  process,
        //  setProcess
    }
}