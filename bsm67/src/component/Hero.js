function Hero({ heroName }) {
  if (heroName === "joker") {
    throw new Error("Not a hero");
  }
  return <h1>{heroName}</h1>;
}

export default Hero;
