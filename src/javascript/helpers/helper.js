const wait = ms => new Promise(resolve => setTimeout(() => resolve(true), ms));

export { wait };
