document.addEventListener("alpine:init", () => {
  Alpine.data("counter", () => ({
    count: 0,
    name: "Trevor",

    logCount() {
      console.log(`Count is ${this.count}`);
    },
  }));
});
