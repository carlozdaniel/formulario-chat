<template>
  <div id="app" class="chat-container">
    <div class="chat-box">
      <div class="chat-header">
        <img src="@/assets/cronografo.png" alt="Avatar" class="avatar">
        <h2 class="chat-title">En menos de 5 minutos</h2>
      </div>
      <div class="chat-content">
        <NombreComponent v-if="mostrarNombre" @completado="mostrarFechaNacimiento = true" />
        <FechaNacimientoComponent v-if="mostrarFechaNacimiento" @completado="mostrarDatosContacto = true" />
        <DatosContactoComponent v-if="mostrarDatosContacto" @completado="mostrarResumen = true" />
        <ResumenComponent v-if="mostrarResumen" />
      </div>
    </div>
  </div>
</template>

<script>
import NombreComponent from './components/NombreComponent.vue';
import FechaNacimientoComponent from './components/FechaNacimientoComponent.vue';
import DatosContactoComponent from './components/DatosContactoComponent.vue';
import ResumenComponent from './components/ResumenComponent.vue';

export default {
  data() {
    return {
      mostrarNombre: true,
      mostrarFechaNacimiento: false,
      mostrarDatosContacto: false,
      mostrarResumen: false,
    };
  },
  components: {
    NombreComponent,
    FechaNacimientoComponent,
    DatosContactoComponent,
    ResumenComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.chat-container {
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Alinear el chat en la parte inferior */
  height: 100vh;
  padding-bottom: 0; /* Remover el espacio en la parte inferior */
}

.chat-box {
  width: 400px;
  max-width: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  display: flex;
  flex-direction: column;
}

.chat-header {
  display: flex;
  align-items: center;
  background-color: #f074dc; /* Fondo rosa para el encabezado */
  color: white; /* Color del texto blanco */
  border-radius: 8px 8px 0 0; /* Bordes redondeados solo en la parte superior */
  padding: 10px; /* Relleno */
  position: sticky; /* Hacer que el encabezado sea estático */
  top: 0; /* Posición en la parte superior */
  z-index: 1000; /* Asegurar que el encabezado esté por encima del contenido */
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-title {
  font-size: 18px;
  margin: 0;
}

.chat-content {
  padding: 20px;
  overflow-y: auto; /* Hacer que el contenido sea desplazable */
  flex-grow: 1;
}
</style>
