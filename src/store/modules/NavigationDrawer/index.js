const state= {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: true,
  };
const mutations= {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
  };
  const actions= {

    togglingDrawer({commit}){

      commit("SET_DRAWER",!state.drawer);

    }

  };

  const getters = {
    drawerState : state => state.drawer,
  }

  const Drawer ={
    actions,mutations,state
  };


export default Drawer
