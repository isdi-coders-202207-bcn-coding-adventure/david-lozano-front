CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

- Cuando necesito memoizar una función para que no se vuelva a llamar cada vez que se renderice el componente, ya que cada vez que llama a una función hace un nuevo "plop" y eso lo detectaria como cambio en el array de dependencias de un useEffect.
