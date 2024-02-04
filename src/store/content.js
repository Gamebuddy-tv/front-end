import { defineStore } from 'pinia';

const contentStore = defineStore('content', {
  state: () => ({
    contents: [],
    cateogy: [],
    subCategory: [],
    popular: [],
    new: [],
    watchAgain: [],
  }),

  actions: {
    async fetchContents() {
      try {
        const response = await fetch('/api/content');
        const data = await response.json();
        this.contents = data;
      } catch (error) {
        console.error('Error fetching contents:', error);
      }
    },
    
    async fetchExplorerContent() {
        try {
          const response = await fetch('/api/content/explorer');
          const data = await response.json();
          this.contents = data;
        } catch (error) {
          console.error('Error fetching contents:', error);
        }
      },

    async createContent(newContent) {
      try {
        const response = await fetch('/api/content', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newContent),
        });
        const data = await response.json();
        // Optionally update local state or do something with the response
        console.log('Created content:', data);
      } catch (error) {
        console.error('Error creating content:', error);
      }
    },

    async updateContent(contentId, updatedContent) {
      try {
        const response = await fetch(`/api/content/${contentId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedContent),
        });
        const data = await response.json();
        // Optionally update local state or do something with the response
        console.log('Updated content:', data);
      } catch (error) {
        console.error('Error updating content:', error);
      }
    },

    async deleteContent(contentId) {
      try {
        const response = await fetch(`/api/content/${contentId}`, {
          method: 'DELETE',
        });
        // Optionally update local state or do something with the response
        console.log('Deleted content:', contentId);
      } catch (error) {
        console.error('Error deleting content:', error);
      }
    },

  },
});

export default contentStore;
