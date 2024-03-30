export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: userId,
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.description,
      rate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      'https://vue-http-demo-85e9e.firebaseio.com/coaches/${userId}.json',
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    //const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerCoach', {
      ...coachData,
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      'https://vue-http-demo-85e9e.firebaseio.com/coaches.json',
      {
        method: 'GET',
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      // error ...
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        rate: responseData[key].rate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  },
};