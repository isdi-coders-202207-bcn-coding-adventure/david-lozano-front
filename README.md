CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

- Cuando necesito memoizar una función para evitar un loop infito y llame a la función cada vez que se renderice el componente, ya que cada vez que llama a una función hace un nuevo "plop" y eso lo detectaria como cambio en el array de dependencias de un useEffect y en useCallBack no ocurre.
