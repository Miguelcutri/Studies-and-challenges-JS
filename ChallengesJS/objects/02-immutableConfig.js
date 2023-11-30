const config = {
  width: 500,
  height: 600,
  background: "green",
};
Object.freeze(config);
config.width = config.width + 10;
console.log(config);