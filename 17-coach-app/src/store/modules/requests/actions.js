export default {
  contactCoach(context, data) {
    const newRequest = {
      id: context.rootGetters.userId,
      email: data.email,
      message: data.message,
    };
    context.commit('addRequest', newRequest);
  },
  async loadRequests(context) {
    const response = await fetch(
      'https://vue-http-demo-85e9e.firebaseio.com/requests.json',
      {
        method: 'GET',
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send request.'
      );
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const req = {
        id: key,
        coachId: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(req);
    }
    context.commit('setRequests', requests);
  },
};
