<template>
  <div class="background">
    <div class="centered-container">
      <div class="white-background">
        <b-row>
        </b-row>
        <br />
        <br />

        <div v-if="!forgot" class="inputs center">
          <b-row>
            <label>Email:</label>
            <b-form-input :state="isValidEmail" v-model="user.email" @change="validateEmail()" type="email"
              placeholder="exemplo@email.com.br" :disabled="loading"></b-form-input>
            <p v-if="!isValidEmail" class="under-input">E-mail inválido</p>
          </b-row>
          <br />
          <br />
          <b-row>
            <label>Senha:</label>
            <b-form-input :state="isValidPassword" @change="validatePassword()" v-model="user.password" type="password"
              placeholder="Insira sua senha" label="Senha" :disabled="loading"></b-form-input>
            <p v-if="!isValidPassword" class="under-in'put">Informe a senha</p>
          </b-row>
          <br />
          <br />
          <b-row>
            <b-col lg='12'>
              <b-button variant="btn btn-primary" v-on:click="signIn()">Entrar</b-button>
            </b-col>
            <b-col lg='12'>
              <a class="forget-password" @click="forgotPassword()">Esqueci minha senha</a>
            </b-col>
          </b-row>
        </div>
        <div v-else>
          <div style="text-align: center; margin-bottom: 20px" class="center-on-block inputs">
            <strong>Esqueceu a senha?</strong>
          </div>
          <div class="inputs center">
            <label>Informe seu login:</label>
            <br />
            <br />
            <b-form-input v-model="email" type="email" placeholder="exemplo@colegiovisaorecife.com.br" label="Email"
              :disabled="loading"></b-form-input>
            <br />
            <div>
              <b-row>
                <b-col lg="6" class="pl-4">
                  <button class="btn btn-success" @click="confirmResetPassword()">Gerar nova senha</button>
                </b-col>
                <b-col lg="6" class="pl-4">
                  <button class="btn btn-danger" @click="forgot = false">Cancelar</button>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import config from '../helpers/generalConfig';

export default {
  data() {
    return {
      isValidEmail: true,
      isValidPassword: true,
      email: undefined,
      loading: true,
      forgot: false,
      user: {
        email: undefined,
        password: undefined,
      },
    };
  },
  created() {
    window.document.title = 'Login';
    this.forgot = false;
    this.loading = false;
  },
  methods: {
    forgotPassword() {
      this.forgot = true;
    },
    async signIn() {
      if (!this.user.email || !this.user.email.includes("@")) {
        // this.error('Informe um email válido')
        // this.$bvToast.toast('Informe um email válido')
        return;
      }
      this.isValidEmail = true;
      if (!this.user.password) {
        // this.$bvToast.toast('Senha Incorreta')
        // this.error('Senha incorreta')
        return;
      }
      // this.$api()
      //   .post(`${config.jsonServer}/login`, this.user)
      //   .then((response) => {
      //     const user = response.data.user
      //     const acessToken = response.data.acessToken;
      //     this.$store.dispatch('auth/setUser', user);
      //     this.$store.dispatch('auth/setToken', acessToken);
          this.$router.push('home' );
        // })
        // .catch(() => {
          // this.$bvToast.toast('Usuário não encontrado')
          // this.error('Usuário não encontrado')
        // });
    },
    confirmResetPassword() {
      if (!this.email || !this.email.includes("@")) {
        // this.warning('Informe um email válido')
        // this.$bvToast.toast('Informe um email válido')
      }
    },
    validateEmail() {
      if (!this.user.email || !this.user.email.includes("@")) {
        this.isValidEmail = false;
      } else {
        this.isValidEmail = true;
      }
    },
    validatePassword() {
      if (!this.user.password) {
        this.isValidPassword = false;
      } else {
        this.isValidPassword = true;
      }
    }
  },
};
</script>

<style scoped>
.center {
  margin: auto;
}

.center-on-block {
  margin: auto;
  position: absolute;
}

.centered-container {
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 100px;
}

.background {
  background-color: green;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
}

.white-background {
  width: 500px;
  border-radius: 50px;
  padding-top: 166px;
  background-color: #ffffff;
  position: relative;
}

.forget-password {
  font-size: 15px;
  color: red;
  text-decoration: underline;
  cursor: pointer;
}

.under-input {
  color: red;
  font-size: 13px;
}

.logo {
  width: 200px;
  position: relative;
  top: -150px
}

.inputs {
  position: relative;
  top: -130px;
  max-width: 360px;
}
</style>