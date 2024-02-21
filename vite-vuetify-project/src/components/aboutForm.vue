<template>
  <div class="form-container">
    <v-form v-model="valid">
      <v-container>
        <v-col cols="12">
          <v-row md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
              hide-details
            ></v-text-field>
          </v-row>

          <v-row md="4">
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              hide-details
              required
            ></v-text-field>
          </v-row>

          <v-row md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              hide-details
              required
            ></v-text-field>
          </v-row>
        </v-col>
        <textarea placeholder="Write message here :)"></textarea>
        <input type="submit" @click="alertSubmit" />
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (value) => {
        if (value) return true;

        return "Name is required.";
      },
      (value) => {
        if (value?.length <= 10) return true;

        return "Name must be less than 10 characters.";
      },
    ],
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail must be valid.";
      },
    ],
  }),
  methods: {
    alertSubmit() {
      alert(
        "Thank you for contacting us " +
          this.firstname +
          ", we will come back to you as soon as possible! :)"
      );
    },
  },
};
</script>
<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
}
textarea {
  background-color: rgb(224, 224, 224);
  border-radius: 3px;
  padding: 1rem;
  margin-top: 1rem;
}

input {
  background-color: rgb(199, 199, 199);
  margin: 0 0 0rem 5rem;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
}
input:active {
  background-color: rgb(76, 76, 76);
  color: white;
}
</style>
