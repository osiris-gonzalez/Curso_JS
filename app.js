let numero=Number(prompt('Ingresa el número que más te guste que sea mayor a 1000')) 
let saludo=String(prompt('Me gustaría que me digas "Hola"'))
let numero2=Number(prompt('Por favor, ingresá un nuevo número'))

if(numero>1000){
    alert(`Ingresaste el número ${numero}`);
    alert('Que lindo número!');
}else if(numero<=1000){
    alert(`Ingresaste el número ${numero}`);
    alert(`Ese número no me gusta :(`);
}
if(saludo===`Hola`){
    console.log(`Me gusta cómo saluda este humano`);
}else{
    console.log(`No entiendo a este humano, hay que enseñarle a leer las instrucciones.`);
}
if(numero2>=10 && numero2<=50){
    alert(`Ingresaste el número ${numero2}`);
    alert(`Los números que están entre 10 y 50 son mis favoritos!`);
}else if(numero2<10 || numero2>50){
    alert(`Ingresaste el número ${numero2}`);
    alert(`No es de mis números favoritos, pero sobre gustos...`)
}