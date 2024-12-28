import { useState, useEffect } from 'react';
import { Account, Client, ID } from 'appwrite';
import { redirect } from 'next/navigation';
import { User } from '@/types/user';

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_HOST_URL || '') // Ensure valid endpoint
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || ''); // Ensure valid project ID

if (!process.env.NEXT_PUBLIC_APPWRITE_HOST_URL || !process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
    console.error('Appwrite environment variables are missing!');
}

const account = new Account(client);

export const useAuth = () => {
    const signup = async (name: string, email: string, password: string) => {
      try {
        // Register user with Appwrite
        await account.create('unique()', email, password, name);
      } catch (error) {
        console.error('Signup error:', error);
        throw error;
      }
    };
  
    const login = async (email: string, password: string) => {
      try {
        // Create session for login
        await account.createSession(email, password);
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    };
  
    const logout = async () => {
      try {
        // End the current session
        await account.deleteSession('current');
      } catch (error) {
        console.error('Logout error:', error);
        throw error;
      }
    };
  
    return { signup, login, logout };
  };
