import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: () => {
    return { items: [], drawer: false };
  },
  actions: {
    async getMenu() {
      const client = useStrapiClient();

      const data = await client('/navigation/render/navigation', {
        query: {
          type: 'TREE',
        },
      });

      this.items = data;

      return data;
    },
  },
});
