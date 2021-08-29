const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
        ?   setTimeout(() => resolve('Async operation'), 3000)
        :   reject(new Error('Test error'))     
  });
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

doSomething();