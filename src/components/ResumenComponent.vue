<template>
    <div>
      <div class="chat-bubble">
        <div class="chat-content">
          <p>Si tus datos son correctos, por favor continuemos</p>
        </div>
      </div>
      <div class="chat-bubble">
        <button @click="iniciar" class="iniciar-btn">Iniciar</button>
      </div>
      <div v-if="mostrarResumen" class="resumen">
        <p>Nombre: {{ nombre }} {{ segundoNombre }} {{ apellidoPaterno }} {{ apellidoMaterno }}</p>
        <p>Fecha de Nacimiento: {{ fechaNacimiento }}</p>
        <p>Correo Electrónico: {{ email }}</p>
        <p>Teléfono: {{ telefono }}</p>
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios';

  export default {
    name: 'ResumenComponent',
    data() {
      return {
        mostrarResumen: false
      };
    },
    computed: {
      nombre() {
        return this.$store.state.nombre;
      },
      segundoNombre() {
        return this.$store.state.segundoNombre;
      },
      apellidoPaterno() {
        return this.$store.state.apellidoPaterno;
      },
      apellidoMaterno() {
        return this.$store.state.apellidoMaterno;
      },
      fechaNacimiento() {
        return this.$store.state.fechaNacimiento;
      },
      email() {
        return this.$store.state.email;
      },
      telefono() {
        return this.$store.state.telefono;
      }
    },
    methods: {
      async iniciar() {
        this.mostrarResumen = true;

        // Verificación y formato de la fecha
        let fechaNacimientoFormateada = this.fechaNacimiento;
        if (this.fechaNacimiento && !isNaN(Date.parse(this.fechaNacimiento))) {
          fechaNacimientoFormateada = new Date(this.fechaNacimiento).toISOString().split('T')[0];
        }

        const data = {
          nombre: this.nombre,
          segundoNombre: this.segundoNombre,
          apellidoPaterno: this.apellidoPaterno,
          apellidoMaterno: this.apellidoMaterno,
          fechaNacimiento: fechaNacimientoFormateada,
          email: this.email,
          telefono: this.telefono
        };

        try {
          // Enviar los datos al backend usando Axios
          const response = await axios.post('http://localhost:5199/api/users', data);
          console.log('Datos enviados al backend:', response.data);
        } catch (error) {
          console.error('Error al enviar los datos al backend:', error);
        }
      }
    }
  };
  </script>

  <style scoped>
  .chat-bubble {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }

  .chat-content {
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 10px;
    max-width: 300px;
    flex-grow: 1;
    margin-left: auto; /* Mover el recuadro a la derecha */
  }

  .iniciar-btn {
    background-color: #f64282;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%; /* Para asegurar que el botón ocupe todo el ancho del contenedor */
    max-width: 340px; /* Para coincidir con el tamaño del recuadro de arriba */
    margin: 0 auto; /* Centrar el botón horizontalmente */
  }

  .resumen {
    background-color: #f074dc;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
    max-width: 360px;
    color: #fff;
    text-align: left; /* Alinear el texto a la izquierda */
  }
  </style>
