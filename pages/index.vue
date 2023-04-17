<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <div class="user_list">
          <h1 class="text-center m-5">Nuxt js + Supabase Application</h1>

          <user-table :data="users.data" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      users: [],
    };
  },
  async fetch() {
    //fetching data server side to optimize performance
    this.users = await this.$supabase.from("users").select();
  },
};
</script>
