document.addEventListener("alpine:init", () => {
  Alpine.data("signupForm", () => ({
    username: "",
    password: "",
    passwordConfirm: "",
    belt: "",
    bio: "",
    newsletter: true,
    showPassword: false,

    submitForm() {
      console.log({
        username: this.username,
        password: this.password,
        belt: this.belt,
        bio: this.bio,
        newsletter: this.newsletter,
      });
    },
  }));
});
