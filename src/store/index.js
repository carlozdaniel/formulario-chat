import { createStore } from 'vuex';

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
    nextStep(state) {
      state.currentStep++;
    }
  }
});
