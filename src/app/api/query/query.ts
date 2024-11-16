import { useQuery } from "@tanstack/react-query";
import api from "../api";

export interface IContact {
    name: string;
    email: string;
    phone_number: string;
    text: string;
}

export const getMainPage = async () => {
    const response = await api.get('/main_page');
    return response.data;
}

export const getPortfolio = async () => {
    const response = await api.get('/portfolio');
    console.log(response.data)
    return response.data;
}

export const usePortfolio = () => {
    return useQuery({
        queryKey: ['portfolio'],
        queryFn: getPortfolio
    })
}

export const getAddress = async () => {
    try {
        const response = await api.get('/address');
        return response.data;
    } catch (error) {
        console.error('Error fetching address:', error);
        throw error;
    }
}

export const useAddress = () => {
    return useQuery({
        queryKey: ['address'],
        queryFn: getAddress,
        retry: 3,
        retryDelay: 1000
    })
}

export const getServices = async () => {
    const response = await api.get('/service');
    return response.data;
}

export const useServices = () => {
    return useQuery({
        queryKey: ['services'],
        queryFn: getServices
    })
}