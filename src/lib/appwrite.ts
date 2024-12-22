import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint('NEXT_PUBLIC_APPWRITE_HOST_URL')
    .setProject('NEXT_PUBLIC_APPWRITE_PROJECT_ID');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export { client };

