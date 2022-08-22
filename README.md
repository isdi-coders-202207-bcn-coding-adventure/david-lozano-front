CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

- Cuando necesito memoizar una función, que se encuentra en un array de dependecias, para evitar un loop infito. Al memoizar la función con el useCallBack y estar dentro del array de dependencias no vuelve a ser llamado despues de la primera vez.
