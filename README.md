CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

- Cuando necesito memoizar una función, que se encuentra en un array de dependecias, para evitar un loop infito. Ya que cada vez que llama a una función hace un nuevo "plop" y eso lo detectaria como cambio en el array de dependencias de un useEffect y en useCallBack no ocurre.
