let x: unknown = 'hello';

console.log((x as string).length);
console.log((<string>x).length);