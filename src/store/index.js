import { createStore } from 'vuex';
// Configuración de Vuex Store para gestionar el estado de la aplicación

export default createStore({
  state: {
    nombre: '',
    segundoNombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    email: '',
    telefono: '',
    currentStep: 1
  },
  mutations: {
    //para actualizar el estado con los valores del formulario
    setNombre(state, payload) {
      state.nombre = payload;
    },
    setSegundoNombre(state, payload) {
      state.segundoNombre = payload;
    },
    setApellidoPaterno(state, payload) {
      state.apellidoPaterno = payload;
    },
    setApellidoMaterno(state, payload) {
      state.apellidoMaterno = payload;
    },
    setFechaNacimiento(state, payload) {
      state.fechaNacimiento = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    setTelefono(state, payload) {
      state.telefono = payload;
    },
    //para avanzar al siguiente paso del formulario
    nextStep(state) {
      state.currentStep++;
    }
  }
});
