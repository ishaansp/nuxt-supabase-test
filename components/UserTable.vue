<template>
  <div>
    <b-table striped hover :items="data" :fields="fields"> </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: "name", label: "Name" },
        { key: "name", label: "Name" },
        { key: "username", label: "User Name" },
        { key: "email", label: "Email" },
        { key: "last_login", label: "Last Login", formatter: this.loginDate },
      ],
    };
  },
  methods: {
    //formatter function to display last login date in required format
    loginDate(value) {
      return this.$moment(value).format("MMMM Do YYYY | h:mm A");
    },
  },
  props: ["data"],
};
</script>