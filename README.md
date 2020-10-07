# CustomHooks
Custom hooks
Repositorio con multiples customHooks de utilidad 
 * useFetch *
 Manejo de llamadas fetch
 Ejemplo de uso:
 ```
 const url = 'endPoint';
 const { data: null, loading: null, error: null } = useFetch( url );
 ```
 
 * useForm *
 Manejo de formularios
 ```
 const initialForm = {
  name: '',
  age: 0,
  email: ''
 };
 const [ formValue, handeInputChange, reset ] = useForm( initialForm );
 ``` 
 
 * useCounter *
 Manejo de contadores
 Ejemplo de uso:
 ```
 const { counter, increment, decrement, reset } = useCounter( 10 );
 ```
 useCounter() Puede recibir un valor por defecto
