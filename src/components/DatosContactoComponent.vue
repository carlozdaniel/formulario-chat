<template>
    <div>
      <div class="chat-bubble">
        <img src="@/assets/avatar.png" alt="Avatar" class="avatar">
        <div class="chat-content">
          <h3 class="question">Datos de contacto</h3>
          <div class="input-field">
            <input v-model="email" placeholder="Correo electrónico" @input="guardarDatosContacto" />
          </div>
          <div class="input-field">
            <input v-model="telefono" placeholder="Teléfono celular" @input="guardarDatosContacto" />
          </div>
        </div>
      </div>
      <div v-if="email || telefono" class="info-box">
        <p>{{ email }}</p>
        <p>{{ telefono }}</p>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'DatosContactoComponent',
    data() {
      return {
        email: '',
        telefono: ''
      };
    },
    methods: {
      guardarDatosContacto() {
        this.$store.commit('setEmail', this.email);
        this.$store.commit('setTelefono', this.telefono);

        if (this.email && this.telefono) {
          this.$emit('completado');
        }
      }
    }
  };
  </script>

  <style scoped>
  .chat-bubble {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid #a8d08d;
    padding: 5px;
  }

  .chat-content {
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 10px;
    max-width: 300px;
    flex-grow: 1;
    position: relative;
  }

  .question {
    color: #000000;
    text-align: left;
    margin-bottom: 10px;
  }

  .input-field {
    margin-bottom: 10px;
  }

  input {
    width: 81%;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
    background-color: #f9f9f9;
  }

  .info-box {
    background-color: #f074dc;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    width: 80%;
    margin-left: auto;
    margin-bottom: 20px;
    text-align: left;
  }
  </style>
