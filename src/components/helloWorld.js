Vue.component("hello-world", {
  props: ["message"],
  template: `
    <div>
        <h1>{{message}}</h1>
    </div>`
});
