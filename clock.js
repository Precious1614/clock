const clock = document.querySelector(".clock");

const Tick = () => {
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  const html = `
<span>${hours}</span> : 
<span>${mins}</span> : 
<span>${secs}</span>
`;

  clock.innerHTML = html;
};

setInterval(Tick, 1000);
