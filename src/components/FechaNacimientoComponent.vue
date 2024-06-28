<template>
    <div>
      <div class="chat-bubble">
        <img src="@/assets/avatar.png" alt="Avatar" class="avatar">
        <div class="chat-content">
          <h3 class="question">¿Cuál es tu fecha de nacimiento?</h3>
          <div class="input-field">
            <input v-model="dia" placeholder="Día" @input="guardarFechaNacimiento" />
          </div>
          <div class="input-field">
            <input v-model="mes" placeholder="Mes" @input="guardarFechaNacimiento" />
          </div>
          <div class="input-field">
            <input v-model="año" placeholder="Año" @input="guardarFechaNacimiento" />
          </div>
        </div>
      </div>
      <div v-if="fechaNacimiento" class="info-box">
        <p>{{ fechaNacimiento }}</p>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'FechaNacimientoComponent',
    data() {
      return {
        dia: '',
        mes: '',
        año: ''
      };
    },
    computed: {
      // Computed property para formar la fecha de nacimiento
      fechaNacimiento() {
        if (this.dia && this.mes && this.año) {
          return `${this.dia} ${this.mes} ${this.año}`;
        }
        return '';
      }
    },
    methods: {
      guardarFechaNacimiento() {
        // Guarda la fecha de nacimiento en el store de Vuex y emite un evento si se completan todos los campos
        this.$store.commit('setFechaNacimiento', this.fechaNacimiento);

        if (this.dia && this.mes && this.año) {
          this.$emit('completado');
        }
      }
    }
  };
  </script>

  <style scoped>
  /* Estilos para el componente de fecha de nacimiento */
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
