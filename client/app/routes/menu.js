import Route from '@ember/routing/route';
import ENV from '../config/environment';

export default class MenuRoute extends Route {
  async model() {
    const apiURL = ENV.apiURL;
    console.log('Start Fetching API:', apiURL);

    try {
      const page = 1;
      const perPage = 100;
      const response = await fetch(`${apiURL}/menu`, {
        // Include query params for pagination
        query: {
          page,
          perPage,
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      console.log('API request successful!');
      return await response.json();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
}
