import { Account, Client } from 'appwrite';

const client = new Client();

client
  .setEndpoint('process.env.NEXT_PUBLIC_APPWRITE_HOST_URL') // Replace with your Appwrite endpoint
  .setProject('process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID'); // Replace with your Appwrite project ID

  const account = new Account(client);

  export { client, account };
