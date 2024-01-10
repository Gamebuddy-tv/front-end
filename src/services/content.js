import axios from 'axios';

const API_BASE_URL = 'https://localhost:3000';

// JSON INTERFACE
export interface ContentDetails {
    id: number;
    title: string;
    description: string;
    category: string;
    subCategory: string;
    videoLink: string;
    metaData: string;
    addedOn: Date;
    addedBy: number;
    productionHouseId: number;
    archived: boolean;
    tags: string; // CSV format
  }

// Fetch content details
export const fetchContentDetails = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/content/details`);
    const contentDetails = response.data;
    // Process and insert content details into the 'Content Details' table
    // Implement logic to insert data into your database
  } catch (error) {
    // Handle errors
  }
};

// Fetch analytics data
export const fetchAnalytics = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/analytics`);
    const analyticsData = response.data;
    // Process and insert analytics data into the 'Analytics' table
    // Implement logic to insert data into your database
  } catch (error) {
    // Handle errors
  }
};

// Fetch user interaction data related to content
export const fetchUserInteractionContent = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user-interaction-content`);
    const userInteractionData = response.data;
    // Process and insert user interaction data into the 'User-Interaction-Content' table
    // Implement logic to insert data into your database
  } catch (error) {
    // Handle errors
  }
};
