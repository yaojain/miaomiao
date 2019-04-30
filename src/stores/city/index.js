const state = { //状态
    nm: window.localStorage.getItem('nowNm') || '北京',
    id: window.localStorage.getItem('nowId') || 1
};
const actions = {  //操作

};
const mutations = { //改变
    CITY_INFO(state,payload){
        state.nm = payload.nm;
        state.id = payload.id;
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations
}