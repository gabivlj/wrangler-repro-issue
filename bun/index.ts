await fetch('https://google.com').then(() => {
  console.log('google works!');
});

await fetch('http://localhost:8787').then(() => {
  console.log('wrangler dev works!');
});
